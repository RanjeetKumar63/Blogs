import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import "./Blogs.css";

const Blogs = () => {
  // consume
  const { posts, Loading } = useContext(AppContext);
  console.log(posts);

  return (
    <div>
      {Loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div>
            <p className="title text-3xl">{post.title}</p>
            <p>
              By <span>{post.author}</span> on <span>{post.category}</span>
            </p>
            <p>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div>
              {post.tags.map((tag, index) => {
                return <span key={index}>{`#${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
