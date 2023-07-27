"use client";

const ErrorPage = ({ error }: any) => {
  console.log("error:: ", error);
  return <div>{error.message}</div>;
};

export default ErrorPage;
