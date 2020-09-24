import React, { ReactNode } from 'react'
import Head from 'next/head'
import AppHeader from '../AppHeader/AppHeader'
import AppContent from '../AppContent/AppContent'
import AppFooter from '../AppFooter/AppFooter'
import styles from './AppLayout.module.scss'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

const AppLayout: React.FC<Props> = ({
  children,
  title = '',
  description = '',
}: Props) => {
  return (
    <div className={styles.root}>
      <Head>
        <title>{title ? `${title} | ` : ''}sass-diff</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
        <meta name="description" content={description} />
      </Head>

      <AppHeader />

      <AppContent>
        {children}
      </AppContent>

      <AppFooter />
    </div>
  )
}

export default AppLayout
