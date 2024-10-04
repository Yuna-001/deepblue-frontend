import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import RootLayout from "./components/layout/RootLayout";
import IntroPage from "./pages/onboarding/IntroPage";
import QuestionPage from "./pages/onboarding/QuestionPage";
import AuthPage from "./pages/onboarding/AuthPage";
import CallbackPage from "./pages/onboarding/CallbackPage";
import NicknameSettingPage from "./pages/onboarding/NicknameSettingPage";
import GreetingPage from "./pages/onboarding/GreetingPage";
import GuidePage from "./pages/onboarding/GuidePage";
import MainNavigationLayout from "./components/layout/MainNavigationLayout";
import HomePage from "./pages/main/HomePage";
import RankingPage from "./pages/main/RankingPage";
import DashBoardPage from "./pages/main/DashBoardPage";
import CommunityPage from "./pages/main/CommunityPage";
import CommunityCategoryRedirect from "./pages/main/CommunityCategoryRedirect";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <IntroPage /> },
        {
          path: "auth",
          children: [
            { index: true, element: <AuthPage /> },
            { path: "callback", element: <CallbackPage /> },
          ],
        },
        {
          path: "tutorial",
          children: [
            { index: true, element: <GreetingPage /> },
            { path: "questions", element: <QuestionPage /> },
            { path: "nickname-setting", element: <NicknameSettingPage /> },
            { path: "guide", element: <GuidePage /> },
          ],
        },
        {
          path: "main",
          element: <MainNavigationLayout />,
          children: [
            { index: true, element: <Navigate to="/main/home" /> },
            { path: "home", element: <HomePage /> },
            {
              path: "communication",
              children: [
                {
                  index: true,
                  element: <Navigate to="/main/communication/all/latest" />,
                },
                {
                  path: ":category",
                  children: [
                    { index: true, element: <CommunityCategoryRedirect /> },
                    { path: ":sort", element: <CommunityPage /> },
                  ],
                },
              ],
            },
            { path: "ranking", element: <RankingPage /> },
            { path: "dashboard", element: <DashBoardPage /> },
          ],
        },
      ],
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
