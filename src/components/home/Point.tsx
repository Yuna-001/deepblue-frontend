import { FC } from "react";

import { pointFormatting } from "../../utils/formatting";
import PolarPointIcon from "../icons/PolarPointIcon";

const MAX_SHOWABLE_POINTS = 99999;
const FORMATTED_MAX_SHOWABLE_POINTS =
  "+" + pointFormatting(MAX_SHOWABLE_POINTS);

const Point: FC<{ point: number }> = ({ point }) => {
  const formattedPoint: string =
    point < 100000 ? pointFormatting(point) : FORMATTED_MAX_SHOWABLE_POINTS;

  return (
    <div className="flex flex-row gap-1 ">
      <PolarPointIcon />
      <div className="body1">{formattedPoint} P</div>
    </div>
  );
};

export default Point;
