import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export const EducationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 lg:p-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="book-page rounded-2xl p-8 lg:p-12">
          {/* Chapter Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="font-serif text-sm text-muted-foreground mb-2 uppercase tracking-widest">Chapter II</div>
            <h1 className="heading-chapter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4">Education</h1>
            <div className="w-24 h-px bg-accent mx-auto"></div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 lg:space-y-8">
            {/* Bachelor's Degree */}
            <div className="relative pl-6 lg:pl-8 pb-6 lg:pb-8 border-l-2 border-accent/30">
              <div className="absolute -left-2 lg:-left-3 top-0 w-4 h-4 lg:w-6 lg:h-6 bg-accent rounded-full border-2 lg:border-4 border-background shadow-md"></div>
              
              <div className="bg-card border border-border rounded-xl p-4 lg:p-6 shadow-elegant">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="heading-subsection text-lg lg:text-xl xl:text-2xl">Bachelor of Technology</h3>
                      <p className="text-primary font-medium text-sm lg:text-base">Computer Science and Engineering</p>
                    </div>
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm mb-1">
                      <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                      2022 - 2026
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm">
                      <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                      Chennai, India
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2 text-sm lg:text-base">SRM Institute of Science and Technology</h4>
                  <p className="text-muted-foreground text-sm lg:text-base">
                    Pursuing comprehensive education in computer science fundamentals, software engineering, 
                    and emerging technologies including AI/ML, cloud computing, and full-stack development.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-border gap-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                    <span className="font-medium text-primary text-sm lg:text-base">Current CGPA</span>
                  </div>
                  <div className="bg-accent/10 px-3 lg:px-4 py-2 rounded-lg">
                    <span className="font-serif text-lg lg:text-xl font-semibold text-accent">9.26</span>
                    <span className="text-xs lg:text-sm text-muted-foreground ml-2">/ 10.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Higher Secondary */}
            <div className="relative pl-6 lg:pl-8">
              <div className="absolute -left-2 lg:-left-3 top-0 w-4 h-4 lg:w-6 lg:h-6 bg-primary/20 rounded-full border-2 lg:border-4 border-background shadow-md"></div>
              
              <div className="bg-card border border-border rounded-xl p-4 lg:p-6 shadow-elegant">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="heading-subsection text-lg lg:text-xl xl:text-2xl">Higher Secondary School</h3>
                      <p className="text-primary font-medium text-sm lg:text-base">Science Stream</p>
                    </div>
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm mb-1">
                      <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                      2010 - 2021
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs lg:text-sm">
                      <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                      Jhunjhunu, India
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2 text-sm lg:text-base">New LBS English Medium Sr. Sec. School</h4>
                  <p className="text-muted-foreground text-sm lg:text-base">
                    Completed higher secondary education with exceptional academic performance, building a strong 
                    foundation in mathematics and sciences that paved the way for engineering studies.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-border gap-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                    <span className="font-medium text-primary text-sm lg:text-base">Final Percentage</span>
                  </div>
                  <div className="bg-primary/10 px-3 lg:px-4 py-2 rounded-lg">
                    <span className="font-serif text-lg lg:text-xl font-semibold text-primary">98.80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Excellence */}
          <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border">
            <h3 className="heading-subsection mb-6 text-center text-lg lg:text-xl xl:text-2xl">Academic Excellence</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                <div className="font-serif text-2xl lg:text-3xl font-bold text-accent mb-2">4</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Years of Engineering</div>
                <div className="text-xs text-muted-foreground mt-1">Consistent High Performance</div>
              </div>
              <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                <div className="font-serif text-2xl lg:text-3xl font-bold text-primary mb-2">11</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Years of School Education</div>
                <div className="text-xs text-muted-foreground mt-1">Strong Academic Foundation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};