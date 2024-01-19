import { nav } from "@/constants/Nav";
import { atom } from "recoil";

const defaultTab = Object.keys(nav).find(data => nav[data].isDefault);

export const CurrentTab = atom<string>({
  key: "CurrentTab",
  default: defaultTab,
})