const numberFormatting = (num: number) => {
  return num.toLocaleString("ko-KR");
};

const MAX_SHOWABLE_POINTS = 99999;
const FORMATTED_MAX_SHOWABLE_POINTS =
  numberFormatting(MAX_SHOWABLE_POINTS) + " P+";

export const pointFormatting = (point: number) => {
  if (point >= 100000) return FORMATTED_MAX_SHOWABLE_POINTS;

  return numberFormatting(point) + " P";
};
