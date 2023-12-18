import AuthRouteGuard from "../guard/AuthRouteGuard";
import ProductRouteGuard from "../guard/ProductRouteGuard";
import AskQuestionPage from "../pages/AskQuestionPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const routes = [
  {
    name: "home",
    path: "/",
    element: (
      <ProductRouteGuard>
        <HomePage />
      </ProductRouteGuard>
    ),
  },
  {
    name: "sign-up",
    path: "/sign-up",
    element: (
      <AuthRouteGuard>
        <SignUp />
      </AuthRouteGuard>
    ),
  },
  {
    name: "sign-in",
    path: "/sign-in",
    element: (
      <AuthRouteGuard>
        <SignIn />
      </AuthRouteGuard>
    ),
  },
  {
    name: "profile",
    path: "/profile",
    element: (
      <ProductRouteGuard>
        <ProfilePage />
      </ProductRouteGuard>
    ),
  },
  {
    name: "ask-question",
    path: "user/:name/ask-question",
    element: <AskQuestionPage />,
  },
];
