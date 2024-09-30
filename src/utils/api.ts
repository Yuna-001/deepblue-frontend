import { post, get } from "./http";

export const fetchUser = async (code: string) => {
  //   const data = { code };
  //   const res = await post("", data);
  //   const accessToken = res.data.accessToken;
  //   const isExistingMember = res.data.isExistingMember;

  // mock 데이터
  const res = await get("/mocks/auth/mockLoginData.json");
  // res.data[0]은 기존 회원
  // res.data[1]은 새로운 회원
  return res.data[1];
};
