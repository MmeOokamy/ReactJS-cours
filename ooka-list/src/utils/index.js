export const objToArr = (object) =>
Object.keys(object).map((key) => object[key])
.filter((item) => item);