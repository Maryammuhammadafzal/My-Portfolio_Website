// 'use client'
// import React, { useState, useEffect } from 'react';
// import Image from "next/image";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Github,
//   Linkedin,
//   Download,
//   ExternalLink,
//   Code,
//   Database,
//   Server,
//   Globe,
//   FileText,
//   Award,
//   Send,
//   MessageSquare,
//   User,
//   Briefcase,
//   GraduationCap,
//   Star,
//   ArrowRight,
//   Menu,
//   X,
//   ChevronDown
// } from 'lucide-react';
// import FloatingParticles from '@/components/FloatingPartcles';
// import AnimatedCounter from '@/components/AnimatedCounter';
// const Portfolio = () => {
//          // Mock data for projects
//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce platform with user authentication, product management, cart functionality, and payment integration.",
//       technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API"],
//       liveDemo: "https://demo-ecommerce.vercel.app",
//       github: "https://github.com/Maryammuhammadafzal/ecommerce-platform",
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
//     },
//     {
//       id: 2,
//       title: "Task Management App",
//       description: "A collaborative task management application with real-time updates, user roles, and project tracking capabilities.",
//       technologies: ["React.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
//       liveDemo: "https://taskmanager-demo.vercel.app",
//       github: "https://github.com/Maryammuhammadafzal/task-manager",
//       image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
//     },
//     {
//       id: 3,
//       title: "Social Media Dashboard",
//       description: "A comprehensive social media analytics dashboard with data visualization and reporting features.",
//       technologies: ["React.js", "Node.js", "MongoDB", "Chart.js", "Firebase"],
//       liveDemo: "https://social-dashboard-demo.vercel.app",
//       github: "https://github.com/Maryammuhammadafzal/social-dashboard",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
//     },
//     {
//       id: 4,
//       title: "Real Estate Portal",
//       description: "A modern real estate listing platform with advanced search filters, property management, and user profiles.",
//       technologies: ["React.js", "Express.js", "MongoDB", "Cloudinary", "MapBox"],
//       liveDemo: "https://realestate-demo.vercel.app",
//       github: "https://github.com/Maryammuhammadafzal/real-estate-portal",
//       image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop"
//     }
//   ];

//   // Mock certificates data
//   const certificates = [
//     {
//       id: 1,
//       title: "MERN Stack Development Certification",
//       issuer: "Tech Academy",
//       date: "2023",
//       image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=400&fit=crop"
//     },
//     {
//       id: 2,
//       title: "React.js Professional Certificate",
//     issuer: "Meta",
//     date: "2022",
//     image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=300&h=400&fit=crop"
//   },
//   {
//     id: 3,
//     title: "Node.js Backend Development",
//     issuer: "MongoDB University",
//     date: "2022",
//     image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=400&fit=crop"
//   },
//   {
//     id: 4,
//     title: "Full Stack Web Development",
//     issuer: "FreeCodeCamp",
//     date: "2021",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
//   }
// ];

// // Skills data with categories
// const skillsData = {
//   frontend: [
//     { name: "React.js", level: 95 },
//     { name: "HTML5", level: 98 },
//     { name: "CSS3", level: 90 },
//     { name: "JavaScript", level: 92 },
//     { name: "Next.js", level: 88 }
//   ],
//   backend: [
//     { name: "Node.js", level: 90 },
//     { name: "Express.js", level: 92 },
//     { name: "MongoDB", level: 85 },
//     { name: "Firebase", level: 80 }
//   ],
//   tools: [
//     { name: "Git & GitHub", level: 88 },
//     { name: "Vercel", level: 85 },
//     { name: "Render", level: 82 },
//     { name: "Railway", level: 80 }
//   ]
// };

//   const [activeSection, setActiveSection] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [selectedCertificate, setSelectedCertificate] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//     whatsapp: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isVisible, setIsVisible] = useState({});

//   // Intersection Observer for animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({
//               ...prev,
//               [entry.target.id]: true
//             }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     // Observe all sections
//     const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'resume', 'contact'];
//     sections.forEach(id => {
//       const element = document.getElementById(id);
//       if (element) observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   // Scroll to section handler
//   const scrollToSection = (sectionId) => {
//     setActiveSection(sectionId);
//     setIsMenuOpen(false);
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Form submission handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     alert('Thank you for your message! I will get back to you soon.');
//     setFormData({ name: '', email: '', message: '', whatsapp: '' });
//     setIsSubmitting(false);
//   };

//   // Handle input changes
//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//       {/* Navigation Header */}
//       <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex-shrink-0">
//               <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
//                 Maryam Afzal
//               </h1>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {['home', 'about', 'skills', 'projects', 'certificates', 'resume', 'contact'].map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => scrollToSection(item)}
//                     className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
//                       activeSection === item
//                         ? 'text-blue-600 bg-blue-50 shadow-sm'
//                         : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
//                     }`}
//                   >
//                     {item.charAt(0).toUpperCase() + item.slice(1)}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300"
//               >
//                 {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//             {['home', 'about', 'skills', 'projects', 'certificates', 'resume', 'contact'].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 transform hover:translate-x-2 ${
//                   activeSection === item
//                     ? 'text-blue-600 bg-blue-50'
//                     : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
//                 }`}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
//         <FloatingParticles />
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5" />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <div className={`space-y-8 transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="relative">
//               <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl transform hover:scale-110 transition-transform duration-500 animate-bounce">
//                 <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
//                   <User className="w-24 h-24 text-gray-400" />
//                 </div>
//               </div>
//               <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
//               <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
//             </div>

