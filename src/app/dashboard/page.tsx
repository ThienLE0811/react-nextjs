const DashBoard = ({ params }: { params: { slug: string } }) => {
  console.log("params:: ", params);
  return <div>Xin chào: {params.slug}</div>;
};

export default DashBoard;
