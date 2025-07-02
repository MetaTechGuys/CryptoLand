// import Image from 'next/image'
// import img from '@/public/OYSTRA-ZAHA-HADID-2.webp'
import './style.css'
import Cursor from '@/components/bits/Cursor'

export default function TestPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      {/* <Image
        src={img}
        alt="OYSTRA-ZAHA-HADID"
        className="h-screen w-screen object-cover mix-blend-hard-light brightness-75"
      /> */}
      <div className="shadow-hue">
        <div className="prose prose-h1:text-foreground bg-background prose-p:text-foreground p-8">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            dolorum quaerat exercitationem voluptatum distinctio aut nostrum,
            dolore et architecto adipisci unde at sapiente? Iste perferendis ad
            modi soluta tenetur voluptates exercitationem qui in, a iure
            expedita optio libero iusto odio?
          </p>
        </div>
      </div>
      <Cursor />
    </div>
  )
}
