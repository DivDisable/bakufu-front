import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const bakufuStyle = {
	logo: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '0 auto',
		marginBottom: '50px',
		marginTop: '10px',
		backgroundColor: '#6A87ED',
		width: '200px',
		height: '200px',
		borderRadius: '8px',
		transform: 'rotate(45deg)'
	},
	logoTxt: {
		transform: 'rotate(-45deg) '
	}
};

const Logo = () => {
	return (
		<div style={bakufuStyle.logo}>
    	<h1 style={bakufuStyle.logoTxt} className="hero__title">Bakufu</h1>
		</div>
	);
};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
				<Logo />
        <p className="hero__subtitle">Наука и стиль</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
