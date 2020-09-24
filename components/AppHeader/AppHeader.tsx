import React from 'react'
import Link from 'next/link'
import styles from './AppHeader.module.scss'
import { sendEvent } from '../../utils/ga'

const AppHeader: React.FC = () => {
  const handleClickGithub = (event: any) => {
    const href: string = event.currentTarget.href
    event.preventDefault()
    sendEvent({
      category: 'header',
      action: 'click_github',
      callback() {
        location.href = href
      },
    })
  }

  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <Link href="/">
            <a className={styles.title_link}>sass-diff</a>
          </Link>
        </h1>

        <p className={styles.lead_text}>
          Compare Dart Sass and Node Sass compilations
        </p>

        <div className={styles.nav}>
          <p>
            <a
              className={styles.icon}
              href="https://github.com/kimulaco/sass-diff"
              onClick={handleClickGithub}
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
