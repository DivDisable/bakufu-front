import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const Logo = () => {
  const [invisible, setInvisible] = useState(true);

  useEffect(() => {
    setInvisible(false);
  }, []);

  const cond = invisible
    ? styles.bakufuLogoLg
    : styles.bakufuLogoLg + " " +  styles.bakufuLogoLgVis;

	return (
		<div className={cond}>
    	<h1 className={styles.bakufuLogo__text}>Bakufu</h1>
		</div>
	);
};

function HomepageHeader() {
  // const {siteConfig} = useDocusaurusContext();
  const [invisible, setInvisible] = useState(true);

  useEffect(() => {
    setInvisible(false);
  }, []);

  const cond = invisible
    ? styles.invisable
    : styles.invisable + " " + styles.visable;

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx("container", cond)}>
				<Logo />
        <p className="hero__subtitle">Наука и стиль</p>
        <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/bakufu">
              База знаний Bakufu &#129504;
            </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Спортивное лазание. Боулдеринг. Тренировки. Как лазать. Скалолазание.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
