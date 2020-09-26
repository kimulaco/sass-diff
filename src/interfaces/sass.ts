export type CompileOption = {
  data?: string | undefined
  outputStyle?: 'expanded' | 'compressed' | undefined
  indentType?: 'space' | 'tab' | undefined
  indentWidth?: number | undefined
}

export type CompileData = {
  status: 'success' | 'fail'
  css?: string
  message?: string
}
