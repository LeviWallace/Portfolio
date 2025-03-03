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
      { title: "Experience", href: "#experience", style: "", key: 1 },
      { title: "Projects", href: "#projects", style: "", key: 2 },
      { title: "Education", href: "#education", style: "", key: 3 },
      { title: "Leadership", href: "#leadership", style: "", key: 4 }
    ],
    [
      { title: "Levi S. Wallace", href: "#", style: "text-2xl", key: 5 },
      { title: "", href: "", style: "", key: 6 },
      { title: "", href: "", style: "", key: 7 },
      { title: "", href: "", style: "", key: 8 }
    ],
    [
      { title: "", href: "#", style: "", key: 9 },
      { title: "", href: "#", style: "", key: 10 },
      { title: "", href: "#", style: "", key: 11 },
      { title: "", href: "#", style: "", key: 12 }
    ],
    [
      { title: "Rose-Hulman Institute of Technology\nB.S. in Computer Science\nMinor in Mathematics\nMinor in Theater & Drama", href: "#", style: "text-sm tracking-tighter", key: 13 },
      { title: "", href: "#", style: "", key: 14 },
      { title: "Contact:", href: "#", style: "font-bold", key: 15 },
      { title: "*", href: "#", style: "", key: 16 }
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
      time: "June 2021 - August 2021",
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
      technologies: ["Python", "React", "C"],
      github: "https://github.com/LeviWallace/RoseLap6"
    },
    {
      field: "Java Source Code Analysis",
      title: "Cassandra",
      description: "A source code parser enhancing Java code, improving code quality and maintainability",
      technologies: ["Java", "ASM", "Maven"],
      github: "https://github.com/LeviWallace/Cassandra"
    },
    {
      field: "Microsoft SQL Server Full Stack Application",
      title: "Campus Animal Tracker",
      description: "An MS SQL project used to track animal sitings around Rose-Hulman",
      technologies: ["MS SQL Server", "Java", "Tyhmeleaf", "Spring Boot"],
      github: "https://github.com/LeviWallace/Cassandra"
    },
    {
      field: "Addition to the XV6 Operating System",
      title: "XV6 with threads",
      description: "Addition to the XV6 operating system adding thread support",
      technologies: ["C", "Linux", "Vim", "GDB", "Valgrind", "QEMU"],
      github: "https://github.com/LeviWallace/xv6-riscv-threads"
    },
    {
      field: "Movie Rating Discord Bot",
      title: "Carnival Bot",
      description: "A Discord Bot written during COVID-19 to manage friend group movie ratings",
      technologies: ["HTML", "JavaScript", "CSS", "Python"],
      github: "https://github.com/LeviWallace/Carnival"
    },
    // {
    //   field: "Simulation Software",
    //   title: "RoseLap6",
    //   description: "Tract Premium helps you start saver investments insights covering.",
    //   technologies: ["React", "Tailwind", "Node"],
    //   github: "https://github.com/LeviWallace/RoseLap6"
    // },
    // {
    //   field: "Simulation Software",
    //   title: "RoseLap6",
    //   description: "Tract Premium helps you start saver investments insights covering.",
    //   technologies: ["React", "Tailwind", "Node"],
    //   github: "https://github.com/LeviWallace/RoseLap6"
    // },
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
  }, leadership: [
    {
      title: "Sigma Nu Fraternity",
      position: "Vice President",
      time: "Jan 2024 Dec 2024",
      roles: [
        "Managed a team of 10 members",
        "Organized and executed 5 events",
        "Increased membership by 30%"
      ]
    },
    {
      title: "Interfraternity Council",
      position: "Representative",
      time: "Jan 2024 Dec 2024",
      roles: [
        "Managed a team of 10 members",
        "Organized and executed 5 events",
        "Increased membership by 30%"
      ]
    },
    {
      title: "Student Government",
      position: "Senator",
      time: "Jan 2024 May 2024",
      roles: [
        "Managed a team of 10 members",
        "Organized and executed 5 events",
        "Increased membership by 30%"
      ]
    },
    {
      title: "Shakespeare Club",
      position: "Event Organizer",
      time: "Jan 2024 Dec 2024",
      roles: [
        "Managed a team of 10 members",
        "Organized and executed 5 events",
        "Increased membership by 30%"
      ]
    },
    {
      title: "Sigma Nu Fraternity",
      position: "Recorder",
      time: "Jan 2023 Dec 2023",
      roles: [
        "Managed a team of 10 members",
        "Organized and executed 5 events",
        "Increased membership by 30%"
      ]
    }
  ],
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
      url: "https://drive.google.com/file/d/1Rnbt1YNByBYiOvufO1P_BCjlk0Bf-T3u/view?usp=drive_link"
    }
  ]
};
