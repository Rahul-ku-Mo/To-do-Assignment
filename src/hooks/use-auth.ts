import { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import Cookies from "js-cookie";
import { useAuthContext } from "@/hooks/use-auth-context";
import { useUserContext } from "@/hooks/use-user-context";

interface User {
  id: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
}

interface ResponseData {
  accesstoken: string;
  data: User;
}

const useAuth = () => {
  const { updateAccessToken, updateIsLoggedIn } = useAuthContext();

  const { updateUser } = useUserContext();

  const login = async (email: string, password: string) => {
    try {
      const response: AxiosResponse<ResponseData> = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        updateAccessToken(response.data.accesstoken);

        Cookies.set("accesstoken", response.data.accesstoken, { expires: 90 });

        updateUser(response.data.data);

        updateIsLoggedIn(true);

        return response.data.data;
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        console.log(err.message);
      }
    }
  };

  const signup = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      const response: AxiosResponse = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/signup`,
        {
          email,
          firstName,
          lastName,
          password,
        }
      );

      if (response.status === 201) {
        updateAccessToken(response.data.accesstoken);

        Cookies.set("accesstoken", response.data.accesstoken, { expires: 90 });

        updateUser(response.data.data);

        updateIsLoggedIn(true);

        return response.data.data;
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        console.log(err.message);
      }
    }
  };

  return {
    login,
    signup,
  };
};

export default useAuth;
