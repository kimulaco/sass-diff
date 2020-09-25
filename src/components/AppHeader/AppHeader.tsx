import React from 'react'
import Link from 'next/link'
import styles from './AppHeader.module.scss'

const AppHeader: React.FC = () => {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <Link href="/">
            <a className={styles.title_link}>sass-diff</a>
          </Link>
        </h1>

        <p className={styles.lead_text}>
          Compare Dart Sass and Node Sass compilations.
        </p>

        <div className={styles.nav}>
          <p>
            <a
              className={styles.icon}
              href="https://github.com/kimulaco/sass-diff"
            >
              <img
                className={styles.icon_img}
                src="/img/icon-github.svg"
                alt=""
              />
            </a>
          </p>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
