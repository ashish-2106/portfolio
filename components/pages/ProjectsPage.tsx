import { ExternalLink, Github, Star, Zap } from 'lucide-react';
import { Button } from '../ui/button';

const projects = [
  {
    title: 'AI Short Video Generator',
    subtitle: 'Full-Stack SaaS Application',
    period: '2024',
    thumbnail: '/video.jpeg', // 🧠 Add your image path here
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Convex', 'Inngest', 'Gemini'],
    description:
      'Built a comprehensive SaaS application that transforms text prompts into AI-powered short videos using advanced machine learning models.',
    achievements: [
      'Integrated Convex for real-time backend operations and user credit synchronization',
      'Automated asynchronous video generation using Inngest for background processing',
      'Implemented secure authentication and multi-user credit tracking system',
      'Reduced video processing time through optimized background task handling',
    ],
    impact: 'Scalable Multi-User System',
    link: '#',
  },
  {
    title: 'Derma Vision',
    subtitle: 'AI Medical Diagnostic Platform',
    period: '2024',
    thumbnail: '/dermavision.png',
    technologies: ['Python', 'Gradio', 'gTTS', 'Whisper AI', 'Firebase', 'Groq'],
    description:
      'Developed an innovative multi-modal AI chatbot that combines voice interaction with advanced skin image analysis for medical diagnostics.',
    achievements: [
      'Integrated LLaMA 4 (Groq) for accurate diagnostic insights and recommendations',
      'Implemented natural voice feedback using gTTS and speech transcription with Whisper AI',
      'Created automated report generation system with direct doctor communication',
      'Built secure patient data management with Firebase backend and chat history',
    ],
    impact: 'Healthcare Innovation',
    link: '#',
  },
  {
    title: 'Heart Disease Prediction',
    subtitle: 'Machine Learning Analytics',
    period: '2024',
    thumbnail: '/heart-d.jpg',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    description:
      'Engineered a supervised machine learning model to predict heart disease likelihood using comprehensive medical datasets.',
    achievements: [
      'Preprocessed complex medical data with feature encoding and normalization',
      'Trained and evaluated multiple algorithms: Logistic Regression, KNN, Random Forest',
      'Achieved high accuracy using precision, recall, and ROC-AUC metrics',
      'Created intuitive visualizations to support healthcare decision-making',
    ],
    impact: 'Healthcare Support',
    link: '#',
  },
  {
    title: 'Real-time WebRTC Object Detection',
    subtitle: 'Computer Vision Platform',
    period: '2024',
    thumbnail: '/object-detection.png',
    technologies: ['FastAPI', 'WebRTC', 'React', 'Tailwind CSS', 'Docker'],
    description:
      'Built a sophisticated real-time object detection system with live video processing and mobile accessibility.',
    achievements: [
      'Developed FastAPI backend with optimized deep learning inference pipeline',
      'Created responsive React frontend with live video overlay capabilities',
      'Implemented adjustable resolution/FPS controls and QR-based mobile access',
      'Containerized entire application with Docker for scalable deployment',
    ],
    impact: 'Real-time Processing',
    link: '#',
  },
];

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 lg:p-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="book-page rounded-2xl p-8 lg:p-12">
          {/* Chapter Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="font-serif text-sm text-muted-foreground mb-2 uppercase tracking-widest">
              Chapter IV
            </div>
            <h1 className="heading-chapter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4">
              Featured Projects
            </h1>
            <div className="w-24 h-px bg-accent mx-auto"></div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6 lg:space-y-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-card border border-border rounded-xl p-4 lg:p-6 xl:p-8 shadow-elegant hover:shadow-book transition-smooth"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                  
                  {/* Thumbnail Section */}
                  {project.thumbnail && (
                    <div className="lg:col-span-1 flex justify-center items-center">
                      <div className="w-full h-50 sm:h-48 lg:h-52 rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-smooth">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  )}

                  {/* Project Info Section */}
                  <div className={`lg:col-span-${project.thumbnail ? '2' : '3'}`}>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                        <span className="text-xs lg:text-sm text-accent font-medium">
                          {project.period}
                        </span>
                      </div>
                    </div>

                    <h3 className="heading-subsection mb-2 text-lg lg:text-xl xl:text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-primary font-medium mb-4 text-sm lg:text-base">
                      {project.subtitle}
                    </p>

                    <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Impact Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-2 px-3 py-2 bg-accent/10 rounded-lg">
                        <Zap className="w-3 h-3 lg:w-4 lg:h-4 text-accent" />
                        <span className="text-xs font-medium text-accent">{project.impact}</span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="text-xs lg:text-sm">
                      <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Statistics */}
          <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border">
            <h3 className="heading-subsection mb-6 text-center text-lg lg:text-xl xl:text-2xl">
              Project Impact
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              {[
                { number: '4', label: 'Major Projects', accent: true },
                { number: '15+', label: 'Technologies Used', accent: false },
                { number: '3', label: 'AI/ML Projects', accent: true },
                { number: '100%', label: 'Full-Stack Coverage', accent: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`text-center p-3 lg:p-4 rounded-xl border ${
                    item.accent
                      ? 'bg-accent/10 border-accent/20'
                      : 'bg-primary/10 border-primary/20'
                  }`}
                >
                  <div
                    className={`font-serif text-xl lg:text-2xl font-bold ${
                      item.accent ? 'text-accent' : 'text-primary'
                    } mb-2`}
                  >
                    {item.number}
                  </div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
