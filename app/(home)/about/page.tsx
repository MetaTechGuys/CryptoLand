'use client'
import { BackEdge } from '@/components/BackEdge'
import ContentSlide from '@/components/ContentSlide'
import ScrollUp from '@/components/ScrollUp'
import content from '@/data/contents'
import img1 from '@/public/backgrounds/background-3.png'
// import img3 from '@/public/backgrounds/background-4.png'
// import img4 from '@/public/backgrounds/background-7.png'
import Link from 'next/link'
// import ScrollSpy from './ScrollSpy'

export default function Home() {
  return (
    <main className="contents">
      <Link href="/" className="contents">
        <BackEdge name="home" />
      </Link>
      <ScrollUp />
      <ContentSlide title="slide title 1" img={img1.src} className="me-auto!">
        <div className="prose prose-sm mx-auto my-35 w-full bg-pink-50/70 p-4 md:p-8">
          <h1 className="font-serif capitalize">{content.about.title}</h1>
          <p>{content.about.content}</p>
          <p>{content.about.content2}</p>
        </div>
      </ContentSlide>
      {/* <ContentSlide title="slide title 3" img={img4.src} className="mx-auto!">
        <div className="prose prose-sm my-35 bg-pink-50/70 p-4">
          <h1 className="font-serif capitalize">Our Ecosystem Includes</h1>
          <p>
            🎮 Sports & Gaming: Compete, play, and earn in blockchain-integrated
            environments where rewards and achievements are tokenized as NFTs
          </p>
          <p>
            🎨 Creative Arts & Entertainment: Own and trade digital art, join
            live events, and engage in immersive experiences with token-based
            access
          </p>
          <p>
            🪩 Crypto Club: Exclusive virtual and physical venues offering
            membership and benefits through custom tokens
          </p>
          <p>
            📚 Education & Workshops: Participate in learning programs with
            blockchain-certified credentials and transferable proof of
            participation
          </p>
          <p>
            🏙 Real Estate & Tokenized Ownership: Fractional ownership of real
            estate and infrastructure through secure, blockchain-managed assets
          </p>
        </div>
      </ContentSlide>
      <ContentSlide
        title="slide title 4"
        img={img3.src}
        className="mx-auto mt-auto"
      >
        <div className="prose prose-sm mx-auto my-35 bg-pink-50/70 p-4 md:p-8">
          <h1 className="font-serif capitalize">Why CryptoLand?</h1>
          <p>
            At CryptoLand, the future isn’t a concept—it’s a platform you can
            access today. We’re building a tokenized society where ownership is
            real, identity is secure, and every interaction creates value
          </p>
          <p>
            Our tokens are not just means of payment—they’re keys to a new
            world, where your activities are traceable, tradable, and truly
            yours.
          </p>
        </div>
      </ContentSlide> */}
    </main>
  )
}
