"use client";
import { JSX, useState } from "react";
import Header from "./_components/Header";
import Jobs from "./_components/Jobs";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<JSX.Element>(<Jobs />);

  return (
    <div className="h-screen w-screen bg-white overflow-hidden">
      <Header activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      <div className="bg-white">{activeComponent}</div>
    </div>
  );
}
