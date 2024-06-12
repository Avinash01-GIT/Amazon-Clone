import { logoDark } from "../assets/images";
import { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if(!email){
      setErrEmail("Enter your email");
    }
    if(!password){
      setErrPassword("Enter Your password");
    }
    if(email && password){
      console.log(email,password);
      setEmail("");
      setPassword("");
    }
  }
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <img className="w-32" src={logoDark} alt="darklogo" />
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Sign in
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">
                  Email 
                </p>
                <input
                onChange={handleEmail}
                value={email}
                  className="w-full lowercase py-1 border-zinc-400 px-2 text-base rounded-sm outline-none 
                      focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  type="email"
                />
                 {errEmail && (
                  <p className="text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5 text-red-500">
                    <span className="text-base font-titleFont font-semibold italic  ">!</span>
                    {errEmail}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                onChange={handlePassword}
                value={password}
                  className="w-full lowercase py-1 border-zinc-400 px-2 text-base rounded-sm outline-none 
                      focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  type="password"
                />
                 {errPassword && (
                  <p className="text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5 text-red-500">
                    <span className="text-base font-titleFont font-semibold italic  ">!</span>
                    {errPassword}
                  </p>
                )}
              </div>
              <button
                onClick={handleLogin}
                className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
              >
                Continue
              </button>
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By Continuing, you agree to Amazon&apos;s{" "}
              <span className="text-blue-600">Conditions of Use </span>and{" "}
              <span className="text-blue-600">Privacy Notice</span>
            </p>
            <p className="text-xs text-gray-600 mt-6 cursor-pointer group flex items-center">
              <ArrowRightIcon />
              <span className="text-blue-600 group-hover:text-red-700 group-hover:underline-offset-1">
                Need help?
              </span>
            </p>
            <div>
              <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
                <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
                <span className="w-1/3 text-center">New to Amazon</span>
                <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
              </p>
              <Link to="/registration">
              <button
                className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
              >
                Create Your Amazon Account
              </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full my-4 py-5 text-xs text-center bg-zinc-100 bg-gradient-to-t from-white via-white to-zinc-100">
      <div className="w-[350px] mx-auto mb-3 flex gap-3 justify-center items-center">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940"
          className="text-blue-600  hover:text-orange-700 hover:underline cursor-pointer"
        >
          Conditions of Use
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380"
          className="text-blue-600  hover:text-orange-700 hover:underline cursor-pointer"
        >
          Privacy Notice
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=508510"
          className="text-blue-600  hover:text-orange-700 hover:underline cursor-pointer"
        >
          Help
        </a>
      </div>
      <div className=" text-lightGray">
        © 1996-2024, Amazon.com, Inc. or its affiliates
      </div>
    </div>
    </div>
  );
};

export default Signin;
