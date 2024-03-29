import Head from 'next/head'

import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle} from '../components/layout.js';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hello, this is Ray. Currently picking up javascript for web3 development. Let's see how it goes!]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
