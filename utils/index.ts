export const wait = (time: number = 500): Promise<void> => {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
