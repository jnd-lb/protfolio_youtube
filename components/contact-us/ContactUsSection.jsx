import React from 'react'
import SectionHeadding from '../ui/SectionHeadding'
import Button from '../ui/Button'
import Link from 'next/link'

function ContactUsSection() {
  return (
    <section id='contact' className='py-32 w-3/4 mx-auto'>
        <SectionHeadding title="Contact Us" subtitle="Let's Get on Touch"/>

        <div 
            className='grid grid-cols-1 gap-y-14
                            md:grid-cols-2'>
            {/**Form */}
            <div>
                <form >
                    <input type="email" name="email" id="email" placeholder="Email"  className="border-b-2 h-12 mb-3 ps-4 w-full" />
                    <input type="text" name="subject" id="subject" placeholder='Subject' className="border-b-2 h-12 mb-3 ps-4 w-full"/>
                    <textarea name="emailBody" id="emailBody" placeholder='Tell me about your project' className="border-b-2 h-12 mb-3 ps-4 w-full "></textarea>
                    <Button text="Send" myClass="mx-auto md:ms-0 md:me-auto"/>
                </form>
            </div>

            {/**Links */}
            <div>
                <h2 className="text-xl mb-5 w-full text-center text-violet-700">Let&apos;s Be Friends</h2>
                <div className="flex justify-around md:flex-col md:items-center md:gap-y-4">
                    <Link className="text-gray-700 text-sm" href="tel:0096171123123" type="tel" target="_blank" >
                             <i className="bi bi-telephone-fill  me-3"></i>
                            <span>+961 71 123 123</span>
                    </Link>

                           
                    <Link className="text-gray-700 text-sm" href="mailto:info@jihad.com" type="email" target="_blank" >
                             <i class="bi bi-envelope-at-fill me-3"></i>
                            <span>info@jihad.com</span>
                    </Link>

                </div>

                <hr className='w-1/2 mx-auto my-7 border-[0.1rem] '/>


                {/**Social Media Links */}
                <div className='flex text-3xl justify-between px-14'>
                    <Link className="hover:scale-105 transition-all drop-shadow-md shadow-blue-700" href="https://www.facebook.com/" target='_blank'>
                        <i className="bi bi-facebook text-blue-700"></i>
                    </Link>

                    <Link className="hover:scale-105 transition-all drop-shadow-md shadow-green-500" href="https://wa.me/96170123123" target='_blank'>
                        <i className="bi bi-whatsapp text-green-500"></i>
                    </Link>

                    <Link className="hover:scale-105 transition-all drop-shadow-md shadow-red-500" href="https://www.instagram.com/" target='_blank'>
                        <i className="bi bi-instagram text-red-500"></i>
                    </Link>
                </div>

            </div>
        </div>
    </section>
  )
}

export default ContactUsSection