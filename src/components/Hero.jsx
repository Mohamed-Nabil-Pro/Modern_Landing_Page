import heroImage from '../assets/hero-image.png'
import { IoMdStar } from 'react-icons/io';
import { FcAlarmClock } from 'react-icons/fc';
const Hero = () => {
  return (
    <section id='home' className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-25 pb-6 px-4 sm:px-6 lg:px-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8">
            {/* start badge */}
            <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
                <span className='text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform'><IoMdStar /></span>
                <span className='text-sm font-medium'>Jump start your growth</span>
            </div>

            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>We boost the growth for <span className='text-blue-600 relative inline-block after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-blue-200/60 after:-bottom-2 after:left-0'>Startup to Fortune 500</span> companies <FcAlarmClock className="inline-block align-middle animate-pulse" /> </h1>

            <p className='text-gray-600 text-lg md:text-xl max-w-xl'>Get the most accurate leads, sales people training and conversations, tools and more - all within the same one billing.</p>

            <div className='flex max-w-md gap-3'>
              <input type="email" name="email"  placeholder=' Email address' className='flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition-all focus:outline-none' />

              <button className='bg-blue-600 text-2xl text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-300 cursor-pointer'>→</button>
            </div>
        </div>


        {/* Right Content */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
          <div className='relative'>
            <img src={heroImage} alt="Hero Image" className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300' />
          </div>
        </div>
    </section>
  )
}

export default Hero
