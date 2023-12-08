'use client'
import React,{useState} from 'react'
import styles from "../app/page.module.css"
import axios from 'axios'

const Services = () => {
    const [areaName,setAreaName] = useState("")
    const [cropName,setCropName] = useState("")
    const [landArea,setLandArea] = useState(0)
    const [response, setResponse] = useState("")

    const dataShow = async (e) => {
        try {
            e.preventDefault(); // Prevent the default form submission behavior
    
            // Assuming areaName is defined somewhere in your code
            console.log("areaName:", areaName);
    
            // Define the options for the Axios request
            const options = {
                method: 'GET',
                url: `https://open-weather13.p.rapidapi.com/city/${areaName}`,
                headers: {
                    'X-RapidAPI-Key': '0886c79e8emsh6e498fc495a9241p1c7e5djsn9134e7aeb883',
                    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
                }
            };
    
            // Log the options before making the request
            console.log("Axios Options:", options);
    
            // Make the Axios request using the specified options
            const response = await axios.request(options);
            console.log(response.name)
            // Log the data from the response to the console
            setResponse(String(response.data.main.humidity))
            console.log("Response Data:", response.data.main);
        } catch (error) {
            // Log any errors that occur during the request
            console.error("Error:", error);
        }
    };
    
    // Assuming this function is connected to some event in your HTML
    // For example, a form submission
    // document.querySelector('your-form-selector').addEventListener('submit', dataShow);
    
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
                        <button type='submit' className={styles.inputButton} data-aos='fade-up'> Go </button>
                    </form>
                    </div>
                </div>
                <div className={styles.serviceContent2}><div className={styles.servicesform}>
                    <form className={styles.form} action="">
                        <h1 className={styles.inputText}> ThankYou:) </h1>
                        {response.length===0?"":
                            <div className={styles.input}>
                                Your Area is {areaName}<br/>
                                Humidity in Your Area is {response}
                            </div>
                        }
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
