import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/stoned-one.svg").default,
    description: (
      <>
        stoned was designed from the ground up to be easliy interated and used
        in your upcoming projects
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("../../static/img/stoned-two.svg").default,
    description: (
      <>
        don't let the stylings distract you, we've already built them for ease
        of your next react project
      </>
    ),
  },
  {
    title: "Powered by TypeScript",
    Svg: require("../../static/img/stoned-three.svg").default,
    description: (
      <>
        Enhance Your Project by installing stoned which is written with care and
        comes with strong intellisense
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
