import { siteConfig } from "@/config/site";

export default function LandingSection() {
    return (
        <div className="h-screen flex bg-background -z-10">
          <div className="flex flex-col w-1/6 mt-10">
            <svg className="w-full h-full">
              <circle cx="50%" cy="50%" r="40%" fill="hsl(var(--foreground))" />
            </svg>
            <svg className="w-full h-full">
              <circle cx="50%" cy="50%" r="40%" fill="hsl(var(--foreground))" />
            </svg>
          </div>

          <div className="w-1/2 mx-auto">
            {siteConfig.titles.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4 p-2 h-1/4 gap-2">
                {row.map((item, colIndex) => (
                  <div key={colIndex} className="col-start-auto col-span-1 w-full -z-5 border-primary border-1 transition ease-in-out hover:bg-primary [&>*]:hover:text-background">
                    {item.title == "*" ? (
                      <ul>
                        {siteConfig.links.map((link) => (
                          <li key={link.label}>
                            <a href={link.url} target="_blank" className={`${item.style} font-play font-thin text-foreground z-10 tracking-tighter`}>{link.label} </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <a href={item.href !== "#" ? item.href : ""} className={`${item.style} tracking-tighter font-play font-thin text-foreground z-10 whitespace-pre-wrap`}>
                        {item.title}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ))}
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