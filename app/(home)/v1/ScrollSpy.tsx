'use client'

export default function ScrollSpy() {
  return (
    <div className="fixed inset-0 end-auto z-20 my-auto h-min">
      <div className="flex flex-col gap-4 bg-pink-50/70 p-8 font-bold text-black">
        <span>Home</span>
        <span>item 1</span>
        <span>item 2</span>
        <span>item 3</span>
        <span>item 4</span>
      </div>
    </div>
  )
}
