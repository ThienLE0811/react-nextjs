"use client";
import { AppContext, AppContextProvider } from "@/config/AppContext";
import { AppContextProps } from "@/utils/type";
import { useRouter } from "next/navigation";
import { useContext, useReducer } from "react";

interface ButtonProps {
  href: string;
  content: string;
}

const LoginButton: React.FC<ButtonProps> = ({ href, content }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(AppContext);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-full max-w-[120px]"
      onClick={() => dispatch({ type: "SHOW_MODAL_LOGIN", payload: true })}
    >
      {content}
    </button>
  );
};

export default LoginButton;
