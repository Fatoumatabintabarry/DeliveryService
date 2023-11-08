import React from 'react'
import styles from '../style';
import { logo } from '../assets';
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter}${styles.paddingY} flex-col bg-[#5F54E3] `}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-6 w-full `}>
      
      <div>
        <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain' />
       
      </div>

      <div className='flex-[1.5] w-full flex flex row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink)=>(
          <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            
          <h4 className='font-poppins font-medium text-[18px] 
          leading-[27px] text-white'>
            {footerLink.title}
          </h4>
          <ul className='list-none mt-4'>
              {footerLink.links.map((link, index)=>(
                <li key={link.name} className={`font-poppins font-normal text-[16px] 
                leading-[24px] text-dimwit hover: text-white  
                cursor-pointer $ {index !== footerLink.links.length-1 ?'mb-4' : 'mb-0'}`}>
                    {link.name}
                </li>
              ))}

          </ul>
      </div>
        ))}
      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 
    border-t-[1px] border-t-[#3f3E45]'>
      <p className='font-poppins font-normal text-center text-[18px] 
    leading-[27px] text-white'> SOEN343 project. </p>
    </div>
    </section>
  )
}

export default Footer