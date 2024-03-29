'use client'

import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  return (
    <button
      className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
      onClick={() => {
        console.log('before setTheme', resolvedTheme, ' ', theme)
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
        console.log('after setTheme', resolvedTheme, ' ', theme)
      }}
    >
      Change Theme
    </button>
  )
}
