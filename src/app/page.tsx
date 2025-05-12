'use client';

import About from './home/partials/About';
import ContactMe from './home/partials/ContactMe';
import FAQ from './home/partials/FAQ';
import Footer from './home/partials/footer';
import Hero from './home/partials/Hero';
import MyLatestWork from './home/partials/MyLatestWork';
import Skill from './home/partials/MyProfessionalSkills';
import MyWorkExperience from './home/partials/MyWorkExperience';
import Navbar from './home/partials/Navbar';
import SkillsMarquee from './home/partials/SkillsMarquee';
import SuccessStories from './home/partials/SuccessStories';
import SkillWhyChooseMe from './home/partials/WhyChooseMe';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <About />
      <Skill />
      <SkillWhyChooseMe />
      <MyLatestWork />
      <MyWorkExperience />
      <SuccessStories />
      <FAQ />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
