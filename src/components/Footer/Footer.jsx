import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
           <footer className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
    
        <div className="rounded-3xl shadow-lg border border-gray-100 px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
       
            <div className="space-y-4">
              <div className="flex items-center gap-2">
              <img 
              src="/"
              alt="logo"/>
              </div>

              <p className="text-sm text-gray-600 max-w-sm">
                Graphy empowers teams to transform raw data into clear,
                compelling visuals — making insights easier to share,
                understand, and act on.
              </p>

              {/* SOCIALS */}
              <div className="flex gap-4 text-gray-600">
                {/* <Link to="/"><FaXTwitter className="hover:text-black" /></Link>
                <Link to="/"><FaInstagram className="hover:text-black" /></Link>
                <Link to="/"><FaLinkedinIn className="hover:text-black" /></Link>
                <Link to="/"><FaGithub className="hover:text-black" /></Link> */}
              </div>
            </div>

            {/* PRODUCT */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <Link to="/"><li className="hover:text-black pb-2">About Us</li></Link>
                 <Link to="/"><li className="hover:text-black pb-2">Services</li></Link>
                  <Link to="/"><li className="hover:text-black">Contact</li></Link>
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <Link to="/"><li className="hover:text-black pb-2">Blog</li></Link>
               <Link to="/"> <li className="hover:text-black pb-2">API Reference</li></Link>
               <Link to="/"><li className="hover:text-black pb-2">Blog</li></Link> 
                <Link to="/"><li className="hover:text-black ">Tutorials</li></Link>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
              <Link to="/"><li className="hover:text-black pb-2">About</li></Link>
              <Link to="/"><li className="hover:text-black pb-2">Careers</li></Link>
               <Link to="/"><li className="hover:text-black pb-2">Contact</li></Link>
           
              </ul>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
           <span>© {new Date().getFullYear()} Graphy. All rights reserved.</span>


            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-black">
                Privacy Policy
              </Link>
              <Link to="/terms"  className="hover:text-black">
                Terms of Service
              </Link>
              <Link to="/refund"  className="hover:text-black">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
            
        </>
    )
}
