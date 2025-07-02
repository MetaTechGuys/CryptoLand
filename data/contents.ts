const home = {
  headline: `A Tokenized Future in the Heart of the UAE`,
  content: `At Crypto Land, we redefine experience. From sports clubs and digital entertainment to education and real estate, everything runs on tokens. Welcome to a future where every action is a smart contract, every interaction is a transaction, and every asset can be truly yours.`,
  slugan: `Where Cryptocurrency Meets Luxury Living`,
} as const

const about = {
  content: `Crypto Land is a visionary project based in the UAE, built to create a fully tokenized ecosystem. We bring together diverse activities sports, gaming, arts, education, real estate under one roof, and connect them through blockchain technology and our native token.`,
} as const

const services = {
  content: `In Crypto Land, ownership is decentralized, engagement is rewarded, and participation means real value. Our mission is to empower a new generation of users who experience, earn, and own through token-based interactions.`,
  items: [
    {
      id: `sport`,
      title: `🏟️ 1. Sport & Gaming`,
      lead: `Play, Train, and Earn   All Powered by Tokens.`,
      content: `Whether you're hitting the gym, joining a virtual tournament, or engaging in an augmented reality sports challenge, Crypto Land brings fitness and gaming into the token economy. Use your tokens to access exclusive events, earn rewards, and level up your performance all on-chain.`,
    },
    {
      id: `art`,
      title: `🎨 2. Creative Art & Entertainment`,
      lead: `Tokenize Your Creativity. Own the Experience.`,
      content: `From NFT galleries and interactive performances to live shows with digital avatars every creative moment at Crypto Land can become an asset. Your art is not just showcased it’s owned, traded, and celebrated on the blockchain.`,
    },
    {
      id: `club`,
      title: `🪙 3. Crypto Club`,
      lead: `A Hub for Crypto-Minded Thinkers`,
      content: `The Crypto Club is your access point to a world of decentralized finance, exclusive meetups, NFT launches, and blockchain conversations. Members use their tokens to unlock VIP features, attend workshops, and participate in decision-making for upcoming projects.`,
    },
    {
      id: `workshop`,
      title: `🎓 4. Education & Workshops`,
      lead: `Learn It. Tokenize It.`,
      content: `All courses and workshops in Crypto Land are tokenized from attendance and certification to participation points. Your educational journey becomes an asset, secured and verifiable on-chain. Gain knowledge, earn tokens, and build credentials for the Web3 era.`,
    },
    {
      id: `ownership`,
      title: `🏘️ 5. Real Estate & Tokenized Ownership`,
      lead: `The Future of Property Ownership`,
      content: `Through our token system, you can own fractional shares of real real estate projects in the UAE. Invest, trade, or earn rental yield from blockchain-verified ownership no paperwork, just smart contracts. Real assets, real income, real-time access.`,
    },
  ],
} as const

const signUp = {
  title: `Join Us`,
  content: `Sign up, connect your wallet, and receive your starter tokens. Begin your journey into a fully tokenized world of real experience`,
} as const

const content = {
  home,
  about,
  services,
  signUp,
} as const

export default content
