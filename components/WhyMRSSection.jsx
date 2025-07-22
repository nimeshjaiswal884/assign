export default function WhyMRSSection() {
  const points = [
    {
      title: "Practitioners, Not Just Consultants",
      desc: "We’ve worked in industry so we understand real challenges.",
    },
    {
      title: "Partnership Approach",
      desc: "We collaborate closely to drive lasting change.",
    },
    {
      title: "Proven Results",
      desc: "Our initiatives consistently deliver cost savings and improved service.",
    },
  ];

  return (
    <section id="why-mrs" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose MRS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-amber-200">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
