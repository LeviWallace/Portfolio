
export default function LeadershipSection() {
    return (
        <div className="relative z-0">
          <div>
            <svg className="absolute top-0 left-0 w-full h-full z-20">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="40%">
                <stop offset="0%" style={{ stopColor: "red", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "hsl(var(--foreground))", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="50%" cy="60%" r="20%" fill="url(#grad1)" />
            </svg>
          </div>
          <div className="relative w-full h-screen bg-foreground p-3 z-10 ">
            <h1 id="leadership" className="text-primary font-play text-9xl tracking-tighter">Leadership</h1>
          </div>
          
          <div>
            <svg className="absolute top-0 left-0 w-full h-full z-20">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="40%">
                <stop offset="0%" style={{ stopColor: "red", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "hsl(var(--foreground))", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="50%" cy="60%" r="20%" fill="url(#grad1)" />
            </svg>
          </div>

          <div className="absolute top-40 left-0 w-full h-[60%] z-30">
            <div className="flex flex-row justify-center items-center gap-4">
              <div className="bg-background rounded-xl p-4 w-[20%]">
                <h1>Sigma Nu Fraturnity</h1>
                <h1>Vice President</h1>
                <h1>Jan. 2024 - Dec. 2024</h1>
              </div>
              <div className="bg-background rounded-xl p-4 w-[20%]">
                <h1>Sigma Nu Fraturnity</h1>
                <h1>Vice President</h1>
                <h1>Jan. 2024 - Dec. 2024</h1>
              </div>
            </div>
          </div>
        </div>
    );
}