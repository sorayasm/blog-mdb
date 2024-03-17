// Nexts.js
import Head from "next/head";
import { GetStaticProps } from "next";

// Components
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost, { HeroData } from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";

// Libs
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts: { edges } }) {
  const heroPost: HeroData = edges[0]?.node;
  const morePosts = edges.slice(1);
  const morePostsArray : { tag: string, posts: any} | any = Array.from(
    morePosts
      .reduce((acc: any, post: any) => {
        const tag = post.node.tags.edges[0].node.name;
        if (!acc.has(tag)) acc.set(tag, {tag, posts: [] });
        acc.get(tag).posts.push(post);
        return acc;
      }, new Map())
      .values()
  );
  // const eventsPosts = morePostsArray.filter(({tag} => tag === "Eventos"));

  console.log(morePostsArray);
  return (
    <Layout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && <HeroPost {...heroPost} />}
        {morePostsArray.length > 0 &&
          morePostsArray.map(({ tag, posts, index }) => (
            <MoreStories posts={posts} key={index} category={tag} />
          ))}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 20,
  };
};
