import React from 'react'
import styles from "../app/page.module.css"
import Typewriter from 'typewriter-effect';


const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeConatiner}>
        <div className={styles.homeContent}>
          <h1 className={styles.Typewriter}> 
            <Typewriter
              options={{
              strings: ['Know More', 'Grow More','Earn More'],
              autoStart: true,
              loop: true,
              }}
            />
          </h1>
          <p className={styles.paragraph}> Revolutionize your farming experience with our cutting-edge Farming Web App. Streamline operations, monitor crop health, and manage resources efficiently. Access real-time data, weather forecasts, and expert insights at your fingertips. Increase productivity and make informed decisions with our user-friendly interface. Elevate your farming practices with the power of technology. </p>
        </div>
        <div className={styles.homeContent}>
            <img
              src='/farmer11.webp'
              className={styles.homeimage}
            />
        </div>
      </div>
    </div>
  )
}

export default HomePage
