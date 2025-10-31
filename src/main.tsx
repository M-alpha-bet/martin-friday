import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana } from "@reown/appkit/networks";

const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID!;

const solanaWeb3JsAdapter = new SolanaAdapter();

createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana],
  metadata: {
    name: "Orctra",
    description: "Orctra trading from rebelOrcs",
    url: "https://options-trading-iota.vercel.app/",
    icons: ["https://avatars.githubusercontent.com/u/179229932"],
  },
  projectId,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
