'use client'
import React,{useState} from 'react'
import styles from "../app/page.module.css"
import axios from 'axios'

const Services = () => {
    const [areaName,setAreaName] = useState("")
    const [cropName,setCropName] = useState("")
    const [landArea,setLandArea] = useState(0)
    const [response, setResponse] = useState("")
    const [cropNo,setCropNo] = useState(0)
    const [urea, setUrea] = useState(0)
    const [phosphate, setPhosphate] = useState(0)
    const [potash, setPotash] = useState(0)
    const [condition, setCondition] = useState("")
    const [day, setDay] = useState(0)

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
                    'X-RapidAPI-Key': '49463d9bc8msh430d8d3c6035f3fp12af2cjsn6d3fe321e3a5',
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
        
        if(cropName === 'wheat'){
            setCropNo(11)
        } else if (cropName === 'Rice'){
            setCropNo(12)
        } else {
            setCropNo(13)
        }
        try {
            const response_ML_urea = await axios.get(`http://127.0.0.1:8080/urea/${cropNo}/${landArea}`)
            setUrea(Number(response_ML_urea.data.prediction))
            const response_ML_phosphate = await axios.get(`http://127.0.0.1:8080/phosphate/${cropNo}/${landArea}`)
            setPhosphate(Number(response_ML_phosphate.data.prediction))
            const response_ML_potash = await axios.get(`http://127.0.0.1:8080/potash/${cropNo}/${landArea}`)
            setPotash(Number(response_ML_potash.data.prediction))
            console.log('ML Response Urea',response_ML_urea.data)
            console.log('ML Response Phosphate',response_ML_phosphate.data) 
            console.log('ML Response Potash',response_ML_potash.data)
            if(cropName === 'Wheat'){
                setCondition("Wheat thrives in cool temperatures between 50°F to 70°F, well-drained loamy soils with a pH of 6.0 to 7.5, and requires consistent moisture throughout its long growing season. Adapted to full sunlight, wheat benefits from moderate altitudes and benefits from proper crop rotation, fertilization, and integrated pest management for optimal yield and quality.")
                setDay(240)
            }else if(cropName === 'rice'){
                setCondition("For successful rice cultivation, ensure well-drained, flooded fields, particularly in the vegetative and reproductive stages. Choose suitable varieties based on local conditions. Practice timely transplanting and weed control. Apply nitrogen fertilizers judiciously, with split applications. Monitor water levels, and manage pests to ensure a healthy rice crop.")
                setDay(177)
            } else {
                setCondition("To cultivate healthy sugarcane, choose disease-resistant varieties suitable for your region. Ensure well-drained, fertile soil with a pH between 5.5 and 7.5. Provide adequate irrigation, especially during dry periods. Plant cane buds at the right depth, and practice timely weed control. Monitor for pests and diseases, and follow recommended fertilization practices.")
                setDay(548)
            }


        } catch (error) {
            console.log("Error in ML calling", error )
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
                        <input className={styles.input} type="text" placeholder='Enter Your Area'  onChange={(e)=>setAreaName(e.target.value)}/>
                            <select className={styles.input} name='Crop Name' onChange={(e)=>setCropName(e.target.value)}>
                                <option value='default'> Select the Crop </option>
                                <option value='wheat'> Wheat </option>
                                <option value='rice'> Rice </option>
                                <option value='sugarcane'> Sugarcane </option>
    
                            </select>
                        <input className={styles.input} type="text" placeholder='Enter Size of Your Field in hectare'  onChange={(e)=>setLandArea((e.target.value)*2.47105)}/>
                        <button type='submit' className={styles.inputButton} > Go </button>
                    </form>
                    </div>
                </div>
                <div className={styles.serviceContent2}><div className={styles.servicesform}>
                    <form className={styles.form} action="">
                        <h1 className={styles.inputText}> FarmOptiAI ;) </h1>
                        {response.length===0?"":
                            <div className={styles.inputResponse}>
                                <h2> Here you are Growing your {cropName} in {areaName} <br />
                                    In, {areaName} humidity will be {response}, and here are Some tips <br />
                                    {condition}.
                                </h2><br />
                                <h2> You will Need <i>{urea}</i> Kg UREA in whole season and <i>{((urea/day)*7)*100}</i> grams in a week </h2><br />
                                {/* <h2> You will Need <i>{phosphate}</i> Kg PHOSPHATE in whole season and <i>{((phosphate/day)*7)*100}</i> grams in a week </h2><br />
                                <h2> You will Need <i>{potash}</i> Kg POTASH in whole season and <i>{((potash/day)*7)*100}</i> grams in a week </h2><br /> */}
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
