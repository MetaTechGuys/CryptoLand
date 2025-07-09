import { StaticImageData } from 'next/image'

// import changeShape from '@/public/coins/dash.svg'
// import chartShape from '@/public/coins/ethereum.svg'
// import cvShape from '@/public/coins/monero.svg'
// import settingsShape from '@/public/coins/ripple.svg'
// import starShape from '@/public/coins/tether.svg'
// import targetShape from '@/public/coins/tron.svg'
import { GlbObjectProps } from '@/components/fibers/GlbObject'

export interface IFeature {
  id: string
  title: string
  lead: string
  description: string[]
  image?: StaticImageData
  model?: GlbObjectProps
  className?: string
}

const featuresData: IFeature[] = [
  {
    id: 'sport',
    title: `Sport & Gaming`,
    lead: `Play, Train, and Earn   All Powered by Tokens.`,
    description: [
      `Whether you're hitting the gym, joining a virtual tournament, or engaging in an augmented reality sports challenge, Crypto Land brings fitness and gaming into the token economy. Use your tokens to access exclusive events, earn rewards, and level up your performance all on-chain.`,
    ],
    // image: chartShape,
    model: { src: '/glbs/dice.glb', scale: 7 },
    className: 'sm:col-span-2',
  },
  {
    id: 'art',
    title: `Creative Art & Entertainment`,
    lead: `Tokenize Your Creativity. Own the Experience.`,
    description: [
      `From NFT galleries and interactive performances to live shows with digital avatars every creative moment at Crypto Land can become an asset. Your art is not just showcased it’s owned, traded, and celebrated on the blockchain.`,
    ],
    // image: changeShape,
    model: { src: '/glbs/pink-gem.glb', scale: 700 },
  },
  {
    id: 'club',
    title: `Crypto Club`,
    lead: `A Hub for Crypto-Minded Thinkers`,
    description: [
      `The Crypto Club is your access point to a world of decentralized finance, exclusive meetups, NFT launches, and blockchain conversations. Members use their tokens to unlock VIP features, attend workshops, and participate in decision-making for upcoming projects.`,
    ],
    // image: cvShape,
    model: { src: '/glbs/jewel.glb', scale: 1 },
  },
  {
    id: 'education',
    title: `Education & Workshops`,
    lead: `Learn It. Tokenize It.`,
    description: [
      `All courses and workshops in Crypto Land are tokenized from attendance and certification to participation points. Your educational journey becomes an asset, secured and verifiable on-chain. Gain knowledge, earn tokens, and build credentials for the Web3 era.`,
    ],
    // image: settingsShape,
    model: { src: '/glbs/box.glb', scale: 5.5 },
    className: 'xl:col-span-2',
  },
  {
    id: 'ownership',
    title: `Real Estate & Tokenized Ownership`,
    lead: `The Future of Property Ownership`,
    description: [
      `Through our token system, you can own fractional shares of real real estate projects in the UAE. Invest, trade, or earn rental yield from blockchain-verified ownership no paperwork, just smart contracts. Real assets, real income, real-time access.`,
    ],
    // image: starShape,
    model: { src: '/glbs/icosahedron.glb', scale: 0.2 },
    className: 'xl:col-span-2',
  },
  // {
  //    id: 'realestate',
  //   title: 'Realestate & Tokenized Ownershop',
  //   description: [
  //     `Representing each property unit as an NFT enables fractional ownership, unlocking liquidity and profit potential through digital trading.`,
  //     `Property owners receive periodic “Ownership Tokens” as dividends from rental income and capital appreciation.`,
  //   ],
  //   // image: targetShape,
  //   model: { src: '/glbs/blocks.glb', scale: 20 },
  //   className: 'xl:col-span-2',
  // },
]

export default featuresData
