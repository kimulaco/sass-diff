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

        <div>
          <p>
            <a
              className={styles.icon}
              href="https://github.com/kimulaco/sass-diff"
              target="_blank"
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
