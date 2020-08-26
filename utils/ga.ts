import { GAEvent } from '../interfaces/ga'

export const GA_ID: string = process.env.GA_ID || ''

export const hasGaId: boolean = GA_ID !== ''

export const sendPageview = (path: string): void => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

export const sendEvent = (
  {action, category, label, value}: GAEvent
): void => {
  if (!hasGaId) {
    return
  }
  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  })
}