import Image from 'next/image'
import ThemeSwitch from '@/app/components/ThemeSwitch'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-black">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex text-black dark:text-white">
        Some text
      </div>
      <ThemeSwitch />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Other text without dark mode
      </div>
    </main>
  )
}
