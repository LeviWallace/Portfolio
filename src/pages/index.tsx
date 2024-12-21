import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Divider } from "@nextui-org/divider";


const titles = [
  {
      name: "Experience",
      indicator: "☉",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Projects",
    indicator: "★",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "About Me",
    indicator: "♦",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]


export default function IndexPage() {
  return (
      <section className="grid grid-cols-5 p-10 h-screen bg-background bg-stripes">
        <div className="col-start-1 col-span-3">
          <span className="text-[180px] font-play text-primary">Levi Wallace</span>
        </div>
        <div className="col-start-4 col-span-2">
            <div className="grid grid-cols-2">
              <span className="text-[50px] font-play text-foreground">Orange</span>
              <Accordion>
                {titles.map((title, index) => (
                  <AccordionItem
                    key={index}
                    aria-label={`Accordion ${index + 1}`}
                    className="font-play text-primary"
                    title={
                        <p className="flex flex-row">
                          <div>
                            <h1 className="text-[50px] my-3 mb-10 font-play text-foreground uppercase">{title.name}</h1>
                          </div>
                          <br />
                        </p>
                    }
                    indicator={
                      <p className="flex">
                        <span className="text-[14px] font-play font-bold text-foreground uppercase">{title.indicator} </span>
                      </p>
                    }
                  >
                    {<div className=" mb-2 mx-2 font-play text-[20px] font-thin">
                      <div className="flex justify-between">
                        <div className="col-span-1">Sensitic Technologies</div>
                        <div className="col-span-1"><Divider orientation="vertical"/></div>
                        <div className="col-span-1 text-foreground-50">2021</div>
                      </div>
                    </div>}
                  </AccordionItem>
                ))}
              </Accordion>
            
            </div>
        </div>
        <div className="col-start-2 col-span-4 bg-stripes">
            <p className="text-[50px] font-play">Welcome to my portolio</p>
        </div>
      </section>
  );
}
