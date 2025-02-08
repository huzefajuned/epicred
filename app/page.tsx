"use client";
import { JSX, useState } from "react";
import Header from "./_components/Header";
import Jobs from "./_components/Jobs";
import HomeSkeleton from "./_components/skeletons/Home-Skeleton";
import { useAuth } from "./context/AuthProvider";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<JSX.Element>(<Jobs />);
  const { loading } = useAuth();

  if (loading) return <HomeSkeleton />;

  return (
    <div className="h-screen w-screen bg-white overflow-hidden">
      <Header
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <div className="bg-white">{activeComponent}</div>
    </div>
  );
}
