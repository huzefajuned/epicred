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