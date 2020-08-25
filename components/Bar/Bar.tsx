import React, { ReactNode } from 'react'
import styles from './Bar.module.scss'

type Props = {
  children?: ReactNode
}

const Bar: React.FC = ({ children }: Props) => {
  return (
    <div className={styles.Bar}>
      {children}
    </div>
  )
}

export default Bar
