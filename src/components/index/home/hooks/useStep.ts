import { PageType } from "@/types/Common";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { StepState } from "../states/Step";

export const usePage = <T = any>(init?: T): PageType<T> => {
  const [step, setStep] = useState<T | null>(init ? init : null);

  const goPage = (page: T) => {
    setStep(page);
  };

  return {
    step: step as T,
    goPage: goPage,
  };
};
