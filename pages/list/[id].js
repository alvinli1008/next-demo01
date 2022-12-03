import React from "react";

const Detail = (props) => {
  const { id } = props;

  return <div>Detail: {id}</div>;
};

// 在每一次发起请求时执行
export const getServerSideProps = async (ctx) => {
  const { req, res, params } = ctx;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      id: params.id,
    },
  };
};

export default Detail;
