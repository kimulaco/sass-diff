import React, { useState } from 'react'
import axios from 'axios'
import AppLayout from '../components/AppLayout/AppLayout'

const DEFAULT_SASS = `.example {
  width: #{100 + 10}px;
}`

const IndexPage = () => {
  const [sassValue, setSassValue] = useState(DEFAULT_SASS)
  const [dartCssValue, setDartCssValue] = useState('')
  const [nodeCssValue, setNodeCssValue] = useState('')

  const handleClickSubmit = async () => {
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

  return (
    <AppLayout>
      <div>
        <button
          type="button"
          onClick={handleClickSubmit}
        >
          submit
        </button>
      </div>
      <textarea
        value={sassValue}
        onChange={(event: any) => {
          setSassValue(event.currentTarget.value)
        }}
      />

      <div>
        <p>sass</p>
        <div><pre><code>{sassValue}</code></pre></div>
      </div>

      <div>
        <p>css by Dart Sass</p>
        <div><pre><code>{dartCssValue}</code></pre></div>
      </div>

      <div>
        <p>css by Node Sass</p>
        <div><pre><code>{nodeCssValue}</code></pre></div>
      </div>
    </AppLayout>
  )
}

export default IndexPage
