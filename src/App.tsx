import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GoogleLoginButton from "./components/auth/GoogleLoginButton";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GoogleLoginButton />,
    },
    { path: "/callback", element: <h1>Welcome!</h1> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
