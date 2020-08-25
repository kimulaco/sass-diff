import React, { useState } from 'react'
import Bar from '../Bar/Bar'
import styles from './SassEditor.module.scss'

type Props = {
  title: string
  value: string
  onChange?: (value: string) => void
  onSubmit?: (value: string) => void
}

const SassEditor: React.FC<Props> = ({
  title = '',
  value = '',
  onChange = () => {},
  onSubmit = () => {},
}: Props) => {
  const [internalValue, setInternalValue] = useState(value)

  const handleSubmit = (event: any) => {
    event.preventDefault()
    onSubmit(internalValue)
  }

  return (
    <form
      className={styles.root}
      onSubmit={handleSubmit}
    >
      <Bar>
        {title}
      </Bar>
      <textarea
        className={styles.input}
        value={internalValue}
        onChange={(event: any) => {
          onChange(event.currentTarget.value || '')
          setInternalValue(event.currentTarget.value || '')
        }}
      />
    </form>
  )
}

export default SassEditor
