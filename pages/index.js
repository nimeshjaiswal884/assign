import Head from 'next/head'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WhyMRSSection from '@/components/WhyMRSSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>MRS Supply Chain</title>
        <meta name="description" content="MRS Supply Chain Experts – Delivering results in import, logistics & consulting." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyMRSSection />
    </>
  )
}
