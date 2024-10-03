import { FC } from "react";

import NavButton from "../buttons/NavButton";

import inactiveHomeIcon from "../../assets/images/nav/inactive/inactive-home-icon.svg";
import inactiveCommunicationIcon from "../../assets/images/nav/inactive/inactive-communication-icon.svg";
import inactiveRankingIcon from "../../assets/images/nav/inactive/inactive-rank-icon.svg";
import inactiveDashBoardIcon from "../../assets/images/nav/inactive/inactive-chart-icon.svg";

import activeHomeIcon from "../../assets/images/nav/active/active-home-icon.svg";
import activeCommunicationIcon from "../../assets/images/nav/active/active-communication-icon.svg";
import activeRankingIcon from "../../assets/images/nav/active/active-rank-icon.svg";
import activeDashBoardIcon from "../../assets/images/nav/active/active-chart-icon.svg";

const MainNavigation: FC = () => {
  return (
    <nav className="absolute bottom-0 w-full h-14 bg-navy-800 px-5 flex flex-row justify-around items-end shadow-main_nav">
      <NavButton
        destination="/main/home"
        text="홈"
        inactiveImg={inactiveHomeIcon}
        activeImg={activeHomeIcon}
      />
      <NavButton
        destination="/main/communication"
        text="커뮤니케이션"
        inactiveImg={inactiveCommunicationIcon}
        activeImg={activeCommunicationIcon}
      />
      <NavButton
        destination="/main/ranking"
        text="랭킹"
        inactiveImg={inactiveRankingIcon}
        activeImg={activeRankingIcon}
      />
      <NavButton
        destination="/main/dashboard"
        text="대시보드"
        inactiveImg={inactiveDashBoardIcon}
        activeImg={activeDashBoardIcon}
      />
    </nav>
  );
};

export default MainNavigation;
