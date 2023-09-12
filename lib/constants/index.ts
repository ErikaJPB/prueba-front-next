import { SiThreads, SiGithub, SiLinkedin } from "react-icons/si";

export const navbarLinks = [
  {
    icon: "posts",
    label: "Posts",
    path: "/",
  },
  {
    icon: "about",
    label: "About Me",
    path: "/aboutme",
  },
];

export const footerLinks = [
  {
    icon: SiGithub,
    label: "Github",
    path: "https://github.com/ErikaJPB",
  },
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    path: "https://www.linkedin.com/in/erikajpb/",
  },

  {
    icon: SiThreads,
    label: "Threads",
    path: "https://www.threads.net/@erikajpb",
  },
];
