
import AboutCards from '../AboutCards';
import AboutBanner from '../Banner/AboutBanner';
import MeetTheTeam from '../MeetTheTeam';
import OurTeam from '../OurTeam';
import Nav from '../Shared/Nav';
import StatsSection from '../Shared/StatsSection';
import Testimonials from '../Shared/Testimonials';

const About = () => {
    return (
        <div>
            <Nav></Nav>
            <AboutBanner></AboutBanner>
            <StatsSection></StatsSection>
            <AboutCards></AboutCards>
            <OurTeam></OurTeam>
            <MeetTheTeam></MeetTheTeam>
            <Testimonials></Testimonials>
        </div>
    );
};

export default About;