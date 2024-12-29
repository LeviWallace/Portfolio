import ThemeSwitch from "@/components/theme-switch";
import LandingSection from "@/sections/landing";
import ExperienceSection from "@/sections/experience";
import ProjectsSection from "@/sections/projects";
import EducationSection from "@/sections/education";
import LeadershipSection from "@/sections/leadership";


export default function IndexPage() {


  return (
    <>
      {/* %% OVERLAY */}
      <div className="flex justify-end fixed w-full h-full bg-transparent z-20 pointer-events-none">
        
        <h1 className="font-play tracking-tighter whitespace-break-spaces pointer-events-auto m-2">
          <ThemeSwitch />
        </h1>
      </div>

      {/* %% LANDING PAGE */}
      <LandingSection />

      { /* %% EXPERIENCE PAGE */}
      <ExperienceSection />

      { /* %% PROJECTS PAGE */}
      <ProjectsSection />
      
      { /* %% EDUCATION PAGE */}
      <EducationSection />

      { /* %% LEADERSHIP PAGE */}
      <LeadershipSection />
    </>
  );
}
