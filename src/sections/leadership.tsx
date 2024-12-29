import { siteConfig } from "@/config/site";


interface LeadershipProps {
    position: {
        title: string;
        position: string;
        time: string;
        roles: string[];
    };
}

function Leadership({ position }: LeadershipProps) {

    return (
        <div 
            className="flex flex-row justify-between z-10 mix-blend-color-dodge border-b-2 border-secondary"
        >
            {
                <>
                    <h1 className="text-primary font-play text-5xl tracking-tighter flex-shrink-0">
                        {position.title}
                    </h1>
                    <h1 className="text-primary font-play text-5xl tracking-tighter flex-shrink-0">
                        {position.position}
                    </h1>
                    <h1 className="text-primary font-play text-5xl tracking-tighter">
                        {position.time}
                    </h1>
                </>
            }
        </div>
    );
}

export default function LeadershipSection() {
    return (
        <div className="relative w-full h-screen bg-secondary p-3">
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-0">
                <svg className="w-1/2 h-full opacity-60">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="60%">
                            <stop offset="10%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: "red", stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: "hsl(var(--secondary))", stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <circle cx="50%" cy="60%" r="40%" fill="url(#grad1)" />
                </svg>
            </div>

            <h1 id="leadership" className="relative text-primary font-play text-9xl tracking-tighter z-10">Leadership</h1>
            <div className="flex flex-col h-3/4 gap-3 justify-between mx-4">
                {siteConfig.leadership.map((position, index) => (
                    <Leadership key={index} position={position} />
                ))}
            </div>
        </div>
    );
}