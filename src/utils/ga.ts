import { GAEvent } from '../interfaces/ga'

export const GA_ID: string = process.env.GA_ID || ''

export const hasGaId = Boolean(GA_ID)

export const sendPageview = (path: string): void => {
  if (!window.gtag) {
    return
  }

  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

export const sendEvent = (
  { action, category, label, value, callback }: GAEvent
): void => {
  if (!window.gtag) {
    return
  }

  let isRunCallback = false
  const callbackHook = () => {
    if (isRunCallback) {
      return
    }

    isRunCallback = true

    if (typeof callback === 'function') {
      callback()
    }
  }

  setTimeout(callbackHook, 1000)

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    event_callback: callbackHook,
    value,
  })
}