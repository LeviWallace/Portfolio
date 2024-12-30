import { siteConfig } from "@/config/site";

export default function LandingSection() {
    return (
        <div className="h-screen flex bg-background justify-center -z-10">
            <div className="hidden lg:flex flex-col w-1/6 mt-10">
                <svg className="w-full h-full">
                    <circle cx="50%" cy="50%" r="40%" fill="hsl(var(--foreground))" />
                </svg>
                <svg className="w-full h-full">
                    <circle cx="50%" cy="50%" r="40%" fill="hsl(var(--foreground))" />
                </svg>
            </div>

        <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-4 p-2 h-1/4 gap-2">
                {siteConfig.titles[0].map((title) => (
                  <a href={title.href} key={title.key} className="tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background">
                    <p>{title.title}</p>
                  </a>
                ))}
            </div>
            <div className="grid grid-cols-4 p-2 h-1/4 gap-2">
                {siteConfig.titles[1].map((title) => (
                  title.title == "" ? 
                    <div key={title.key} className="text-4xl tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap transition ease-in-out md:hover:bg-primary md:[&>*]:hover:text-background">

                    </div>
                  :
                  <a href={title.href} key={title.key} className={`text-5xl tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background`}>
                    <p>{title.title}</p>
                  </a>
                ))}
            </div>
            <div className="grid grid-cols-4 p-2 h-1/4 gap-2">
                {siteConfig.titles[2].map((title) => (
                  title.title == "" ? 
                    <div key={title.key} className="text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background">

                    </div>
                  :
                  <a key={title.key} href={title.href} className={`text-4xl tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background`}>
                    {title.title}
                  </a>
                ))}
            </div>
            <div className="grid grid-cols-4 p-2 h-1/4 gap-2">
              <a href="#education" className={`xl:col-span-1 col-span-2 tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-line transition ease-in-out hover:bg-primary [&>*]:hover:text-background`}>
                <p>Rose-Hulman Institute of Technology</p>
                <p>B.S. in Computer Science</p>
                <p>Minor in Mathematics</p>
                <p>Minor in Theater & Drama</p>
              </a>
              <div className="hidden xl:block tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background">

              </div>
              <div className="text-right cursor-default tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background">
                <p>Contact:</p>
              </div>
              <div className="tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap transition ease-in-out hover:bg-primary [&>*]:hover:text-background">
                <ul key={"list-links"}>
                  {siteConfig.links.map((link) => (
                    <li key={link.label}><a href={link.url} target="_blank">{link.label}</a></li>
                  ))}
                </ul>
              </div>
            </div>
        </div>

        <div className="hidden lg:flex flex-col w-1/6">
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