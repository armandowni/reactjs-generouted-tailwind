import { createSearchParams } from "react-router-dom";

export const encodeSearchParams = (searchParams: string) => createSearchParams(searchParams);

export const decodeSearchParams = (searchParams: URLSearchParams) => {
  return [...searchParams.entries()].reduce((acc, [key, val]) => {
    try {
      return {
        ...acc,
        [key]: JSON.parse(val)
      };
    } catch {
      return {
        ...acc,
        [key]: val
      };
    }
  }, {});
};
