import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/bg-port.jpg"
          alt="Port Background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-snug">
            Import <br /> Management
          </h1>
          <p className="text-orange-400 text-xl font-medium">
            Efficient, Reliable, and Compliant Import Management Services Across Industries
          </p>
          <div className="w-40 border-t border-dashed border-white mt-4" />
          <p className="text-base">
            Streamline Your Imports with India’s Leading Import Management Partner.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-xl mt-10 md:mt-0">
          <Image
            src="/warehouse.jpg"
            alt="Warehouse Discussion"
            width={700}
            height={500}
            className="rounded-2xl"
          />
        </div>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 rotate-90 origin-bottom-right bg-gradient-to-b from-orange-400 to-blue-500 px-2 py-2 rounded-l-lg">
        <Link href="#contact">
          <span className="text-white text-xs font-bold tracking-wider">LET'S CONNECT</span>
        </Link>
      </div>
    </section>
  );
}
