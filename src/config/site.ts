export type SiteConfig = typeof siteConfig;

export const degreeStyles: {[key: string]: string} = {
  "MA": "italic",
  "CSSE": "font-bold",
  "ENGL": "underline",
}


export const siteConfig = {
  name: "LEVI WALLACE",
  description: "Levi Wallace's Portfolio",
  titles: [
    [
      { title: "Experience", href: "#experience", style: "" },
      { title: "Projects", href: "#projects", style: "" },
      { title: "Education", href: "#education", style: "" },
      { title: "Leadership", href: "#leadership", style: "" }
    ],
    [
      { title: "Levi S. Wallace", href: "#", style: "text-2xl" },
      { title: "", href: "", style: "" },
      { title: "", href: "", style: "" },
      { title: "", href: "", style: "" }
    ],
    [
      { title: "", href: "#", style: "" },
      { title: "", href: "#", style: "" },
      { title: "", href: "#", style: "" },
      { title: "", href: "#", style: "" }
    ],
    [
      { title: "Rose-Hulman Institute of Technology\nB.S. in Computer Science\nMinor in Mathematics\nMinor in Theater & Drama", href: "#", style: "text-sm tracking-tighter" },
      { title: "", href: "#", style: "" },
      { title: "Contact:", href: "#", style: "font-bold" },
      { title: "*", href: "#", style: "" }
    ]
  ],
  experience: [
    {
      title: "Rose-Hulman Grand Prix Engineering [Formula SAE]",
      time: "Aug 2024 - Present",
      position: "Full Stack Software Engineer",
      description: [
        "Uncovered and translated a deprecated database, containing various vehicles, tracks, configurations, etc",
        "Simulated and developed various electric vehicle sweeps in a Flask Python back end, and a React front end"
      ]
    },
    {
      title: "Sensitic Technologies",
      time: "June 2023 - August 2024",
      position: "Software Engineering Intern",
      description: [
        "Developed and designed low-level camera code in Visual Studio",
        "Written in C++ and a corresponding User Interface in Python",
        "Analyzed and Processed data captured from the camera to produce a real-time display"
      ]
    },
    {
      title: "Sensitic Technologies",
      time: "June 2023 - August 2023",
      position: "Software Engineering Intern",
      description: [
        "Developed a data processing and visualization tool designed to intake live sensor information from rockets and construct a visual representation of their telemetry",
        "Written mainly in C# using Unity, reading AIS (Automatic Identification System) data",
        "Demonstrated rocket trajectory using telemetry data"
      ]
    },
    {
      title: "theCoderSchool",
      time: "Jun 2021 - August 2021",
      position: "Coding Tutor",
      description: [
        "Taught Python to children of ages 10 through 12",
        "Excelled in explaining topics such as functions and methods, by abstracting the idea into tangible examples"
      ]
    }
  ],
  projects: [
    {
      field: "Simulation Software",
      title: "RoseLap6",
      description: "Laptime Simulation Software for the Rose-Hulman Grand Prix Engineering Team",
      technologies: ["React", "Tailwind", "Node"],
      github: "https://github.com/LeviWallace/RoseLap6"
    },
    {
      field: "Simulation Software",
      title: "RoseLap6",
      description: "Tract Premium helps you start saver investments insights covering.",
      technologies: ["React", "Tailwind", "Node"],
      github: "https://github.com/LeviWallace/RoseLap6"
    },
    {
      field: "Simulation Software",
      title: "RoseLap6",
      description: "Tract Premium helps you start saver investments insights covering.",
      technologies: ["React", "Tailwind", "Node"],
      github: "https://github.com/LeviWallace/RoseLap6"
    },
    {
      field: "Simulation Software",
      title: "RoseLap6",
      description: "Tract Premium helps you start saver investments insights covering.",
      technologies: ["React", "Tailwind", "Node"],
      github: "https://github.com/LeviWallace/RoseLap6"
    },
  ],
  education: {
    school: "Rose-Hulman Institute of Technology",
    gpa: "3.23",
    degrees: [
      {
        title: "Minor in Mathematics",
        key: "MA",
      },
      {
        title: "Bachelor of Science in Computer Science",
        key: "CSSE",
      },
      {
        title: "Minor in Theater & Drama",
        key: "ENGL",
      },
    ],
    time: "Aug 2021 - May 2025",
    classes: [
      {
        title: "Calculus I",
        subject: "MA",
      }, {
        title: "Object-Oriented Software Development",
        subject: "CSSE",
      }, {
        title: "Physics I",
        subject: "",
      }, {
        title: "Physics I Lab",
        subject: "",
      }, {
        title: "Introduction to Web Programming",
        subject: "CSSE",
      }, {
        title: "Rhetoric and Composition",
        subject: "",
      }, {
        title: "Foundations for RHIT Success",
        subject: "",
      }, {
        title: "Calculus II",
        subject: "MA",
      }, {
        title: "Physics II",
        subject: "",
      }, {
        title: "Physics II Lab",
        subject: "",
      }, {
        title: "Anatomy & Physiology",
        subject: "",
      }, {
        title: "Introduction to Systems Programming",
        subject: "CSSE",
      }, {
        title: "Introduction to Digital Systems",
        subject: "CSSE",
      }, {
        title: "Calculus III",
        subject: "MA",
      }, {
        title: "General Chemistry I",
        subject: "",
      }, {
        title: "General Chemistry I Lab",
        subject: "",
      }, {
        title: "Data Structures & Algorithm Analysis",
        subject: "CSSE",
      }, {
        title: "Computer Architecture I",
        subject: "CSSE",
      }, {
        title: "Matrix Algebra & Differential Equations I",
        subject: "MA",
      }, {
        title: "Programming Language Concepts",
        subject: "CSSE",
      }, {
        title: "American Drama",
        subject: "ENGL",
      }, {
        title: "Introduction to Proofs",
        subject: "MA",
      }, {
        title: "Technical & Professional Communication",
        subject: "",
      }, {
        title: "Cybercrime & Digital Forensics",
        subject: "CSSE",
      }, {
        title: "Introduction to Macroeconomics",
        subject: "",
      }, {
        title: "Intro Probablity w/ Application to Statistics",
        subject: "MA",
      }, {
        title: "International Relations",
        subject: "",
      }, {
        title: "Introduction to East Asia",
        subject: "",
      }, {
        title: "Irish Drama",
        subject: "ENGL",
      }, {
        title: "Software Design",
        subject: "CSSE",
      }, {
        title: "Technical Entrepreneurship",
        subject: "",
      }, {
        title: "Introduction to Database Systems",
        subject: "CSSE",
      }, {
        title: "Ethics in Computing",
        subject: "CSSE",
      }, {
        title: "African American Drama",
        subject: "ENGL",
      }, {
        title: "Combinatorics",
        subject: "MA",
      }, {
        title: "Acting: American Method",
        subject: "ENGL",
      }, {
        title: "Software Requirements Engineering",
        subject: "CSSE",
      }, {
        title: "Theory of Computation",
        subject: "MA",
      }, {
        title: "Engineering Statistics I",
        subject: "MA",
      }, {
        title: "Artificial Intelligence",
        subject: "CSSE",
      }, {
        title: "Matrix Algebra & Differential Equations II",
        subject: "MA",
      }, {
        title: "Capstone Design I",
        subject: "",
      },
    ]
  },
  links: [
    {
      label: "Github",
      url: "https://github.com/LeviWallace"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/levi-wallace/"
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/iamleviwallace/"
    },
    {
      label: "Email",
      url: "mailto:leviwallace2002@gmail.com"
    },
    {
      label: "Resume",
      url: "https://drive.google.com/file/d/1THmXUEp6KDt9xvEW1aFmlmu6bLEdMEHR/view"
    }
  ]
};
