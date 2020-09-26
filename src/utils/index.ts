export const log = (data: object | string | number | boolean): void => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(data)
  }
}

export const wait = (time: number = 500): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
