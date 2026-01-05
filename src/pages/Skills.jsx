import React from 'react'



const Skills = () => {
  return (
    <div className='w-full h-full '>
      <section className='w-full border border-slate-800 h-[80%] flex justify-center items-center mt-8'>
        <div className='w-290 h-full text-slate-300'>
        <h1 className='mt-10 text-4xl font-semibold'>Skills</h1>
        <p className='mt-6'>Technologies and tools I use to build clean, scalable front end
            applications.</p>
           <div className="skillCard w-full flex justify-between"> 
            <div  className="w-90 h-50 border border-slate-800 mt-20 rounded-2xl bg-slate-900/40 px-8 py-5">
              <h3 className='mb-4'>Frontend</h3>
                <ul className="space-y-2 text-slate-400">
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          
             
            </div>
            <div  className="w-90 h-50 border border-slate-800 mt-20 rounded-2xl bg-slate-900/40 px-8 py-5">
              <h3 className='mb-4'>Styling & UI</h3>
               <ul className="space-y-2 text-slate-400">
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
              <li>Accessible UI (Basics)</li>
            </ul>
          
             
            </div>
         <div  className="w-90 h-50 border border-slate-800 mt-20 rounded-2xl bg-slate-900/40 px-8 py-5">
              <h3 className='mb-4'>Tools & Workflow</h3>
           <ul className="space-y-2 text-slate-400">
              <li>Git & GitHub</li>
              <li>REST APIs</li>
              <li>Vite</li>
              <li>VS Code</li>
            </ul>
          
             
            </div>
            </div>
         </div>   
      </section>
    </div>
  )
}

export default Skills
