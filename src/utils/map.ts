import { UseFormSetValue } from "react-hook-form";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare type MappingSetValueProps = {
  data: any;
  keyName: string[];
  setValue: UseFormSetValue<any>;
};

export const mappingSetValueForm = ({ data, keyName, setValue }: MappingSetValueProps) => {
  for (const name of keyName) {
    setValue(name, data[name]);
  }
};
export const mappingSetValueFormID = ({ data, keyName, setValue }: MappingSetValueProps) => {
  for (const name of keyName) {
    setValue(name, data[name]?.id);
  }
};
