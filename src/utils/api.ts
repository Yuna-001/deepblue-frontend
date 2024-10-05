import DashBoardInfoType from "../models/dashboardInfo";
import PostType from "../models/posts";
import QuestType from "../models/quest";
import UserInfoType from "../models/userInfo";
import UserRankingType from "../models/userRanking";
import { get, post } from "./http";

const getToken = () => {
  return localStorage.getItem("token");
};

/* 온보딩 */

// export const fetchUser = async (code: string) => {
//   const res = await post("https://api.diver-deepblue.app/google/login/", {
//     code,
//   });

//   // 기존에 닉네임이나 설문 레벨을 세팅했는지
//   return res as {
//     token: string;
//     has_nickname: boolean;
//     has_survey_level: boolean;
//   };
// };

// 이건 백엔드 api 다 작성되면 페이지랑 같이 수정하기
export const checkIsDuplicatedNickname = async (nickname: string) => {
  // const res = await get("", {
  //   nickname,
  // });

  // return res.data;
  return {};
};

export const submitUserInfo = async ({
  surveyLevel,
  nickname,
}: {
  surveyLevel: number;
  nickname: string;
}) => {
  const data = { survey_level: surveyLevel, nickname };

  const res = await post("https://api.diver-deepblue.app/userinfo/", data);

  localStorage.setItem("token", res.token);

  return res;
};

/* 홈 */

// 퀘스트리스트 초기화를 언제해야 하는지 논의 필요

export const submitDailyCheck = async () => {
  const token = getToken();
  const res = await post("https://api.diver-deepblue.app/dailycheck/", {
    token,
  });
  console.log(res);
  return res;
};

export const fetchQuests = async () => {
  const token = getToken();
  const res = await get("https://api.diver-deepblue.app/quests/", { token });
  console.log(res);

  return res as Array<QuestType>;
};

export const fetchUserInfo = async () => {
  const token = getToken();
  const res = await get("https://api.diver-deepblue.app/userInfo/", { token });

  return res as UserInfoType;
};

/* 랭킹 */

export const fetchRanking = async () => {
  const token = getToken();
  const res = await get("https://api.diver-deepblue.app/ranking/", { token });

  return res as Array<UserRankingType>;
};

/* 대시보드 */

export const fetchDashboardInfo = async () => {
  const token = getToken();
  const res = await post("https://api.diver-deepblue.app/dashboard/", {
    token,
  });
  console.log(res);
  return res as DashBoardInfoType;
};

/* 커뮤니티 */

export const fetchPosts = async (
  category: string | undefined,
  type: string | undefined,
) => {
  const token = getToken();
  const data = { category, type, token };

  switch (category) {
    case "free":
      data.category = "자유";
      break;
    case "worry":
      data.category = "고민";
      break;
    case "career":
      data.category = "취업/진로";
      break;
    default:
      data.category = "전체";
  }

  if (!type) type = "realtime";

  const res = await get("https://api.diver-deepblue.app/posts/", data);

  return res as Array<PostType>;
};
