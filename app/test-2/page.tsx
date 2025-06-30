import Image from 'next/image'
import img from '@/public/Oystra-Residences-1.jpg'
import './style.css'

export default function TestPage() {
  return (
    <div className="bg-black">
      <div className="bg-animated-hue fixed! top-1 left-1 size-12 border-2 border-white"></div>
      <div className="bg-animated-hue flex h-screen items-center justify-center">
        <Image
          src={img}
          alt="OYSTRA-ZAHA-HADID"
          className="-opacity-0 h-screen w-screen object-cover mix-blend-hard-light"
        />
      </div>
    </div>
  )
}
