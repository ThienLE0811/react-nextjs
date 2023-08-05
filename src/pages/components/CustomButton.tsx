"use client";
import { useRouter } from "next/navigation";

interface ButtonProps {
  href: string;
  content: string;
}

const Button: React.FC<ButtonProps> = ({ href, content }) => {
  const router = useRouter();
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg max-w-[120px]"
      onClick={() => router.push(href)}
    >
      {content}
    </button>
  );
};

export default Button;
