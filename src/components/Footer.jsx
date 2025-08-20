import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }


const Footer = () => {
  return (
    <footer className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                {/* brand column */}
                <div className="lg:col-span-4">
                        <div className="flex items-center mb-6 gap-1">
                        <div className="flex items-center gap-1 cursor-pointer">
                            <div className="w-4 h-4 rounded-full bg-blue-600 opacity-75 hover:opacity-100 transition-opacity"></div>
                            <div className="w-4 h-4 rounded-full bg-red-500 opacity-100 hover:opacity-75 transition-opacity -ml-2"></div>
                        </div>
                        <span className="text-xl ml-1 font-medium">The Next Design</span>
                        </div>
                        <p className="text-gray-600 mb-6 md:w-3/4">The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="size-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"><FaFacebookF className="size-5"/></a>
                            <a href="#" className="size-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"><FaTwitter className="size-5"/></a>
                            <a href="#" className="size-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"><FaLinkedin className="size-5"/></a>
                        </div>
                </div>

                {/* footer nav items */}
                <div className="lg:col-span-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {
                        Object.keys(footerLinks).map((key) => (
                            <div key={key} className="mb-4">
                                <h3 className="text-lg font-medium mb-4 uppercase">{key}</h3>
                                {
                                    footerLinks[key].map((item) => (
                                        <div key={item.name} className="mb-2 ">
                                            <a href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors duration-200">{item.name}</a>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>

            {/* bottom footer */}

            <div className="border-t border-gray-200 mt-12 pt-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-sm">Copyright &copy; {new Date().getFullYear()} All rights reserved.</p>
                    <p className="text-gray-600 text-sm">Created by Mohamed Nabil</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer