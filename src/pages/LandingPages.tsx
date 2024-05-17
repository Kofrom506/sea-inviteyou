import React from 'react'
import LandingSolutionInput from '../components/LandingSolutionInput';
import QuoteSection from '../components/QuoteSection';
import ProfileSection from '../components/ProfileSection';
import ScheduleSection from '../components/ScheduleSection';
import WishesSection from '../components/WishesSection';

const LandingPages = () => {
  
  return (
    <div>
       <LandingSolutionInput isInvitation={false}  ></LandingSolutionInput>
       <QuoteSection/>
       <ProfileSection/>
       <ScheduleSection/>
       <WishesSection/>
    </div>
  )
}

export default LandingPages