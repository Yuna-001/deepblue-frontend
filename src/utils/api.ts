import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

import DashBoardInfoType from "../models/dashboardInfo";
import PostType from "../models/posts";
import QuestType from "../models/quest";
import UserInfoType from "../models/userInfo";
import UserRankingType from "../models/userRanking";

export const queryClient = new QueryClient();

const getToken = () => {
  return localStorage.getItem("token");
};

/* 온보딩 */

export const checkIsDuplicatedNickname = async (nickname: string) => {
  const res = await axios.get(
    `https://api.diver-deepblue.app/nickname/${nickname}/`,
  );

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

  const res = await axios.post(
    "https://api.diver-deepblue.app/userinfo/",
    data,
  );

  localStorage.setItem("token", res.data.token);

  return res.data;
};

/* 홈 */

export const resetQuests = async () => {
  const token = getToken();

  const res = await axios.post(
    "https://api.diver-deepblue.app/quests_list/",
    {},
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    },
  );

  return res.data;
};

export const submitDailyCheck = async () => {
  const token = getToken();

  const res = await axios.post(
    "https://api.diver-deepblue.app/dailycheck/",
    {},
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    },
  );

  return res.data;
};

export const fetchQuests = async () => {
  const token = getToken();

  const res = await axios.get("https://api.diver-deepblue.app/quests/", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  return res.data as Array<QuestType>;
};

export const fetchUserInfo = async () => {
  const token = getToken();

  const res = await axios.get("https://api.diver-deepblue.app/userinfo/", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  return res.data as UserInfoType;
};

/* 랭킹 */

export const fetchRanking = async () => {
  const token = getToken();
  const res = await axios.get("https://api.diver-deepblue.app/ranking/", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  return res.data as Array<UserRankingType>;
};

/* 대시보드 */

export const fetchDashboardInfo = async () => {
  const token = getToken();

  const res = await axios.get("https://api.diver-deepblue.app/dashboard/", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  return res.data as DashBoardInfoType;
};

/* 커뮤니티 */

export const fetchPosts = async (
  category: string | undefined,
  type: string | undefined,
) => {
  const token = getToken();
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

  const res = await axios.get("https://api.diver-deepblue.app/posts/", {
    params: data,
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  return res.data as Array<PostType>;
};

export const completeQuest = async (difficulty: string) => {
  const token = getToken();

  const res = await axios.patch(
    `https://api.diver-deepblue.app/quests/${difficulty}/`,
    {},
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    },
  );

  return res.data;
};
