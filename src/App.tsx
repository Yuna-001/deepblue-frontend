import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import RootLayout from "./components/layout/RootLayout";
import QuestionPage from "./pages/QuestionPage";
import AuthPage from "./pages/AuthPage";
import CallbackPage from "./pages/CallbackPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <h1>ONBOARDING</h1> },
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
            { index: true, element: <h1>FISRT TUTORIAL</h1> },
            { path: "questions", element: <QuestionPage /> },
            { path: "nickname", element: <h1>NICKNAME SETTING</h1> },
            { path: "guide", element: <h1>GUIDE</h1> },
          ],
        },
        {
          path: "home",
          children: [
            { index: true, element: <h1>HOME</h1> },
            { path: "dashboard", element: <h1>DASHBOARD</h1> },
            { path: "ranking", element: <h1>RANKING</h1> },
            { path: "community", element: <h1>COMMUNITY</h1> },
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
