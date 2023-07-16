interface PostData {
  title: string;
  id: number;
  body: string;
  userId: string;
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res.json();
}

const DashBoard = async ({ params }: { params: { slug: string } }) => {
  console.log("params:: ", params);
  // return <div>Xin chào: {params.slug}</div>;
  const data = await getData();
  // console.log("data:: ", data);
  return (
    <div>
      <ul>
        {data?.map((value: PostData, key: number) => (
          <li key={value?.id}>
            {key}-{value?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashBoard;
