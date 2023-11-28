'use client'
import React,{useState} from 'react'
import styles from "../app/page.module.css"

const Services = () => {
    const [areaName,setAreaName] = useState("")
    const [cropName,setCropName] = useState("")
    const [landArea,setLandArea] = useState(0)

    const dataShow = (e)=>{
        e.preventDefault()
        console.log(areaName)
        console.log(cropName)
        console.log(landArea)
    }

     return (
        <div>
            <div className={styles.services}>
                <div className={styles.serviceContent1}><div className={styles.servicesform}>
                    <form className={styles.form} onSubmit={dataShow}>
                        <h1 className={styles.inputText}> Let us have Some Info </h1>
                        <p className={styles.inputText}> Give Us Some Information to Know the Dose of Chemicals To be Used </p>
                        <input className={styles.input} type="text" placeholder='Enter Your Area' data-aos='fade-up' onChange={(e)=>setAreaName(e.target.value)}/>
                            <select className={styles.input} name='Crop Name' data-aos='fade-up' onChange={(e)=>setCropName(e.target.value)}>
                                <option value='default'> Select the Crop </option>
                                <option value='wheat'> Wheat </option>
                                <option value='rice'> Rice </option>
                                <option value='maize'> Maize </option>
                                <option value='sugarcane'> Sugarcane </option>
                                <option value='Cotton'> Cotton </option>
    
                            </select>
                        <input className={styles.input} type="text" placeholder='Enter Size of Your Field' data-aos='fade-up' onChange={(e)=>setLandArea(e.target.value)}/>
                        <button type='submit' className={styles.inputButton} data-aos='fade-up'> Submit </button>
                    </form>
                    </div>
                </div>
                <div className={styles.serviceContent2}><div className={styles.servicesform}>
                    <form className={styles.form} action="">
                        <h1 className={styles.inputText}> ThankYou:) </h1>
                        <span className={styles.input} type="text" data-aos='fade-up'>{areaName}</span>
                        <span className={styles.input} type="text" data-aos='fade-up'>{cropName}</span>
                        <span className={styles.input} type="text" data-aos='fade-up'>{landArea}</span>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
