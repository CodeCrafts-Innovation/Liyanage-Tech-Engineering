import React from 'react'
import PageBanner from "../PageBanner";
import TeamMember from '../../components/TeamMember';
import AboutUsDetails from '../../components/about_us_details';
import StatisticsSection from '../../components/StatisticsSection';

const AboutUs = () => {
  return (
    <>
    <PageBanner
    title="About Us"
    subtitle="About Us"
    image="https://cdn.pixabay.com/photo/2018/06/09/13/41/czech-republic-3464435_1280.jpg"
    />
    <AboutUsDetails/>
    <StatisticsSection/>
    <TeamMember/>
    </>
  )
}

export default AboutUs