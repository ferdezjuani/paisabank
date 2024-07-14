import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Credentials } from "../types/user";
import { useRouter } from "next/router";

interface LoginResponse {
  success: boolean;
  data: {
    name: string;
    token: string;
  };
}

const login = async (credentials: Credentials): Promise<LoginResponse> => {
  const response = await axios.post("/api/auth/login", credentials);
  return response.data;
};

export const useLogin = () => {
  const router = useRouter();
  return useMutation<LoginResponse, unknown, Credentials>({
    mutationFn: login,
    onSuccess: (data: LoginResponse) => {
      localStorage.setItem("token", data.data.token);
      router.push("/");
    },
    onError: () => {
      console.error("Login failed:");
    },
    retry: false,
  });
};
