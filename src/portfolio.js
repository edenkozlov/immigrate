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
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Immigrate",
  title: "Immigrate",
  subTitle: 
    "Immigration made easy - the best way to get all your cases done!"
  ,
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  twitter: "https://twitter.com/home?lang=en",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  instagram: "https://www.instagram.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What We Do",
  subTitle: "Automate any case, both local files and portals",
  skills: [
    emoji(
      "- Fill only once and receive your case fully filled out"
    ),
    emoji("-Use autofill to access previously inputed data"),
    emoji(
      "-Auto validate all forms "
    ),
    emoji(
      "-Decrease chances of errors"
    ),
    emoji("-Only you can access sensitive saved info"),
    emoji(
      "-Our servers are maintained regularly, updating new files upon release"
    ),
    emoji(
      "-Exceptional customer support"
    ),
    emoji(
      "-Work on the go with the mobile version"
    )
  ],
  skillsFr: [
    emoji(
      "-Remplissez une seule fois et recevez votre dossier entièrement rempli"
    ),
    emoji("-Utiliser le remplissage automatique pour accéder aux données saisies précédemment"),
    emoji(
      "-Valider automatiquement tous les formulaires "
    ),
    emoji(
      "-Diminuer les risques d'erreurs"
    ),
    emoji("-Vous seul pouvez accéder aux informations sensibles enregistrées"),

    emoji(
      "-Nos serveurs sont entretenus régulièrement, mettant à jour les nouveaux fichiers dès leur sortie"
    ),
    emoji(
      "-Support client exceptionnel"
    ),
    emoji(
      "-Travaillez en déplacement avec la version mobile"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Safe",
      fontAwesomeClassname: "fas fa-user-shield" 
    },
    {
      skillName: "Fast",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Error Free",
      fontAwesomeClassname: "fas fa-exclamation-triangle"
    },
    {
      skillName: "Up To Date Files",
      fontAwesomeClassname: "fas fa-file"
    },
    {
      skillName: "Support",
      fontAwesomeClassname: "fas fa-hard-hat"
    },
    {
      skillName: "Mobile Friendly",
      fontAwesomeClassname: "fas fa-mobile-alt"
    }
  ],
  softwareSkillsFr: [
    {
      skillName: "Sécurisé",
      fontAwesomeClassname: "fas fa-user-shield" 
    },
    {
      skillName: "rapide",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "réduction des erreurs",
      fontAwesomeClassname: "fas fa-exclamation-triangle"
    },
    {
      skillName: "Mise à jour du fichier",
      fontAwesomeClassname: "fas fa-file"
    },
    {
      skillName: "Soutien",
      fontAwesomeClassname: "fas fa-hard-hat"
    },
    {
      skillName: "Mobile", 
      fontAwesomeClassname: "fas fa-mobile-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Local files",
      logo: require("./assets/images/local-files.png"),
      subHeader: "In english and in french",
      duration: "Update Status: Up To Date",
      desc: "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      schoolName: "Portals (CICC and the other one)",
      logo: require("./assets/images/portals.png"),
      subHeader: "In english and in french",
      duration: "Update Status: Up To Date",
      desc: "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    }
  ],
  schoolsFr: [
    {
      schoolName: "Fichiers Locaux",
      logo: require("./assets/images/local-files.png"),
      subHeader: "En anglais et en français",
      duration: "État de la mise à jour: À jour",
      desc: "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      schoolName: "Portails (CICC et l'autre)",
      logo: require("./assets/images/portals.png"),
      subHeader: "En anglais et en français",
      duration: "État de la mise à jour: À jour",
      desc: "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "A normal case (without immigrate) - 4 hours", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "A case with Immigrate - 15 minutes",
      progressPercentage: "60%"
    },
    {
      Stack: "A case with Immigrate Pro - 3 minutes",
      progressPercentage: "40%"
    }
  ],
  experienceFr: [
    {
      Stack: "Un cas normal (sans immigrer) - 4 heures", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Un cas avec Immigrate - 15 minutes",
      progressPercentage: "60%"
    },
    {
      Stack: "Un cas avec Immigrate Pro - 3 minutes",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Pricing"),
  subtitle:
    "Get ahead with a subscription today!!",

  achievementsCards: [
    {
      title: "Immigrate",
      subtitle:
        "Basic package",
      image: require("./assets/images/immigrate.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Subscribe",
          url: "https://www.google.com/"
        }
      ]
    },
    {
      title: "Immigrate Pro",
      subtitle:
        "Similar to basic package but with portals",
      image: require("./assets/images/immigratepro.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Subscribe",
          url: "https://www.google.com/"
        }
      ]
    },

    {
      title: "Immigrate Plus",
      subtitle: "Similar to Immigrate Pro but with autofill",
      image: require("./assets/images/immigrateplus.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Subscribe",
          url: "https://www.google.com/"
        }
      ]
    }
  ],
  achievementsCardsFr: [
    {
      title: "Immigrate",
      subtitle:
        "Paquet de base",
      image: require("./assets/images/immigrate.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "S'abonner",
          url: "https://www.google.com/"
        }
      ]
    },
    {
      title: "Immigrate Pro",
      subtitle:
        "Similaire au package de base mais avec des portails",
      image: require("./assets/images/immigratepro.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "S'abonner",
          url: "https://www.google.com/"
        }
      ]
    },

    {
      title: "Immigrate Plus",
      subtitle: "Similaire à Immigrate Pro mais avec remplissage automatique",
      image: require("./assets/images/immigrateplus.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "S'abonner",
          url: "https://www.google.com/"
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
      url: "http://localhost:3000/Signin/signedin/sponsorship-spousal",
      title: "Sponsorship: Spousal",
      description:
        "IMM1344, IMM5532, IMM5475, IMM5476, IMM0008, IMM5562, IMM5669, IMM5406, IMM5546"
    },
    {
      url: "http://localhost:3000/Signin/signedin/sponsorship-parental",
      title: "Sponsorship: Parental",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Sponsorship: The other one",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Sponsorship: Spousal",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Sponsorship: Parental",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Sponsorship: The other one",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Sponsorship: Spousal",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Sponsorship: Parental",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Sponsorship: The other one",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Sponsorship: Spousal",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Sponsorship: Parental",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Sponsorship: The other one",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    }
  ],
  blogsFr: [
    {
      url: "http://localhost:3000/Signin/signedin/sponsorship-spousal",
      title: "Parrainage: Conjoint",
      description:
        "IMM1344, IMM5532, IMM5475, IMM5476, IMM0008, IMM5562, IMM5669, IMM5406, IMM5546"
    },
    {
      url: "http://localhost:3000/Signin/signedin/sponsorship-parental",
      title: "Parrainage: Parental",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Sponsorship: The other one",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Sponsorship: Spousal",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Sponsorship: Parental",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Sponsorship: The other one",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Sponsorship: Spousal",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Sponsorship: Parental",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Sponsorship: The other one",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Sponsorship: Spousal",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Sponsorship: Parental",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Sponsorship: The other one",
      description:
        "IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344, IMM1344"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Us ☎️"),
  subtitle:
    "We offer free customer support and provide personal tailored services.",
  number: "+1 (514) 710-2555",
  email_address: "edenkozlov@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable
};
