import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>An introduction</p>
        <p>
          Build a site like this on{' '}
          <a href="https://next.js.org/learn">the Next.js tutorial</a>
        </p>
      </section>
    </Layout>
  )
}
