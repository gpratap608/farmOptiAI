'use client'
import React,{useState} from 'react'
import '../app/globals.css'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}`;
  }
const Footer = () => {
    const [date,setDate] = useState(getDate())
    
  return (
    <div className='footer'>
        <Link href='#home' className='linkText'><h3> Home </h3></Link>
        <div className='footerContainer'>
            <div className='footerContent'>
                <Link href='#about'><h3 className='linkText'> About Us </h3></Link>
                <ul className='linkTextpoint' >
                    <li className='linkTextpoints'> Technical Learners  </li>
                    <li className='linkTextpoints'> On a Misson to Empower Farmers  </li>
                    <li className='linkTextpoints'> Providing Assist  </li>
                </ul>
            </div>
            <div className='footerContent'>    
                <Link href='#services'><h3 className='linkText'> Services </h3></Link>
                <ul className='linkTextpoint' >
                    <li className='linkTextpoints'> Farming Assistant  </li>
                    <li className='linkTextpoints'> Assists in New Farming Methods  </li>
                    <li className='linkTextpoints'> Smart Support  </li>
                    <li className='linkTextpoints'> Fertilizers Resourcing  </li>
                </ul>
            </div>
            <div className='footerContent'>    
                <Link href='#services'><h3 className='linkText'> Copyright </h3></Link>
                <ul className='linkTextpoint'>
                    <li className='linkTextpoints'> FarmOptiAI  </li>
                    <li className='linkTextpoints'> @{date}  </li>
                </ul>
            </div>
        </div>
        <img
            src='./footer.png'
            className='footerImage'
        />
    </div>

  )
}

export default Footer
