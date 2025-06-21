'use client'
import ScrollUp from '@/components/ScrollUp'
import img5 from '@/public/Dubai-Investments-unveils-Dh1b-project-in-Ras-Al-Khaimah.png'
import img1 from '@/public/Oystra-Residences-1.jpg'
import img2 from '@/public/Oystra-Residences-10.jpg'
import img3 from '@/public/Oystra_Al_Marjan_Island_by_Zaha_Hadid.webp'
import img4 from '@/public/Oystra_Al_Marjan_Island_by_Zaha_Hadid_2.webp'
import IntroSlide from '../IntroSlide'
import ContentSlide from './ContentSlide'

export default function Home() {
  return (
    <main className="contents">
      <ScrollUp />
      <IntroSlide />
      <ContentSlide title="slide title 1" img={img1.src} className="me-auto" />
      <ContentSlide title="slide title 2" img={img2.src} className="ms-auto" />
      <ContentSlide title="slide title 3" img={img4.src} className="mx-auto" />
      <ContentSlide
        title="slide title 4"
        img={img3.src}
        className="mx-auto mt-auto"
      />
      <ContentSlide
        title="slide title 5"
        img={img5.src}
        className="w-full flex-1"
      />
    </main>
  )
}
