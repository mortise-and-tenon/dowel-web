import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "强大的框架，构建未来",
    image: "/img/framework.png",
    description: (
      <>
        我们提供一个功能全面、结构清晰的开发框架，帮助开发者高效构建高质量的应用。
      </>
    ),
  },
  {
    title: "坚实的根基，稳定可靠",
    image: "/img/robust.png",
    description: (
      <>
        基于成熟的技术栈和严谨的设计原则，我们的框架非常稳定，确保你的项目运行流畅，安全无忧。
      </>
    ),
  },
  {
    title: "简单易用，快速上手",
    image: "/img/easy.png",
    description: (
      <>
        从文档到组件都力求简洁直观。即使你是初学者，也能轻松上手，节省时间，提升效率。
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={image} alt="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
