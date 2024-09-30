import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GoogleLoginButton from "./components/auth/GoogleLoginButton";
import CallbackPage from "./pages/CallbackPage";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GoogleLoginButton />,
    },
    { path: "/callback", element: <CallbackPage /> },
    { path: "/home", element: <h1>HOME</h1> },
    { path: "/tutorial", element: <h1>TUTORIAL</h1> },
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
