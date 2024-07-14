import Image from "next/image";
import React, { useEffect, useState } from "react";
import paisabank from "@/assets/paisabank.svg";
import { Credentials } from "../../types/user";
import { useLogin } from "@/hooks/useLogin";
import Spinner from "@/components/Spinner";
import { isLoggedIn } from "@/utils";
import { useRouter } from "next/router";
import ErrorChip from "@/components/ErrorChip";

export default function Login() {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const mutation = useLogin();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(credentials);
  };

  useEffect(() => {
    if (isLoggedIn()) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen font-[Poppins]">
      <div className="w-full max-w-md p-2 space-y-8">
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            src={paisabank}
            alt="PaisBank"
            width={49}
            height={49}
            className="flex items-center"
          />
          <h2 className="mt-6 text-4xl font-medium text-primary-blue">
            PaisaBank
          </h2>
          <p className="mt-2 text-base text-secondary-blue">
            Comienza a manejar tu vida financiera
          </p>
        </div>
        <form className="mt-8 space-y-6 px-2" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            {mutation.isError && (
              <ErrorChip message="Email y/o contraseña incorrecta/s" />
            )}
            <div className="py-4">
              <label
                htmlFor="email-address"
                className="font-medium text-primary-gray py-4 text-base"
              >
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="relative block w-full px-3 py-4 text-secondary-blue placeholder-placeholder-gray rounded-lg shadow-md text-sm"
                placeholder="Ingresa tu email"
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
            </div>
            <div className="py-4">
              <label
                htmlFor="password"
                className="font-medium text-primary-gray text-base"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full px-3 py-4 text-gray-900 placeholder-placeholder-gray rounded-lg shadow-md text-sm"
                placeholder="Ingresa tu contraseña"
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="w-4 h-4 text-[#DBDBDB] rounded-lg bg-[#DBDBDB]"
              />
              <label
                htmlFor="remember_me"
                className="block ml-2 text-sm font-medium text-placeholder-gray"
              >
                Recordarme
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-4 font-medium text-white text-base bg-primary-blue border border-transparent rounded-lg group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {mutation.isPending ? <Spinner /> : "Ingresar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
