import { FC } from "react";

import { pointFormatting } from "../../utils/formatting";
import PolarPointIcon from "../icons/PolarPointIcon";

const Point: FC<{ point: number }> = ({ point }) => {
  return (
    <div className="flex flex-row gap-1 ">
      <PolarPointIcon />
      <div className="body1">{pointFormatting(point)}</div>
    </div>
  );
};

export default Point;
