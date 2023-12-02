import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../Pages/HomeScreen";
import Layout from "../components/common/Layout/Layout";
import Login from "../Pages/auth/Sigin";
import SignUp from "../Pages/auth/SignUp";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: 
    [
      { 
        index: true,
        element: <HomeScreen/>
      },
      {
        path: "/sign in",
        element: <Login/>
      },
      {
        path: "/signUp",
        element: <SignUp/>
      },
    ]}
])