//             <div className="space-y-4">
//               <h1 className="text-5xl md:text-7xl font-bold">
//                 <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
//                   Maryam Afzal
//                 </span>
//               </h1>
//               <div className="text-2xl md:text-3xl text-gray-600 font-medium">
//                 <span className="inline-block animate-bounce" style={{animationDelay: '0.1s'}}>M</span>
//                 <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>E</span>
//                 <span className="inline-block animate-bounce" style={{animationDelay: '0.3s'}}>R</span>
//                 <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>N</span>
//                 <span className="mx-2">Stack Developer</span>
//               </div>
//               <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed animate-fade-in">
//                 Passionate full-stack developer with <AnimatedCounter target={3} suffix="+ years" /> of experience building scalable web applications.
//                 Specializing in React.js, Node.js, and modern web technologies to create exceptional user experiences.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={() => scrollToSection('projects')}
//                 className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg font-medium flex items-center justify-center gap-2 animate-pulse"
//               >
//                 View My Work <ArrowRight className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => scrollToSection('contact')}
//                 className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-medium"
//               >
//                 Let's Connect
//               </button>
//             </div>

//             {/* Scroll indicator */}
//             <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//               <ChevronDown className="w-6 h-6 text-gray-400" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse"></div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
//               <h3 className="text-2xl font-semibold text-gray-900">
//                 Building Digital Solutions with Passion
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 With <AnimatedCounter target={3} suffix="+ years" /> of dedicated experience in full-stack development, I specialize in creating
//                 robust, scalable web applications using the MERN stack. My journey began with a fascination
//                 for problem-solving through code, and has evolved into a career focused on delivering
//                 exceptional user experiences.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 I excel in both frontend and backend development, with expertise in modern React.js
//                 applications, RESTful APIs, and database design. My approach combines technical excellence
//                 with user-centered design, ensuring every project not only functions flawlessly but also
//                 provides an intuitive and engaging experience.
//               </p>

//               <div className="grid sm:grid-cols-2 gap-6 pt-6">
//                 {[
//                   { icon: Code, title: "Frontend Expert", desc: "React.js, Next.js, Modern CSS", color: "blue" },
//                   { icon: Server, title: "Backend Developer", desc: "Node.js, Express.js, APIs", color: "green" },
//                   { icon: Database, title: "Database Design", desc: "MongoDB, Firebase", color: "purple" },
//                   { icon: Globe, title: "Deployment", desc: "Vercel, Render, Railway", color: "orange" }
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 transform hover:scale-105 transition-all duration-300 hover:shadow-lg rounded-lg p-2"
//                     style={{animationDelay: `${index * 0.1}s`}}
//                   >
//                     <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300`}>
//                       <item.icon className={`w-6 h-6 text-${item.color}-600`} />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">{item.title}</h4>
//                       <p className="text-sm text-gray-600">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className={`relative transition-all duration-1000 delay-400 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
//               <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center transform hover:rotate-1 transition-transform duration-500">
//                 <Briefcase className="w-32 h-32 text-gray-400 animate-pulse" />
//               </div>
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-20 animate-bounce"></div>
//               <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-30 animate-pulse"></div>
//             </div>
//           </div>

