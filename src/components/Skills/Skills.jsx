import React from "react";
import Skill from "./Skill";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <Skill
        image={"./icons/solidity.png"}
        name={"Solidity"}
        description={
          "We bring  the right people together to challenge established thinking and drivetransform in 2020. "
        }
      />
      <Skill
        image="./icons/react.png"
        name="React"
        description={
          "The Kryptomind team has satisfied dozens of clients by bringing the User interface of their applications to life via React development."
        }
      />
      <Skill
        image="./icons/mern.png"
        name="MERN"
        description={
          "Our dedicated team of certified Mern Stack developers provides our clients with state-of-the-art 36o degree software solutions."
        }
      />
      <Skill
        image="./icons/wordpress.png"
        name="Word Press"
        description={
          "Our in-house WordPress team has developed numerous responsive websites on WordPress belonging to various industry verticals.  "
        }
      />
      <Skill
        image="./icons/devops.png"
        name="Devops"
        description={
          "Our dedicated Dev-Ops team provides expert services to increase the speed and performance of clients' applications all over the world."
        }
      />
      <Skill
        image="./icons/design.png"
        name="UI / UX Design"
        description={
          "The experienced design team at Kryptomind uses the latest tools and platforms to design the best User Interfaces on the market right now."
        }
      />
    </div>
  );
}

export default Skills;
