import { atom, selector } from "recoil";
import { MapperType } from "../../home/types/IndexTypes";

export const BasicInfoStepState = atom<number>({
  key: "BasicInfoStepState",
  default: 0,
});

export const BasicInfoPageState = selector<string>({
  key: "BasicInfoPageState",
  get: ({ get }) => {
    const step = get(BasicInfoStepState);

    const stateMapper: MapperType = {
      "0": "qualified",
      "1": "position",
      "2": "task",
    };

    return stateMapper[step.toString()];
  },
});
