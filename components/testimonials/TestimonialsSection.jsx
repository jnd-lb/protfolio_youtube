'use client';
import React from 'react'
import SectionHeadding from '../ui/SectionHeadding'
import Slider from "react-slick";
import "@/node_modules/slick-carousel/slick/slick.css"; 
import "@/node_modules/slick-carousel/slick/slick-theme.css";
import Testimonial from './Testimonial';
import { testimonials } from '@/data';
import PeopleImages from './PeopleImages';

function TestimonialsSection() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

  return (
    <section id="testimonials" className="py-32  bg-gradient-to-b from-transparent to-transparent via-red-200/50">
        <div className="w-3/4 mx-auto">
            <SectionHeadding title="Testimonials" subtitle="What People Say"/>
            <i className="bi bi-quote text-3xl text-violet-700  mx-auto block w-fit"></i>

            <div className="relative">
                <Slider {...settings}>
                    {testimonials.map(testimonial=>(<Testimonial {...testimonial}/>)
                        )}
                </Slider>
                <PeopleImages/>
            </div>
        </div>
    </section>
  )
}

export default TestimonialsSection