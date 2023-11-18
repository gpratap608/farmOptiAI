'use client'
import styles from './page.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import HomePage from '@/components/HomePage'
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once:false
    });
  }, [])
  
  return (
    <main className={styles.main}>
      {/* <h1 data-aos='fade-up'> HOME </h1> */}
      <div> <HomePage/> </div>
    </main>
  )
}
