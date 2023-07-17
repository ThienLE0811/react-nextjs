import { ReactNode } from "react";

interface TestDataProps {
  children: ReactNode;
}

const TestDataLayout = ({ children }: TestDataProps) => {
  return (
    <div className="p-8">
      <h2>Đây là test data, muốn biết thêm hãy /...</h2>
      {children}
    </div>
  );
};

export default TestDataLayout;
