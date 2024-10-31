import React from 'react'
import Brand from './Brand'
import brandImg1 from '../assets/images/brand-1.svg'
import brandImg2 from '../assets/images/brand-2.svg'
import brandImg3 from '../assets/images/brand-3.svg'
import brandImg4 from '../assets/images/brand-4.svg'
import brandImg5 from '../assets/images/brand-5.svg'
import brandImg6 from '../assets/images/brand-6.svg'

const Brands = () => {
  return (
    <section id="brands">
      <Brand imgUrl={brandImg1} imgAlt="Brand logo"/>
      <Brand imgUrl={brandImg2} imgAlt="Brand logo"/>
      <Brand imgUrl={brandImg3} imgAlt="Brand logo"/>
      <Brand imgUrl={brandImg4} imgAlt="Brand logo"/>
      <Brand imgUrl={brandImg5} imgAlt="Brand logo" id="logo-5"/>
      <Brand imgUrl={brandImg6} imgAlt="Brand logo" id="logo-6"/>
    </section>
  )
}

export default Brands