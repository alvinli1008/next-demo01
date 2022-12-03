import { useState, useEffect } from "react";

const Blog = (props) => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    return () => {};
  }, []);

  // console.log("render", props, num);

  return (
    <div>
      <div>num: {num}</div>
      <br />
      <button
        onClick={() => {
          setNum((prev) => prev + 1);
        }}
        className="px-3 py-2 border-solid border-[1px] border-[pink] rounded"
      >
        Increase
      </button>
      <button
        onClick={() => {
          setNum((prev) => prev - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {

  return {
    props: {
      name: "tom",
    },
  };
};

// export const getStaticProps = async () => {
//   const mockRequest = () => {
//     const data = {
//       list: [],
//       count: 0,
//     };
//     return new Promise((resolve, reject) => {
//       return setTimeout(() => {
//         resolve(data);
//       }, 500);
//     });
//   };

//   const data = await mockRequest();
//   return {
//     props: {
//       posts: data,
//     },
//   };
// };

export default Blog;
