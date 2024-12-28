import { GithubIcon} from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { motion, useInView, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { siteConfig, degreeStyles } from "@/config/site";

interface Job {
  title: string;
  time: string;
  position: string;
  description: string[];
}

interface ExperienceSectionProps {
  job: Job;
  index: number;
}

function ExperienceSection({ job, index }: ExperienceSectionProps) {
  const [isHovering, setIsHovering] = useState(false);

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div ref={ref} key={index} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={`my-2 p-3 ${isHovering ? "bg-background" : "bg-foreground"} transition ease-in-out
        ${isInView ? "opacity-100" : "opacity-0"}
    `}>      
      <div className="flex justify-between">
        <h3 className={`text-2xl ${isHovering ? "text-foreground" : "text-background"} font-play tracking-tighter`}>{job.title}</h3>
        <h3 className={`${isHovering ? "text-foreground" : "text-background"}  font-play leading-loose tracking-tighter`}>{job.time}</h3>
      </div>
      <div className={`border-t-1 ${isHovering ? "border-foreground" : "border-background"}  py-2`}>
        <h3 className={`italic ${isHovering ? "text-foreground" : "text-background"}  font-play tracking-tighter mb-2`}>{job.position}</h3>
        <ul className="">
          {job.description.map((desc, index) => (
            <li key={index} className={`${isHovering ? "text-foreground" : "text-background"} font-play tracking-tighter mb-1`}>{desc}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end">
          <GithubIcon className={`${isHovering ? "text-foreground" : "invisible"}`}/>
      </div>
    </div>
  )
};

interface ClassCarouselProps {
  ref: React.RefObject<HTMLDivElement>;
}

function ClassCarousel({ ref }: ClassCarouselProps) {
  const refernce = ref || useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const [classes] = useState(siteConfig.education.classes);

  
  const scrollSpeeds = [
    useTransform(scrollYProgress, [0, 0.5, 1], ["-500px", "0px", "100px"]),
    useTransform(scrollYProgress, [0, 0.5, 1], ["-200px", "0px", "300px"]),
    useTransform(scrollYProgress, [0, 0.5, 1], ["-300px", "0px", "300px"]),
    useTransform(scrollYProgress, [0, 0.5, 1], ["-300px", "0px", "200px"]),
    useTransform(scrollYProgress, [0, 0.5, 1], ["100px", "0px", "-50px"]),
    useTransform(scrollYProgress, [0, 0.5, 1], ["-100px", "0px", "100px"]),
  ]

  console.log(scrollYProgress)
  return (
    <div ref={refernce}>
      {classes.map((course, index) => (
        <motion.div style={{x: scrollSpeeds[index]}} key={index} className="flex flex-row mt-4 gap-3 overflow-hidden">
          {classes.slice(index * 7, index * 7 + 7).map((course, subIndex) => (
            <h3 key={subIndex} className={`${degreeStyles[course.subject]} text-foreground font-play text-2xl tracking-tighter mx-2 whitespace-nowrap`}>{course.title}</h3>
          ))}
        </motion.div>
      ))}
      
      
    </div>
  )
}


export default function IndexPage() {

  const ref = useRef(null);

  return (
    <>
      {/* %% OVERLAY */}
      <div className="flex justify-end fixed w-full h-full bg-transparent z-20 pointer-events-none">
        
        <h1 className="font-play tracking-tighter whitespace-break-spaces pointer-events-auto m-2">
          <ThemeSwitch />
        </h1>
      </div>

      {/* %% LANDING PAGE */}
      <div>
        <div className="h-screen flex bg-background -z-10">
          <div className="flex flex-col w-1/6 mt-10">
            <svg className="w-full h-full">
              <circle cx="50%" cy="50%" r="40%" fill="hsl(var(--foreground))" />
            </svg>
            <svg className="w-full h-full">
              <circle cx="50%" cy="50%" r="40%" fill="hsl(var(--foreground))" />
            </svg>
          </div>

          <div className="w-1/2 mx-auto">
            {siteConfig.titles.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4 p-2 h-1/4 gap-2">
                {row.map((item, colIndex) => (
                  <div key={colIndex} className="col-start-auto col-span-1 w-full -z-5 border-primary border-1 transition ease-in-out hover:bg-primary [&>*]:hover:text-background">
                    {item.title == "*" ? (
                      <ul>
                        {siteConfig.links.map((link) => (
                          <li key={link.label}>
                            <a href={link.url} target="_blank" className={`${item.style} font-play font-thin text-foreground z-10 tracking-tighter`}>{link.label} </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <a href={item.href !== "#" ? item.href : ""} className={`${item.style} tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap`}>
                        {item.title}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col w-1/6">
            <svg className="w=full h-full">
              <circle cx="50%" cy="50%" r="40%" fill="hsl(var(--primary))" />
            </svg>
            <svg className="w=full h-full">
              <circle cx="50%" cy="50%" r="40%" fill="hsl(var(--primary))" />
            </svg>
          </div>
        </div>

        { /* %% EXPERIENCE PAGE */}
        <div className="w-full h-full bg-foreground p-3">
          <h1 id="experience" className="text-background font-play text-9xl tracking-tighter">Experience</h1>
          <div className="w-3/4 m-auto">
            {siteConfig.experience.map((job, index) => (
              <ExperienceSection job={job} index={index} key={index}/>
            ))}
          </div>
        </div>

        { /* %% PROJECTS PAGE */}
        <div className="w-full h-screen bg-primary p-3">
          <h1 id="projects" className="text-foreground font-play text-9xl tracking-tighter">Projects</h1>
          <div className="w-4/5 m-auto my-4 flex flex-wrap justify-around align- gap-2 gap-y-6">
            {siteConfig.projects.map((project, index) => (
              <div key={index} className="bg-background p-4 pb-3 rounded-xl w-[32%] hover:scale-105 hover:translate-y-3 transition ease-in-out">
              <h4 className="text-foreground font-thin font-play tracking-tight">{project.field}</h4>
              <h3 className="text-foreground font-play font-black text-2xl tracking-tighter">{project.title}</h3>
              <p className="text-foreground font-play tracking-tighter font-thin my-2">{project.description}</p>
              <div className="border-t-1 border-foregroud flex justify-between">
                <div className="flex flex-row w-2/3 justify-around mt-2">
                  {project.technologies.map((tech, index) => (
                    <p key={index} className="font-thin text-foreground">{tech}</p>
                  ))}
                </div>
                <div className="flex flex-row py-1 w-1/3 justify-end pr-1">
                  <a href={project.github} target="_blank"><GithubIcon /></a>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
        
        { /* %% EDUCATION PAGE */}
        <div>
            <div ref={ref} className="w-full h-screen bg-background p-3">
            <div className="flex justify-between">
              <h1 id="education" className="text-foreground font-play text-9xl tracking-tighter">Education</h1>
              <h1 className="text-foreground font-play text-5xl font-bold tracking-tighter mx-10 my-5">GPA: {siteConfig.education.gpa}</h1>
            </div>
            <div className="flex flex-col m-4">
              <h1 className="text-foreground font-play text-6xl font-black tracking-tighter w-full text-center">ROSE-HULMAN INSTITUTE OF TECHNOLOGY</h1>
              <div className="flex flex-row justify-around mt-4 gap-3">
                {siteConfig.education.degrees.map((degree, index) => (
                  <h3 key={degree.key} className={`${degreeStyles[degree.key]} text-foreground font-play text-2xl tracking-tighter mx-2`}>{degree.title}</h3>
                ))}
              </div>
              <div className="overflow-hidden">
                <ClassCarousel ref={ref}/>
              </div>
            </div>
          </div>
        </div>

        { /* %% LEADERSHIP PAGE */}
        <div>
          <div className="w-full h-screen bg-foreground p-3">
            <h1 id="leadership" className="text-primary font-play text-9xl tracking-tighter">Leadership</h1>
          </div>
        </div>
      </div>
    </>
  );
}
