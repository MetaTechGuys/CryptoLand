'use client'
import BaseSldie from '@/components/BaseSlide'
import { FeatureCard } from '@/components/FeatureCard'
import ScrollUp from '@/components/ScrollUp'

import ripple from '@/public/coins/ripple.svg'
import monero from '@/public/coins/monero.svg'
import dash from '@/public/coins/dash.svg'
import ethereum from '@/public/coins/ethereum.svg'
import tether from '@/public/coins/tether.svg'
import tron from '@/public/coins/tron.svg'

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
    <BaseSldie
      key="features"
      img="/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_3.jpg"
    >
      <div className="grid size-full gap-4 p-8 pt-35 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <FeatureCard
          title="Creative Arts & Entertainment"
          className="xl:col-span-2"
          bgImg={ripple}
        >
          <p>
            Artists pay in crypto to mint and showcase their work, lowering
            overhead and capturing direct royalties.
          </p>
          <p>
            Fee deductions are allocated as “Art Tokens” that represent profit
            shares from secondary sales of the NFT art.
          </p>
        </FeatureCard>
        <FeatureCard title="Sports & Gameing" className="" bgImg={monero}>
          <p>
            Play-to-earn mechanics are optimized through crypto payments,
            minimizing fees and ensuring a higher return on time invested.
          </p>
          <p>
            Successful players are rewarded with “Game Tokens”—a digital asset
            accruing profit shares based on the lounge’s overall revenue.
          </p>
        </FeatureCard>
        <FeatureCard title="Cryptoclub" className="" bgImg={ethereum}>
          <p>
            Club cover charges and drink payments in crypto cut out traditional
            payment processing fees, resulting in better margins for club-goers.
          </p>
          <p>
            A portion of every transaction is returned as “Club Tokens,” which
            can be redeemed for VIP benefits or appreciated for profit sharing.
          </p>
        </FeatureCard>
        <FeatureCard title="Education & Workshop" className="" bgImg={dash}>
          <p>
            Paying course fees in crypto cuts down on processing delays,
            delivering immediate funds to the academy and offering lowercost
            education.
          </p>
          <p>
            A share of the fees is returned as “Academy Tokens” to students,
            representing a stake in the course’s future success and resale
            potential.
          </p>
        </FeatureCard>
        <FeatureCard title="Hotelity" className="" bgImg={tether}>
          <p>
            Reserving meeting spaces with crypto bypasses traditional bank
            processing and offers near-instant confirmation.
          </p>
          <p>
            A slice of each booking fee is distributed as “Meeting Tokens,”
            serving as an equity-like reward with market potential.
          </p>
        </FeatureCard>
        <FeatureCard
          title="Realestate & Tokenized Ownershop"
          className="xl:col-span-2"
          bgImg={tron}
        >
          <p>
            Representing each property unit as an NFT enables fractional
            ownership, unlocking liquidity and profit potential through digital
            trading.
          </p>
          <p>
            Property owners receive periodic “Ownership Tokens” as dividends
            from rental income and capital appreciation.
          </p>
        </FeatureCard>
      </div>
    </BaseSldie>
  )
}
