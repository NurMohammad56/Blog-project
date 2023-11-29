import React, { useEffect, useState } from "react";
import Layout from "../layout/layout";
import BlogLists from "../components/BlogLists";
import { latestPost } from "../APIRequests/ApiRequests";
import Loader from "./../components/Loader";

const HomePage = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await latestPost();
      setList(res);
    })();
  }, []);
  return (
    <Layout>{list === null ? <Loader /> : <BlogLists list={list} />}</Layout>
  );
};

export default HomePage;
