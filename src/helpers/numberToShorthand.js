export default function numberToShorthand(num) {
  if (num < 1000) {
    // Numbers less than 1,000 don't need any shorthand
    return num.toString();
  } else if (num < 1000000) {
    // Numbers between 1,000 and 999,999 will be represented with "k" (thousands) notation
    return (num / 1000).toFixed(0) + "k";
  } else {
    // Numbers equal to or greater than 1,000,000 will be represented with "M" (millions) notation
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
}
