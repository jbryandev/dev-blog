import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>James Bryan</title>
        <meta
          name='description'
          content='Musings on web design and development from an engineer turned webprenuer. Focus on Javascript, React, CSS, Headless CMS, Divi, Wordpress, and more.'
          key='description'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
          key='viewport'
        />
        <meta name='author' content='Your name' key='author' />
        <meta property='og:title' content='Your Page Title' />
        <meta property='og:description' content='Brief description' />
        <meta property='og:image' content='/some-image.png' />
        <meta property='og:url' content='/this-page.html' />
        <meta property='og:site_name' content='Your Site Name' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image:alt' content='image description' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </Head>

      <main>
        <h1>James Bryan</h1>
      </main>

      <footer></footer>
    </div>
  );
}
