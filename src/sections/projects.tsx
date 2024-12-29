import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

interface ProjectProps {
    project: {
        field: string;
        title: string;
        description: string;
        technologies: string[];
        github: string;
    };
}

function Project({ project }: ProjectProps) {
    return (
        <div className="bg-background p-4 pb-3 rounded-xl w-[32%] hover:scale-105 transition ease-in-out">
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
    )
}

export default function ProjectsSection() {
    return (
        <div className="w-full h-screen bg-primary p-3">
            <h1 id="projects" className="text-foreground font-play text-9xl tracking-tighter">Projects</h1>
            <div className="flex flex-row flex-wrap gap-4 w-3/4 justify-start mt-7 mx-auto">
                {siteConfig.projects.map((project, index) => (
                    <Project project={project} key={index} />
            ))}
            </div>
        </div>
    );
}