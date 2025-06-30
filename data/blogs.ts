import { StaticImageData } from 'next/image'

import changeShape from '@/public/coins/dash.svg'
import chartShape from '@/public/coins/ethereum.svg'
import cvShape from '@/public/coins/monero.svg'
import settingsShape from '@/public/coins/ripple.svg'
import starShape from '@/public/coins/tether.svg'
import targetShape from '@/public/coins/tron.svg'

export interface IFeature {
  key: string
  title: string
  description: string[]
  image: StaticImageData
  className?: string
}

const featuresData = [
  {
    key: 'cryptoland',
    title: 'Why Choose Cryptoland?',
    description: [
      `Artists pay in crypto to mint and showcase their work, lowering overhead and capturing direct royalties.`,
      `Fee deductions are allocated as “Art Tokens” that represent profit shares from secondary sales of the NFT art.`,
      `Fee deductions are allocated as “Art Tokens” that represent profit shares from secondary sales of the NFT art. Fee deductions are allocated as “Art Tokens” that represent profit shares from secondary sales of the NFT art. Fee deductions are allocated as “Art Tokens” that represent profit shares from secondary sales of the NFT art. Fee deductions are allocated as “Art Tokens” that represent profit shares from secondary sales of the NFT art.`,
      `Fee deductions are allocated as “Art Tokens” that represent profit shares from secondary sales of the NFT art.`,
      `Fee deductions are allocated as “Art Tokens” that represent profit shares from secondary sales of the NFT art. Fee deductions are allocated as “Art Tokens” that represent profit shares from secondary sales of the NFT art. Fee deductions are allocated as “Art Tokens” that represent profit shares from secondary sales of the NFT art. Fee deductions are allocated as “Art Tokens” that represent profit shares from secondary sales of the NFT art.`,
    ],
    image: changeShape,
    className: 'xl:col-span-2',
  },
  {
    key: 'sport',
    title: 'Sports & Gameing',
    description: [
      `Play-to-earn mechanics are optimized through crypto payments, minimizing fees and ensuring a higher return on time invested.`,
      `Successful players are rewarded with “Game Tokens”—a digital asset accruing profit shares based on the lounge’s overall revenue.`,
    ],
    image: chartShape,
  },
  {
    key: 'club',
    title: 'Cryptoclub',
    description: [
      `Club cover charges and drink payments in crypto cut out traditional payment processing fees, resulting in better margins for club-goers.`,
      `A portion of every transaction is returned as “Club Tokens,” which can be redeemed for VIP benefits or appreciated for profit sharing.`,
    ],
    image: cvShape,
  },
  {
    key: 'education',
    title: 'Education & Workshop',
    description: [
      `Paying course fees in crypto cuts down on processing delays, delivering immediate funds to the academy and offering lowercost education.`,
      `A share of the fees is returned as “Academy Tokens” to students, representing a stake in the course’s future success and resale potential.`,
    ],
    image: settingsShape,
  },
  {
    key: 'hotel',
    title: 'Hotelity',
    description: [
      `Reserving meeting spaces with crypto bypasses traditional bank processing and offers near-instant confirmation.`,
      `A slice of each booking fee is distributed as “Meeting Tokens,” serving as an equity-like reward with market potential.`,
    ],
    image: starShape,
  },
  {
    key: 'realestate',
    title: 'Realestate & Tokenized Ownershop',
    description: [
      `Representing each property unit as an NFT enables fractional ownership, unlocking liquidity and profit potential through digital trading.`,
      `Property owners receive periodic “Ownership Tokens” as dividends from rental income and capital appreciation.`,
    ],
    image: targetShape,
    className: 'xl:col-span-2',
  },
] satisfies IFeature[]

export default featuresData
