import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
// import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className='container'>
        <h1 className='hero__title'>Today I Learned</h1>
        <p className='hero__title__2'>
          🚕 {'\u00A0'}안전지대 탈출하기{'\u00A0'} 🚗
        </p>
        <div className={styles.buttons}>
          <Link className='button button--primary button--lg' to='/docs/frontend/intro'>
            Go to Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />

      <main className={styles.imgs}>
        <img
          src='
        https://media.tenor.com/Qu46-3ANACUAAAAC/judy-hopps-driving.gif'
        />
      </main>
    </Layout>
  );
}
