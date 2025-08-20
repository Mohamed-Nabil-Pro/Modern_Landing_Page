import scheduleImage from '../assets/stats.webp'
import { IoIosArrowRoundForward } from "react-icons/io";

const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between md:gap-24">
            {/* left content */}
            <div className='w-full md:w-1/2'>
                <img src={scheduleImage} alt="schedule image"  className='w-full h-auto'/>
            </div>

            {/* right content */}
            <div className='w-full md:w-1/2'>
                <p className='text-orange-500 font-semibold'>SCHEDULE</p>
                <h2 className='text-3xl md:text-4xl font-bold mb-6 mt-4 text-neutral-900'>Streamline Your Business <br /> With Smart Scheduling Solutions</h2>
                <p className='text-gray-600 mb-8'>Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.</p>
                <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>Explore scheduling features
                    <IoIosArrowRoundForward className='size-8'/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default ScheduleSection