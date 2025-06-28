import Image from 'next/image'
import img from '@/public/OYSTRA-ZAHA-HADID-2.webp'
import './style.css'

export default function TestPage() {
  return (
    <div className="bg-animated-hue flex h-screen items-center justify-center">
      <Image
        src={img}
        alt="OYSTRA-ZAHA-HADID"
        className="-opacity-0 h-screen w-screen object-cover mix-blend-hard-light"
      />
    </div>
  )
}
