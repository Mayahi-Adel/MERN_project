export const dateParser = (str) => {
  let options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  let time = Date.parse(str);
  let date = new Date(time).toLocaleDateString("fr-FR", options);
  return date.toString();
};
