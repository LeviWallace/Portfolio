import { useState } from "react";

function Leadership() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="flex flex-col bg-secondary-foreground z-20 h-fit p-4">
            <div className="">
                <div className="flex flex-row justify-between">
                    <h3 className="font-play text-foreground tracking-tight font-bold mt-3">Sigma Nu Fraturnity</h3>
                    <a className="cursor-pointer leading-8 pt-1" onClick={() => { setExpanded(!expanded); }}>arrow</a>
                </div>
                <h1 className="font-play text-foreground text-4xl tracking-tighter">Vice President</h1>
            </div>
            <div className={`max-h-0 overflow-hidden transition-max-height duration-700 ease-in-out ${expanded ? "max-h-32 my-2" : ""} `}>
                <ul className="list-disc list-inside font-play tracking-tighter text-foreground">
                    <li>Chapter Grew by 31%</li>
                    <li>Candidate Development</li>
                    <li>Other Things</li>
                </ul>
            </div>
            <div className="pt-2">
                <h1 className="font-play tracking-tighter text-foreground">Jan. 2024 - Dec. 2024</h1>
            </div>
        </div>
    )
}

export default function LeadershipSection() {
    return (
        <div className="relative w-full h-screen bg-foreground p-3">
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-0">
                <svg className="w-1/2 h-full">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="60%">
                            <stop offset="10%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: "red", stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: "hsl(var(--foreground))", stopOpacity: 1 }} />
                        </linearGradient>    </defs>
                    <circle cx="50%" cy="50%" r="30%" fill="url(#grad1)" />
                </svg>
            </div>

            <h1 id="leadership" className="relative text-primary font-play text-9xl tracking-tighter z-10">Leadership</h1>
            <div className="flex flex-row h-3/4 gap-3 justify-around items-center">
                <Leadership />
                <Leadership />
                <Leadership />
                <Leadership />
                <Leadership />
            </div>
        </div>
    );
}