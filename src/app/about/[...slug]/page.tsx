const Shop = ({ params }: { params: { slug: string[] } }) => {
  console.log("params:: ", params);
  const [slug1, ...slug] = params.slug;
  console.log("params:: ", slug);
  return (
    <div>
      Xin chào: {slug1}, {slug}
    </div>
  );
};

export default Shop;
