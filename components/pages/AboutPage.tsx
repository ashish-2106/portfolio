export const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 lg:p-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="book-page rounded-2xl p-8 lg:p-12">
          {/* Chapter Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="font-serif text-sm text-muted-foreground mb-2 uppercase tracking-widest">Chapter I</div>
            <h1 className="heading-chapter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4">About</h1>
            <div className="w-24 h-px bg-accent mx-auto"></div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="space-y-6">
                <div>
                  <h2 className="heading-subsection mb-4 text-xl lg:text-2xl xl:text-3xl">Professional Journey</h2>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    I am a passionate Computer Science Engineering student at SRM Institute of Science and Technology
                    with a stellar CGPA of 9.26. My journey in technology spans across full-stack development,
                    artificial intelligence, and machine learning.
                  </p>
                </div>

                <div>
                  <h3 className="heading-subsection mb-3 text-lg lg:text-xl xl:text-2xl">Current Focus</h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    Currently working as a Software Engineer Intern at PoisonTune, where I contribute to building
                    complex backend systems for custom LLM training platforms. My expertise includes API development,
                    database management with MongoDB, and automation using Python and AWS.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="heading-subsection mb-3 text-lg lg:text-xl xl:text-2xl">Technical Passion</h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    I have a deep passion for creating innovative solutions that bridge the gap between complex
                    technology and user-friendly applications. My projects range from AI-powered video generators
                    to medical diagnostic chatbots.
                  </p>
                </div>

                <div>
                  <h3 className="heading-subsection mb-3 text-lg lg:text-xl xl:text-2xl">Career Objective</h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    Seeking opportunities to contribute to cutting-edge technology projects where I can leverage
                    my skills in AI/ML, full-stack development, and DevOps to create impactful solutions that
                    make a difference in people's lives.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border">
              <h3 className="heading-subsection mb-6 text-center text-lg lg:text-xl xl:text-2xl">Key Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                  <div className="text-center p-4 lg:p-6 bg-accent-soft/20 rounded-xl">
                    <div className="font-serif text-xl lg:text-2xl font-semibold text-accent mb-2">9.26</div>
                    <div className="text-xs lg:text-sm text-muted-foreground">Current CGPA</div>
                  </div>
                </div>
                <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                  <div className="text-center p-4 lg:p-6 bg-accent-soft/20 rounded-xl">
                    <div className="font-serif text-xl lg:text-2xl font-semibold text-accent mb-2">Runner-up</div>
                    <div className="text-xs lg:text-sm text-muted-foreground">RedBull Basement Hackathon</div>
                  </div>
                </div>
                <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                  <div className="text-center p-4 lg:p-6 bg-accent-soft/20 rounded-xl">
                    <div className="font-serif text-xl lg:text-2xl font-semibold text-accent mb-2">5+</div>
                    <div className="text-xs lg:text-sm text-muted-foreground">Industry Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};