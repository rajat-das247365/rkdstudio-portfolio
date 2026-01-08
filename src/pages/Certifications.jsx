import React from 'react'

const certifications = [
  {
    title: "HTML, CSS, & JavaScript for web developement",
    issuer: "IBM",
    year: "2025",
    link: "https://coursera.org/verify/JIQK9RUU8ILX"
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM",
    year: "2025",
    link: "https://coursera.org/verify/8IAZEK5VTC44"
  },
  {
    title: "Getting Started with Git and GitHub",
    issuer: "IBM",
    year: "2025",
    link: "https://coursera.org/verify/8KSGCZQHTVIF"
  }
];

const Certifications = () => {
  return (
  <section id="certifications" className="w-full py-24">
  <div className="max-w-5xl mx-auto px-6">
    

    <div className="mb-12">
      <h2 className="text-3xl font-bold text-slate-200">
        Certifications
      </h2>
      <p className="text-slate-400 mt-3 max-w-xl">
        Recognized credentials supporting my front end development expertise.
      </p>
    </div>

   
    <div className="grid gap-6 md:grid-cols-2">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="border border-slate-800 rounded-xl p-6
                     bg-slate-900/40
                     hover:border-indigo-500/50 transition"
        >
          <h3 className="text-lg font-semibold text-slate-200">
            {cert.title}
          </h3>

          <p className="text-slate-400 mt-1">
            {cert.issuer} · {cert.year}
          </p>

          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-indigo-400
                         hover:text-indigo-300 text-sm"
            >
              View credential →
            </a>
          )}
        </div>
      ))}
    </div>

  </div>
</section>

  )
}

export default Certifications
