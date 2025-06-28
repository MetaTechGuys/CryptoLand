'use client'
import ContentSlideVert from '@/components/ContentSlideVert'
import ScrollUp from '@/components/ScrollUp'

export default function Home() {
  return (
    <main className="contents">
      <ScrollUp />
      <AboutSlide />
    </main>
  )
}

function AboutSlide() {
  return (
    <div className="h-screen snap-center">
      <ContentSlideVert
        key="features"
        title="Contacts Us"
        className="fixed inset-0"
        innerClassName="mr-auto"
        img="/Oystra_Al_Marjan_Island_by_Zaha_Hadid_2.webp"
      />
    </div>
  )
}
