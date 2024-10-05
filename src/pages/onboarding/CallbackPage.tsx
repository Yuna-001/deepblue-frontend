// import { useQuery } from "@tanstack/react-query";
// import { FC, useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { fetchUser } from "../../utils/api";

import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CallbackPage: FC = () => {
  const navigate = useNavigate();

  // const [searchParams] = useSearchParams();
  // const code = searchParams.get("code");

  // const { data, isLoading } = useQuery({
  //   queryFn: () => fetchUser(code as string),
  //   queryKey: ["user-auth"],
  // });

  // if (!code) navigate("/auth");

  // useEffect(() => {
  //   if (!isLoading && data) {
  //     const { token, has_nickname, has_survey_level } = data;

  //     if (has_nickname && has_survey_level) {
  //       localStorage.setItem("token", token);
  //       navigate("/main/home");
  //     } else {
  //       navigate("/tutorial");
  //     }
  //   }
  // }, [data, isLoading, navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      navigate("/tutorial");
    } else {
      navigate("/main/home");
    }
  }, [navigate]);

  return <></>;
};

export default CallbackPage;
