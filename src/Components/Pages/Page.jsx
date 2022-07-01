import React from 'react'
import FaqList from '../SubFile/FaqList'
import Footer from '../SubFile/Footer'
import HeroHader from '../SubFile/HeroHader'
import PricingList from '../SubFile/PricingList'
import TeamMember from '../SubFile/TeamMember'

const Page = () => {
  return (
    <>
      <HeroHader text="Page"/>
      <TeamMember />
      <PricingList />
      <FaqList />
      <Footer />
    </>
  )
}

export default Page