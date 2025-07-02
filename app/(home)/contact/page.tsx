'use client'
import { SlideHero } from '@/components/BaseSlide'
import ScrollUp from '@/components/ScrollUp'
import Icon from '@/components/icon/Icon'

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
      <SlideHero
        key="features"
        className="fixed inset-0"
        img="https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=1600&height=900&center=lonlat:55.661969,25.699093&zoom=11.9505&scaleFactor=2&apiKey=39227ea9cee94e51b3e0681446dd2116"
      >
        <div className="my-35 mr-auto w-full overflow-clip rounded">
          <div className="prose prose-sm w-full bg-pink-50/70 p-4 pb-16! md:p-8">
            <h1 className="text-center font-serif capitalize">Contact Us</h1>
            <div className="lead text-center">
              Any questions or remarks? Just write us a message.
            </div>
            <form
              className="grid grid-cols-4 gap-4"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <label htmlFor="email" className="col-span-2">
                <span>Email</span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                  className="w-full rounded border border-slate-400 bg-black/10 px-4 py-2"
                />
              </label>
              <label htmlFor="name" className="col-span-2">
                <span>Name</span>
                <input
                  id="name"
                  name="name"
                  placeholder="John Dow"
                  className="w-full rounded border border-slate-400 bg-black/10 px-4 py-2"
                />
              </label>
              <label htmlFor="message" className="col-span-4">
                <span>Message</span>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full rounded border border-slate-400 bg-black/10 px-4 py-2"
                ></textarea>
              </label>
              <div className="cus-hv-center col-span-4 col-start-1">
                <button className="group -w-full relative overflow-clip rounded border border-slate-900 bg-slate-800 px-16 py-2 font-bold text-white hover:bg-slate-700">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="grid max-w-full grid-cols-3 bg-slate-400/90 p-4 text-center text-sm text-wrap text-black md:p-8">
            <div className="-mt-14 flex flex-col items-center">
              <div className="cus-hv-center mb-2 size-12 rounded-full bg-slate-900 text-white">
                <Icon name="phone" className="size-6" />
              </div>
              <div className="font-bold uppercase opacity-50">Phone</div>
              <p className="text-xs">+44 20 76 92 56 76</p>
            </div>
            <div className="-mt-14 flex flex-col items-center">
              <div className="cus-hv-center mb-2 size-12 rounded-full bg-slate-900 text-white">
                <Icon name="email" className="size-6" />
              </div>
              <div className="font-bold uppercase opacity-50">Email</div>
              <p className="text-xs">Info@RichMindholding.com</p>
            </div>
            <div className="-mt-14 flex flex-col items-center">
              <div className="cus-hv-center mb-2 size-12 rounded-full bg-slate-900 text-white">
                <Icon name="map-pin" className="size-6" />
              </div>
              <div className="font-bold uppercase opacity-50">Address</div>
              <p className="text-xs text-wrap whitespace-pre">Office 301,</p>
              <p className="text-xs text-wrap whitespace-pre">
                3rd Floor Vision Tower
              </p>
              <p className="text-xs text-wrap whitespace-pre">
                Business Bay Dubai, UAE
              </p>
            </div>
          </div>
        </div>
      </SlideHero>
    </div>
  )
}
