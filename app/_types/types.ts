import { JSX } from "react";

export interface NavInterface {
  id: number;
  title: string;
  component: JSX.Element;
}

export interface FilterItem {
  id: number;
  icon: JSX.Element;
  title: string;
  icon2: JSX.Element;
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

// filters
export type FilterOptions = {
  [key: string]: string[];
};
