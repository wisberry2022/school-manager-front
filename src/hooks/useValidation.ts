type FuncObj = {
  [key: string]: Function;
};

type FieldCheckValidate = <T = any>(
  callback: Function,
  target: T,
  ...fields: string[]
) => void;

type NotNullValidate = <T = any>(callback: Function, target: T[]) => void;

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

  const notNullValid: NotNullValidate = (callback, rows) => {
    const result = rows.every((row) =>
      Object.values(row).every((data) => data)
    );
    result && callback();
  };

  return {
    CHECK_REQUIRE: checkRequiredofObject,
    NOT_NULL: notNullValid,
  };
};
