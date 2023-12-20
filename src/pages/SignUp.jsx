import React, { useState } from "react";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import AuthFormHeader from "../components/ui/AuthFormHeader";
import { useSignUpMutation } from "../redux/service/api/authApi";
import Input from "../components/ui/Input";
import AuthForm from "../components/ui/AuthForm";
import { useDispatch } from "react-redux";
import { addUserToken } from "../redux/service/slice/userTokenSlice";
import loader from "../assets/loaderAnimate.json";
import { SweetAlertToast } from "../libs/SweetAlert";

const SignUp = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUp, { isLoading }] = useSignUpMutation();

  const signUpHandler = async (event) => {
    event.preventDefault();
    try {
      if (password !== passwordConfirmation) {
        return alert("Password confirmation and password must be the same");
      }
      // const user = { username, email, password };
      // console.log(user);
      // const res = await signUp(user);

      // const { data, error } = res;
      // if (data?.data) {
      //   dispatch(addUserToken(data.token));
      //   navigate("/");
      // SweetAlertToast.fire({
      //   icon: "success",
      //   title: "Signed in successfully",
      // });
      // } else {
      //   console.log(error);
      // }
      alert("Opps! We are really sorry. This Page is currently working");
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
        <div className="w-[95%] md:w-[400px] py-8 px-6 bg-secondary flex flex-col justify-center rounded-md shadow-sm md:shadow-lg">
          <AuthFormHeader text={"Sign Up"} />
          <AuthForm onSubmit={signUpHandler}>
            <Input
              text={"Name"}
              id={"name"}
              value={username}
              required={true}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <Input
              type="password"
              text={"Password Confirmation"}
              id={"password_confirmation"}
              value={passwordConfirmation}
              required={true}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <Button type="submit" text={"Sign Up"} />
          </AuthForm>
          <div className="flex gap-3 mt-4">
            <h3 className="text-gray-700">Already have an account?</h3>
            <Link to={"/sign-in"} className="text-primary font-semibold">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
