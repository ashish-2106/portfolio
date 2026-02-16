import { MapPin, Mail, Phone, Linkedin, Github, Globe } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 lg:p-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="book-page rounded-2xl p-8 lg:p-12">
          {/* Title Page Content */}
          <div className="text-center space-y-6 lg:space-y-8">
            {/* Portrait */}
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-auto rounded-full overflow-hidden border-4 border-accent/20 shadow-book">
                <img
                  src="/ashish-portrait.jpg"
                  alt="Ashish Jhajharia Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 lg:w-16 lg:h-16 bg-accent rounded-full flex items-center justify-center shadow-elegant">
                <span className="font-serif text-white font-semibold text-sm lg:text-lg">AJ</span>
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="heading-chapter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">Ashish Jhajharia</h1>
              <div className="space-y-2">
                <p className="text-lg sm:text-xl lg:text-2xl font-medium text-accent">Software Engineer & AI Enthusiast</p>
                <p className="text-sm sm:text-base text-muted-foreground">Computer Science Engineering Student</p>
              </div>
            </div>

            {/* Contact Info Cards */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-3 lg:p-4 shadow-elegant">
                <div className="flex items-center gap-2 lg:gap-3">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-accent flex-shrink-0" />
                  <div className="text-left min-w-0">
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="text-xs lg:text-sm font-medium text-primary truncate">Jhunjhunu, Rajasthan</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-3 lg:p-4 shadow-elegant">
                <div className="flex items-center gap-2 lg:gap-3">
                  <Mail className="w-5 h-4 lg:w-5 lg:h-5 text-accent flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-xs lg:text-sm font-medium text-primary">ashishjhajharia21@gmail.com</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-3 lg:p-4 shadow-elegant">
                <div className="flex items-center gap-2 lg:gap-3">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-accent flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="text-xs lg:text-sm font-medium text-primary">+91-8290893008</div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Professional Links */}
            <div className="flex flex-wrap justify-center gap-3 lg:gap-6 pointer:cursor">
              {/* LinkedIn */}
              <div className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-lg">
                <Linkedin className="w-3 h-3 lg:w-4 lg:h-4 text-blue-600" />
                <span className="text-xs lg:text-sm font-medium text-blue-600">LinkedIn</span>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg border transition-all
                  bg-gray-800/10 border-gray-800/20 text-gray-800
                  dark:bg-[#0d1117]/70 dark:border-gray-700/40 dark:text-gray-200 dark:hover:bg-[#161b22]/80">
                <Github className="w-3 h-3 lg:w-4 lg:h-4 text-gray-800 dark:text-gray-200" />
                <span className="text-xs lg:text-sm font-medium">GitHub</span>
              </div>

              {/* Portfolio */}
              <div className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg">
                <Globe className="w-3 h-3 lg:w-4 lg:h-4 text-accent" />
                <span className="text-xs lg:text-sm font-medium text-accent">Portfolio</span>
              </div>
            </div>


            {/* Professional Summary */}
            <div className="max-w-2xl mx-auto pt-6 lg:pt-8 border-t border-border">
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                Passionate Computer Science Engineering student with expertise in full-stack development,
                artificial intelligence, and machine learning. Currently contributing as a Software Engineer
                Intern with a track record of building innovative solutions and achieving academic excellence.
              </p>
            </div>

            {/* Academic Achievement */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 lg:gap-4 px-4 lg:px-6 py-3 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl">
              <div className="text-center">
                <div className="font-serif text-xl lg:text-2xl font-bold text-accent">9.26</div>
                <div className="text-xs text-muted-foreground">Current CGPA</div>
              </div>
              <div className="w-8 h-px sm:w-px sm:h-8 bg-border"></div>
              <div className="text-center">
                <div className="font-serif text-xl lg:text-2xl font-bold text-primary">2026</div>
                <div className="text-xs text-muted-foreground">Expected Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};