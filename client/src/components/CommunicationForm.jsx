import React from 'react';
// Import images if they are local
import { box, volant, fleche,  } from '../assets'

const CommunicationForm = () => {
  return (
    <div className='container flex flex-col gap-16 mx-auto my-32'>
      <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2'>
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
        </div>
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

      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form method="POST">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />

            </div>

            <div class="mb-5">
                <label
                for="email"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Email Address
                </label>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Subject
                </label>
                <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="message"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Message
                </label>
                <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
            </div>
            <div>
                <button
                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                >
                Submit
                </button>
            </div>
            </form>
        </div>
        </div>

        </div>
  );
}

export default CommunicationForm;
