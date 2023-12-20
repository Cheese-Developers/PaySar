import React, { useState } from "react";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import AuthFormHeader from "../components/ui/AuthFormHeader";
import { useSignInMutation } from "../redux/service/api/authApi";
import Input from "../components/ui/Input";
import AuthForm from "../components/ui/AuthForm";
import { useDispatch } from "react-redux";
import { addUserToken } from "../redux/service/slice/userTokenSlice";
import Lottie from "lottie-react";
import loader from "../assets/loaderAnimate.json";
import { SweetAlertToast } from "../libs/SweetAlert";
import Cookies from "js-cookie";

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const cookiesPost = Cookies.get("post");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signIn, { isLoading }] = useSignInMutation();

  const signInHandler = async (event) => {
    event.preventDefault();
    try {
      const user = { email, password };
      const res = await signIn(user);

      const { data, error } = res;
      if (data?.data) {
        dispatch(addUserToken(data.token));
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);
        !cookiesPost && Cookies.set("post", 0, { expires: expirationDate });
        navigate("/");
        SweetAlertToast.fire({
          icon: "success",
          title: "Signed in successfully",
          position: "top",
        });
      } else {
        SweetAlertToast.fire({
          icon: "error",
          title: error?.data?.msg || "Please check your credentials again!",
          position: "top",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center text-primary h-screen">
      {isLoading ? (
        <div>
          <Lottie animationData={loader} loop={true} autoplay={true} />
        </div>
      ) : (
        <div className="w-[95%] md:w-[400px] py-8 px-6 bg-secondary flex flex-col justify-center rounded-md shadow-md md:shadow-lg">
          <AuthFormHeader text={"Sign In"} />
          <AuthForm onSubmit={signInHandler}>
            <Input
              text={"Email"}
              id={"email"}
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              text={"Password"}
              id={"password"}
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" text={"Sign In"} />
          </AuthForm>
          <div className="flex gap-3 mt-4">
            <h3 className="text-gray-700">Do you have an account?</h3>
            <Link to={"/sign-up"} className="text-primary font-semibold">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
