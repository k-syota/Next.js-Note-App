import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <main>
      <div>
        <p className='font-bold underline'>Hello, world!</p>
      </div>
    </main>
  )
}
