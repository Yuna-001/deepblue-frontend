import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import RootLayout from "./components/layout/RootLayout";
import QuestionPage from "./pages/QuestionPage";
import AuthPage from "./pages/AuthPage";
import CallbackPage from "./pages/CallbackPage";
import NicknameSettingPage from "./pages/NicknameSettingPage";
import HomePage from "./pages/HomePage";
import MainPageLayout from "./components/layout/MainPageLayout";
import RankingPage from "./pages/RankingPage";
import IntroPage from "./pages/IntroPage";
import GreetingPage from "./pages/GreetingPage";
import GuidePage from "./pages/GuidePage";
import DashBoardPage from "./pages/DashBoardPage";

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
          element: <MainPageLayout />,
          children: [
            { path: "home", element: <HomePage /> },
            { path: "communication", element: <h1>COMMUNITY</h1> },
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
