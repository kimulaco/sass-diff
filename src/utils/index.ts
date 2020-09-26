export const log = (data: any): void => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(data)
  }
}

export const wait = (time = 500): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
