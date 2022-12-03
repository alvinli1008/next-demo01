import Main from "../components/Main";
import Link from "next/link";

const Home = () => {
  return (
    <Main>
      <Link href={"/list"}>List</Link>
      <Link href={"/blog"}>blog</Link>
    </Main>
  );
};

export default Home;
