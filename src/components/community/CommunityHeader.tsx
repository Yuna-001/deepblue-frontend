import Header from "../layout/Header";
import searchIcon from "../../assets/images/community/search.svg";

const CommunityHeader = () => {
  return (
    <Header>
      <h1 className="title3 text-navy-100 pl-4">커뮤니티</h1>
      <img src={searchIcon} className="mr-1" />
    </Header>
  );
};

export default CommunityHeader;
