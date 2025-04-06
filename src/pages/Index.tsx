
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-tech-darker circuit-bg overflow-x-hidden">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-tech-darker/80 border-b border-tech-blue/20">
        <div className="container mx-auto py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-tech-blue to-tech-cyan flex items-center justify-center">
                <span className="text-white font-bold">GS</span>
              </div>
              <h1 className="tech-font text-xl md:text-2xl font-semibold neon-text">
                <span className="text-tech-blue">G.</span>Savita Shri
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection("about")} 
                className={`${activeTab === "about" ? "text-tech-blue" : "text-white/70"} hover:text-tech-cyan transition-colors duration-300`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("skills")} 
                className={`${activeTab === "skills" ? "text-tech-blue" : "text-white/70"} hover:text-tech-cyan transition-colors duration-300`}
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("learn")} 
                className={`${activeTab === "learn" ? "text-tech-blue" : "text-white/70"} hover:text-tech-cyan transition-colors duration-300`}
              >
                Learning Path
              </button>
              <button 
                onClick={() => scrollToSection("projects")} 
                className={`${activeTab === "projects" ? "text-tech-blue" : "text-white/70"} hover:text-tech-cyan transition-colors duration-300`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className={`${activeTab === "contact" ? "text-tech-blue" : "text-white/70"} hover:text-tech-cyan transition-colors duration-300`}
              >
                Contact
              </button>
            </div>
            
            <div className="md:hidden">
              <button className="text-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto pt-28 pb-20 px-4">
        {/* Hero Section */}
        <section className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 tech-font animate-glow">
                Hi, I'm <span className="text-tech-blue">G. Savita Shri</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                A passionate web developer with expertise in 
                <span className="text-tech-blue font-medium"> HTML</span>, 
                <span className="text-tech-blue font-medium"> CSS</span>, and 
                <span className="text-tech-blue font-medium"> JavaScript</span>.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button onClick={() => scrollToSection("projects")} className="tech-button">
                  View Projects
                </button>
                <button onClick={() => scrollToSection("contact")} className="border border-tech-blue text-tech-blue px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-tech-blue/10">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden animate-float">
                <img 
                  src="/lovable-uploads/ed5fabe3-1869-4261-9844-877685beffc2.png" 
                  alt="Tech visualization" 
                  className="w-full h-full object-cover rounded-lg border-glow border border-tech-blue/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-darker via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section 
          id="about"
          className={`mt-24 transition-all duration-700 ${isLoaded && activeTab === "about" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${activeTab === "about" ? "block" : "hidden md:block"}`}
        >
          <div className="tech-card p-8 md:p-10">
            <div className="tech-card-content">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tech-font flex items-center">
                <span className="text-tech-blue mr-2">&lt;</span>
                About Me
                <span className="text-tech-blue ml-2">/&gt;</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-300 mb-4">
                    Hi! I'm G. Savita Shri, a passionate web developer with a solid foundation in HTML, CSS, and JavaScript. 
                    I love building clean, responsive, and user-friendly websites.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Currently, I'm exploring more advanced technologies and tools to expand my web development toolkit. 
                    I'm particularly interested in modern JavaScript frameworks, responsive design principles, and creating 
                    interactive user experiences.
                  </p>
                  <p className="text-gray-300">
                    I believe in continuous learning and staying updated with the latest industry trends. 
                    My goal is to create web solutions that are not only visually appealing but also functional and user-friendly.
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <img 
                    src="/lovable-uploads/8d11208b-a249-419e-b3c5-ba7b70016133.png" 
                    alt="G. Savita Shri" 
                    className="rounded-lg max-h-80 border border-tech-blue/20 shadow-lg shadow-tech-blue/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section 
          id="skills"
          className={`mt-24 transition-all duration-700 ${isLoaded && activeTab === "skills" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${activeTab === "skills" ? "block" : "hidden md:hidden"}`}
        >
          <div className="tech-card p-8 md:p-10">
            <div className="tech-card-content">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tech-font flex items-center">
                <span className="text-tech-blue mr-2">&lt;</span>
                Skills
                <span className="text-tech-blue ml-2">/&gt;</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-tech-cyan">Current Skills</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">HTML</span>
                        <span className="text-tech-blue">90%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">CSS</span>
                        <span className="text-tech-blue">85%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">JavaScript</span>
                        <span className="text-tech-blue">75%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Responsive Design</span>
                        <span className="text-tech-blue">80%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-6">
                  <h3 className="text-xl font-semibold mb-2 text-tech-cyan">Tools & Technologies</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-tech-dark/80 border border-tech-blue/20 rounded-lg p-4 text-center hover:border-tech-blue/50 transition-all duration-300">
                      <div className="text-tech-blue text-2xl mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5.759 20.4h12.482L12 3.6l-6.241 16.8zm-.968-1.2L12 4.8l7.209 14.4H4.791z"/>
                          <path d="M12 17.4a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zm-1.2-3.6h2.4V8.4h-2.4v5.4z"/>
                        </svg>
                      </div>
                      <h4 className="text-gray-200 text-sm">VS Code</h4>
                    </div>
                    
                    <div className="bg-tech-dark/80 border border-tech-blue/20 rounded-lg p-4 text-center hover:border-tech-blue/50 transition-all duration-300">
                      <div className="text-tech-blue text-2xl mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z"/>
                        </svg>
                      </div>
                      <h4 className="text-gray-200 text-sm">Git</h4>
                    </div>
                    
                    <div className="bg-tech-dark/80 border border-tech-blue/20 rounded-lg p-4 text-center hover:border-tech-blue/50 transition-all duration-300">
                      <div className="text-tech-blue text-2xl mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5.25 3h13.5a2.25 2.25 0 012.25 2.25v13.5A2.25 2.25 0 0119.75 21H5.25A2.25 2.25 0 013 18.75V5.25A2.25 2.25 0 015.25 3zm.75 4.5v10.5h12V7.5H6z"/>
                        </svg>
                      </div>
                      <h4 className="text-gray-200 text-sm">Responsive</h4>
                    </div>
                    
                    <div className="bg-tech-dark/80 border border-tech-blue/20 rounded-lg p-4 text-center hover:border-tech-blue/50 transition-all duration-300">
                      <div className="text-tech-blue text-2xl mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/>
                        </svg>
                      </div>
                      <h4 className="text-gray-200 text-sm">Problem Solving</h4>
                    </div>
                    
                    <div className="bg-tech-dark/80 border border-tech-blue/20 rounded-lg p-4 text-center hover:border-tech-blue/50 transition-all duration-300">
                      <div className="text-tech-blue text-2xl mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4 8h16v13a1 1 0 01-1 1h-5v-6h-4v6H5a1 1 0 01-1-1V8zm7-7h2a2 2 0 012 2v1h4a2 2 0 012 2v2H3V6a2 2 0 012-2h4V3a2 2 0 012-2z"/>
                        </svg>
                      </div>
                      <h4 className="text-gray-200 text-sm">Figma</h4>
                    </div>
                    
                    <div className="bg-tech-dark/80 border border-tech-blue/20 rounded-lg p-4 text-center hover:border-tech-blue/50 transition-all duration-300">
                      <div className="text-tech-blue text-2xl mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.172 7H21v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h7.172a2 2 0 011.414.586L14.414 5.414A2 2 0 0115 6.828V7zm-1 1v-1H6v10h12V8h-4a1 1 0 01-1-1z"/>
                        </svg>
                      </div>
                      <h4 className="text-gray-200 text-sm">GitHub</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section 
          id="learn"
          className={`mt-24 transition-all duration-700 ${isLoaded && activeTab === "learn" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${activeTab === "learn" ? "block" : "hidden md:hidden"}`}
        >
          <div className="tech-card p-8 md:p-10">
            <div className="tech-card-content">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tech-font flex items-center">
                <span className="text-tech-blue mr-2">&lt;</span>
                Learning Path
                <span className="text-tech-blue ml-2">/&gt;</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold mb-4 text-tech-cyan">Frontend Development</h3>
                    <div className="space-y-6">
                      <div className="relative pl-8 pb-8 border-l border-tech-blue/30">
                        <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-tech-blue"></div>
                        <h4 className="text-lg font-semibold">JavaScript (ES6+)</h4>
                        <p className="text-gray-400 mb-2 text-sm">Topics: Variables, Functions, Objects, Arrays, Async/Await, Promises, Closures</p>
                        <div className="text-xs text-gray-500">
                          Resources:
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>MDN JavaScript Docs</li>
                            <li>JavaScript.info</li>
                            <li>YouTube: "JavaScript Full Course" – freeCodeCamp</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="relative pl-8 pb-8 border-l border-tech-blue/30">
                        <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-tech-blue"></div>
                        <h4 className="text-lg font-semibold">TypeScript</h4>
                        <p className="text-gray-400 mb-2 text-sm">Topics: Type System, Interfaces, Generics, Type Guards</p>
                        <div className="text-xs text-gray-500">
                          Resources:
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>TypeScript Docs</li>
                            <li>YouTube: "TypeScript Crash Course" – Traversy Media</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="relative pl-8 pb-8 border-l border-tech-blue/30">
                        <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-tech-blue"></div>
                        <h4 className="text-lg font-semibold">React.js</h4>
                        <p className="text-gray-400 mb-2 text-sm">Topics: Components, Hooks (useState, useEffect), Props, Context API, Routing</p>
                        <div className="text-xs text-gray-500">
                          Resources:
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>React Official Docs</li>
                            <li>Full React Course</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold mb-4 text-tech-cyan">Backend Development</h3>
                    <div className="space-y-6">
                      <div className="relative pl-8 pb-8 border-l border-tech-blue/30">
                        <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-tech-blue"></div>
                        <h4 className="text-lg font-semibold">Node.js & Express.js</h4>
                        <p className="text-gray-400 mb-2 text-sm">Topics: REST API, Middleware, Authentication (JWT), File Uploads</p>
                        <div className="text-xs text-gray-500">
                          Resources:
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>Node.js Docs</li>
                            <li>YouTube: "Node.js & Express.js Full Course" – freeCodeCamp</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="relative pl-8 pb-8 border-l border-tech-blue/30">
                        <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-tech-blue"></div>
                        <h4 className="text-lg font-semibold">Databases (SQL & NoSQL)</h4>
                        <p className="text-gray-400 mb-2 text-sm">MongoDB (NoSQL): Schema Design, Aggregation, Mongoose ODM</p>
                        <p className="text-gray-400 mb-2 text-sm">MySQL/PostgreSQL (SQL): Queries, Joins, Indexing</p>
                        <div className="text-xs text-gray-500">
                          Resources:
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>MongoDB Docs</li>
                            <li>SQL for Beginners</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="relative pl-8 pb-8 border-l border-tech-blue/30">
                        <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-tech-blue"></div>
                        <h4 className="text-lg font-semibold">Authentication & Security</h4>
                        <p className="text-gray-400 mb-2 text-sm">Topics: JWT, OAuth, bcrypt, XSS, CSRF</p>
                        <div className="text-xs text-gray-500">
                          Resources:
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>OAuth Docs</li>
                            <li>YouTube: "Secure Authentication in Node.js"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section 
          id="projects"
          className={`mt-24 transition-all duration-700 ${isLoaded && activeTab === "projects" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${activeTab === "projects" ? "block" : "hidden md:hidden"}`}
        >
          <div className="tech-card p-8 md:p-10">
            <div className="tech-card-content">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tech-font flex items-center">
                <span className="text-tech-blue mr-2">&lt;</span>
                Projects
                <span className="text-tech-blue ml-2">/&gt;</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card bg-tech-dark/80 border border-tech-blue/20 rounded-xl overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="/lovable-uploads/420f7e34-7d3c-4f59-8fa9-b771af9a9224.png" 
                      alt="Employee Management System" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Employee Management System</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      A responsive web interface to manage employee data efficiently. Built using HTML, CSS, and JavaScript.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-tech-blue/20 text-tech-blue px-2 py-1 rounded-md">HTML</span>
                      <span className="text-xs bg-tech-blue/20 text-tech-blue px-2 py-1 rounded-md">CSS</span>
                      <span className="text-xs bg-tech-blue/20 text-tech-blue px-2 py-1 rounded-md">JavaScript</span>
                      <span className="text-xs bg-tech-blue/20 text-tech-blue px-2 py-1 rounded-md">Responsive</span>
                    </div>
                    <button className="tech-button text-sm py-2 px-4">View Project</button>
                  </div>
                </div>
                
                <div className="glass-card bg-tech-dark/80 border border-tech-blue/20 rounded-xl overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="/lovable-uploads/5c22a90e-b8e2-4085-91af-06f022301b5a.png" 
                      alt="Hackathon GameJam Project" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Hackathon GameJam Project</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      A fun and interactive game prototype developed during a hackathon and published on itch.io.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-tech-blue/20 text-tech-blue px-2 py-1 rounded-md">JavaScript</span>
                      <span className="text-xs bg-tech-blue/20 text-tech-blue px-2 py-1 rounded-md">HTML5 Canvas</span>
                      <span className="text-xs bg-tech-blue/20 text-tech-blue px-2 py-1 rounded-md">Game Development</span>
                    </div>
                    <button className="tech-button text-sm py-2 px-4">View Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact"
          className={`mt-24 transition-all duration-700 ${isLoaded && activeTab === "contact" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${activeTab === "contact" ? "block" : "hidden md:hidden"}`}
        >
          <div className="tech-card p-8 md:p-10">
            <div className="tech-card-content">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tech-font flex items-center">
                <span className="text-tech-blue mr-2">&lt;</span>
                Contact
                <span className="text-tech-blue ml-2">/&gt;</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-300 mb-6">
                    Interested in working together? Feel free to reach out through any of the following channels:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-tech-blue/20 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-400">Email</h4>
                        <p className="text-tech-blue">230701299@rajalakshmi.edu.in</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-tech-blue/20 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-400">Phone</h4>
                        <p className="text-tech-blue">8015576117</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-tech-blue/20 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-400">Location</h4>
                        <p className="text-tech-blue">Chennai, Tamil Nadu, India</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-tech-blue/20 p-3 rounded-full hover:bg-tech-blue/40 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-tech-blue" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      
                      <a href="#" className="bg-tech-blue/20 p-3 rounded-full hover:bg-tech-blue/40 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-tech-blue" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      
                      <a href="#" className="bg-tech-blue/20 p-3 rounded-full hover:bg-tech-blue/40 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-tech-blue" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full bg-tech-dark/80 border border-tech-blue/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-tech-blue"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full bg-tech-dark/80 border border-tech-blue/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-tech-blue"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        className="w-full bg-tech-dark/80 border border-tech-blue/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-tech-blue"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="tech-button w-full">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-tech-dark border-t border-tech-blue/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="tech-font text-lg tech-glow">G. Savita Shri</h3>
              <p className="text-gray-400 text-sm">Web Developer</p>
            </div>
            
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      
      {/* Mobile Navigation */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 bg-tech-darker/90 backdrop-blur-md border-t border-tech-blue/20 py-2 z-50">
        <div className="flex justify-around">
          <button 
            onClick={() => scrollToSection("about")} 
            className={`flex flex-col items-center p-2 ${activeTab === "about" ? "text-tech-blue" : "text-white/70"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">About</span>
          </button>
          
          <button 
            onClick={() => scrollToSection("skills")} 
            className={`flex flex-col items-center p-2 ${activeTab === "skills" ? "text-tech-blue" : "text-white/70"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-xs mt-1">Skills</span>
          </button>
          
          <button 
            onClick={() => scrollToSection("learn")} 
            className={`flex flex-col items-center p-2 ${activeTab === "learn" ? "text-tech-blue" : "text-white/70"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <span className="text-xs mt-1">Learning</span>
          </button>
          
          <button 
            onClick={() => scrollToSection("projects")} 
            className={`flex flex-col items-center p-2 ${activeTab === "projects" ? "text-tech-blue" : "text-white/70"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs mt-1">Projects</span>
          </button>
          
          <button 
            onClick={() => scrollToSection("contact")} 
            className={`flex flex-col items-center p-2 ${activeTab === "contact" ? "text-tech-blue" : "text-white/70"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs mt-1">Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
