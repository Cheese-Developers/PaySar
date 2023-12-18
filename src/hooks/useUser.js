import Cookies from "js-cookie";
import { useUserInfoQuery } from "../redux/service/api/authApi";

export const useUser = () => {
  const token = Cookies.get("token");
  const { data, error, isLoading } = useUserInfoQuery(token);

  if (isLoading) {
    return { isLoading };
  } else if (error) {
    console.error("Error fetching user information:", error);
    return { error: "An error occurred while fetching user information." };
  } else {
    return { data };
  }
};
