import React from 'react'
import Link from 'next/link'
import styles from './AppHeader.module.scss'

const AppHeader: React.FC = () => {
  return (
    <header className={styles.AppHeader}>
      <div className={styles.AppHeader_inner}>
        <h1 className={styles.AppHeader_title}>
          <Link href="/"><a>sass-diff</a></Link>
        </h1>
      </div>
    </header>
  )
}

export default AppHeader
