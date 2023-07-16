import { ReactNode } from "react";

interface TestDataProps {
  children: ReactNode;
}

const TestDataLayout = ({ children }: TestDataProps) => {
  return (
    <div>
      <h2>Đây là test data</h2>
      {children}
    </div>
  );
};

export default TestDataLayout;
