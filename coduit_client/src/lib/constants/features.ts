
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faCode} from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

export const featuresData = [
  {
    id: 1,
    title: "Tech Communities",
    description: "Join Language/framework-specific groups or create your own. Moderate with powerful tools",
    features: [
      "Public & private groups",
      "Advanced moderation",
      "Customizable roles"
    ],
    icon: faUserGroup, // You can replace with actual icon component or SVG
  },
  {
    id: 2,
    title: "Real-Time Collaboration",
    description: "Built-in VS Code-like editor for pair programming and code reviews",
    features: [
      "Multiplayer coding",
      "Terminal access",
      "Code execution"
    ],
    icon: faCode, // You can replace with actual icon component or SVG
  },
  {
    id: 3,
    title: "AI-Powered Features",
    description: "Leverage AI to enhance your coding experience and productivity",
    features: [
      "Code suggestions",
      "Code explanations",
      "Bug detection",
      "Smart completions"
    ],
    icon:faMicrochip, // You can replace with actual icon component or SVG
  },
  {
    id: 4,
    title: "Gamification",
    description: "Earn achievements and climb leaderboards for your contributions",
    features: [
      "Skills badge",
      "Weekly challenges",
      "Reputation system"
    ],
    icon:faTrophy, // You can replace with actual icon component or SVG
  },
  {
    id: 5,
    title: "Career Hub",
    description: "Connect with opportunities tailored to your skills",
    features: [
      "Job matching",
      "Portfolio builder",
      "Interview prep"
    ],
    icon:faBriefcase, // You can replace with actual icon component or SVG
  },
  {
    id: 6,
    title: "Lightning-Fast Performance",
    description: "Experience seamless interactions with our optimized platform",
    features: [
      "Fast loading",
      "Responsive design",
      "Scalable architecture",
      "WebSockets",
      "Edge caching"
    ],
    icon: faBolt, // You can replace with actual icon component or SVG
  }
];

