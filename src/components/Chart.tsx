import { useEffect, useRef } from "react";
import {
  createChart,
  ColorType,
  LineStyle,
  LineSeries,
  type ISeriesApi,
  type LineData,
  type UTCTimestamp,
} from "lightweight-charts";
import { useTradingStore } from "../lib/store";

export default function DummyChart() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const seriesRef = useRef<ISeriesApi<"Line"> | null>(null);

  // zustand context API
  const { resolveBet, setCurrentPrice } = useTradingStore();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // create chart
    const chart = createChart(container, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#000",
      },
      grid: {
        vertLines: { color: "rgba(99,99,99,0.08)" },
        horzLines: { color: "rgba(99,99,99,0.08)" },
      },
      width: container.clientWidth,
      height: container.clientHeight,
      timeScale: { visible: false, timeVisible: false },
      rightPriceScale: { borderColor: "transparent", visible: true },
      crosshair: { vertLine: { visible: true }, horzLine: { visible: true } },
    });

    // main price series
    const lineSeries = chart.addSeries(LineSeries, {
      color: "#4caf50",
      lineWidth: 2,
      priceLineVisible: true,
    }) as ISeriesApi<"Line">;
    seriesRef.current = lineSeries;

    // initial data
    let base = 100;
    const now = Math.floor(Date.now() / 1000) as UTCTimestamp;
    const data: LineData[] = Array.from({ length: 50 }).map((_, i) => ({
      time: (now - (50 - i) * 60) as UTCTimestamp,
      value:
        Math.round(
          (base += Math.random() > 0.5 ? Math.random() : -Math.random()) * 100
        ) / 100,
    }));
    lineSeries.setData(data);

    const betPriceLines = new Map<
      string,
      ReturnType<typeof lineSeries.createPriceLine>
    >();
    let markers: any[] = [];

    // live updates
    const interval = setInterval(() => {
      const last = data[data.length - 1];
      const newTime = (Number(last.time) + 60) as UTCTimestamp;
      const newValue =
        last.value + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 2;

      const newPoint = {
        time: newTime,
        value: Math.round(newValue * 100) / 100,
      };

      data.push(newPoint);
      if (data.length > 200) data.shift();

      // update chart & store price
      lineSeries.update(newPoint);
      setCurrentPrice(newPoint.value);

      const nowMs = Date.now();

      // For each bet in store
      useTradingStore.getState().bets.forEach((bet) => {
        if (!betPriceLines.has(bet.id) && !bet.resolved) {
          // create entry price line
          const priceLine = lineSeries.createPriceLine({
            price: bet.entryPrice,
            color: bet.direction === "LONG" ? "#22c55e" : "#D7263D",
            lineWidth: 2,
            lineStyle: LineStyle.Dashed,
            title: `${bet.direction} @ ${bet.entryPrice.toFixed(2)}`,
          });
          betPriceLines.set(bet.id, priceLine);

          // entry marker
          const markerTime = Math.floor(bet.expiry / 1000) as UTCTimestamp;
          const marker = {
            time: markerTime,
            position: "aboveBar" as const,
            color: bet.direction === "LONG" ? "#22c55e" : "#D7263D",
            shape: "arrowDown" as const,
            text: "Expiry",
          };
          markers = [...markers, marker];
        }

        // cleanup resolved bets
        if (bet.resolved) {
          const pl = betPriceLines.get(bet.id);
          if (pl) {
            lineSeries.removePriceLine(pl);
            betPriceLines.delete(bet.id);
          }

          markers = markers.filter(
            (m) =>
              m.text !== "Expiry" || m.time !== Math.floor(bet.expiry / 1000)
          );
        }

        // resolve expired bets
        if (!bet.resolved && nowMs >= bet.expiry) {
          resolveBet(bet.id, newPoint.value);
        }
      });
    }, 1000);

    // ✅ ResizeObserver instead of window resize
    const resizeObserver = new ResizeObserver(() => {
      chart.applyOptions({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    });
    resizeObserver.observe(container);

    return () => {
      clearInterval(interval);
      resizeObserver.disconnect();
      chart.remove();
    };
  }, [resolveBet, setCurrentPrice]);

  return <div ref={containerRef} className="relative h-full w-full" />;
}
