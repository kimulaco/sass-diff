import sass from 'sass'
import nodeSass from 'node-sass'
import { CompileOption, CompileData } from '../interfaces/sass'

const SASS_OPTION: CompileOption = {
  outputStyle: 'expanded',
  indentType: 'space',
  indentWidth: 2
}

export const compileDartSass = (
  sassValue: string,
  option: CompileOption = {}
): CompileData => {
  try {
    const dartCssValue = sass.renderSync({
      ...Object.assign(SASS_OPTION, option),
      data: sassValue,
    })
    return {
      status: 'success',
      css: dartCssValue.css.toString(),
    }
  } catch (error) {
    return {
      status: 'fail',
      message: error.formatted,
    }
  }
}

export const compileNodeSass = (
  sassValue: string,
  option: CompileOption = {}
): CompileData => {
  try {
    const nodeCssValue = nodeSass.renderSync({
      ...Object.assign(SASS_OPTION, option),
      data: sassValue,
    })
    return {
      status: 'success',
      css: nodeCssValue.css.toString(),
    }
  } catch (error) {
    return {
      status: 'fail',
      message: error.formatted,
    }
  }
}
