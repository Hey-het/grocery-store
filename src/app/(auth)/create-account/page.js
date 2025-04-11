"use client";
import GlobleApi from "@/utils/GlobleApi";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"


export default function CreateAccount() {
    const router = useRouter();
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        // const [loder, setLoder] = useState(false);
    
        useEffect(() => {
            const jwt = sessionStorage.getItem("jwt");
            if (jwt) {
                router.push("/");
            }
        }, []); // ← only run on mount
        
        async function onCreateAccount() {
            console.log("Create account triggered");
        
            if (password.length < 8) {
                toast.error("Password must be at least 8 characters");
                return;
            }
        
            try {
                const response = await GlobleApi.registerUser(username, email, password);
                console.log("response", response.data.user);
                sessionStorage.setItem("user", JSON.stringify(response.data.user));
                sessionStorage.setItem("jwt", JSON.stringify(response.data.jwt));
                router.push("/sign-in");
                toast.success("Account Created Successfully");
            } catch (e) {
                console.error("Strapi error response:", e?.response?.data);
                toast.error(e?.response?.data?.error?.message || "Something went wrong");
            }
        }
        
        
    return (
        <>
            <div
                className="flex font-poppins items-center justify-center dark:bg-gray-900 min-w-screen min-h-screen"
            >
                <div className="grid gap-8">
                    <div
                        id="back-div"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4 "
                    >
                        <div
                            className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
                        >
                            <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
                                Sign Up
                            </h1>
                            <form 
                            className="space-y-6"
                             onSubmit={(e) => {
                                e.preventDefault(); // Prevent default form submission
                                onCreateAccount();  // Call your sign-up logic
                              }}
                            >
                                <div className="input-field relative">
                                    <input x-model="username"
                                        type="text" id="username"
                                        required
                                        className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <i className="fas fa-user absolute right-3 top-3 text-white"></i>
                                </div>
                                <div className="input-field relative">
                                    <input x-model="email" type="email" id="email" required
                                        className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <i className="fas fa-envelope absolute right-3 top-3 text-white"></i>
                                </div>
                                <div className="input-field relative">
                                    <input x-model="password" type="password" id="password" required
                                        className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                                        placeholder="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <i className="fas fa-lock absolute right-3 top-3 text-white"></i>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 focus:ring-4 focus:ring-purple-300 transition duration-300 transform hover:scale-105"
                                    // onClick={(e) => {
                                    //     e.preventDefault(); // ⛔ Prevent form refresh
                                    //     onCreateAccount();
                                    // }}
                                >
                                    Sign Up
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </button>
                            </form>
                            <div className="flex flex-col mt-4 items-center justify-center text-sm">
                                <h3>
                                    <span className="cursor-default dark:text-gray-300">Have an account?</span>
                                    <a
                                        className="group text-blue-400 transition-all duration-100 ease-in-out"
                                        href="#"
                                    >
                                        <span
                                            className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                        >
                                            Log In
                                        </span>
                                    </a>
                                </h3>
                            </div>


                            <div

                                className="flex items-center justify-center mt-5 flex-wrap"
                            >
                                <button
                                    href="#"
                                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                >
                                    <img
                                        className="max-w-[25px]"
                                        src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                                        alt="Google"
                                    />
                                </button>
                                <button
                                    href="#"
                                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                >
                                    <img
                                        className="max-w-[25px]"
                                        src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                                        alt="Linkedin"
                                    />
                                </button>
                                <button
                                    href="#"
                                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                >
                                    <img
                                        className="max-w-[25px] filter dark:invert"
                                        src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                                        alt="Github"
                                    />
                                </button>
                                <button
                                    href="#"
                                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                >
                                    <img
                                        className="max-w-[25px]"
                                        src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                                        alt="Facebook"
                                    />
                                </button>
                                <button
                                    href="#"
                                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                >
                                    <img
                                        className="max-w-[25px] dark:gray-100"
                                        src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                                        alt="twitter"
                                    />
                                </button>

                                <button
                                    href="#"
                                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                >
                                    <img
                                        className="max-w-[25px]"
                                        src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                                        alt="apple"
                                    />
                                </button>
                            </div>
                            <div
                                className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm"
                            >
                                <p className="cursor-default">
                                    By signing in, you agree to our
                                    <a
                                        className="group text-blue-400 transition-all duration-100 ease-in-out"
                                        href="#"
                                    >
                                        <span
                                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                        >
                                            Terms
                                        </span>
                                    </a>
                                    and
                                    <a
                                        className="group text-blue-400 transition-all duration-100 ease-in-out"
                                        href="#"
                                    >
                                        <span
                                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                        >
                                            Privacy Policy
                                        </span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}