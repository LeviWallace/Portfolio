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
            className="flex md:flex-row flex-col justify-between z-10 mix-blend-color-dodge gap-1 lg:gap-0 border-b-2 border-secondary"
        >
            {
                <>
                    <h1 className="text-primary font-play xl:text-5xl lg:text-4xl text-3xl tracking-tighter flex-shrink-0">
                        {position.title}
                    </h1>
                    <h1 className="text-primary font-play xl:text-5xl lg:text-4xl text-3xl tracking-tighter flex-shrink-0">
                        {position.position}
                    </h1>
                    <h1 className="text-primary font-play xl:text-5xl lg:text-4xl text-3xl tracking-tighter">
                        {position.time}
                    </h1>
                </>
            }
        </div>
    );
}

export default function LeadershipSection() {
    return (
        <div className="relative w-full lg:h-screen h-fit bg-secondary p-3">
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-0">
                <svg className="lg:w-1/2 w-full h-full opacity-60">
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

            <h1 id="leadership" className="relative text-primary font-play lg:text-9xl text-7xl tracking-tighter z-10">Leadership</h1>
            <div className="flex flex-col h-3/4 lg:gap-3 gap-7 mt-4 justify-between mx-4">
                {siteConfig.leadership.map((position, index) => (
                    <Leadership key={index} position={position} />
                ))}
            </div>
        </div>
    );
}