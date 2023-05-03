import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { marked } from "marked";

import path from "path";
import React from "react";
import Meta from "../../../components/Meta";
import blogStyle from "../../../styles/BlogPage.module.css";
import { Blog } from "../../../models/Blog";
import { NextPage } from "next";

interface Props {
  frontMatter: Blog;
  content: string;
}

const BlogPage: NextPage<Props> = ({ frontMatter, content }) => {
  return (
    <>
      <Meta title={frontMatter.title} description={frontMatter.excerpt} />
      <div className={blogStyle.blog}>
        <img
          src={`../images/blogs/large/${frontMatter.image}.jpg`}
          alt={frontMatter.imageAlt}
        />
        <div className={blogStyle.subHeaderRow}>
          <p style={{ fontSize: "0.9rem" }} className="blog-tag">
            {frontMatter.tag}
          </p>
          <p className={blogStyle.date}>{frontMatter.date}</p>
        </div>
        <div className={blogStyle.template}>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
};

interface staticPropsParams {
  params: {
    slug: string;
  };
}

export const getStaticProps = async ({
  params: { slug },
}: staticPropsParams) => {
  // Get the file with slug params
  const markDownWithMeta = readFileSync(
    path.join("blogs", `${slug}.md`),
    "utf-8"
  );

  // Get frontMatter data and content
  const { data: frontMatter, content } = matter(markDownWithMeta);

  return {
    props: {
      frontMatter,
      slug,
      content,
    },
  };
};

export const getStaticPaths = async () => {
  // Get all files names from blogs
  const files = readdirSync(path.join("blogs"));

  // Return path of files from fileNames
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;
