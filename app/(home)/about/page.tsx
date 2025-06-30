'use client'
import ContentSlide from '@/components/ContentSlide'
import ScrollUp from '@/components/ScrollUp'
import img1 from '@/public/Oystra-Residences-1.jpg'
import img3 from '@/public/Oystra_Al_Marjan_Island_by_Zaha_Hadid.webp'
import img4 from '@/public/Oystra_Al_Marjan_Island_by_Zaha_Hadid_2.webp'
// import ScrollSpy from './ScrollSpy'

export default function Home() {
  return (
    <main className="contents">
      <ScrollUp />
      <ContentSlide title="slide title 1" img={img1.src} className="me-auto!">
        <div className="prose prose-sm mx-auto my-35 w-full bg-pink-50/70 p-4 md:p-8">
          <h1 className="font-serif capitalize">About Us</h1>
          <p>
            CryptoLand is your gateway to a future where services, assets, and
            experiences are fully tokenized. We present a pioneering project
            that aims to tokenize every aspect of a multi-functional
            ecosystem—bridging the physical and digital worlds through
            blockchain technology.
          </p>
          <p>
            This project is designed to democratize access to ownership,
            services, and entertainment by enabling secure, transparent, and
            decentralized transactions via token-based systems.
          </p>
        </div>
      </ContentSlide>
      <ContentSlide title="slide title 3" img={img4.src} className="mx-auto!">
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
      </ContentSlide>
    </main>
  )
}
