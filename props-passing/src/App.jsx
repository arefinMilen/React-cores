import React from "react";
import Profiles from "./components/profiles.jsx";
const App = () => {
  const profiles = [
    {
      id: 1,
      name: "Miraz Ahmed",
      status: "available",
      rate: "$40/hr",
      role: "Mobile UI Designer",
      type: "freelancer",
      image:
        "https://images.unsplash.com/photo-1652781269535-f13e466904a2?w=1000",
      skills: ["Figma", "Flutter", "UI/UX", "Prototyping"],
      bio: "Clean and modern mobile UI with strong UX flow and consistency.",
    },
    {
      id: 2,
      name: "Sabbir Hossain",
      status: "available",
      rate: "$35/hr",
      role: "Frontend Developer",
      type: "freelancer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      bio: "Pixel-perfect frontend with performance and accessibility in mind.",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      status: "available",
      rate: "$45/hr",
      role: "UI/UX Designer",
      type: "freelancer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000",
      skills: ["Figma", "UX Research", "Wireframe", "Design System"],
      bio: "User-centric design focused on clarity, usability, and aesthetics.",
    },
    {
      id: 4,
      name: "Tanvir Rahman",
      status: "available",
      rate: "$50/hr",
      role: "Full Stack Developer",
      type: "freelancer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      bio: "Scalable full-stack apps with clean architecture and APIs.",
    },
    {
      id: 5,
      name: "Ayesha Akter",
      status: "available",
      rate: "$30/hr",
      role: "WordPress Developer",
      type: "freelancer",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000",
      skills: ["WordPress", "Elementor", "PHP", "WooCommerce"],
      bio: "Fast, SEO-friendly WordPress sites with smooth UI.",
    },
    {
      id: 6,
      name: "Rafiul Islam",
      status: "available",
      rate: "$55/hr",
      role: "Backend Developer",
      type: "freelancer",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=1000",
      skills: ["Node.js", "NestJS", "PostgreSQL", "REST API"],
      bio: "Secure and optimized backend systems for production apps.",
    },
    {
      id: 7,
      name: "Mehedi Hasan",
      status: "available",
      rate: "$28/hr",
      role: "Junior Frontend Developer",
      type: "freelancer",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1000",
      skills: ["HTML", "Tailwind", "JavaScript"],
      bio: "Learning-driven dev with clean code and responsive layouts.",
    },
    {
      id: 8,
      name: "Farhana Yasmin",
      status: "available",
      rate: "$42/hr",
      role: "Product Designer",
      type: "freelancer",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=1000",
      skills: ["Figma", "UX Strategy", "Design Thinking"],
      bio: "Designing products that balance business goals and user needs.",
    },
    {
      id: 9,
      name: "Shahriar Kabir",
      status: "available",
      rate: "$60/hr",
      role: "DevOps Engineer",
      type: "freelancer",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=1000",
      skills: ["AWS", "Docker", "CI/CD", "Linux"],
      bio: "Automating deployments and keeping systems stable and fast.",
    },
    {
      id: 10,
      name: "Imran Hossain",
      status: "available",
      rate: "$38/hr",
      role: "React Native Developer",
      type: "freelancer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000",
      skills: ["React Native", "Expo", "Firebase"],
      bio: "Cross-platform mobile apps with smooth performance.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-100 min-h-screen">
      {profiles.map((profile,index)=>{
        return (
          <div key={index}> 
        <Profiles
          status={profile.status}
          rate={profile.rate}
          image={profile.image}
          name={profile.name} 
          role={profile.role}
          type={profile.type}
          skills={profile.skills}
          bio={profile.bio}
          />
          </div>
        )
      })}
    </div>
  );
};

export default App;
