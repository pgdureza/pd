import React from "react";

import data from "src/data.json";

interface IAboutMe {
  nameOnHeader: string;
  devSince: string;
  favTech: string;
  basedIn: string;
}

interface ISkill {
  header: string;
  items: string[];
}

interface ISocials {
  linkedin: string;
  facebook: string;
  github: string;
  email: string;
}

interface ICareerEntry {
  position: string;
  company: string;
  date: string;
  descriptions: string[];
}

interface IData {
  name: string;
  position: string;
  aboutMe: IAboutMe;
  skills: ISkill[];
  socials: ISocials;
  career: ICareerEntry[];
}

const AppDataContext = React.createContext(data as IData);

export default AppDataContext;
