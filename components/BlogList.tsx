import React from "react";
import BlogCard from "./BlogCard";
import blogStyle from "../styles/Blogs.module.css";
import { Blog } from "../models/Blog";

interface BlogListProp {
  blogs: Blog[];
}

const BlogList = ({ blogs }: BlogListProp) => {
  return (
    <ul className={blogStyle.blogList}>
      {blogs.map((value, index: number) => (
        <BlogCard key={index} blog={value} />
      ))}
    </ul>
  );
};

export default BlogList;
