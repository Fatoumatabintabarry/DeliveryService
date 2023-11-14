import React from 'react'
import ChoiceHeader from '../components/ChoicePageHeader'
import "../quotation.css"
import { box, volant, fleche,  } from '../assets'
import "../index.css"

const choicePage = () => {
  return (
    <div className='min-h-full h-screen  justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <ChoiceHeader
            heading="Welcome to Shipped  "
            paragraph="The first on-the-way delivery service"
            linkName="choicepage"
            linkUrl="/choicePage"
        />
      
          <div className='container flex flex-col gap-16 mx-auto my-32'>
            <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 '>
              <div className="section-link flex flex-col items-center gap-3 px-8 py-10 bg-white shadow-2xl shadow-indigo-500/40">
                <img className="SVG" alt="Svg" src={box} />
                <div className="text-wrapper">Send</div>
                <a href="/SignupSender" target="_blank" rel="noopener noreferrer">
                  <img className="img" alt="Svg" src={fleche} />
                </a>
                <div className="div-sc-dkzdqf" />
                <div className="overlap-group">
                  <p className="div">Create a delivery, track active deliveries, and</p>
                  <div className="text-wrapper-2">manage your account.</div>
                </div>
        </div>`
        <div className="section-link flex flex-col items-center gap-3 px-8 py-10 shadow-2xl shadow-indigo-500/40">
              <img className="SVG" alt="Svg" src={volant} />
                <div className="text-wrapper">Drive</div>
                  <a href="/SignupDriver" target="_blank" rel="noopener noreferrer">
                    <img className="img" alt="Svg" src={fleche} />
                  </a>
                  <div className="div-sc-dkzdqf" />
                        <div className="overlap-group">
                            <p className="div">View your Gig history, payments, and manage</p>
                            <div className="text-wrapper-2">your account.</div>
                        </div>
                  </div>
                </div>
                </div>

        </div>
  )
}

export default choicePage