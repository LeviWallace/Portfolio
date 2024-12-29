import { siteConfig } from "@/config/site";

export default function LandingSection() {
    return (
        <div className="h-screen flex bg-background justify-center -z-10">
        <div className="flex flex-col w-1/6 mt-10">
          <svg className="w-full h-full">
            <circle cx="50%" cy="50%" r="40%" fill="hsl(var(--foreground))" />
          </svg>
          <svg className="w-full h-full">
            <circle cx="50%" cy="50%" r="40%" fill="hsl(var(--foreground))" />
          </svg>
        </div>

        <div className="w-1/2">
            <div className="grid grid-cols-4 p-2 h-1/4 gap-2">
                {siteConfig.titles[0].map((title) => (
                  <a href={title.href} className="tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background">
                    <p>{title.title}</p>
                  </a>
                ))}
            </div>
            <div className="grid grid-cols-4 p-2 h-1/4 gap-2">
                {siteConfig.titles[1].map((title) => (
                  title.title == "" ? 
                    <div className="text-4xl tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background">

                    </div>
                  :
                  <a href={title.href} className={`text-5xl tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background`}>
                    <p>{title.title}</p>
                  </a>
                ))}
            </div>
            <div className="grid grid-cols-4 p-2 h-1/4 gap-2">
                {siteConfig.titles[2].map((title) => (
                  title.title == "" ? 
                    <div className="text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background">

                    </div>
                  :
                  <a href={title.href} className={`text-4xl tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background`}>
                    {title.title}
                  </a>
                ))}
            </div>
            <div className="grid grid-cols-4 p-2 h-1/4 gap-2">
              <a href="#education" className={`tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-line transition ease-in-out hover:bg-primary [&>*]:hover:text-background`}>
                <p>Rose-Hulman Institute of Technology</p>
                <p>B.S. in Computer Science</p>
                <p>Minor in Mathematics</p>
                <p>Minor in Theater & Drama</p>
              </a>
              <div className="tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background">

              </div>
              <div className="text-right tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background">
                <p>Contact:</p>
              </div>
              <div className="tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background">
                <ul>
                  {siteConfig.links.map((link) => (
                    <li><a href={link.url} target="_blank">{link.label}</a></li>
                  ))}
                </ul>
              </div>
            </div>
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
    );
}