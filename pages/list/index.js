import Link from "next/link";
import React from "react";

const List = (props) => {
  const { name, list } = props;

  return (
    <div>
      <h1>列表页</h1>
      <p>{name}</p>
      {list.map((item) => {
        return (
          <Link key={item.id} href={"/list/" + item.id}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

// 在页面 build 构建的时候为组件注入一些属性信息
export const getStaticProps = async (ctx) => {
  return {
    props: {
      name: "我的名字",
      list: [
        {
          name: "超大大",
          id: "001",
        },
        {
          name: "alvin",
          id: "002",
        },
      ],
    },
  };
};

export default List;
