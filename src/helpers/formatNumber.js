export const formatNumber = (num) => {
  let numStr = num.toString();
  let formattedNumber = "";

  if (numStr.length === 4) {
    formattedNumber = numStr[0] + "," + numStr.slice(1);
  } else if (numStr.length === 5) {
    formattedNumber = numStr.slice(0, 2) + "," + numStr.slice(2);
  } else if (numStr.length >= 6) {
    let firstPartLength = numStr.length % 3 === 0 ? 3 : numStr.length % 3;
    formattedNumber = numStr.slice(0, firstPartLength);
    for (let i = firstPartLength; i < numStr.length; i += 3) {
      formattedNumber += "," + numStr.slice(i, i + 3);
    }
  } else {
    formattedNumber = numStr;
  }

  return formattedNumber;
};
