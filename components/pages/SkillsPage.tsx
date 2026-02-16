import { Code, Database, Cloud, Brain, Wrench, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'accent',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Web & Frameworks',
    icon: GitBranch,
    color: 'primary',
    skills: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Database & Backend',
    icon: Database,
    color: 'accent',
    skills: ['Firebase', 'SQLite', 'Convex', 'MySQL', 'MongoDB']
  },
  {
    title: 'DevOps & Tools',
    icon: Cloud,
    color: 'primary',
    skills: ['Docker', 'Jenkins', 'GitHub Actions', 'Terraform', 'Shell Scripting']
  },
  {
    title: 'AI/ML & Data Science',
    icon: Brain,
    color: 'accent',
    skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'LLMs']
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    color: 'primary',
    skills: ['Git', 'GitHub', 'Docker', 'Jenkins', 'VS Code']
  }
];

const coreSubjects = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Database Management Systems',
  'Compiler Design',
  'Computer Networks',
  'Software Engineering'
];

export const SkillsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 lg:p-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="book-page rounded-2xl p-8 lg:p-12">
          {/* Chapter Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="font-serif text-sm text-muted-foreground mb-2 uppercase tracking-widest">Chapter III</div>
            <h1 className="heading-chapter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4">Technical Skills</h1>
            <div className="w-24 h-px bg-accent mx-auto"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.title}
                  className="bg-card border border-border rounded-xl p-4 lg:p-6 shadow-elegant hover:shadow-book transition-smooth"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-${category.color}/10`}>
                      <IconComponent className={`w-4 h-4 lg:w-5 lg:h-5 text-${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-primary text-sm lg:text-base">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill}
                        className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg transition-smooth hover:bg-muted"
                      >
                        <div className={`w-2 h-2 rounded-full bg-${category.color} flex-shrink-0`}></div>
                        <span className="text-xs lg:text-sm text-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core CS Concepts */}
          <div className="border-t border-border pt-6 lg:pt-8">
            <h3 className="heading-section mb-6 text-center text-xl lg:text-2xl xl:text-3xl">Core Computer Science Concepts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              {coreSubjects.map((subject, index) => (
                <div 
                  key={subject}
                  className="flex items-center gap-3 p-3 lg:p-4 bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-lg transition-smooth hover:from-primary/10 hover:to-accent/10"
                >
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-xs lg:text-sm font-semibold text-primary">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-foreground">{subject}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Proficiency Summary */}
          <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border">
            <h3 className="heading-subsection mb-6 text-center text-lg lg:text-xl xl:text-2xl">Proficiency Overview</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              <div className="text-center p-3 lg:p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                <div className="font-serif text-xl lg:text-2xl font-bold text-accent mb-2">5+</div>
                <div className="text-xs text-muted-foreground">Programming Languages</div>
              </div>
              <div className="text-center p-3 lg:p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                <div className="font-serif text-xl lg:text-2xl font-bold text-primary mb-2">10+</div>
                <div className="text-xs text-muted-foreground">Frameworks & Tools</div>
              </div>
              <div className="text-center p-3 lg:p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                <div className="font-serif text-xl lg:text-2xl font-bold text-accent mb-2">6+</div>
                <div className="text-xs text-muted-foreground">Database Technologies</div>
              </div>
              <div className="text-center p-3 lg:p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                <div className="font-serif text-xl lg:text-2xl font-bold text-primary mb-2">5+</div>
                <div className="text-xs text-muted-foreground">DevOps & Cloud Tools</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};