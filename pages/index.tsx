import { readdirSync, readFileSync } from "fs";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import path from "path";
import matter from "gray-matter";
import BlogList from "../components/BlogList";
import { Blog } from "../models/Blog";
import styles from "../styles/Home.module.css";

interface StaticBlogs {
  slug: string;
  frontmatter: Blog;
}

const Home: NextPage<{ blogs: StaticBlogs[] }> = ({ blogs }) => {
  const headerBlog: Blog = blogs[6].frontmatter;
  const filtredBlogs: StaticBlogs[] = blogs.filter(
    (blog) => blog.frontmatter.slug !== headerBlog.slug
  );

  const listBlog: Blog[] = filtredBlogs.map(
    (staticBlogs) => staticBlogs.frontmatter
  );

  return (
    <>
      <div className={styles.header}>
        <img
          src={`../images/blogs/large/${headerBlog.image}.jpg`}
          alt={headerBlog.imageAlt}
        />
        <div className={styles.headerBox}>
          <h1>{headerBlog.title}</h1>
          <p>{headerBlog.excerpt}</p>
          <Link href={`blog/[slug]`} as={`blog/${headerBlog.slug}`}>
            <h6 className={styles.headerLink}>Read more</h6>
          </Link>
        </div>
      </div>
      <BlogList blogs={listBlog} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Get all files names from blogs
  const files = readdirSync(path.join("blogs"));

  // Get slug and frontMatter from blogs
  const blogs = files.map((fileName) => {
    // Create slug
    const slug = fileName.replace(".md", "");

    // Get file from fileName
    const markDownWithMeta = readFileSync(
      path.join("blogs", fileName),
      "utf-8"
    );

    const { data: frontmatter } = matter(markDownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      blogs,
    },
  };
};

export default Home;
