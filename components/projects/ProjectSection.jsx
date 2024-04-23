import React from 'react'
import SectionHeadding from '../ui/SectionHeadding'
import Project from './Project'
import { projects } from '@/data'

function ProjectSection() {
  return (
    <section id="projects" className="py-32  bg-gradient-to-b from-transparent to-transparent via-red-200/50">
       <div className="w-3/4 mx-auto">
          <SectionHeadding title="Projects" subtitle="Web Masterpieces"/>
          <div className="grid grid-cols-1  gap-4
                          md:grid-cols-2
                          lg:grid-cols-3


                          ">
              {
                  projects.map((project)=><Project  {...project}/>)
              }
          </div>
       </div>
       
    </section>
  )
}

export default ProjectSection