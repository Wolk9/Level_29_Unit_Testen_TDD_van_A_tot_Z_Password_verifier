function woof(str) {
  if (typeof str !== "string") {
    throw Error("MUST be a string");
  }
  return str.length + "woof!";
}

module.exports = woof;
