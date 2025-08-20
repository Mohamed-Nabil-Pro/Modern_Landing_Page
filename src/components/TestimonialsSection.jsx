import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import {BsStarFill} from 'react-icons/bs'


const testimonials = [
    {
      id: 1,
      name: "Robin Ayala Doe", 
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      id: 2,
      name: "John De marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg", 
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  
  ];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What our happy client say</h2>
            <p className="text-gray-600">Things that make it the best place to start trading</p>
        </div>

        {/* testimonials cards */}
        <div className='relative'>
            {/* swiper cards */}
            <Swiper
                navigation = {
                    {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }
                }
                
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                0: {
                    slidesPerView: 1,
                    
                },
                768: {
                    slidesPerView: 2,
                    
                },
                1024: {
                    slidesPerView: 3,
                    
                },
                }}
                modules={[Navigation ]}
                className="testimonials-swiper !py-[20px_0] md:mb-12 "
            >
                {
                    testimonials.map((testimonial , index) => (
                        <SwiperSlide key={index} className='!h-auto md:py-12  py-4'>
                            <div className='bg-white text-center p-4 h-full flex flex-col rounded-lg shadow-lg'>
                                <div className='size-24 mx-auto mb-4'>
                                    <img src={testimonial.image} alt="testimonial image" className='w-full h-full object-cover rounded-full'/>
                                </div>
                                {/* testimonial stars */}
                                <div className='flex justify-center gap-1 mb-2'>
                                    {[...Array(5)].map((_, index) => (
                                        <BsStarFill key={index} className='text-yellow-400'/>
                                    ))}
                                </div>
                                <div>
                                        <h3 className='text-xl font-semibold mb-3'>{testimonial.name}</h3>
                                        <p className='text-gray-600'>{testimonial.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
                
                
            </Swiper>

            {/* navigation buttons */}
            <div className='flex justify-center gap-4 md:mt-8 mt-4'>
                <button className='swiper-button-prev w-12 h-12 cursor-pointer rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200'>
                    <BsChevronLeft className='size-6'/>
                </button>
                <button className='swiper-button-next w-12 h-12 cursor-pointer rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200'>
                    <BsChevronRight className='size-6'/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default TestimonialsSection