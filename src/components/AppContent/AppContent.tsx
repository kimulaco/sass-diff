import React, { ReactNode } from 'react'
import styles from './AppContent.module.scss'

type Props = {
  children?: ReactNode
}

const AppContent: React.FC = ({ children }: Props) => {
  return (
    <main className={styles.root}>
      <div className={styles.inner}>
        {children}
      </div>
    </main>
  )
}

export default AppContent
