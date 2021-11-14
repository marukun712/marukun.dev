import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'web開発',
    Svg: require('../../static/img/github.svg').default,
    description: (
      <>
        サイト作ったりwebアプリ作ったりしてます      </>
    ),
  },
  {
    title: '動画編集',
    Svg: require('../../static/img/istockphoto-1292322560-612x612.svg').default,
    description: (
      <>
    実況動画や解説動画、mvなど作ってます
      </>
    ),
  },
  {
    title: '画像編集',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
クソコラ量産したりお絵描きしたり写真を撮ったりしてます
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
