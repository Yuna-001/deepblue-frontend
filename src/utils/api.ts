import DashBoardInfoType from "../models/dashboardInfo";
import PostType from "../models/posts";
import QuestType from "../models/quest";
import UserInfoType from "../models/userInfo";
import UserRankingType from "../models/userRanking";
import { get, post } from "./http";

/* 온보딩 */

export const fetchUser = async (code: string) => {
  const res = await post("/login", {
    code,
  });

  // 기존에 닉네임이나 설문 레벨을 세팅했는지
  return res.data as {
    token: string;
    has_nickname: boolean;
    has_survey_level: boolean;
  };
};

// 이건 백엔드 api 다 작성되면 페이지랑 같이 수정하기
export const checkIsDuplicatedNickname = async (nickname: string) => {
  const res = await get("", {
    nickname,
  });

  return res.data;
};

export const submitUserInfo = async ({
  surveyLevel,
  nickname,
}: {
  surveyLevel: number;
  nickname: string;
}) => {
  const data = { survey_level: surveyLevel, nickname };
  const res = await post("/userInfo", data);

  localStorage.setItem("id", res.data.id);

  return res.data;
};

/* 홈 */

// 퀘스트리스트 초기화를 언제해야 하는지 논의 필요

export const submitDailyCheck = async () => {
  const res = await post("/dailycheck", {});

  return res.data;
};

export const fetchQuests = async () => {
  const res = await get("/quests");

  return res.data as Array<QuestType>;
};

export const fetchUserInfo = async () => {
  const res = await get("/userInfo");

  return res.data as UserInfoType;
};

/* 랭킹 */

export const fetchRanking = async () => {
  const res = await get("/ranking");

  return res.data as Array<UserRankingType>;
};

/* 대시보드 */

export const fetchDashboardInfo = async () => {
  const res = await post("/dashboard", {});

  return res.data as DashBoardInfoType;
};

/* 커뮤니티 */

export const fetchPosts = async (
  category: string | undefined,
  type: string | undefined,
) => {
  const data = { category, type };

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

  console.log(data);
  const res = await get("/posts", data);
  console.log(res.data);
  return res.data as Array<PostType>;
};
