"use client";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import instance from "../../../axio.config";
import { useAuth } from "@/context/providers/AuthProvider";

const Login = () => {

  const [form] = Form.useForm();
  const router = useRouter();
  const { setAuth,auth } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  console.log("AUTH",auth)

  const mutation = useMutation({

    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      setLoading(true);
      const response = await instance.post(
        `/users/auth/login`,
        { email, password },
        { 
          withCredentials: true,
          headers:{'Content-Type':'application/json'}
         }
      );
      return response.data;
    },

    onSuccess: ({data:{token,user},message}) => {
      setLoading(false);
      toast.success(message);
      setAuth({user,token})
      localStorage.setItem("user", user.username);
      router.push("/dashboard/links/create");
    },

    onError: (error: { response?: { data?: { message?: string } } }) => {
      setLoading(false);
      toast.warn(
        error.response?.data?.message || "Login failed. Check credentials."
      );
    },
  });

  const onFinish = async(values: { email: string; password: string }) => {
    mutation.mutate({ email: values.email, password: values.password });
    // await login(values.email, values.password);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl  bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <Link href="/">
              <Image
                src="/images/bitlyLogo.png"
                width={96}
                height={48}
                alt="logo"
              />
            </Link>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold mb-2">
              Log in and start sharing
            </h1>
            <p className="text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="!underline text-blue-500">
                Sign up
              </Link>
            </p>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Continue with Google</span>
                </button>

                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                  <div className="bg-white p-1 rounded-full">
                    <svg className="w-6" viewBox="0 0 32 32">
                      <path
                        fillRule="evenodd"
                        d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Continue with GitHub</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  OR
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <Form
                  form={form}
                  name="Register Driver Form"
                  layout="vertical"
                  onFinish={onFinish}
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Enter Email" }]}
                  >
                    <Input className="!py-2" placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    label="password"
                    name="password"
                    rules={[{ required: true, message: "Enter Pawword" }]}
                  >
                    <Input.Password className="!py-2" placeholder="Password" />
                  </Form.Item>
                  <Form.Item className="!w-full">
                    <Button
                      htmlType="submit"
                      className="w-full !py-5"
                      type="primary"
                      loading={loading}
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center hidden lg:block bg-indigo-100">
          <div className="flex flex-col justify-center items-center h-full max-w-xl mx-auto my-auto ">
            <div>
              <Image
                src="/images/loginImage.png"
                width={426}
                height={273}
                alt="sign up image"
              />
            </div>
            <p className="text-center">
              Analyze your links and QR Codes as easily as creating them
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
