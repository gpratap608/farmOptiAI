import React from 'react'
import styles from '../app/page.module.css'
const About = () => {
  return (
    <div>
    <div className={styles.about}>      
        <div className={styles.aboutContent} data-aos='fade-up'>
          <img
            src='/CoverImage.jpg'
            className={styles.coverImage}
          />
        </div>
        <div className={styles.aboutContent} >
          <h1 className={styles.heading}> About Us </h1>
          <h2 className={styles.heading}> Welcome to FarmOptiAI </h2>
          <p className={styles.heading}> At Farmed Opti AI, we are driven by a passion for revolutionizing agriculture through the power of artificial intelligence. Our team is dedicated to developing cutting-edge solutions that empower farmers, enhance agricultural practices, and contribute to a sustainable and efficient future. </p>
          <h1 className={styles.heading}> Our Mission </h1>
          <h4 className={styles.heading}> Empowering Farmers, Enabling Growth </h4>
          <p className={styles.heading}> Our mission is to harness the potential of AI to transform traditional farming methods into smart and data-driven practices. We aim to provide farmers with advanced tools and insights that optimize crop yield, resource utilization, and overall farm management. </p>
        </div>
          <div className={styles.about}>
            <div className={styles.aboutContent} > 
              <h1 className={styles.heading}>Our Vision</h1>
              <h4 className={styles.heading}>A Greener Future Through Innovation</h4>
              <p className={styles.heading}> We envision a future where agriculture seamlessly integrates with technology, fostering sustainable practices that not only meet the needs of the present but also preserve the environment for generations to come. Farmed Opti AI is at the forefront of this vision, pioneering solutions that bridge the gap between agriculture and artificial intelligence. </p>
              <h2 className={styles.heading}> Core Values </h2>
              <h4 className={styles.heading}> Innovation, Sustainability, Collaboration </h4>
              <p className={styles.heading}> Our core values guide every aspect of our work. We are committed to continuous innovation, embracing sustainable practices, and fostering collaboration within our team and with the farming community. </p>            
            </div>
            <div className={styles.aboutContent} data-aos='fade-up'>
              <img
                src='/CoverImage2.jpg'
                className={styles.coverImage}
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
