/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hassan Shahzad",
  title: "Hi all, I'm Hassan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Progressive Web applications with JavaScript / Reactjs / Nodejs / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1puC_npdJD15NbMcjTX9ur52bachlasfE/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HassanRajpoot",
  linkedin: "https://www.linkedin.com/in/hassan-s-1998261b1/",
  gmail: "hassanshahzad1908@gmail.com",
  medium: "https://medium.com/@hassan-shahzad1908",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-leaf"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Comsats University",
      logo: require("./assets/images/download (1).jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "February 201 - February 2023",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems etc"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer I",
      company: "NETSOL Technologies",
      companylogo: require("./assets/images/netsol_tech_pakistan_logo.jpg"),
      date: "June 2023 – Present",
      desc: "I specialize in developing micro front-end and micro services-based SaaS applications using latest technologies, handling the full development lifecycle. Notably, I worked on BMW' US, developing Lane, an end-to-end order management system for asset leasing and credit companies, including third-party integrations and custom backend packages. Currently, I am a Full Stack Developer on AppexNow, the world’s first API-first marketplace for digital products, focusing on innovative and scalable solutions.",
      descBullets: []
    },
    {
      role: "Asspciate Software Engineer",
      company: "Hassol",
      companylogo: require("./assets/images/1724766243197.jpg"),
      date: "Oct 2022 – June 2023",
      desc: "Developed and maintained ERP solutions using React.js for frontend and Python for backend. Built RESTful APIs, optimized databases, and integrated third-party services for seamless functionality"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Screenshot 2025-04-02 180130.png"),
      projectName: "Appexnow",
      projectDesc:
        "At AppexNow, I worked on a custom UI kit and backend package, contributing to both frontend and backend development. I designed reusable and responsive UI components while building scalable backend solutions using a micro services architecture. My work enhanced product customization, flexibility, and seamless integration across the platform.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.appexnow.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/17d78fa5f4eaDrift.png"),
      projectName: "Drift(Customer Portal)",
      projectDesc:
        "I built the Drift portal, a versatile customer portal designed for OEMs and dealers, delivering exceptional Omni channel customer experiences and enhancing direct-to-consumer strategies to drive sales growth.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.appexnow.com/drift"
        }
      ]
    },
    {
      image: require("./assets/images/3d4bf6Dealex.png"),
      projectName: "Lane(Dealer Portal)",
      projectDesc:
        "At Lane I worked on an order management system for OEMs, I handled both frontend and backend development, creating responsive interfaces and ensuring robust server-side functionality. I also optimized components for peak performance across devices and browsers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.appexnow.com/lane"
        }
      ]
    },
    {
      image: require("./assets/images/cropped-Untitled-1-1.png"),
      projectName: "One Packages",
      projectDesc:
        "This site is completly develop on wordpress for the client to help them build a portfolio site for their bussiness",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://onepackages.com/"
        }
      ]
    },
    {
      image: require("./assets/images/Sam-Traders-Black-2.png"),
      projectName: "Sam Trader",
      projectDesc:
        "This site is completly develop on wordpress for the client to help them build a portfolio site for their bussiness and show their product need to the potential clients",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sam-traders.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Python course",
      subtitle: "Python And Django Framework For Beginners Complete Course",
      image: require("./assets/images/udemy-transparent-logo-free-png.webp"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/in/hassan-s-1998261b1/overlay/1730042521022/single-media-viewer?type=DOCUMENT&profileId=ACoAADFr-4UBXA9qmwWCQqKknULLEKMoFvYe1lY&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWnhfDrxrSJmCDXvy0KyOIQ%3D%3D"
        }
      ]
    },
    {
      title: "Web Design",
      subtitle:
        "Web Design for Everybody: Basics of Web Development & Coding Specialization",
      image: require("./assets/images/images (1).png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/87RF7PPA33DW"
        }
      ]
    },
    {
      title: "Graphic Design",
      subtitle: "Graphic Design Specialization",
      image: require("./assets/images/images (1).png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/2CS59HJX48JB"
        }
      ]
    },
    {
      title: "Web Application",
      subtitle: "Web Applications for Everybody Specialization",
      image: require("./assets/images/images (1).png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/SLWHG7PXGB74"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3390074745",
  email_address: "hassanshahzad1908@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
