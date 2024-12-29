import { GithubIcon } from "@/components/icons";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { siteConfig } from "@/config/site";

interface Job {
    title: string;
    time: string;
    position: string;
    description: string[];
  }
  
  interface ExperienceCardProps {
    job: Job;
    index: number;
  }
  
  function ExperienceCard({ job, index }: ExperienceCardProps) {
    const [isHovering, setIsHovering] = useState(false);
  
    const ref = useRef(null)
    const isInView = useInView(ref);
  
    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };
  
    return (
      <div ref={ref} key={index} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={`my-2 p-3 ${isHovering ? "bg-background" : "bg-foreground"} transition ease-in-out druation-300
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

export default function ExperienceSection() {
    return (
        <div className="w-full h-full bg-foreground p-3">
            <h1 id="experience" className="text-background font-play text-9xl tracking-tighter">Experience</h1>
            <div className="w-3/4 m-auto">
            {siteConfig.experience.map((job, index) => (
                <ExperienceCard job={job} index={index} key={index}/>
            ))}
            </div>
        </div>
    )
}