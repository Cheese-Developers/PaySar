import React, { useState } from "react";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import AuthFormHeader from "../components/ui/AuthFormHeader";
import { useSignInMutation } from "../redux/service/api/authApi";
import Input from "../components/ui/Input";
import AuthForm from "../components/ui/AuthForm";
import { useDispatch } from "react-redux";
import { addUserToken } from "../redux/service/slice/userTokenSlice";

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signIn, { isLoading }] = useSignInMutation();

  const signInHandler = async (event) => {
    event.preventDefault();
    try {
      if (password !== passwordConfirmation) {
        return alert("Password confirmation and password must be the same");
      }
      const user = { email, password };
      const res = await signIn(user);

      const { data, error } = res;
      if (data?.data) {
        dispatch(addUserToken(data.token));
        navigate("/");
      } else {
        console.log(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center text-primary h-screen">
      <div className="w-[400px] py-8 px-6 bg-secondary flex flex-col justify-center rounded-md shadow-lg">
        <AuthFormHeader text={"Sign In"} />
        <AuthForm onSubmit={signInHandler}>
          <Input
            text={"Email"}
            id={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            text={"Password"}
            id={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            text={"Password Confirmation"}
            id={"password_confirmation"}
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <Button type="submit" text={isLoading ? "Loading..." : "Sign In"} />
        </AuthForm>
        <div className="flex gap-3 mt-4">
          <h3 className="text-gray-700">Do you have an account?</h3>
          <Link to={"/sign-up"} className="text-primary font-semibold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
