import React, {  ReactNode } from "react";

export interface NavInterface {
  id: number;
  title: string;
  component: React.FC;
}

export interface FilterItem {
  id: number;
  icon: ReactNode;
  title: string;
  icon2: ReactNode;
}

//  for JOBS
export interface JobInterface {
  id: number;
  company: string;
  logo: string;
  job_title: string;
  rating: number;
  reviews: number;
  location: string;
  employment_type: string;
  seniority_level: string;
  remote: boolean;
  salary: string;
}
