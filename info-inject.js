/** @type {typeof import("./static.json")} */
const data = await fetch("/static.json").then((x) => x.json());

const update = data.update-date;
console.log(update)