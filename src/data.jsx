import Img1 from "./assets/services/img1.jpeg";
import Img2 from "./assets/services/img2.jpeg";
import Img3 from "./assets/services/img3.jpeg";
import Img4 from "./assets/services/img4.jpeg";
import Img5 from "./assets/services/img5.jpeg";
import Img6 from "./assets/services/img6.jpeg";


import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCode,
  FaHandshake,
} from "react-icons/fa6";

import { HiOutlineLightBulb } from "react-icons/hi";
import { GrSync } from "react-icons/gr";
import {
  headsetImage,
  pencilImage,
  shieldImage,



  //Clients images import
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
} from "./assets";
import team1 from "./assets/team1.png";
import team2 from "./assets/team2.png";
import team3 from "./assets/team3.png";


import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export const navRoutes = [
  {
    id: "hero",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "vlog",
    name: "Vlog"
  },
  {
    id: "services",
    name: "Services",
  },
  {
    id: "gallery",
    name: "Gallery",
  },
  {
    name: "Team",
    id: "team",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export const whyChooseUs = [
  {
    title: "End-to-End Career Support",
    imageIcon: headsetImage,
    description: `From skill development to placement and overseas opportunities, 
    we guide individuals throughout their career journey with mentorship, 
    placement support, and continuous guidance.`,
  },
  {
    title: "Multi-Division Expertise",
    imageIcon: shieldImage,
    description: `Through our specialized divisions like SKILL Academy, STEP Careers, 
    SAGE HR Consultancy, and ANABI Solutions, we offer a complete ecosystem of 
    services covering training, recruitment, engineering, and digital innovation.`,
  },
  {
    title: "Global Opportunities",
    imageIcon: pencilImage,
    description: `With SHASAA WINGS Overseas, we help candidates explore international 
    career opportunities by providing guidance, documentation support, and 
    global placement assistance.`,
  },

];


export const ourApproaches = [
  {
    title: "Practical & Industry-Oriented Approach",
    icon: FaHandshake,
    description: `We focus on real-world learning and application by delivering 
    practical training programs and solutions that align with current industry 
    requirements and standards.`,
  },
  {
    title: "Student & Client-Centric Approach",
    icon: GrSync,
    description: `We place students, professionals, and clients at the center of 
    everything we do, ensuring personalized guidance, tailored solutions, and 
    measurable outcomes.`,
  },
  {
    title: "Innovation & Technology Driven",
    icon: HiOutlineLightBulb,
    description: `We leverage modern technologies, digital tools, and innovative 
    strategies to deliver impactful solutions across training, marketing, and 
    engineering domains.`,
  },

];

export const services = [
  {
    icon: Img1,
    link: "/skill-academy"
  },
  {
    icon: Img2,
    link: "/step-careers"
  },
  {
    icon: Img3,
    link: "/sage-consulting"
  },
  {
    icon: Img4,
    link: "/anabi-solutions"
  },
  {
    icon: Img5,
    link: "/wings-overseas"
  },
  {
    icon: Img6,
    link: "/shape-solutions",
  }
];



export const contactInfo = [
  {
    title: "Email Us",
    description: "Fast and Reliable Support",
    value: "info@shasaagroups.com",
    icon: MdOutlineAlternateEmail,
  },
  {
    title: "Our Address",
    description: "Come visit us in our office",
    value: "Tiruchirappalli, Tamil Nadu, India",
    icon: FaLocationCrosshairs,
  },
  {
    title: "Phone number",
    description: "Give Us a call",
    value: "+91 8608058045",
    icon: FiPhoneCall,
  },
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=61588342284086",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/shasaagroup/?hl=en",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/company/shasaa-groups",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com/@Shasaagroupindia",
  },
];

export const teamMembers = [
  {
    name: "SAA",
    
    image: team1,

  },
  {
    name: "Abirami",
   
    image: team2,

  },
  {
    name: "Dhanush",
    
    image: team3,

  },
];

export const clientsReviews = [
  {
    content:
      "Datawave transformed our outdated systems into a seamless, secure infrastructure. Their team is exceptionally skilled and always available to assist.",
    name: "Sophia Roberts",
    jobTitle: "IT Manager, TechNova",
    rating: 4,
    image: client1,
  },
  {
    content:
      "Partnering with Datawave has been a game-changer for our digital operations. Their innovative approach helped us scale effortlessly.",
    name: "Rajesh Patel",
    jobTitle: "CEO, Alpha Logistics",
    rating: 4,
    image: client2,
  },
  {
    content:
      "Datawave’s cloud solutions have boosted our productivity significantly. I can’t recommend their services enough!",
    name: "Emily Nguyen",
    jobTitle: "Operations Manager, Zenith Retail",
    rating: 3,
    image: client3,
  },
  {
    content:
      "Our cybersecurity has never been stronger. Datawave identified vulnerabilities we didn’t know existed and resolved them efficiently.",
    name: "James O’Connor",
    jobTitle: "CTO, Shield Financial Group",
    rating: 5,
    image: client4,
  },
  {
    content:
      "The team at Datawave delivered ahead of schedule and exceeded expectations. Their professionalism and expertise are unmatched.",
    name: "Fatima Yusuf",
    jobTitle: "Project Lead, GreenTech Solutions",
    rating: 4,
    image: client5,
  },
  {
    content:
      "Datawave provided scalable solutions that have supported our rapid growth. Their ongoing support ensures we’re always ahead.",
    name: "Liam Carter",
    jobTitle: "Founder, BrightSpark Media",
    rating: 4,
    image: client6,
  },
];


export const footer = [
  {
    title: "Go to",
    subRoutes: [
      {
        title: "About Us",
        id: "about",
      },
      {
        title: "Vlog",
        id: "vlog",
      },
      {
        title: "Services",
        id: "services",
      },
      {
        title: "Testimonials",
        id: "testimonials",
      },

    ],
  },
  {
    title: "Services",
    subRoutes: [
      {
        title: "Skill Academy",
        id: "/skill-academy",
      },
      {
        title: "Step Careers",
        id: "/step-careers",
      },
      {
        title: "Sage Consulting",
        id: "/sage-consulting",
      },
      {
        title: "Anabi Solutions",
        id: "/anabi-solutions",
      },
      {
        title: "Wings Overseas",
        id: "/wings-overseas",
      },
      {
        title: "Shape Solutions",
        id: "/shape-solutions",
      },
    ],
  },
];
