import { IoLogoBuffer } from "react-icons/io";
import { HiLightBulb } from "react-icons/hi";
import { RxGear } from "react-icons/rx";
import { LuClock3 } from "react-icons/lu";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div  className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'>
            {/* header */}
            <div className="md:w-1/3 w-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5">Future of support with new shape</h2>
                <p className="text-gray-600 text-lg mb-4 md:w-4/5">Discuss your goals, determine success metrics, identify problems</p>
                <div className='space-y-3'>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                        </div>
                        <span className="text-gray-600">UX design content strategy</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                        </div>
                        <span className="text-gray-600">Development bring</span>
                    </div>
                </div>
                <button className="mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition-colors">Get started</button>
            </div>

            {/* service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                    <div><IoLogoBuffer className="text-blue-700 size-8 mb-4"/></div>
                    <h3 className="text-xl font-semibold mb-2">Web Design</h3>
                    <p className="text-gray-600 mb-4">One for all and all for one, Muskehounds are always ready.</p>
                    <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors uppercase">learn-more</a>
                </div>

                <div className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                    <div><HiLightBulb className="text-amber-400 size-8 mb-4"/></div>
                    <h3 className="text-xl font-semibold mb-2">Ad-Creatives</h3>
                    <p className="text-gray-600 mb-4">Alphabet Village and the subline of her own road.</p>
                    <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors uppercase">learn-more</a>
                </div>

                <div className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                    <div><RxGear className="text-red-500 size-8 mb-4"/></div>
                    <h3 className="text-xl font-semibold mb-2">Automation</h3>
                    <p className="text-gray-600 mb-4">Little Blind Text should turn around and return.</p>
                    <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors uppercase">learn-more</a>
                </div>

                <div className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                    <div><LuClock3 className="text-blue-300 size-8 mb-4"/></div>
                    <h3 className="text-xl font-semibold mb-2">Infographics</h3>
                    <p className="text-gray-600 mb-4">Nothing the copy said could convince her.</p>
                    <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors uppercase">learn-more</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServicesSection