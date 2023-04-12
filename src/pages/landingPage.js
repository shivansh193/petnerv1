import React from 'react'
import LandingPage from './components/headerLandingPage'
import ComponentTwo from "./components/headerSecondComponent"
import ComponentThree from "./components/headerElementThree"
const LandingPage = () => {
  return (
    <div>
      <LandingPage />
      <ComponentTwo />
      <ComponentThree imageSrc="https://picsum.photos/50/50"
  title="Example Title"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum malesuada nisl sit amet ullamcorper." />
    </div>
  )
}

export default LandingPage