import { useState, type SetStateAction } from 'react'

export const useField = (type: string) => {
  const [value, setValue] = useState<string>('')

  const onChange = (event: { target: { value: SetStateAction<string> } }) => {
    setValue(event.target.value)
  }

  const reset: () => void = () => {
    setValue('')
  }

  return { params: { type, value, onChange }, reset }
}
