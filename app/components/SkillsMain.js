import React from "react";
import SkillsCard from "./SkillsCard";
import Typewriter from "./Typewriter";

const SkillsMain = () => {
  const skillSet = [
    {
      skill: "Tailwind",
      url: "/assets/tailwind.png",
    },
    {
      skill: "ReactJS",
      url: "/assets/react.png",
    },
    {
      skill: "NextJS",
      url: "/assets/next.png",
    },
    {
      skill: "PostGreSQL",
      url: "/assets/postgre.png",
    },
  ];

  return (
    <>
      <div className="w-full h-full text-center">
        <div className="max-w[1240px] w-full h-full mx-auto flex justify-center items-center">
          <div>
            <h1 className="text-[#5651e5] pb-4 text-4xl">
              <Typewriter text="Core Skills" />
            </h1>
            <div className="grid md:grid-cols-2 lg:gap-12 gap-8">
              {skillSet.map((skill, index) => {
                return (
                  <SkillsCard key={index} url={skill.url} skill={skill.skill} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsMain;
