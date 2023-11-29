import React, { useEffect, useState } from "react";
import Layout from "../layout/layout";
import { useParams } from "react-router-dom";
import { postByCategory } from "../APIRequests/ApiRequests";
import BlogLists from "./../components/BlogLists";
import Loader from "./../components/Loader";

const PostByCategory = () => {
  const { categoryID } = useParams();

  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postByCategory(categoryID);
      setList(res);
    })();
  }, [categoryID]);

  return (
    <Layout>{list === null ? <Loader /> : <BlogLists list={list} />}</Layout>
  );
};

export default PostByCategory;
