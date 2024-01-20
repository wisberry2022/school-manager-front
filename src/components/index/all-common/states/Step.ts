import { atom, selector } from "recoil";
import { MapperType } from "../../home/types/IndexTypes";

export const StepState = atom<number>({
  key: "StepState",
  default: -1,
});

export const IndexPageState = selector<string>({
  key: "IndexPageState",
  get: ({ get }) => {
    const step = get(StepState);

    const stateMapper: MapperType = {
      "-1": "main",
      "0": "basicInfo",
      "1": "lecture",
      "2": "staff",
      "3": "student",
    };

    return stateMapper[step.toString()];
  },
});
