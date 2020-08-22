import React from 'react'
import styles from './AppFooter.module.scss'

const AppFooter: React.FC = () => {
  return (
    <footer className={styles.AppFooter}>
      <div className={styles.AppFooter_inner}>
        <p className={styles.AppFooter_copyright}>
          <small>&copy; 2020 sass-diff.</small>
        </p>
      </div>
    </footer>
  )
}

export default AppFooter
