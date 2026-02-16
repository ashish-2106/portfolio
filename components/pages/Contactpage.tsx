import { Mail, Phone, MapPin, Linkedin, Github, Globe, MessageCircle, Calendar, Download } from 'lucide-react';
import { Button } from '../ui/button';

export const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 lg:p-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="book-page rounded-2xl p-8 lg:p-12">
          {/* Chapter Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="font-serif text-sm text-muted-foreground mb-2 uppercase tracking-widest">Chapter V</div>
            <h1 className="heading-chapter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4">Let's Connect</h1>
            <div className="w-24 h-px bg-accent mx-auto"></div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
            <div className="space-y-6">
              <h3 className="heading-section mb-6 text-xl lg:text-2xl xl:text-3xl">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-card border border-border rounded-lg shadow-elegant">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-primary text-sm lg:text-base">Email</div>
                    <a 
                      href="mailto:ashish.jhajharia2106@gmail.com"
                      className="text-xs lg:text-sm text-muted-foreground hover:text-accent transition-smooth break-all"
                    >
                      ashish.jhajharia2106@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-card border border-border rounded-lg shadow-elegant">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-primary text-sm lg:text-base">Phone</div>
                    <a 
                      href="tel:+918290893008"
                      className="text-xs lg:text-sm text-muted-foreground hover:text-accent transition-smooth"
                    >
                      +91-8290893008
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-card border border-border rounded-lg shadow-elegant">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-primary text-sm lg:text-base">Location</div>
                    <span className="text-xs lg:text-sm text-muted-foreground">Jhunjhunu, Rajasthan, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="heading-section mb-6 text-xl lg:text-2xl xl:text-3xl">Professional Links</h3>
              
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 lg:gap-4 h-auto p-3 lg:p-4 text-left"
                >
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Linkedin className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-primary text-sm lg:text-base">LinkedIn Profile</div>
                    <div className="text-xs lg:text-sm text-muted-foreground">Professional Network</div>
                  </div>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 lg:gap-4 h-auto p-3 lg:p-4 text-left"
                >
                  <div className="p-2 bg-gray-800/10 rounded-lg">
                    <Github className="w-4 h-4 lg:w-5 lg:h-5 text-gray-800" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-primary text-sm lg:text-base">GitHub Repository</div>
                    <div className="text-xs lg:text-sm text-muted-foreground">Code & Projects</div>
                  </div>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 lg:gap-4 h-auto p-3 lg:p-4 text-left"
                >
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Globe className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-primary text-sm lg:text-base">Portfolio Website</div>
                    <div className="text-xs lg:text-sm text-muted-foreground">Featured Work</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center border-t border-border pt-6 lg:pt-8">
            <h3 className="heading-subsection mb-4 text-lg lg:text-xl xl:text-2xl">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm lg:text-base">
              I'm always interested in discussing new opportunities, innovative projects, 
              and ways to create impactful technology solutions. Let's connect and explore 
              how we can work together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <Button size="lg" className="gap-2 text-sm lg:text-base">
                <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5" />
                Send Message
              </Button>
              <Button variant="outline" size="lg" className="gap-2 text-sm lg:text-base">
                <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
                Schedule Call
              </Button>
              <Button variant="outline" size="lg" className="gap-2 text-sm lg:text-base">
                <Download className="w-4 h-4 lg:w-5 lg:h-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Closing Note */}
          <div className="mt-8 lg:mt-12 text-center">
            <div className="inline-block p-4 lg:p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border border-border">
              <p className="text-xs lg:text-sm text-muted-foreground italic">
                "Thank you for taking the time to explore my professional journey. 
                I look forward to connecting and discussing how we can create something amazing together."
              </p>
              <div className="mt-3 font-serif text-accent font-medium text-sm lg:text-base">— Ashish Jhajharia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};