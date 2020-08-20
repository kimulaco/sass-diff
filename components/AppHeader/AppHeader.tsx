import React from 'react'
import Link from 'next/link'

const AppHeader: React.FC = () => {
  return (
    <header>
      <div>
        <h1><Link href="/"><a>sass-diff</a></Link></h1>
      </div>
    </header>
  )
}

export default AppHeader
