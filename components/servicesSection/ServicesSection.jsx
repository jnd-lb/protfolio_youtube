import React from 'react'
import SectionHeadding from '../ui/SectionHeadding'
import Service from './Service'

function ServicesSection() {
  return (
    <section id="services" className="py-32 w-3/4 mx-auto">
        <SectionHeadding title="Services" subtitle="What I actualy do"  />
      
        <div 
            className="grid grid-cols-1 gap-4 gap-y-14
                sm:grid-cols-2
                md:grid-cols-2
                lg:grid-cols-3
            ">
            <Service  icon="bi-hammer" title="Web Development" description="Ipsum mollit eiusmod sint dolor occaecat nostrud irure."/>
            <Service  icon="bi-wrench-adjustable" title="Web Maintenance" description="Duis dolor dolore reprehenderit minim eiusmod."/>
            <Service  icon="bi-search" title="SEO Service" description="Magna et commodo ex sint consectetur."/>
        </div>
    </section>
  )
}

export default ServicesSection