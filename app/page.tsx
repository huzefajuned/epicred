"use client";
import React, {  useState } from "react";
import Header from "./_components/Header";
import Jobs from "./_components/Jobs";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<React.FC | null>(Jobs);

  return (
    <div className="h-screen w-screen bg-white overflow-hidden">
      <Header
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <div className="bg-white">
        {activeComponent && React.createElement(activeComponent)}
      </div>
    </div>
  );
}
