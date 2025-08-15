/* eslint-disable */
const logger = () => {
  const info = (...params: any[]) => {
    console.log(...params)
  }

  const error = (...params: any[]) => {
    console.error(...params)
  }

  return { info, error }
}

export default logger
