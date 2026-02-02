// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "FSP Portfolio",
  title: "FSP Portfolio",
  description: "My personal portfolio built with Astro",
  
  // Navigation
  navigation: {
    home: "Home",
    projects: "Projects",
    contact: "Contact",
  },
  
  // Hero Section
  hero: {
    prefix: "Hello there! My name is",
    name: "Francisco Salas Porras",
    intro: "And I'm a passionate robotics engineer!",
    avatar: "/portfolio/image/fsp_photo.jpeg",
    buttons: {
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    socialLinks: [
      { name: "LinkedIn", icon: "/portfolio/svg/linkedin_dark.svg", url: "https://www.linkedin.com/company/astrodotbuild" },
      { name: "GitHub", icon: "/portfolio/svg/github_dark.svg", url: "https://github.com/tomcomtang/astro-cartoon-portfolio" },
    ],
  },
  
  // About Section
  about: {
    title: "About Me",
    text: "I'm originally from Monterrey, Mexico. I've spent years developing expertise in robotics and automation technologies.",
  },
  
  // Contact Page
  contact: {
    title: "Get In Touch",
    subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    info: {
      email: {
        label: "Email",
        value: "tom@example.com",
        link: "mailto:tom@example.com",
      },
      phone: {
        label: "Phone",
        value: "+1 (234) 567-890",
        link: "tel:+1 (234) 567-890",
      },
      location: {
        label: "Location",
        value: "San Francisco, CA",
      },
    },
    followMe: {
      title: "Follow Me",
      links: [
        { name: "Twitter", icon: "/portfolio/svg/twitter.svg", url: "https://x.com/astrodotbuild" },
        { name: "LinkedIn", icon: "/portfolio/svg/linkedin.svg", url: "https://www.linkedin.com/company/astrodotbuild" },
        { name: "Facebook", icon: "/portfolio/svg/facebook.svg", url: "https://www.facebook.com/astrodotbuild" },
        { name: "GitHub", icon: "/portfolio/svg/github.svg", url: "https://github.com/tomcomtang/astro-cartoon-portfolio" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
    messageButton: "💬 Leave a Message",
  },
  
  // Footer
  footer: {
    copyright: "© 2026 Francisco-SP3. All rights reserved.",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
      { text: "Sitemap", url: "#" },
    ],
    github: {
      text: "Star this project on Github",
      url: "https://github.com/tomcomtang/astro-cartoon-portfolio",
    },
  },
  
  // Projects Page
  projects: {
    title: "Projects",
    subtitle: "Explore my latest projects and contributions",
    searchPlaceholder: "Search projects...",
  },
  
  // Comments Page
  comments: {
    title: "Comments & Discussion",
    subtitle: "Share your thoughts, questions, or suggestions here. Let's connect and discuss!",
    guidelines: {
      title: "Community Guidelines",
      items: [
        "Be respectful and constructive in your comments",
        "No spam, self-promotion, or advertising allowed",
        "No personal attacks, hate speech, or harassment",
        "Stay on topic and keep discussions relevant",
        "No inappropriate, offensive, or illegal content",
        "Use clear, friendly, and inclusive language",
      ],
    },
  },
};

