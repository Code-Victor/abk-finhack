// Who Can Participate?
import BussinessVisionaries from "../assets/images/business-visionaries.png";
import TechInnovators from "../assets/images/tech-innovators.png";
import CreativeMinds from "../assets/images/creative-minds.png";
// Why Participate
import Collaborate from "../assets/images/collaborate.png";
import Learn from "../assets/images/learn.png";
import Innovate from "../assets/images/innovate.png";
import Network from "../assets/images/network.png";
import Win from "../assets/images/win.png";
// Prizes
import GoldTrophy from "../assets/images/gold-trophy.png";
import SilverTrophy from "../assets/images/silver-trophy.png";
import BronzeTrophy from "../assets/images/bronze-trophy.png";
import GoldConfetti from "../assets/images/gold-confetti.png";
import SilverConfetti from "../assets/images/silver-confetti.png";
import BronzeConfetti from "../assets/images/bronze-confetti.png";
// Guidelines
import Guideline1 from "../assets/images/guideline-1.png";
import Guideline2 from "../assets/images/guideline-2.png";
import Guideline3 from "../assets/images/guideline-3.png";
import Guideline4 from "../assets/images/guideline-4.png";

export const links = [
  "About",
  "Challenge",
  "Prizes",
  "Guidelines",
  "Judges",
  "FAQ",
];
export const socialLinks = [
  {
    title: "Facebook",
    icon: "ri:facebook-circle-fill",
    link: "https://www.facebook.com/#",
  },
  {
    title: "Instagram",
    icon: "tabler:brand-instagram",
    link: "https://instagram.com/#",
  },
  {
    title: "X",
    icon: "ri:twitter-x-fill",
    link: "https://twitter.com/#",
  },
  {
    title: "LinkedIn",
    icon: "ri:linkedin-box-fill",
    link: "https://linkedin.com/in/#",
  },
];
export const FAQ = [
  {
    question: "What is Abeokuta FinHack?",
    answer:
      "Abeokuta FinHack is a fintech hackathon designed by The Radiating Church Business & Career Network (TRC-BCN) to foster innovation in the financial sector. Participants are challenged to develop crowdfunding solutions using Payaza’s API, aimed at solving real-world problems in their communities.",
  },
  {
    question: "When and where will Abeokuta FinHack take place?",
    answer:
      "The hackathon runs from October 5 to November 9, 2024. The opening event will be held at Park Inn by Radisson, Kuto, Abeokuta, on October 5, 2024, from 10 am. The event is both online and onsite.",
  },
  {
    question: "What is the challenge for participants?",
    answer:
      "Teams are required to use Payaza’s API to create innovative, transparent, and engaging crowdfunding solutions that address challenges in their communities. Solutions can be prototypes or proofs of concept and should not be commercially available at the time of submission.",
  },
  {
    question: "How will the finalists be judged?",
    answer:
      "Solutions will be judged based on originality, feasibility, design, and technical skill.",
  },
  {
    question: "Can I still participate if I don't have a team?",
    answer:
      "Yes! You can register as an individual, and we will assist in forming teams at the event. Teams are encouraged to have complementary skills for better performance.",
  },
];

export const timeline = [
  {
    date: "Friday, October 4, 2024",
    time: "12 noon",
    description: "Early registration deadline",
    registrationRelated: true,
  },
  {
    date: "Saturday, October 5, 2024",
    time: "10 am - 2 pm",
    description:
      "Abeokuta FinHack Event Kick off the challenge and set the stage for innovation. This day is dedicated to welcoming participants, fostering learning, networking, and providing an overview of the hackathon's problem space and rules. Individuals without a team will receive support in forming one.",
  },
  {
    date: "Friday, October 11, 2024",
    time: "12 noon",
    description:
      "Final registration deadline Only open to newly formed teams at the Abeokuta FinHack Event. At least one of the team members must have registered as an individual before the early deadline.",
    registrationRelated: true,
  },
  {
    date: "Sunday, October 27, 2024",
    time: "11:59 pm",
    description:
      "Solution submission deadline The main requirement is that the team's solution must not be commercially available at the time of submission. It can be a simple prototype, a proof of concept, or a front-end application.",
  },
  {
    date: "Monday, November 4, 2024",
    description:
      "Finalist (top 10 solutions) announcement Solutions will be judged on their originality, feasibility, design, and technical skill",
  },
  {
    date: "Monday - Friday, November 4 - 8, 2024",
    description:
      "Mentorship session Finalists are paired with online mentors who provide guidance and coaching to help refine their solutions and prepare a pitch deck.",
  },
  {
    date: "Saturday, November 9, 2024",
    description:
      "Final pitch and award event Finalists will pitch and demo their solutions to a live audience and a panel of judges. The top three teams will be selected and awarded cash prizes",
  },
];

