export const similarArrays = (arr1, arr2) => {
  const convertToKeys = (value) => {
    if (Array.isArray(value)) {
      return value.map(convertToKeys).sort().join(",");
    }

    return value.toString();
  };

  return convertToKeys(arr1) === convertToKeys(arr2);
};
