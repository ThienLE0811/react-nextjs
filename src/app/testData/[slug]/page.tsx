import { ReactNode } from "react";
import Image from "next/image";
interface PostData {
  title: string;
  id: number;
  body: string;
  userId: string;
}

interface PhotoData {
  title: string;
  url: string;
  id: string;
}

async function getData() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      //posts
      cache: "no-store",
    });
    return res.json();
  } catch (error) {}
}

async function getPhotos() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`); //photos
    return res.json();
  } catch (error) {}
}

const TestData = async ({ params }: { params: { name: string } }) => {
  const { name } = params;
  console.log("params:: ", params);

  // return <div>Xin chào: {params.slug}</div>;
  const dataPosts = await getData();
  const dataPhotos = await getPhotos();

  //   const [posts, photos] = await Promise.all([dataPosts, dataPhotos]);

  return (
    <>
      <h1>Xin chào !!</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ul>
          {dataPosts?.map((value: PostData, key: number) => (
            <li key={value?.id}>
              {key}-{value?.title}
            </li>
          ))}
        </ul>
        <div>
          {dataPhotos?.map((value: PhotoData, key: number) => (
            <li key={value?.id}>
              {key}-{value?.title}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestData;

// import Albums from "./albums";

// async function getArtist(name: string) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/${name}`);
//   return res.json();
// }

// async function getArtistAlbums(name: string) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/${name}`);
//   return res.json();
// }

// export default async function Page({
//   params: { slug },
// }: {
//   params: { slug: string };
// }) {
//   // Initiate both requests in parallel
//   console.log(" slug:: ", slug);
//   const artistData = getArtist(slug);
//   const albumsData = getArtistAlbums(slug);

//   // Wait for the promises to resolve
//   const [artist, albums] = await Promise.all([artistData, albumsData]);

//   return (
//     <>
//       <h1>{artist.name}</h1>
//       {/* <Albums list={albums}></Albums> */}
//     </>
//   );
// }
