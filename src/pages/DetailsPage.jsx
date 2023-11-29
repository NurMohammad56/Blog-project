import React, { useState, useEffect } from "react";
import Layout from "../layout/layout";
import { useParams } from "react-router-dom";
import BlogDetails from "../components/BlogDetails";
import Loader from "./../components/Loader";
import { postDetails } from "../APIRequests/ApiRequests";
const DetailsPage = () => {
  const { postID } = useParams();
  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postDetails(postID);
      setList(res);
    })();
  }, []);
  return (
    <Layout>{list === null ? <Loader /> : <BlogDetails list={list} />}</Layout>
  );
};

export default DetailsPage;
