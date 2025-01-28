import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";

export const navItems = [
  { label: "Home", href: "/national-home-decor" },
  { label: "Contact us", href: "/national-home-decor/contact" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Best Solution Within Your Budget",
    description:
      "Easily design and arrange your Home with a People friendly environments and better design.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Level Planning",
    description:
      "Create a detailed plan for your home, including multiple levels and rooms, to help you visualize and organize your construction project.",
  },
  {
    icon: <ShieldHalf />,
    text: "3d Design Showcase",
    description:
      "Showcase your house designs in 3D before construction begins, allowing you to visualize and refine your plans with precision and clarity.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Update on House",
    description:
      "Get real-time updates on the progress of your house construction project, from foundation to final inspection, and stay informed every step of the way.",
  },
  {
    icon: <PlugZap />,
    text: "Collaborating on Different Design",
    description:
      "Collaborate with you in real-time on different house designs while building the house, allowing for seamless communication and design iteration.",
  },
  {
    icon: <GlobeLock />,
    text: "Progress Analysis & Report",
    description:
      "Get a detailed analysis of the progress of your house construction project, including timelines, milestones, and task completion, to help you stay on track and informed throughout the process.",
  },
];

export const checklistItems = [
  {
    title: "Bulding House Made Easy",
    description:
      "Track the progress of your House and gain insights into the design completion.",
  },
  {
    title: "Pay Without Worry",
    description:
      "We Take 25% prepayment and 25% after completing 50% of the project and rest after the completion of the project.",
  },
  {
    title: "Best WorksMan for Assistance to reduce time",
    description:
      "Best WorksMan for Assistance to reduce time while building house with the help of latest technology and expert engineers.",
  },
  {
    title: "Cost Effective",
    description:
      "Best Material without paying unnecessary cost and get the best quality material for your house.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];
