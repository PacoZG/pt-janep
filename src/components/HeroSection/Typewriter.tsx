import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export default function Typewriter() {
  const t = useTranslations()
  const fullText = t('hero.subtitle')
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 100) // typing speed (ms per character)

      return () => clearTimeout(timeout)
    } else {
      setDone(true)
    }
  }, [fullText, text])

  return (
    <h1 className="py-6 text-lg md:text-2xl font-mono text-gray-200 max-w-3xl h-56 leading-relaxed">
      {text}
      <span
        className={`border-l-2 ml-1 ${
          done ? 'animate-pulse border-white' : 'border-transparent'
        }`}
      >
        &nbsp;
      </span>
    </h1>
  )
}
