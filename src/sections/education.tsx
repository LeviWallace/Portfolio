import { degreeStyles, siteConfig } from "@/config/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

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
      useTransform(scrollYProgress, [0, 0.5, 1], ["500px", "0px", "-100px"]),
      useTransform(scrollYProgress, [0, 0.5, 1], ["-400px", "0px", "100px"]),
      useTransform(scrollYProgress, [0, 0.5, 1], ["300px", "0px", "-300px"]),
      useTransform(scrollYProgress, [0, 0.5, 1], ["-300px", "0px", "200px"]),
      useTransform(scrollYProgress, [0, 0.5, 1], ["100px", "0px", "-50px"]),
      useTransform(scrollYProgress, [0, 0.5, 1], ["-100px", "0px", "100px"]),
    ]
  
    console.log(scrollYProgress)
    return (
      <div ref={refernce} className="overflow-hidden">
        {classes.map((_course, index) => (
        <motion.div style={{ x: scrollSpeeds[index] }} key={index} className="flex flex-row mt-4 gap-3">
          {classes.slice(index * 7, index * 7 + 7).map((course, subIndex) => (
          <h3 key={subIndex} className={`${degreeStyles[course.subject]} text-foreground font-play lg:text-2xl md:text-xl text-lg lg:translate-x-0 -translate-x-56 tracking-tighter mx-2 whitespace-nowrap`}>
            {course.title}
          </h3>
          ))}
        </motion.div>
        ))}
      </div>
    )
  }

export default function EducationSection() {
    const ref = useRef(null);

    return (
        <div>
            <div ref={ref} className="w-full h-screen bg-background p-3">
            <div className="flex lg:flex-row flex-col justify-between mb-10">
              <h1 id="education" className="text-foreground font-play lg:text-9xl text-7xl tracking-tighter">Education</h1>
              <h1 className="text-foreground font-play text-5xl font-bold tracking-tighter mr-10 lg:my-7">GPA: {siteConfig.education.gpa}</h1>
            </div>
            <div className="flex flex-col mt-6 m-4">
              <h1 className="text-foreground font-play lg:text-6xl text-4xl font-black tracking-tighter w-full text-center">ROSE-HULMAN INSTITUTE OF TECHNOLOGY</h1>
              <div className="flex lg:flex-row flex-col justify-around mt-4 lg:gap-3 gap-6 text-center">
                {siteConfig.education.degrees.map((degree) => (
                  <h3 key={degree.key} className={`${degreeStyles[degree.key]} text-foreground font-play text-2xl tracking-tighter mx-2`}>{degree.title}</h3>
                ))}
              </div>
              <div className="overflow-hidden my-8">
                <ClassCarousel ref={ref}/>
              </div>
            </div>
          </div>
        </div>
    );
}