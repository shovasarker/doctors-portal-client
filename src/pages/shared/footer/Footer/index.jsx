import React from 'react'

const Footer = () => {
  return (
    <footer
      className='w-full py-20 text-neutral bg-cover bg-center md:bg-no-repeat'
      style={{ backgroundImage: 'url(https://i.ibb.co/gF9jNGN/footer.png)' }}
    >
      <div className='footer !container !px-6'>
        <div>
          <span className='footer-title'>Services</span>
          <a href='/' className='link link-hover'>
            Emergency Checkup
          </a>
          <a href='/' className='link link-hover'>
            Monthly Checkup
          </a>
          <a href='/' className='link link-hover'>
            Weekly Checkup
          </a>
          <a href='/' className='link link-hover'>
            Deep Checkup
          </a>
        </div>
        <div className='md:ml-20 xl:ml-28'>
          <span className='footer-title'>Oral Health</span>
          <a href='/' className='link link-hover'>
            Fluoride Treatment
          </a>
          <a href='/' className='link link-hover'>
            Cavity Filling
          </a>
          <a href='/' className='link link-hover'>
            Teath Whitening
          </a>
        </div>
        <div className='w-full md:justify-items-end'>
          <span className='md:w-2/3 xl:w-1/2 text-left footer-title'>
            Our Address
          </span>
          <span className='md:w-2/3 xl:w-1/2 text-left'>
            New York - 101010 Hudson
          </span>
        </div>
      </div>
      <p className='text-center mt-16'>
        Copyright &copy; 2022 All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
