import Image from 'next/image'
import ThemeSwitch from '@/app/components/ThemeSwitch'
import { ThemeToggle } from './ThemeToggle'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex text-primary">
        Some text
      </div>
      <ThemeSwitch />
      <ThemeToggle />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Other text without dark mode
      </div>
    </div>
  )
}
