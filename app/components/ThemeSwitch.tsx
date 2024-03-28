// app/components/ThemeSwitch.tsx
"use client";
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [ mounted, setMounted ] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  const handleChange = (e : string) => {
    console.log(e);
    console.log('before ', theme, ' ', resolvedTheme);
    setTheme(e);
    console.log('after ', theme, ' ', resolvedTheme);
  }

  return (
    <select value={theme} onChange={e => handleChange(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  )
}

export default ThemeSwitch
