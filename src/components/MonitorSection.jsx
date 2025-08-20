import monitorCardImg from '../assets/monitor-card.webp'
import { IoIosArrowRoundForward } from "react-icons/io";

const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-between md:gap-24">
                {/* left content */}
                <div className='w-full md:w-1/2'>
                    <p className='text-green-500 font-semibold'>MONITOR</p>
                    <h2 className='text-3xl md:text-4xl font-bold mb-6 mt-4 text-neutral-900 md:w-4/5'>Introducing best mobile carousels</h2>
                    <p className='text-gray-600 mb-8'>Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</p>
                    <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>Explore scheduling features
                        <IoIosArrowRoundForward className='size-8'/>
                    </a>
                </div>

                
                {/* right content */}
                <div className='w-full md:w-1/2'>
                    <img src={monitorCardImg} alt="schedule image"  className='w-full h-auto'/>
                </div>
            </div>
        </section>
  )
}

export default MonitorSection