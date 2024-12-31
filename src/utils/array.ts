/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
export declare type arrayInputTypes = {
  dataInput: any;
  data: any[];
  index: number;
  setData?: Function;
};

export const addDataArray = (props: arrayInputTypes) => {
  const tempData = props.data;
  tempData.push({ ...props.dataInput });

  if (props.setData) props.setData([...tempData]);
  return tempData;
};

export const updateDataArray = (props: arrayInputTypes) => {
  const tempData = props.data;
  delete props.dataInput.index;
  tempData[props.index] = props.dataInput;

  if (props.setData) props.setData([...tempData]);
  return tempData;
};

export const deleteDataArray = (props: arrayInputTypes) => {
  const tempData = props.data;

  tempData.splice(props.index, 1);

  if (props.setData) props.setData([...tempData]);

  return tempData;
};

export function arraysAreEqual(arr1: any[], arr2: any[]) {
  // Sort both arrays to ensure the objects are in the same order
  arr1.sort();
  arr2.sort();

  // Iterate over each object in the arrays and compare their properties
  for (let i = 0; i < arr1.length; i++) {
    const obj1 = arr1[i];
    const obj2 = arr2[i];

    // Convert objects to strings for comparison
    const str1 = JSON.stringify(obj1);
    const str2 = JSON.stringify(obj2);

    // If the objects are not equal, return true
    if (str1 !== str2) {
      return true;
    }
  }

  // If all objects are equal, return false
  return false;
}

export function removeStringFromArray(array: string[], stringToRemove: string): string[] {
  return array.filter((item) => item !== stringToRemove);
}