//           {/* Stats Section */}
//           <div className={`grid md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-600 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             {[
//               { number: 3, suffix: "+", label: "Years Experience" },
//               { number: 15, suffix: "+", label: "Projects Completed" },
//               { number: 8, suffix: "+", label: "Technologies" },
//               { number: 100, suffix: "%", label: "Client Satisfaction" }
//             ].map((stat, index) => (
//               <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl transform hover:scale-105 transition-all duration-300">
//                 <div className="text-3xl font-bold text-blue-600 mb-2">
//                   <AnimatedCounter target={stat.number} suffix={stat.suffix} />
//                 </div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse"></div>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               Proficient in modern web technologies with a focus on creating efficient, scalable solutions
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Frontend Skills */}
//             <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{animationDelay: '0.1s'}}>
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center animate-bounce">
//                   <Code className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">Frontend Development</h3>
//               </div>
//               <div className="space-y-4">
//                 {skillsData.frontend.map((skill, index) => (
//                   <div key={index} className="group">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{skill.name}</span>
//                       <span className="text-gray-500 text-sm">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div
//                         className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out transform hover:scale-105"
//                         style={{
//                           width: isVisible.skills ? `${skill.level}%` : '0%',
//                           transitionDelay: `${index * 0.1}s`
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Backend Skills */}
//             <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{animationDelay: '0.2s'}}>
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
//                   <Server className="w-6 h-6 text-green-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">Backend Development</h3>
//               </div>
//               <div className="space-y-4">
//                 {skillsData.backend.map((skill, index) => (
//                   <div key={index} className="group">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors">{skill.name}</span>
//                       <span className="text-gray-500 text-sm">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div
//                         className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out transform hover:scale-105"
//                         style={{
//                           width: isVisible.skills ? `${skill.level}%` : '0%',
//                           transitionDelay: `${(index + 5) * 0.1}s`
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Tools & Deployment */}
//             <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{animationDelay: '0.3s'}}>
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
//                   <Globe className="w-6 h-6 text-purple-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">Tools & Deployment</h3>
//               </div>
//               <div className="space-y-4">
//                 {skillsData.tools.map((skill, index) => (
//                   <div key={index} className="group">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors">{skill.name}</span>
//                       <span className="text-gray-500 text-sm">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div
//                         className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out transform hover:scale-105"
//                         style={{
//                           width: isVisible.skills ? `${skill.level}%` : '0%',
//                           transitionDelay: `${(index + 9) * 0.1}s`
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse"></div>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               Showcasing my expertise through real-world applications built with modern technologies
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <div
//                 key={project.id}
//                 className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 group ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="overflow-hidden rounded-t-2xl">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-600 mt-2 leading-relaxed">
//                     {project.description}
//                   </p>
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full group-hover:bg-blue-200 transition-colors"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="mt-6 flex gap-4">
//                     <a
//                       href={project.liveDemo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium group-hover:scale-105 transition-all"
//                     >
//                       <ExternalLink className="w-4 h-4" /> Live Demo
//                     </a>
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium group-hover:scale-105 transition-all"
//                     >
//                       <Github className="w-4 h-4" /> GitHub
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Certificates Section */}
//       <section id="certificates" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.certificates ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse"></div>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               Recognitions of my expertise in web development and related technologies
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {certificates.map((certificate, index) => (
//               <div
//                 key={certificate.id}
//                 className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer ${isVisible.certificates ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => setSelectedCertificate(certificate)}
//               >
//                 <div className="overflow-hidden rounded-t-2xl">
//                   <img
//                     src={certificate.image}
//                     alt={certificate.title}
//                     className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
//                     {certificate.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mt-1">{certificate.issuer}</p>
//                   <p className="text-gray-500 text-sm">{certificate.date}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Certificate Modal */}
//           {selectedCertificate && (
//             <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//               <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative animate-fade-in">
//                 <button
//                   onClick={() => setSelectedCertificate(null)}
//                   className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//                 <img
//                   src={selectedCertificate.image}
//                   alt={selectedCertificate.title}
//                   className="w-full h-64 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-gray-900">{selectedCertificate.title}</h3>
//                 <p className="text-gray-600 mt-2">{selectedCertificate.issuer}</p>
//                 <p className="text-gray-500 text-sm">{selectedCertificate.date}</p>
//                 <a
//                   href={selectedCertificate.image}
//                   download
//                   className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   <Download className="w-4 h-4" /> Download Certificate
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Resume Section */}
//       <section id="resume" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.resume ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse"></div>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               Download my resume to learn more about my professional journey and skills
//             </p>
//           </div>

//           <div className={`flex justify-center transition-all duration-1000 ${isVisible.resume ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <a
//               href="/path-to-resume.pdf" // Replace with actual resume path
//               download
//               className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg font-medium animate-pulse"
//             >
//               <Download className="w-5 h-5" /> Download Resume
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-pulse"></div>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               I'm always excited to collaborate on new projects or discuss opportunities. Reach out via the form or connect with me directly!
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16">
//             {/* Contact Info */}
//             <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-6">Connect with Me</h3>
//                 <div className="space-y-4">
//                   <a
//                     href="mailto:maryam@example.com"
//                     className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
//                   >
//                     <Mail className="w-5 h-5" /> maryam@example.com
//                   </a>
//                   <a
//                     href="https://wa.me/+1234567890"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
//                   >
//                     <MessageSquare className="w-5 h-5" /> WhatsApp
//                   </a>
//                   <a
//                     href="tel:+1234567890"
//                     className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
//                   >
//                     <Phone className="w-5 h-5" /> +123-456-7890
//                   </a>
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <MapPin className="w-5 h-5" /> Lahore, Pakistan
//                   </div>
//                 </div>
//                 <div className="mt-6 flex gap-4">
//                   <a
//                     href="https://www.linkedin.com/in/marium-afzal-916b012bb/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors transform hover:scale-110"
//                   >
//                     <Linkedin className="w-5 h-5" />
//                   </a>
//                   <a
//                     href="https://github.com/Maryammuhammadafzal"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors transform hover:scale-110"
//                   >
//                     <Github className="w-5 h-5" />
//                   </a>
//                   <a
//                     href="https://facebook.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors transform hover:scale-110"
//                   >
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                     </svg>
//                   </a>
//                   <a
//                     href="https://instagram.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors transform hover:scale-110"
//                   >
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.634.075-3.258.477-4.488 1.707S.873 4.596.798 6.23C.74 7.51.727 7.918.727 12.073s.013 4.563.072 5.843c.075 1.634.477 3.258 1.707 4.488s2.854 1.632 4.488 1.707c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.634-.075 3.258-.477 4.488-1.707s1.632-2.854 1.707-4.488c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.075-1.634-.477-3.258-1.707-4.488S19.404.873 17.77.798c-1.28-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
//               <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                     Name
//                   </label>
//                   <div className="mt-1 relative">
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 transition-all duration-300"
//                       placeholder="Your Name"
//                     />
//                     <User className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                     Email
//                   </label>
//                   <div className="mt-1 relative">
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 transition-all duration-300"
//                       placeholder="your.email@example.com"
//                     />
//                     <Mail className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
//                     WhatsApp (Optional)
//                   </label>
//                   <div className="mt-1 relative">
//                     <input
//                       type="tel"
//                       id="whatsapp"
//                       name="whatsapp"
//                       value={formData.whatsapp}
//                       onChange={handleInputChange}
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 transition-all duration-300"
//                       placeholder="+123-456-7890"
//                     />
//                     <MessageSquare className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                     Message
//                   </label>
//                   <div className="mt-1">
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       required
//                       rows={4}
//                       className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 transition-all duration-300"
//                       placeholder="Your message here..."
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                         </svg>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-5 h-5" /> Send Message
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         {/* </div> */}
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Maryam Afzal</h3>
//               <p className="text-gray-400 leading-relaxed">
//                 MERN Stack Developer with a passion for building scalable and user-friendly web applications.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 {['home', 'about', 'skills', 'projects', 'certificates', 'resume', 'contact'].map((item) => (
//                   <li key={item}>
//                     <button
//                       onClick={() => scrollToSection(item)}
//                       className="text-gray-400 hover:text-blue-400 transition-colors capitalize"
//                     >
//                       {item}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Connect</h3>
//               <div className="flex gap-4">
//                 <a
//                   href="https://www.linkedin.com/in/marium-afzal-916b012bb/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-110"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="https://github.com/Maryammuhammadafzal"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors transform hover:scale-110"
//                 >
//                   <Github className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="https://facebook.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-110"
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                   </svg>
//                 </a>
//                 <a
//                   href="https://instagram.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 bg-pink-800 rounded-lg hover:bg-pink-700 transition-colors transform hover:scale-110"
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.634.075-3.258.477-4.488 1.707S.873 4.596.798 6.23C.74 7.51.727 7.918.727 12.073s.013 4.563.072 5.843c.075 1.634.477 3.258 1.707 4.488s2.854 1.632 4.488 1.707c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.634-.075 3.258-.477 4.488-1.707s1.632-2.854 1.707-4.488c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.075-1.634-.477-3.258-1.707-4.488S19.404.873 17.77.798c-1.28-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="mt-12 border-t border-gray-700 pt-8 text-center">
//             <p className="text-gray-400">
//               &copy; {new Date().getFullYear()} Maryam Afzal. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;

// 'use client'
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Mail, Phone, MapPin, Github, Linkedin, Send, Menu, X } from 'lucide-react';
// import { motion } from 'framer-motion';

// // Navbar Component
// const Navbar = ({ scrollToSection, activeSection }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 w-full bg-[#0A0A0A] z-50"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex-shrink-0">
//             <h1 className="text-xl font-semibold text-white font-poppins">Maryam Afzal</h1>
//           </div>
//           <div className="hidden md:flex items-center space-x-8">
//             {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className={`text-sm font-poppins font-medium transition-all duration-300 ${
//                   activeSection === item ? 'text-[#00C4B4]' : 'text-[#A3A3A3] hover:text-[#00C4B4]'
//                 }`}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </button>
//             ))}
//           </div>
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 text-[#A3A3A3] hover:text-[#00C4B4]"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: 'auto' }}
//             className="md:hidden bg-[#0A0A0A]"
//           >
//             <div className="px-4 py-2 space-y-2">
//               {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => {
//                     scrollToSection(item);
//                     setIsMenuOpen(false);
//                   }}
//                   className={`block w-full text-left text-sm font-poppins font-medium text-[#A3A3A3] hover:text-[#00C4B4] py-2 ${
//                     activeSection === item ? 'text-[#00C4B4]' : ''
//                   }`}
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   );
// };

// // Code Background for Hero
// const CodeBackground = () => {
//   return (
//     <div className="absolute inset-0 opacity-50 pointer-events-none">
//       <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <text x="10" y="50" fill="#00C4B4" fontFamily="monospace" fontSize="14">const developer = {'{'}</text>
//         <text x="10" y="80" fill="#00C4B4" fontFamily="monospace" fontSize="14">  name: "Maryam Afzal",</text>
//         <text x="10" y="110" fill="#00C4B4" fontFamily="monospace" fontSize="14">  stack: ["MERN"],</text>
//         <text x="10" y="140" fill="#00C4B4" fontFamily="monospace" fontSize="14">{'}'}</text>
//       </svg>
//     </div>
//   );
// };

// // Portfolio Component
// const Portfolio = () => {
//   // Mock data for projects
//   const projects = [
//     {
//       id: 1,
//       title: 'E-Commerce Platform',
//       description: 'A full-stack e-commerce platform with user authentication, product management, cart functionality, and payment integration.',
//       technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe'],
//       liveDemo: 'https://demo-ecommerce.vercel.app',
//       github: 'https://github.com/Maryammuhammadafzal/ecommerce-platform',
//       image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
//     },
//     {
//       id: 2,
//       title: 'Task Management App',
//       description: 'A collaborative task management application with real-time updates, user roles, and project tracking capabilities.',
//       technologies: ['React.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
//       liveDemo: 'https://taskmanager-demo.vercel.app',
//       github: 'https://github.com/Maryammuhammadafzal/task-manager',
//       image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
//     },
//     {
//       id: 3,
//       title: 'Social Media Dashboard',
//       description: 'A comprehensive social media analytics dashboard with data visualization and reporting features.',
//       technologies: ['React.js', 'Node.js', 'MongoDB', 'Chart.js', 'Firebase'],
//       liveDemo: 'https://social-dashboard-demo.vercel.app',
//       github: 'https://github.com/Maryammuhammadafzal/social-dashboard',
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
//     },
//   ];

//   // Skills data
//   const skills = [
//     { name: 'React.js', level: 95, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg' },
//     { name: 'Node.js', level: 90, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg' },
//     { name: 'MongoDB', level: 85, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg' },
//     { name: 'Express.js', level: 92, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg' },
//     { name: 'JavaScript', level: 92, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg' },
//     { name: 'Next.js', level: 88, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg' },
//   ];

//   const [activeSection, setActiveSection] = useState('home');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Scroll to section handler
//   const scrollToSection = (sectionId) => {
//     setActiveSection(sectionId);
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Form submission handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     alert('Thank you for your message! I will get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//     setIsSubmitting(false);
//   };

//   // Handle input changes
//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-[#0A0A0A] text-white font-poppins">
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
//         body {
//           font-family: 'Poppins', sans-serif;
//         }
//       `}</style>

//       <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center bg-[#0A0A0A] pt-16 relative">
//          {[...Array(8)].map((_, index) => {
//           return <div key={index}><CodeBackground  /></div>
//          })}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold">Full Stack Developer</h1>
//             <p className="text-lg text-[#A3A3A3] max-w-xl mx-auto">
//               I’m Maryam Afzal, a MERN Stack Developer building scalable and user-friendly web applications.
//             </p>
//             <motion.button
//               onClick={() => scrollToSection('contact')}
//               className="px-6 py-3 bg-[#00C4B4] text-white font-medium rounded-md hover:bg-[#00A89A] transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Contact Me
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 bg-[#1C2526]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="grid md:grid-cols-2 gap-8 items-center"
//           >
//             <div className="relative">
//               <Image
//                 src="https://images.unsplash.com/photo-1516321310762-479e93c73d66?w=500&h=500&fit=crop"
//                 alt="Maryam Afzal"
//                 width={500}
//                 height={500}
//                 className="rounded-md"
//               />
//             </div>
//             <div className="space-y-4">
//               <h2 className="text-4xl font-semibold">About Me</h2>
//               <p className="text-[#A3A3A3] text-base">
//                 With 3+ years of experience, I specialize in developing robust web applications using the MERN stack. My passion lies in creating seamless user experiences and scalable backend solutions.
//               </p>
//               <p className="text-[#A3A3A3] text-base">
//                 From crafting pixel-perfect frontends to designing efficient APIs, I’m dedicated to delivering high-quality code. Let’s collaborate to turn your ideas into reality.
//               </p>
//               <motion.button
//                 onClick={() => scrollToSection('contact')}
//                 className="px-6 py-2 border-2 border-[#00C4B4] text-[#00C4B4] font-medium rounded-md hover:bg-[#00C4B4] hover:text-white transition-all duration-300"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 Get in Touch
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-16 bg-[#0A0A0A]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-8"
//           >
//             <h2 className="text-4xl font-semibold">My Skills</h2>
//           </motion.div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="bg-[#1C2526] p-4 rounded-md"
//               >
//                 <div className="flex items-center gap-3 mb-2">
//                   <img src={skill.icon} alt={skill.name} className="w-6 h-6 filter invert" />
//                   <span className="text-base font-medium">{skill.name}</span>
//                 </div>
//                 <div className="w-full bg-[#0A0A0A] rounded-full h-2">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${skill.level}%` }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1 }}
//                     className="bg-[#00C4B4] h-2 rounded-full"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-16 bg-[#1C2526]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-8"
//           >
//             <h2 className="text-4xl font-semibold">My Projects</h2>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="bg-[#0A0A0A] rounded-md overflow-hidden"
//               >
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   width={600}
//                   height={400}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-medium">{project.title}</h3>
//                   <p className="text-[#A3A3A3] text-sm mt-2">{project.description}</p>
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-2 py-1 bg-[#00C4B4]/20 text-[#00C4B4] text-xs rounded"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="mt-4 flex gap-4">
//                     <a
//                       href={project.liveDemo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-[#00C4B4] hover:text-[#00A89A] text-sm"
//                     >
//                       Live Demo
//                     </a>
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-[#A3A3A3] hover:text-white text-sm"
//                     >
//                       GitHub
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 bg-[#0A0A0A]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-8"
//           >
//             <h2 className="text-4xl font-semibold">Get in Touch</h2>
//           </motion.div>
//           <div className="max-w-lg mx-auto">
//             <motion.form
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               onSubmit={handleSubmit}
//               className="space-y-4"
//             >
//               <div>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-2 bg-[#1C2526] border border-[#A3A3A3] rounded-md text-white focus:border-[#00C4B4] focus:ring-0 text-sm"
//                   placeholder="Your Name"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-2 bg-[#1C2526] border border-[#A3A3A3] rounded-md text-white focus:border-[#00C4B4] focus:ring-0 text-sm"
//                   placeholder="Your Email"
//                 />
//               </div>
//               <div>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   rows="4"
//                   className="w-full px-4 py-2 bg-[#1C2526] border border-[#A3A3A3] rounded-md text-white focus:border-[#00C4B4] focus:ring-0 text-sm"
//                   placeholder="Your Message"
//                 />
//               </div>
//               <motion.button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full py-2 bg-[#00C4B4] text-white rounded-md font-medium hover:bg-[#00A89A] transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </motion.button>
//             </motion.form>
//             <div className="mt-6 space-y-2 text-[#A3A3A3] text-sm">
//               <a href="mailto:maryam@example.com" className="flex items-center gap-2 hover:text-[#00C4B4]">
//                 <Mail className="w-4 h-4" /> maryam@example.com
//               </a>
//               <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-[#00C4B4]">
//                 <Phone className="w-4 h-4" /> +123-456-7890
//               </a>
//               <div className="flex items-center gap-2">
//                 <MapPin className="w-4 h-4" /> Lahore, Pakistan
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#1C2526] py-6">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="flex justify-center gap-4 mb-4">
//             <a
//               href="https://www.linkedin.com/in/mariam-afzal-916b012bb/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 text-[#A3A3A3] hover:text-[#00C4B4]"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//             <a
//               href="https://github.com/Maryammuhammadafzal"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 text-[#A3A3A3] hover:text-[#00C4B4]"
//             >
//               <Github className="w-5 h-5" />
//             </a>
//           </div>
//           <p className="text-[#A3A3A3] text-sm">
//             © {new Date().getFullYear()} Maryam Afzal. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;

// 'use client'
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Progress } from '@/components/ui/progress';
// import { Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';
// import Image from 'next/image';
// import Head from 'next/head';
// import { TwitterLogoIcon } from '@radix-ui/react-icons';

// const navItems = [
//   { name: 'Home', href: '#home' },
//   { name: 'About', href: '#about' },
//   { name: 'Skills', href: '#skills' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Contact', href: '#contact' },
// ];

// const skills = [
//   { name: 'React', level: 90 },
//   { name: 'TypeScript', level: 85 },
//   { name: 'Tailwind CSS', level: 80 },
//   { name: 'Next.js', level: 75 },
// ];

// const projects = [
//   {
//     title: 'Portfolio Website',
//     description: 'A sleek, modern portfolio with responsive design and animations.',
//     image: '/images/project1.jpg',
//   },
//   {
//     title: 'E-Commerce Platform',
//     description: 'A scalable e-commerce solution with seamless payment integration.',
//     image: '/images/project2.jpg',
//   },
//   {
//     title: 'Task Manager',
//     description: 'A real-time collaborative task management application.',
//     image: '/images/project3.jpg',
//   },
// ];

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [modalProject, setModalProject] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Placeholder for form submission logic
//     alert('Message sent successfully!');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
//       <Head>
//         <title>Portfolio | Frontend Developer</title>
//         <meta name="description" content="Showcasing my skills and projects as a frontend developer" />
//       </Head>

//       {/* Sticky Navbar */}
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         className="sticky top-0 z-50 bg-white shadow-lg"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="flex items-center"
//             >
//               <span className="text-2xl font-extrabold tracking-tight">Portfolio</span>
//             </motion.div>
//             <div className="hidden md:flex items-center space-x-10">
//               {navItems.map((item) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   {item.name}
//                 </motion.a>
//               ))}
//             </div>
//             <div className="md:hidden flex items-center">
//               <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
//                 <ChevronDown className={`h-6 w-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//               </Button>
//             </div>
//           </div>
//         </div>
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: 'auto', opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden bg-white shadow-md"
//             >
//               <div className="px-4 pt-2 pb-3 space-y-2">
//                 {navItems.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="block text-gray-700 hover:text-blue-500 transition-colors"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-50 to-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             className="md:w-1/2 mb-10 md:mb-0"
//           >
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
//               Crafting <span className="text-blue-500">Beautiful</span> Web Experiences
//             </h1>
//             <p className="text-lg text-gray-600 mb-8 max-w-md">
//               I'm a frontend developer passionate about building intuitive and responsive web applications with modern technologies.
//             </p>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
//                 Let's Connect
//               </Button>
//             </motion.div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
//             className="md:w-1/2"
//           >
//             <div className="bg-gray-300 h-64 md:h-80 rounded-lg flex items-center justify-center shadow-lg">
//               <p className="text-gray-500 text-center">[GitHub Contribution Chart Placeholder]</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
//             <div className="flex flex-col md:flex-row items-center gap-8">
//               <div className="md:w-1/2">
//                 <Image
//                   src="/images/about.jpg"
//                   alt="About Me"
//                   width={500}
//                   height={500}
//                   className="rounded-xl shadow-xl w-full"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <p className="text-lg text-gray-600 leading-relaxed">
//                   I'm a dedicated frontend developer with a knack for creating seamless, visually appealing web experiences. With expertise in React, Next.js, and modern design systems, I focus on delivering user-centric solutions that combine functionality with aesthetics.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-20 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {skills.map((skill) => (
//                 <motion.div
//                   key={skill.name}
//                   initial={{ width: 0 }}
//                   whileInView={{ width: '100%' }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1, ease: 'easeOut' }}
//                 >
//                   <div className="flex justify-between mb-2">
//                     <span className="font-medium text-gray-700">{skill.name}</span>
//                     <span className="text-gray-500">{skill.level}%</span>
//                   </div>
//                   <Progress value={skill.level} className="h-2" />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//               {projects.map((project, index) => (
//                 <motion.div
//                   key={project.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
//                   className="cursor-pointer"
//                   onClick={() => setModalProject(project)}
//                 >
//                   <Card className="overflow-hidden hover:shadow-xl transition-shadow">
//                     <CardHeader>
//                       <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         width={300}
//                         height={200}
//                         className="w-full h-48 object-cover rounded-md"
//                       />
//                       <p className="mt-4 text-gray-600">{project.description}</p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//         <AnimatePresence>
//           {modalProject && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
//               onClick={() => setModalProject(null)}
//             >
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 transition={{ duration: 0.3, ease: 'easeOut' }}
//                 className="bg-white p-8 rounded-xl max-w-lg w-full mx-4"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <h3 className="text-2xl font-bold mb-4">{modalProject.title}</h3>
//                 <Image
//                   src={modalProject.image}
//                   alt={modalProject.title}
//                   width={400}
//                   height={300}
//                   className="w-full h-64 object-cover rounded-md mb-4"
//                 />
//                 <p className="text-gray-600 mb-6">{modalProject.description}</p>
//                 <Button
//                   className="bg-blue-500 hover:bg-blue-600 text-white w-full"
//                   onClick={() => setModalProject(null)}
//                 >
//                   Close
//                 </Button>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
//             <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
//               <Input type="text" placeholder="Your Name" required className="h-12" />
//               <Input type="email" placeholder="Your Email" required className="h-12" />
//               <Textarea placeholder="Your Message" required className="min-h-[150px]" />
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white w-full h-12 text-lg">
//                   Send Message
//                 </Button>
//               </motion.div>
//             </form>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400">© 2025 Portfolio. All rights reserved.</p>
//             <div className="flex space-x-8 mt-6 md:mt-0">
//               <motion.a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.2, color: '#3b82f6' }}
//               >
//                 <Github className="h-6 w-6" />
//               </motion.a>
//               <motion.a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.2, color: '#3b82f6' }}
//               >
//                 <Linkedin className="h-6 w-6" />
//               </motion.a>
//               <motion.a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.2, color: '#3b82f6' }}
//               >
//                 <TwitterLogoIcon className="h-6 w-6" />
//               </motion.a>
//               <motion.a
//                 href="mailto:example@email.com"
//                 whileHover={{ scale: 1.2, color: '#3b82f6' }}
//               >
//                 <Mail className="h-6 w-6" />
//               </motion.a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import codeImage from "../../public/code-image.webp";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Icon,
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import GitHubContributions from "@/components/GitHubContributions";
import Link from "next/link";
import DigitalClock from "@/components/DigitalClockDynamic";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Next.js", level: 75 },
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek, modern portfolio with responsive design and animations.",
    image: "/mockup-2.webp",
    image2: "/mockup-1.webp",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce solution with seamless payment integration.",
    image: "/mockup-3.webp",
    image2: "/mockup-4.webp",
  },
  {
    title: "Task Manager",
    description: "A real-time collaborative task management application.",
    image: "/mockup-5.webp",
    image2: "/mockup-6.webp",
  },
];

const contacts = [
  {
    text: "bibimariummuhammadafzal123@gmail.com",
    url: "mailto:bibimariummuhammadafzal123r@gmail.com",
    service: "Email",
  },
  {
    text: "Marium BiBi",
    url: " https://www.facebook.com/profile.php?id=61557444029142",
    service: "Faceboon",
  },
  {
    text: "/in/marium-afzal-3bibi21",
    url: "https://www.linkedin.com/in/marium-afzal-3bibi21",
    service: " LinkedIn ",
  },
];

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  return (
    <div className="w-full min-h-screen bg-white text-black ">
      {/* Sticky Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white"
      >
        <div className="max-w-8xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex font-sans justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <span className="text-2xl flex justify-center items-center font-extrabold tracking-tight">
                <ChevronLeft size={30} className="mt-1 -mr-2" />
                MernStackDeveloper
                <ChevronRight size={30} className="mt-1 -ml-2" />
              </span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                <ChevronDown
                  className={`h-6 w-6 transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden font-sans bg-white shadow-md"
            >
              <div className="px-4 pt-2 pb-3 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen font-sans flex flex-col space-y-6 items-center pb-20 pt-5 bg-white"
      >
        <div className="w-[95%] h-auto py-6 px-3">
          <h1 className="main-heading w-full uppercase sm:text-5xl md:text-6xl font-bold ">
            Mern Stack Developer
          </h1>
          <h1 className="main-heading w-full uppercase sm:text-5xl md:text-6xl font-bold ">
            Maryam Afzal
          </h1>
        </div>
        <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h2 className="text-3xl  sm:text-lg md:text-xl font-extrabold flex leading-tight mb-6">
              <ChevronLeft size={25} className="-mr-1" />{" "}
              <span className="skillsname">
                React.js Next.js Redux.js Node.js JavaScript{" "}
              </span>{" "}
              <ChevronRight size={25} className="-ml-1" />
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg pl-4">
              A Mern stack developer with experience in both team projects and
              individual work, I focus on building scalable, efficient
              solutions. With a background in engineering, I bring a structured,
              problem-solving mindset to development.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="ml-3 px-14 py-5 h-12 rounded-3xl text-lg bg-lime-300 font-bold hover:bg-lime-400 text-black">
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:w-1/2 flex justify-end"
          >
            <div className="max-w-2xl bg-gray-300 h-64 md:h-80 rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
              <GitHubContributions />
              {/* <img src="https://green-wall.leoku.dev/share/Maryammuhammadafzal?start=2024&showSafariHeader=false&showAttribution=false" alt="GitHub Contributions Chart"/> */}
              {/* <img src="https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&hide_title=true&hide=issues" alt="GitHub Contributions Chart"/> */}
              {/* <iframe src="https://ghchart.rshah.org/maryammuhammadafzal" width="100%" height="300px"></iframe> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex font-sans w-full px-3 py-20 bg-neutral-900 justify-center  min-h-screen">
        <div className="w-[93%] flex flex-col gap-20">
          <h3 className="text-white text-[120px] uppercase font-bold">
            Selected Projects
          </h3>
          <div className="w-full h-auto flex flex-col gap-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project w-full h-auto flex justify-between"
              >
                <div className="left max-w-2xl w-[50%]  flex flex-col justify-between h-auto">
                  <div className="flex flex-col gap-6">
                    <h4 className="text-8xl font-extrabold text-neutral-500  items-center">
                      &lt;{index + 1}&gt;
                    </h4>
                    <h2 className="text-3xl font-bold text-white">
                      {project.title}
                    </h2>
                    <div>
                      <h3 className="text-sm text-neutral-500">Role</h3>
                      <h3 className="text-base text-lime-400">
                        Mern Stack Developer
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-sm text-neutral-500">
                        Frontend Stack
                      </h3>
                      <h3 className="text-base text-white">
                        Next js, Javascript , Tailwind Css
                      </h3>
                    </div>
                    <div>
                      <h3 className="text-sm text-neutral-500">Backend</h3>
                      <h3 className="text-base text-white">
                        Mongodb , Node js , Open Ai Api
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <p className="text-white">
                      As a full-stack developer on this project, I took
                      ownership of both the frontend and backend development,
                      ensuring a seamless and intuitive user experience. I built
                      the frontend from scratch using modern frameworks and
                      tools like Next.js, TypeScript, and Tailwind CSS, adhering
                      to industry best practices for structure and scalability.
                      On the backend, I implemented a secure and efficient
                      system using MongoDB for data management and Google
                      Authentication for user login, Additionally, I integrated
                      the Open A1 API to deliver personalized, A1-driven movie
                      recommendations.
                    </p>
                  </div>
                </div>
                <div className=" w-[45%] right flex flex-col gap-5">
                  <Image
                    src={project.image}
                    alt="image"
                    width={800}
                    height={200}
                    className="rounded-lg w-full"
                  />
                  <Image
                    src={project.image2}
                    alt="image"
                    width={500}
                    height={200}
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex font-sans w-full px-3 py-20 justify-center  min-h-screen">
        <div className="w-[93%] flex flex-col gap-20">
          <h3 className="text-[120px] uppercase font-bold">Services</h3>
          <div className="w-full h-auto flex flex-col gap-20">
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
              {/* Services Cards */}
              <div className="rounded-lg bg-white flex flex-col gap-5 justiy-center py-10 px-3">
                <div className="icon rounded-lg bg-lime-300 p-3 flex justify-center items-center w-10 text-white h-10"></div>
                <h2 className="title font-bold text-black">
                  Frontend Development
                </h2>
                <p>
                  Building responsive and inituative user interface using modern
                  Frameworks like React, Javascript , Next js with Tailwind Css.
                </p>
              </div>
              <div className="rounded-lg bg-white flex flex-col gap-5 justiy-center py-10 px-3">
                <div className="icon rounded-lg bg-lime-300 p-3 flex justify-center items-center w-10 text-white h-10"></div>
                <h2 className="title font-bold text-black">
                  Frontend Development
                </h2>
                <p>
                  Building responsive and inituative user interface using modern
                  Frameworks like React, Javascript , Next js with Tailwind Css.
                </p>
              </div>
              <div className="rounded-lg bg-white flex flex-col gap-5 justiy-center py-10 px-3">
                <div className="icon rounded-lg bg-lime-300 p-3 flex justify-center items-center w-10 text-white h-10"></div>
                <h2 className="title font-bold text-black">
                  Frontend Development
                </h2>
                <p>
                  Building responsive and inituative user interface using modern
                  Frameworks like React, Javascript , Next js with Tailwind Css.
                </p>
              </div>
            </div>
            <div className="image w-full p-5 flex h-auto justify-center items-center">
              <Image
                src={codeImage}
                width={1600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Clock and contacts section"
        id="contacts"
        className="container flex flex-col justify-center  py-20 items-center gap-10"
      >
        <div className="w-[85%] flex flex-col gap-5">
          <h3 className="text-[120px] uppercase font-sans font-bold">
            Let's Connect
          </h3>

          <motion.div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-10">
            <div className="w-full flex justify-start items-center xl:w-1/2">
              <DigitalClock />
            </div>
            <div className="flex font-sans flex-col justify-between items-center gap-10 w-full xl:w-1/2 ">
              <p>
                Thank you for stopping by! I’m always excited to explore new
                opportunities and collaborations. Let’s connect through email,
                phone, LinkedIn, or GitHub—I’d love to hear from you!
              </p>
              <ul className="flex font-sans flex-col flex-wrap justify-start lg:justify-between items-start gap-4 lg:gap-2 w-full">
                {contacts.map((contact, index) => (
                  <li key={index} className="flex flex-col items-start gap-1">
                    <Link
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Link to contact ${contact.url}`}
                      className="group flex flex-col items-start font-bold gap-2 cursor-pointer transition-all duration-300 hover:text-grey_500"
                    >
                      {contact.text}
                      {/* <Icon
                      id="icon-arrow-up-right"
                      width={12}
                      height={12}
                      className="text-black group-hover:text-grey_500"
                    /> */}
                      <ArrowUpRight className="text-black group-hover:text-grey_500" />
                    </Link>
                    <p className="">{contact.service}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="w-full h-auto text-white bg-neutral-900 justify-center items-center flex font-sans">
        <div className="w-[95%] flex justify-center items-center lg:gap-8 flex-col h-auto py-6 px-3">
           <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex font-sans justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <span className="text-2xl flex justify-center items-center font-extrabold tracking-tight">
                <ChevronLeft size={30} className="mt-1 -mr-2" />
                MaryamAfzal
                <ChevronRight size={30} className="mt-1 -ml-2" />
              </span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                <ChevronDown
                  className={`h-6 w-6 transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>
          </div>
        </div>
          <h1 className="main-heading text-center w-full uppercase sm:text-5xl md:text-6xl font-bold ">
            Mern Stack Developer
          </h1>

        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
