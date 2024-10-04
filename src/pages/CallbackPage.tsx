import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchUser } from "../utils/api";

const CallbackPage: FC = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const { data: user, isLoading } = useQuery({
    queryFn: () => fetchUser(code as string),
    queryKey: ["user-auth"],
  });

  if (!code) navigate("/auth");

  useEffect(() => {
    if (!isLoading && user) {
      const { accessToken, isExistingMember } = user;

      localStorage.setItem("accessToken", accessToken);

      if (isExistingMember) {
        navigate("/main/home");
      } else {
        navigate("/tutorial");
      }
    }
  }, [isLoading, navigate, user, code]);

  return <></>;
};

export default CallbackPage;
