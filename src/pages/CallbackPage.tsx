import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchUser } from "../utils/api";

const CallbackPage: FC = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const code = searchParams.get("token");

  if (!code) navigate("/");

  const { data: user, isLoading } = useQuery({
    queryFn: () => fetchUser(code as string),
    queryKey: ["user-auth"],
  });

  useEffect(() => {
    if (!isLoading && user) {
      const { accessToken, isExistingMember } = user;

      localStorage.setItem("accessToken", accessToken);

      if (isExistingMember) {
        navigate("/home");
      } else {
        navigate("/tutorial");
      }
    }
  }, [isLoading, navigate, user]);

  return <h1>Callback</h1>;
};

export default CallbackPage;
