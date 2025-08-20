
import { FaCircle  } from 'react-icons/fa'
const PurposeSection = () => {
  return (
    <section id='about' className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">

                {/* heading text */}
                <div>
                    <p className="text-sm text-purple-600 font-medium mb-2">ACHIEVE MORE</p>
                    <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900">Purpose of a convoy is to keep your team</h2>
                </div>

                {/* bullet points */}
                <div className=' flex gap-3'>
                    <FaCircle className='text-3xl text-purple-600 items-start '/>
                    <div>
                      <h1 className='text-xl font-bold'>Built for impact</h1>
                      <p className='text-gray-600 mt-2 font-medium'>We identify and nurture a truly diverse team of designers, developers and marketers.</p>
                    </div>
                </div>

                <div className=' flex gap-3'>
                    <FaCircle className='text-4xl text-red-600 -mt-1 ' />
                    <div>
                      <h1 className='text-xl font-bold'>In sync with you</h1>
                      <p className='text-gray-600 mt-2 font-medium'>We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PurposeSection