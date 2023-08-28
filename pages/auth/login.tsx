import {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import {Button, Input} from "antd";
import {UserOutlined} from "@ant-design/icons";

const Login: NextPage = () => {
    return(
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="w-screen h-screen"
            style={{ backgroundImage: 'url("/assets/bg/bg1.jpg")' }}

            >
                <div className="flex justify-center">
                    <div className="rounded-2xl mt-40 bg-gray-200 drop-shadow-xl flex w-1/2 overflow-hidden">
                        <div className="w-1/2">
                            <div className="flex items-center justify-center py-2 px-5">
                                <div className="ml-5 flex flex-col">
                                    <span className="text-2xl text-center font-mono font-semibold">Login/Register</span>
                                </div>
                            </div>
                            <div className="py-5 px-5">
                                <div>
                                    <Input size={"large"} placeholder="Username" suffix={<UserOutlined />} className="mb-4 h-12"
                                           style={{borderRadius: '10px'}}/>
                                    <Input.Password size={"large"} placeholder="Password" className="h-12"
                                                    style={{borderRadius: '10px'}}/>
                                </div>
                                <div className="mt-5 flex items-center flex-col">
                                    <span className="mb-2 text-blue-500 italic underline hover:cursor-pointer">
                                        Forgot your password?
                                    </span>
                                    <Button size={"large"} shape={"round"} type={"primary"} className="w-1/2">Login</Button>
                                    <div className="mt-5 flex justify-center">
                                        <span>or</span>
                                    </div>
                                    <div className="mt-5 flex justify-center w-full">
                                        <Button size={"large"} shape={"round"} type={"dashed"} className="w-1/2">Register</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 h-full border-l-2 bg-cover bg-gray-400 p-2">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
