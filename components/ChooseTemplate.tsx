"use client";
import React, { useState } from "react";
import Bertanya from "./Bertanya";
import Memberitahu from "./Memberitahu";
import Bertemu from "./Bertemu";

function ChooseTemplate() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("bertanya");

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "bertanya":
        return <Bertanya />;
      case "memberitahu":
        return <Memberitahu />;
      case "bertemu":
        return <Bertemu />;
      default:
        return <Bertanya />;
    }
  };

  console.log(renderTemplate());

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="px-5">
          <button
            className={`${
              selectedTemplate === "bertanya"
                ? "border-b-2 border-black"
                : "border-transparent"
            } border-black`}
            onClick={() => setSelectedTemplate("bertanya")}
          >
            Bertanya
          </button>
        </div>
        <div className="px-5">
          <button
            className={`${
              selectedTemplate === "memberitahu"
                ? "border-b-2 border-black"
                : "border-transparent"
            } border-black`}
            onClick={() => setSelectedTemplate("memberitahu")}
          >
            Memberitahu
          </button>
        </div>
        <div className="px-5">
          <button
            className={`${
              selectedTemplate === "bertemu"
                ? "border-b-2 border-black"
                : "border-transparent"
            } border-black`}
            onClick={() => setSelectedTemplate("bertemu")}
          >
            Bertemu
          </button>
        </div>
      </div>
      {renderTemplate()}
    </>
  );
}

export default ChooseTemplate;
