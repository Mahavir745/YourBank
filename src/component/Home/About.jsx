import React from 'react'

const About = () => {
  return (
    <div className=''>
      <div className=' w-[700px] min-h-[500px] m-auto p-4'>
        <h1 className='text-4xl text-gray-600 text-center font-bold'>About Us</h1>
        <p className='text-xl leading-7 mt-4 text-slate-500 font-medium'>At YourBank, we are committed to providing our customers with reliable, secure, and innovative banking services. With decades of experience in the financial industry, we understand the importance of managing your money with trust and ease. Our mission is to offer personalized banking solutions that meet the needs of individuals, families, and businesses alike. We pride ourselves on our commitment to customer service, offering convenient access to your accounts through our state-of-the-art online and mobile banking platforms. Whether you’re saving for the future, managing day-to-day expenses, or growing your business, we are here to help you every step of the way. With a focus on financial education, transparency, and security, YourBank is your trusted partner for all your banking needs. Explore our range of products and services designed to make banking simple, secure, and accessible to everyone.</p>

        <h2 className='text-3xl font-bold p-4 text-gray-600 mt-4'>Our Values</h2>
        <ul className='mt-4 ml-6 flex flex-col gap-4'>
          <li className='font-bold p-4 border rounded-md bg-teal-400 text-white shadow-md'>
            <span>Customer-Centric:</span> <span>We put our customers at the heart of everything we do.</span>
          </li>
          <li className='font-bold p-4 border rounded-md bg-violet-400 text-white shadow-md'>
            <span>Integrity:</span> <span>We operate with transparency, honesty, and trust.</span>
          </li>
          <li className='font-bold p-4 border rounded-md bg-pink-400 text-white shadow-md'>
            <span>Innovation:</span> <span>We embrace technology to provide you with modern, reliable banking solutions.</span>
          </li>
          <li className='font-bold p-4 border rounded-md bg-blue-400 text-white shadow-md'>
            <span>Security:</span> <span> Your peace of mind is important to us, and we prioritize safeguarding your financial information.</span>
          </li>
        </ul>
        <p className='text-[16px] leading-7 mt-4 text-gray-600 rounded-xl font-medium bg-white p-2'>At YourBank, we are more than just a bank; we are your partner in building a strong financial future. Join us today and experience the difference of banking with a company that truly cares about your success.</p>
      </div>
    </div>
  )
}

export default About