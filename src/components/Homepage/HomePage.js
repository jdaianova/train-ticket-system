import './Homepage.css'

import AboutUs from "./AboutUs/AboutUs";
import HowItWorks from "./HowItWorks/HowItWorks";
import Feedback from './Feedback/Feedback';

export default function HomePage() {
    return (
        <div className="HomePage">
            <AboutUs />
            <HowItWorks />
            <Feedback />
        </div>
    )
};
