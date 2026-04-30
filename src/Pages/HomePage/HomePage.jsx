import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import ProjectSection from './ProjectSection';
import SkillSection from './SkillSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import ContactSection from './ContactSection';
import VideoSection from './VideoSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <div>
                <AboutSection />
            </div>
            <div className='section-bg section-bg-charcoal pattern-diagonal'>
                <ServiceSection />
            </div>
            <div>
                <ProjectSection />
            </div>
            <div className='section-bg section-bg-charcoal pattern-diagonal'>
                <VideoSection />
            </div>
            <div>
                <ExperienceSection />
            </div>
            <div className='section-bg section-bg-charcoal pattern-diagonal'>
                <SkillSection />
            </div>
            <div>
                <EducationSection />
            </div>
            <div className='section-bg section-bg-charcoal pattern-diagonal'>
                <ContactSection />
            </div>
        </div>
    );
};

export default HomePage;