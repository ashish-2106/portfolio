import { Briefcase, Calendar, MapPin, Code2 } from "lucide-react";

export const ExperiencePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 lg:p-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="book-page rounded-2xl p-8 lg:p-12">
          {/* Chapter Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="font-serif text-sm text-muted-foreground mb-2 uppercase tracking-widest">
              Chapter III
            </div>
            <h1 className="heading-chapter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4">
              Experience
            </h1>
            <div className="w-24 h-px bg-accent mx-auto"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6 lg:space-y-8">
            {/* Software Engineer Intern */}
            <div className="relative pl-6 lg:pl-8 pb-6 lg:pb-8 border-l-2 border-accent/30">
              <div className="absolute -left-2 lg:-left-3 top-0 w-4 h-4 lg:w-6 lg:h-6 bg-accent rounded-full border-2 lg:border-4 border-background shadow-md"></div>

              <div className="bg-card border border-border rounded-xl p-4 lg:p-6 shadow-elegant">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-3">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="heading-subsection text-lg lg:text-xl xl:text-2xl">
                        Software Engineer Intern
                      </h3>
                      <p className="text-primary font-medium text-sm lg:text-base">
                        PoisonTune
                      </p>
                    </div>
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm mb-1">
                      <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                      Feb 2025 - Jul 2025
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm">
                      <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                      Remote
                    </div>
                  </div>
                </div>

                <ul className="list-disc list-inside text-muted-foreground text-sm lg:text-base space-y-2">
                  <li>
                    Worked closely with the founding team to build a complex
                    backend for a custom LLM training platform, handling API
                    development, database management (MongoDB), and automating
                    tasks using Python and AWS.
                  </li>
                  <li>
                    Developed web applications using React.js, Next.js, and
                    TypeScript, ensuring smooth backend operations, testing
                    databases, and following the software development process
                    from start to finish.
                  </li>
                </ul>
              </div>
            </div>

            {/* Web Developer Intern */}
            <div className="relative pl-6 lg:pl-8">
              <div className="absolute -left-2 lg:-left-3 top-0 w-4 h-4 lg:w-6 lg:h-6 bg-primary/20 rounded-full border-2 lg:border-4 border-background shadow-md"></div>

              <div className="bg-card border border-border rounded-xl p-4 lg:p-6 shadow-elegant">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-3">
                  <div className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 lg:w-6 lg:h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="heading-subsection text-lg lg:text-xl xl:text-2xl">
                        Web Developer Intern
                      </h3>
                      <p className="text-primary font-medium text-sm lg:text-base">
                        InnoByte Services
                      </p>
                    </div>
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm mb-1">
                      <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                      Jul 2024 - Aug 2024
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm">
                      <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                      Remote
                    </div>
                  </div>
                </div>

                <ul className="list-disc list-inside text-muted-foreground text-sm lg:text-base space-y-2">
                  <li>
                    Acquired practical experience with front-end and back-end
                    technologies, including version control systems like Git,
                    and enhanced problem-solving skills in a real-world
                    development environment.
                  </li>
                  <li>
                    Participated in code reviews, identified bugs, and
                    implemented fixes to improve the quality and reliability of
                    web applications.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Highlights */}
          <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border">
            <h3 className="heading-subsection mb-6 text-center text-lg lg:text-xl xl:text-2xl">
              Professional Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                <div className="font-serif text-2xl lg:text-3xl font-bold text-accent mb-2">
                  2
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground">
                  Internships Completed
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Hands-on Industry Experience
                </div>
              </div>
              <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                <div className="font-serif text-2xl lg:text-3xl font-bold text-primary mb-2">
                  Full Stack
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground">
                  Development Exposure
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Frontend + Backend Expertise
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
