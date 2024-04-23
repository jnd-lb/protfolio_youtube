import React from 'react'
import SectionHeadding from '../ui/SectionHeadding'
import Skill from './Skill'
import { skills } from '@/data'

function SkillsSection() {
  return (
    <section id="skills" className="py-32 w-3/4 mx-auto ">
        <SectionHeadding title="Skills" subtitle="Magic That I got"/>
        <span className="hidden 
            bg-amber-300/5 border-amber-500/20 shadow-amber-500/10   
            bg-red-300/5 border-red-500/20 shadow-red-500/10   
            bg-yellow-300/5 border-yellow-500/20 shadow-yellow-500/10   
            bg-blue-300/5 border-blue-500/20 shadow-blue-500/10   
            bg-green-300/5 border-green-500/20 shadow-green-500/10   
            bg-violet-300/5 border-violet-500/20 shadow-violet-500/10   
            bg-sky-300/5 border-sky-500/20 shadow-sky-500/10   
            bg-gray-300/5 border-gray-500/20 shadow-gray-500/10"></span>

            <div className='grid grid-cols-2 gap-4 
                 md:grid-cols-3   
                 lg:grid-cols-4
                 xl:grid-cols-5
            '>
                {
                    skills.map(skill=><Skill {...skill} />)
                }
            </div>
           
    </section>
  )
}

export default SkillsSection