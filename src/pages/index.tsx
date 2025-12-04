import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";

import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import { CarouselImage } from "../types/carousel";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/download"
          >
            💻 立即下载
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const demoImages: CarouselImage[] = [
    {
      id: 1,
      url: "/img/1.png",
      alt: "图片1",
    },
    {
      id: 2,
      url: "/img/2.png",
      alt: "图片2",
    },
    {
      id: 3,
      url: "/img/3.png",
      alt: "图片3",
    },
    {
      id: 4,
      url: "/img/4.png",
      alt: "图片4",
    },
    {
      id: 5,
      url: "/img/5.png",
      alt: "图片5",
    },
  ];

  const carouselWrapperStyle = {
    // 1. 限制整体宽度（核心）
    maxWidth: "900px", // 自定义最大宽度（比如900px，适配你的页面）
    width: "100%", // 自适应父容器，但不超过maxWidth
    margin: "0 auto", // 水平居中（关键）

    // 2. 限制高度（可选，若需要固定高度）
    maxHeight: "500px", // 自定义最大高度
    height: "auto", // 高度自适应内容（推荐）

    // 3. 垂直居中（若需要，需给父级定高）
    // 方式1：flex 垂直居中（推荐，需父容器有高度）
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center', // 水平居中
    // justifyContent: 'center', // 垂直居中
    // minHeight: '80vh', // 占视口80%高度（用于垂直居中）

    // 4. 间距（可选，避免紧贴页面边缘）
    padding: "20px 15px", // 上下20px，左右15px
  };

  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="简洁高效的 AI 智能体平台"
    >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <div style={carouselWrapperStyle}>
          <ImageCarousel
            images={demoImages}
            autoPlay={true}
            autoPlayInterval={4000}
            showIndicators={true}
            showControls={true}
          />
        </div>
      </main>
    </Layout>
  );
}
