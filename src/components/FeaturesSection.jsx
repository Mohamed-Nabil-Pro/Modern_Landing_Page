import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { MdOutlineLightMode } from "react-icons/md";
import { HiOutlineRocketLaunch } from "react-icons/hi2";


const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
        {/* heading text */}
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How can we help your business?</h2>
            <p className="text-gray-600">When you resell besnik, you build trust and increase</p>
        </div>

        {/* feature section */}
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 text-center'>
            <div className='flex flex-col items-center  '>
                <HiOutlineMagnifyingGlass className='w-24 h-24 p-6 rounded-full mb-6 bg-[#f1effd] text-blue-500'/>
                <h2 className='text-2xl font-medium mb-3'>Find out what you need</h2>
                <p className='text-gray-500'>We present you a proposal and discuss nitty-gritty like.</p>
            </div>

            <div className='flex flex-col items-center  '>
                <MdOutlineLightMode className='w-24 h-24 p-6 rounded-full mb-6 bg-[#fee7e7] text-red-500'/>
                <h2 className='text-2xl font-medium mb-3'>Work out the details</h2>
                <p className='text-gray-500'>Communication protocols apart from engagement models.</p>
            </div>

            <div className='flex flex-col items-center  '>
                <div className="w-24 h-24 flex items-center justify-center rounded-full mb-6 bg-[#fff3e4]">
                    <HiOutlineRocketLaunch className="w-12 h-12 text-orange-500" />
                </div>
                <h2 className='text-2xl font-medium mb-3'>We get to work fast</h2>
                <p className='text-gray-500'>Protocols apart from engage models, pricing billing.</p>
            </div>
        </div>
        

        {/* button */}

        <div className='text-center mt-12'>
            <button className='bg-blue-600  relative text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-2xl'>
                Become a partner
                <div className='absolute top-0 left-0 w-full h-full bg-blue-600/50 -z-10 rounded-full blur-xl '></div>
                </button>
            
        </div>
    </section>
  )
}

export default FeaturesSection