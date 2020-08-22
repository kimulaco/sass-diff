import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AppLayout from '../components/AppLayout/AppLayout'
import SassEditor from '../components/SassEditor/SassEditor'
import CodePreview from '../components/CodePreview/CodePreview'

const DEFAULT_SASS = `.example {
  width: #{100 + 10}px;
}`

const IndexPage = () => {
  const [sassValue, setSassValue] = useState(DEFAULT_SASS)
  const [dartCssValue, setDartCssValue] = useState('')
  const [nodeCssValue, setNodeCssValue] = useState('')

  const handleSubmitEditor = async () => {
    try {
      const { data } = await axios.post('/api/sass', {
        sass: sassValue,
      })
      console.log(data)

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
    }
  }

  useEffect(() => {
    handleSubmitEditor()
  }, [])

  return (
    <AppLayout>
      <SassEditor
        value={sassValue}
        onChange={(value: string) => { setSassValue(value) }}
        onSubmit={handleSubmitEditor}
      />

      <CodePreview
        title="CSS by Dart Sass"
        code={dartCssValue}
      />

      <CodePreview
        title="CSS by Node Sass"
        code={nodeCssValue}
      />
    </AppLayout>
  )
}

export default IndexPage