export const whoCanParticipate = [
  {
    title: "Business Visionaries",
    description:
      "Join Abeokuta FinHack to leverage your expertise in market trends, operations, business, and finance to develop innovative fintech solutions. Your insights are crucial in forging new paths and transforming visionary ideas into real-world applications.",
    image: BussinessVisionaries,
  },
  {
    title: "Creative Minds",
    description:
      "Use your design, UI/UX, and storytelling talents to shape innovative solutions. Combine your creativity with technology to craft captivating user experiences that stand out in the financial world.",
    image: CreativeMinds,
  },
  {
    title: "Tech Innovators",
    description:
      "Leverage your coding and software development skills to create cutting-edge fintech solution prototypes that address complex challenges. Your expertise is essential in driving the digital revolution in finance.",
    image: TechInnovators,
  },
];

export const whyParticipate = [
  {
    title: "Collaborate",
    description:
      "Work alongside brilliant, like-minded individuals to jointly develop innovative solutions in the fintech sector.",
    image: Collaborate,
  },
  {
    title: "Learn",
    description:
      "Gain insights from experienced experts in technology, creativity, and finance.",
    image: Learn,
  },
  {
    title: "Innovate",
    description:
      "Think outside the box, inside the box, or create a new box! Seize the opportunity to craft bold and unique fintech solutions.",
    image: Innovate,
  },
  {
    title: "Network",
    description:
      "Build valuable connections and friendships with bright minds and top professionals.",
    image: Network,
  },
  {
    title: "Win",
    description:
      "Beyond gaining new knowledge, friends, and experiences, you’ll also have the chance to win amazing prizes.",
    image: Win,
  },
];

export const prizes = {
  1: {
    trophy: GoldTrophy,
    confetti: GoldConfetti,
    title: "First Place",
    prize: "₦800K",
    description:
      "N800,000 to be shared equally among all team members Publicity through TRC-BCN and Payaza’s communication channels Possible internship with the Payaza team",
    gradient: "116.99deg, #CDAE6F 0.78%, #534324 100%",
  },
  2: {
    trophy: SilverTrophy,
    confetti: SilverConfetti,
    title: "Second Place",
    prize: "₦500K",
    description:
      "N500,000 to be shared equally among all team members Publicity through TRC-BCN and Payaza’s communication channels Possible internship with the Payaza team",
    gradient: "116.99deg, #BFBEC3 0.78%, #464646 100%",
  },
  3: {
    trophy: BronzeTrophy,
    confetti: BronzeConfetti,
    title: "Third Place",
    prize: "₦300K",
    description:
      "N300,000 to be shared equally among all team members Publicity through TRC-BCN and Payaza’s communication channels Possible internship with the Payaza team",
    gradient: "116.99deg, #A56229 0.78%, #4D2A0B 100%",
  },
};

export const guidelines = [
  {
    image: Guideline1,
    title: "Review the challenge and terms before applying.",
    description:
      "Before registering, carefully review the challenge details, including the problem statement, eligibility criteria, terms and conditions, and hackathon structure.",
  },
  {
    image: Guideline2,
    title: "Register for Abeokuta FinHack",
    description:
      "You can register as a team or an individual. If you have a team, register for the event and the hackathon together. If not, we’ll help you find like-minded individuals at the event. Once you’ve assembled your team, you can register for the hackathon together.",
  },
  {
    image: Guideline3,
    title: "Explore Payaza’s APIs for inspiration",
    description:"Gain access to Payaza’s robust set of tools and capabilities that can be seamlessly integrated into your proposed applications"
  },
  {
    image: Guideline4,
    title: "Attend the Abeokuta FinHack event",
    description: "Attend the Abeokuta FinHack event to confirm your hackathon registration, gain insights into the challenge, and explore the Fintech space. You'll also have the chance to network with fellow participants, learn from leading tech and finance experts, and enjoy a fun, immersive experience while discovering how to build innovative solutions and break into tech."
  },
];