import React from 'react'
import { HiArrowRight } from 'react-icons/hi2';

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className='bg-blue-600 rounded-2xl overflow-hidden'>
            <div className='relative md:px-10 px-6 md:py-24 py-16'>
                {/* gradient */}
                <div className='absolute right-0 top-0 w-1/2 h-full bg-blue-700 [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)] hidden md:block'></div>

                <div className='relative flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12'>
                    {/* left content */}
                    <div className="text-white max-w-lg text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">Subscribe newsletter</h2>
                        <p className="text-blue-100 text-sm sm:text-base">Best cooks and best delivery guys all at your service. Hot tasty food</p>
                    </div>

                    {/* right content */}

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
                        <input type="email" name="email"  placeholder=' Enter your email address' className="w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none bg-white" />
                        <button className='w-full flex items-center gap-2 sm:w-auto cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-r-lg sm:rounded-l-none '>
                            <span>Discover</span>
                            <HiArrowRight className="size-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsletterSection