import React from 'react'
import Bar from '../Bar/Bar'
import styles from './CodePreview.module.scss'

type Props = {
  title: string
  code: string
}

const CodePreview: React.FC = ({
  title = '',
  code = '',
}: Props) => {
  return (
    <div className={styles.CodePreview}>
      <Bar>
        <h2>{title}</h2>
      </Bar>
      <div>
        <pre><code className={styles.CodePreview_code}>{code}</code></pre>
      </div>
    </div>
  )
}

export default CodePreview
