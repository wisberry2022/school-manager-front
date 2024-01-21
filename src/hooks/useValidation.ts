type FuncObj = {
  [key: string]: Function;
};

type FieldCheckValidate = <T = any>(
  callback: Function,
  target: T,
  ...fields: string[]
) => void;

export type FieldCheckValidateArray<T> = (
  callback: Function,
  target: T[],
  require: string[],
  ...fields: string[]
) => void;

export const useValidate = (): FuncObj => {
  const checkRequiredofObject: FieldCheckValidate = (
    callback,
    target,
    ...fields
  ) => {
    const result = fields.every((field) => target[field]);
    result && callback();
  };

  return {
    CHECK_REQUIRE: checkRequiredofObject,
  };
};
