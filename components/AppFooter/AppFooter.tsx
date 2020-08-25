import React from 'react'
import styles from './AppFooter.module.scss'

const AppFooter: React.FC = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          <small>&copy; 2020 sass-diff.</small>
        </p>
      </div>
    </footer>
  )
}

export default AppFooter
