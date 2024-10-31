import React from 'react'
import Brands from './Brands'
import Features from './Features'
import Slider from './Slider'
import FeatureDesktop from './FeatureDesktop'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Subscribe from './Subscribe'

const Main = () => {
  return (
    <main>
      <Brands />
      <Features />
      <div className="bg-gray">
        <Slider />
      </div>
      <FeatureDesktop />
      <div className="bg-gray">
        <Testimonials />
      </div>
      <FAQ />
      <Subscribe />
    </main>
  )
}

export default Main