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
// Experts
import DamilarePaul from "../assets/images/experts/damilare-paul.png";
import IyanuGabriel from "../assets/images/experts/iyanu-gabriel.png";
import OluwaseunHamzat from "../assets/images/experts/oluwaseun-hamzat.png";
import OluwaseyiOgidiolu from "../assets/images/experts/oluwaseyi-ogidiolu.png";
import DeboOmololu from "../assets/images/experts/debo-omololu.png";
import OlalekanAkinsande from "../assets/images/experts/olalekan-akinsande.png";
import PSam from "../assets/images/experts/p-sam.png";

export const links = [
  { label: "About", href: "#about" },
  { label: "Challenge", href: "#challenge" },
  { label: "Prizes", href: "#prizes" },
  { label: "Guidelines", href: "#guidelines" },
  { label: "Experts", href: "#experts" },
  { label: "FAQ", href: "#faq" },
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

/**Proposed new timeline for the Abeokuta FinHack
 * Early registration deadline: Thursday, October 24, 12 noon
 * Launch event: Saturday, October 26; 10 am - 3 pm
 * Final registration deadline: Sunday, November 3
 * Solution submission deadline: Sunday, November 17
 * Finalist announcements: Friday, November 22
 * Mentorship session: Monday - Friday, November 25 - 29
 * Final pitch session: Saturday, November 30, 10 am - 1 pm */

export const timeline = [
  {
    date: "Thursday, October 24, 2024",
    time: "12 noon",
    description: "Early registration deadline",
    registrationRelated: true,
  },
  {
    date: "Saturday, October 26, 2024",
    time: "10 am - 3 pm",
    description:
      "Abeokuta FinHack Event Kick off the challenge and set the stage for innovation. This day is dedicated to welcoming participants, fostering learning, networking, and providing an overview of the hackathon's problem space and rules. Individuals without a team will receive support in forming one.",
  },
  {
    date: "Sunday, November 3, 2024",
    time: "12 noon",
    description:
      "Final registration deadline Only open to newly formed teams at the Abeokuta FinHack Event. At least one of the team members must have registered as an individual before the early deadline.",
    registrationRelated: true,
  },
  {
    date: "Sunday, November 17, 2024",
    time: "11:59 pm",
    description:
      "Solution submission deadline The main requirement is that the team's solution must not be commercially available at the time of submission. It can be a simple prototype, a proof of concept, or a front-end application.",
  },
  {
    date: "Friday, November 22, 2024",
    description:
      "Finalist (top 10 solutions) announcement Solutions will be judged on their originality, feasibility, design, and technical skill",
  },
  {
    date: "Monday - Friday, November 25 - 29, 2024",
    description:
      "Mentorship session Finalists are paired with online mentors who provide guidance and coaching to help refine their solutions and prepare a pitch deck.",
  },
  {
    date: "Saturday, November 30, 2024",
    time: "10 am - 1 pm",
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
    rewards: [
      "₦800,000 to be shared equally among all team members",
      "Publicity through TRC-BCN and Payaza’s communication channels",
      "Possible internship with the Payaza team",
    ],
    gradient: "116.99deg, #CDAE6F 0.78%, #534324 100%",
  },
  2: {
    trophy: SilverTrophy,
    confetti: SilverConfetti,
    title: "Second Place",
    prize: "₦500K",
    rewards: [
      "₦500,000 to be shared equally among all team members",
      "Publicity through TRC-BCN and Payaza’s communication channels",
      "Possible internship with the Payaza team",
    ],
    gradient: "116.99deg, #BFBEC3 0.78%, #464646 100%",
  },
  3: {
    trophy: BronzeTrophy,
    confetti: BronzeConfetti,
    title: "Third Place",
    prize: "₦300K",
    rewards: [
      "₦  300,000 to be shared equally among all team members",
      "Publicity through TRC-BCN and Payaza’s communication channels",
      "Possible internship with the Payaza team",
    ],

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
    description:
      "Gain access to Payaza’s robust set of tools and capabilities that can be seamlessly integrated into your proposed applications",
  },
  {
    image: Guideline4,
    title: "Attend the Abeokuta FinHack event",
    description:
      "Attend the Abeokuta FinHack event to confirm your hackathon registration, gain insights into the challenge, and explore the Fintech space. You'll also have the chance to network with fellow participants, learn from leading tech and finance experts, and enjoy a fun, immersive experience while discovering how to build innovative solutions and break into tech.",
  },
];

export const allExperts = [
  {
    name: "Samson Odegbami",
    image: PSam,
    title: "Lead Pastor, The Radiating Church",
    role: "Chief Host ",
    socials: {
      linkedin: "https://www.linkedin.com/in/samsonodegbami/",
    },
    bio: "Samson Odegbami is a business development expert, his professional knowledge and deep experience span about three decades. He is a renowned management consultant, resilient, efficient, innovative thinker, and sustained business founder. As a management consultant, he has a passion for helping people achieve superior performance in life and business. He is in many ways applying his business innovation and self-development expertise to groom upcoming entrepreneurs. He is a worthy alumnus of the Lagos Business School. Samson Odegbami is not only a business development expert, he is also a clergy. By the leading of God, He founded and leads the fastest-growing mega-church, with about a thousand and five hundred members, in the metropolitan city of Abeokuta. Over time, he has been keen on leveraging technology to build a worthwhile path to making life easy for emerging leaders and other people, hence the emergence of his new business. He is also big on the use of media as a channel to create a community of like-minded people. Samson is the founder of several thriving businesses in Lagos, Abeokuta and Abuja, and he has intentionally raised men to lead the businesses.",
  },
  {
    name: "Debo Omololu",
    image: DeboOmololu,
    title: "Chief Executive Officer and Head of Strategy, GFA",
    role: "Keynote Speaker",
    socials: {
      linkedin: "https://www.linkedin.com/in/bolu-oluwagbesan-5080b188/",
    },
    bio: "Debo Omololu is the co-founder and CEO of GFA Technologies. He holds a BSc in Accounting from the University of Ilorin, a Diploma in Entrepreneurship from Harvard University, a Diploma in Management from the University of Liverpool, and an Associate Chartered Accountant certification from ICAN. He has also completed the Venture in Management Programme at Lagos Business School.\nAt GFA, Debo has developed the Digital Innovation Management Platform (DIMP) to upskill individuals and entrepreneurs and provide essential tools for effective business management. Previously, Debo served as an advisor in corporate development at KaiOS, working to provide internet access to over half of the world's population. As a partner at Afriscaper, he helped deliver market reports on emerging markets, aiding business leaders in decision–making. Debo has spoken at events in over 12 countries as a public speaker on topics related to growth in emerging markets. He also coordinates the Success Entrepreneurs Network, an online community with nearly 1,000 members. Debo's extensive skills include fundraising, market research, business planning, strategic analysis, and educational technology. He is a founding member of the Nigerians in Diaspora Organisation (East China), the African Business Chamber in China (Afbizcham), and a Fellow of the Startup Leadership Programme (SLP).",
  },
  {
    name: "Hamzat Oluwaseun",
    image: OluwaseunHamzat,
    title: "Technology & Strategy Consultant",
    role: "Speaker",
    socials: {
      linkedin: "https://www.linkedin.com/in/oluwaseun-hamzat-a7416966/",
    },
    bio: "Oluwaseun is a technology and strategy consultant dedicated to creating products, programs, partnerships, and ecosystems that open opportunities for young Africans in the digital economy. He recently led growth and outreach at Kibo School, a global online university offering affordable STEM degrees to Africans. Over the past 7 years, he has been passionately involved in nurturing the tech and startup ecosystem across the continent. His work includes impactful projects with international development agencies, global ecosystem leaders, tech communities, and think tanks such as the German Development Corporation (GIZ), AI Commons, and Data Science Nigeria.",
  },
  {
    name: "Paul Akolade",
    image: DamilarePaul,
    title: "Founder & CEO, Vant",
    role: "Speaker and Mentor",
    socials: {
      linkedin: "https://www.linkedin.com/in/paulakolade/",
    },
    bio: "Damilare Paul Akolade is a seasoned entrepreneur, venture capital advisor, and business operations expert with over 10 years of experience spanning fintech, e-commerce, and digital innovation. As the founder of Vant, a fast-growing fintech startup supported by Orange Corners Nigeria, Fate Foundation, Microsoft, Lagos Innovates and AWS Build. Paul is committed to driving financial inclusion and empowering individuals and businesses through cutting-edge payment solutions.\nThroughout his career, Paul has demonstrated a deep passion for building transformative businesses and leading high-performance teams. His expertise spans product development, strategic planning, financial management, business operations and digital marketing. With a proven track record in driving business growth and operational efficiency, Paul has successfully led the development and launch of multiple products in diverse industries, including e-commerce, fintech, and mobility-tech.\nPaul is not only a business leader but also a thought leader and educator. He shares his knowledge and insights through speaking engagements and teaching roles, having instructed over 1,500 participants and spoken at several industry events. His talks focus on the intersection of technology, entrepreneurship, and innovation, offering practical insights on topics such as fintech, digital transformation, and startup growth strategies.\nIn addition to his entrepreneurial endeavors, Paul has held senior leadership positions in several organizations, including Eaglion Global HQ, RuffnTumble, Essenza, Bedmate and BuyASAP Africa, where he played a pivotal role in product management, operations, marketing & sales, and market expansion. His hands-on leadership has contributed to the growth and success of multiple businesses, helping them navigate complex markets and achieve scalable success.\nPaul Akolade’s visionary leadership, coupled with his technical acumen, makes him a sought-after speaker and advisor for businesses looking to harness technology for growth and impact.",
  },
  {
    name: "Iyanu Gabriel",
    image: IyanuGabriel,
    title: "Product Lead, Stealth Startup",
    role: "Speaker and Mentor",
    socials: {
      linkedin: "https://www.linkedin.com/in/paulakolade/",
    },
    bio: "Iyanu Gabriel is a seasoned product leader with over a decade of experience in building innovative digital products across fintech, mobility, and e-commerce. He has successfully led cross-functional teams in the development of solutions that have generated over $15 million in ARR and contributed to raising over $350 million in funding. Currently, Iyanu serves as the Product Lead at a Stealth startup, driving the creation of cutting-edge financial products for the African market. His passion lies in leveraging technology to drive business growth and foster innovation.",
  },

  {
    name: "Oluwaseyi Ogidiolu",
    image: OluwaseyiOgidiolu,
    title: "Technical Advisor, GIZ",
    role: "Speaker and Mentor",
    socials: {
      linkedin: "https://www.linkedin.com/in/oluwaseyi-ogidiolu/",
    },
    bio: "Oluwaseyi Christopher Ogidiolu is a Technical Advisor, Digital Innovation and Entrepreneurship with the Digital Transformation Center Nigeria (DTC Nigeria), which is funded by the European Union (EU) and the German Federal Ministry for Economic Co-operation and Development (BMZ) and implemented by Deutsche Gesellschaft fuer Internationale Zusammenarbeit (GIZ) GmbH with a primary focus on Digitalization and Entrepreneurship. The project aims to contribute to the improvement of the capacity of the Nigerian economy to implement digital innovations for growth, through supporting the digital transformation of the economy and society. \nHe holds a A.A, B.Tech, MSc.LT and MBA degrees in sciences, humanities and business management. \nHis professional experience cuts across research and corporate innovation, digital economy, business transformation, project management, organisational development, policy, private and public sector development, ecosystem development, enterprise development, and corporate governance.\nHe has have been involved in over five global partnership development, innovation development, was a research advisor on the Greek Financial Crisis, the creator of the Afripreneur Toolkit, a Project Manager for digital transformation and commercialisation projects, led global consortia project development such as a Precious Metals Buying Platform & konn3ct virtual conferencing App.\nA serving board member of Digital Ecosystem Advisory Group (DEAG), Ogun Tech Community (OTC), member of committees of the Nigerian Institute of Management (Chartered) and a faculty member of the MOE Business School. He served and worked with several committees and teams at both governmental and non-governmental levels.\nHe loves listening to music, travelling, working with people and having fun.",
  },
  {
    name: "Olalekan Akinsande",
    image: OlalekanAkinsande,
    title: "Data Scientist, Mastercard Foundation",
    role: "Speaker and Mentor",
    socials: {
      linkedin: "https://www.linkedin.com/in/akinsande-olalekan/",
    },
    bio: "Olalekan (Lekan) Akinsande is an award-winning data scientist, AI expert, and technology leader with about a decade of experience driving transformative data solutions across sectors such as international development, financial services, education, healthcare, and governance. His career is marked by an impressive track record of delivering innovative analytics and AI-powered projects that generate measurable impact.\nCurrently, as a Data Scientist at the Mastercard Foundation, Lekan leads data and advanced analytics initiatives, focusing on youth employment and financial inclusion programs across Africa and Canada.\nPrior to joining the Mastercard Foundation, Lekan served as the Data Science and Technical Lead at Data Science Nigeria (DSN), where he drove high-impact projects across multiple sectors. Notably, he led the EKO360 Data Warehouse and Analytics Project in partnership with the Bill & Melinda Gates Foundation and the Lagos State Bureau of Statistics, streamlining data collection and improving decision-making processes for the Lagos State Government. His leadership of Africa’s largest AI Bootcamp and his team’s recognition as the only African finalist in the XPRIZE Pandemic Response Challenge further underscore his commitment to advancing AI and data science on the continent\nDuring his time as a Data Scientist at KPMG Nigeria, Lekan worked with the Analytics & Operations practice to develop advanced analytics solutions for clients across different sectors including the financial services and retail sector. In his earlier role as a Business Analyst at Crown Interactive Limited, Lekan delivered key insights through business intelligence dashboards and facilitated improved decision-making for utility companies. He played a pivotal role in enhancing operational efficiency for power utilities in Sub-Saharan Africa by leading the development of a reporting system for Feeder load data and Network Management\nLekan is a certified Artificial Intelligence Engineer (AIE™) and is currently pursuing a Masters of Science (MSc) in Analytics at the Georgia Institute of Technology, USA. His thought leadership is widely recognized, with contributions to peer-reviewed publications and speaking engagements at international conferences, including those organized by UNESCO and the ACM Conference on Economics and Computation\nDriven by a passion for leveraging data and AI to address global challenges, Lekan's work continues to empower organizations, communities, and governments to achieve transformative outcomes through technology.",
  },
];

export const experts= allExperts.map((expert, index) => ({ ...expert, id: index + 1 }));

export type Expert = (typeof experts)[number];
