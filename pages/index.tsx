import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AppLayout from '../components/AppLayout/AppLayout'
import SassEditor from '../components/SassEditor/SassEditor'
import CodePreview from '../components/CodePreview/CodePreview'
import { log } from '../utils/'
import styles from './index.module.scss'

const DEFAULT_SASS = `.example {
  width: #{100 + 10}px;
}`

const IndexPage = () => {
  const [sassValue, setSassValue] = useState(DEFAULT_SASS)
  const [dartCssValue, setDartCssValue] = useState('')
  const [nodeCssValue, setNodeCssValue] = useState('')
  const [isCompiling, setIsCompiling] = useState(false)
  const dartSassTitle = process.env.SASS_VERSION_DART
    ? `CSS by Dart Sass (v${process.env.SASS_VERSION_DART})`
    : 'CSS by Dart Sass'
  const nodeSassTitle = process.env.SASS_VERSION_NODE
    ? `CSS by Node Sass (v${process.env.SASS_VERSION_NODE})`
    : 'CSS by Node Sass'

  const handleChangeEditor = async (value: string) => {
    setSassValue(value)

    if (isCompiling) {
      return
    }

    setIsCompiling(true)

    try {
      const { data } = await axios.post('/api/sass/compile', {
        sass: value,
      })
      log(data)

      if (data.dart.css) {
        setDartCssValue(data.dart.css)
      } else {
        setDartCssValue(data.dart.message)
      }

      if (data.node.css) {
        setNodeCssValue(data.node.css)
      } else {
        setNodeCssValue(data.node.message)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsCompiling(false)
    }
  }

  useEffect(() => {
    handleChangeEditor(sassValue)
  }, [])

  return (
    <AppLayout>
      <div className={styles.grid}>
        <div className={styles.grid_item_2}>
          <SassEditor
            title="Sass"
            value={sassValue}
            onChange={handleChangeEditor}
          />
        </div>

        <div className={styles.grid_item_1}>
          <CodePreview
            title={dartSassTitle}
            code={dartCssValue}
          />
        </div>

        <div className={styles.grid_item_1}>
          <CodePreview
            title={nodeSassTitle}
            code={nodeCssValue}
          />
        </div>
      </div>

    </AppLayout>
  )
}

export default IndexPage
