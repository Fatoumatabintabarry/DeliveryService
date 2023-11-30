import React from 'react';
import styles from '../style';
import { logoWhite } from '../assets';
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-[#5F54E3] `}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-6 w-full`}>
        
        <div>
          <img src={logoWhite} alt="logo" className='w-[266px] h-[72px] object-contain' />
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 '>
          {footerLinks.map((footerLink, footerLinkIndex) => (
            <div key={`footerLink-${footerLinkIndex}`} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {footerLink.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, linkIndex) => (
                  <li key={`link-${footerLinkIndex}-${linkIndex}`} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-white cursor-pointer ${linkIndex !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                      {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex items-center justify-center md:flex-row pt-2 border-t-[1px] border-t-[#3f3E45]'>
        <p className='text-center text-[18px] leading-[27px] text-white'>@SOEN343 project.</p>
      </div>
    </section>
  );
}

export default Footer;
