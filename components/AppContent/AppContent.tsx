import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const AppContent: React.FC = ({ children }: Props) => {
  return (
    <main>
      <div>
        {children}
      </div>
    </main>
  )
}

export default AppContent
