'use client'

import { PageTransition } from '@/components/PageTransition'
export default function Mo2Page() {
  return (
    <PageTransition top="/mo1" bottom="/mo3">
      <div className="h-screen w-screen bg-[url(/design-of-oystra_7.webp)] bg-cover p-4 text-nowrap">
        <h1 className="mt-5 text-9xl">Page 2.1</h1>
        <p className="whitespace-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          fugit, atque facilis fugiat aliquid aut molestias dicta dignissimos
          libero quasi reprehenderit, itaque, doloribus ipsa. Expedita odio
          molestiae iure ratione debitis, facere ipsa excepturi quam explicabo!
          Eaque omnis ea ratione corrupti unde. Minima, vitae aliquid nemo
          nesciunt ipsa assumenda, cum libero, doloribus illum reiciendis eaque
          voluptate alias eveniet? Porro perspiciatis earum omnis blanditiis
          reprehenderit quas repellendus, ipsa dolorum facere est voluptate
          quaerat vel ullam laudantium unde non. A, quaerat. Minus aperiam
          architecto minima expedita qui. Earum natus, beatae
        </p>
      </div>
      <div className="h-screen w-screen bg-[url(/design-of-oystra_7.webp)] bg-cover p-4 text-nowrap">
        <h1 className="mt-5 text-9xl">Page 2.2</h1>
        <p className="whitespace-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          fugit, atque facilis fugiat aliquid aut molestias dicta dignissimos
          libero quasi reprehenderit, itaque, doloribus ipsa. Expedita odio
          molestiae iure ratione debitis, facere ipsa excepturi quam explicabo!
          Eaque omnis ea ratione corrupti unde. Minima, vitae aliquid nemo
          nesciunt ipsa assumenda, cum libero, doloribus illum reiciendis eaque
          voluptate alias eveniet? Porro perspiciatis earum omnis blanditiis
          reprehenderit quas repellendus, ipsa dolorum facere est voluptate
          quaerat vel ullam laudantium unde non. A, quaerat. Minus aperiam
          architecto minima expedita qui. Earum natus, beatae
        </p>
      </div>
    </PageTransition>
  )
}
