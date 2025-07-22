import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="bg-[#0c4a6e] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={140} height={40} />
        </Link>
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <Link href="#about">About Us</Link>
          <Link href="#services">Services</Link>
          <Link href="#sectors">Sectors</Link>
          <Link href="#career">Career</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  )
}
