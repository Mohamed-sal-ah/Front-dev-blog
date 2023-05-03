import Link from "next/link";
import React from "react";
import { Blog } from "../models/Blog";
import blogStyle from "../styles/Blogs.module.css";

interface BlogCardProp {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProp) => {
  return (
    <li className={blogStyle.blogItem}>
      <Link href={`blog/[slug]`} as={`blog/${blog.slug}`}>
        <div className={blogStyle.blogLink}>
          <img
            src={`../images/blogs/small/${blog.image}small.jpg`}
            alt={blog.imageAlt}
          />
          <div className={blogStyle.subTextRow}>
            <p className="blog-tag">{blog.tag}</p>
            <p className={blogStyle.date}>{blog.date}</p>
          </div>
          <h4>{blog.title}</h4>
        </div>
      </Link>
    </li>
  );
};

export default BlogCard;
