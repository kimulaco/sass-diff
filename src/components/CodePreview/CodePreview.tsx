import React from 'react'
import Bar from '../Bar/Bar'
import styles from './CodePreview.module.scss'

type Props = {
  title: string
  code: string
}

const CodePreview: React.FC<Props> = ({
  title = '',
  code = '',
}: Props) => {
  return (
    <div>
      <Bar>
        <h2>{title}</h2>
      </Bar>
      <div>
        <pre><code className={styles.code}>{code}</code></pre>
      </div>
    </div>
  )
}

export default CodePreview
