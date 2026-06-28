/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facility, Program, Trainer, GalleryItem, Testimonial, InstaPost } from "../types";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/new.jpg";

export const FACILITIES: Facility[] = [
  {
    id: "fac-1",
    title: "Advanced Equipment",
    description:
      "Equipped with customized bio-mechanically precise machines (Jerai Strength, Hammer Strength) to target individual fibers safely.",
    iconName: "ShieldAlert",
  },
  {
    id: "fac-2",
    title: "Certified Trainers",
    description:
      "Unlock elite level results with coaches who hold national and international bodybuilding, nutrition and rehab certifications.",
    iconName: "Award",
  },
  {
    id: "fac-3",
    title: "Strength Zone",
    description:
      "Dedicated high-performance lifting area with multiple heavy-duty power racks, premium deadlift platforms, and competition dumbbells (up to 60kg).",
    iconName: "Zap",
  },
  {
    id: "fac-4",
    title: "Cardio Zone",
    description:
      "A wide lineup of commercial cross-trainers, premium touch-screen treadmills, curved self-powered runners, and air-bikes.",
    iconName: "Activity",
  },
  {
    id: "fac-5",
    title: "Group Workouts",
    description:
      "High-intensity metabolic conditioning, endurance builder programs, and group functional workouts fueled by electric community beats.",
    iconName: "Users",
  },
  {
    id: "fac-6",
    title: "Personal Training",
    description:
      "1-on-1 coaching blueprints engineered for your body type. Tailored workouts, real-time posture corrections, and precise weekly diet tracking.",
    iconName: "TrendingUp",
  },
];

export const PROGRAMS: Program[] = [
  {
    id: "prog-1",
    title: "Weight Loss",
    description: "Combine intense metabolic conditioning with optimized thermal-deficit dietary structures to torch fat while maintaining lean muscle tissue.",
    tag: "FAT LOSS",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600"
  },
  {
    id: "prog-2",
    title: "Muscle Building",
    description: "Hypertrophy-focused resistance training utilizing progressive overload schemas to trigger substantial structural sarcoplasmic growth.",
    tag: "HYPERTROPHY",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600"
  },
  {
    id: "prog-3",
    title: "Strength Training",
    description: "Master the big compound exercises: Squat, Bench Press, and Deadlift. Refine neurological motor recruitment patterns for raw, brutal strength.",
    tag: "RAW STRENGTH",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600"
  },
  {
    id: "prog-4",
    title: "Functional Fitness",
    description: "Incorporate cross-training, athletic mobility, plyometrics, and posture balance routines to bulletproof your joints and perform like an athlete.",
    tag: "MOBILITY",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600"
  },
  {
    id: "prog-5",
    title: "Personal Coaching",
    description: "100% focused attention. Customized physiological assessment, custom biomechanical mapping, daily accountability, and bespoke supplement guidelines.",
    tag: "1-ON-1 ELITE",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600"
  },
  {
    id: "prog-6",
    title: "Cardio Training",
    description: "Build exceptional VO2 max capacity, optimize heart-rate zones, and accelerate physical recovery levels with high-performance heart conditioning.",
    tag: "ENDURANCE",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600"
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "trn-1",
    name: "Vikram Sharma",
    role: "Head Strength Coach",
    specialization: "Powerlifting & Hypertrophy Blueprints",
    experience: "10+ Years Experience | Former State Competitor",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400",
    socials: { instagram: "https://instagram.com/switch_fitness_gzb" }
  },
  {
    id: "trn-2",
    name: "Sonia Sen",
    role: "Elite Functional Specialist",
    specialization: "Athletic Conditioning, HIIT & Joint Rehab",
    experience: "6+ Years Experience | Certified Crossfit L2",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=400",
    socials: { instagram: "https://instagram.com/switch_fitness_gzb" }
  },
  {
    id: "trn-3",
    name: "Ankit Chaudhary",
    role: "Senior Conditioning Coach",
    specialization: "Cardio-respiratory Endurance & Group Workouts",
    experience: "8+ Years Experience | ACSM Certified Trainer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    socials: { instagram: "https://instagram.com/switch_fitness_gzb" }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800",
    category: "Interiors",
    title: "Main Training Floor Overview"
  },
  {
    id: "gal-2",
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800",
    category: "Equipment",
    title: "Heavy Duty Barbells & Plates"
  },
  {
    id: "gal-3",
    url: "https://images.unsplash.com/photo-1637666062717-1c6bcab4a4ed?q=80&w=800",
    category: "Equipment",
    title: "Premium Jerai Strength Equipment"
  },
  {
    id: "gal-4",
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
    category: "Interiors",
    title: "High-Performance Cardio Setup"
  },
  {
    id: "gal-5",
    url: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800",
    category: "Atmosphere",
    title: "High-Octane Group Workout Arena"
  },
  {
    id: "gal-6",
    url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800",
    category: "Training",
    title: "Advanced Lifting Platform Zone"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "r-1",
    name: "Rahul Verma",
    role: "Elite Member (2+ Years)",
    rating: 5,
    comment: "Undoubtedly the absolute best gym in Ghaziabad. The equipment is supreme standard. Usually, gym weights are lightweight, but they have Hammer and Jerai strength machines. Cleanliness is top-notch, and the environment is very encouraging.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
    date: "2 months ago"
  },
  {
    id: "r-2",
    name: "Meenakshi Tyagi",
    role: "Functional Training Enthusiast",
    rating: 5,
    comment: "I joined Switch Fitness six months ago for fat loss, and I've already lost 12 kgs. Coaching is extremely precise. Sonia ma'am helps direct my workout technique personally and the vibe is completely safe and premium.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
    date: "1 month ago"
  },
  {
    id: "r-3",
    name: "Abhishek Rajput",
    role: "Powerlifting Competitor",
    rating: 5,
    comment: "What a massive space! Finding heavy dumbbells (50kg+) is rare in Ghaziabad, but Switch Fitness has an elite strength zone. Friendly coaches, awesome music playlist, and very rich lighting which is perfect for capturing form videos.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
    date: "3 weeks ago"
  },
  {
    id: "r-4",
    name: "Preeti Singh",
    role: "Evening Batch Regular",
    rating: 5,
    comment: "Best vibe and very helpful trainers. Unlike other local gyms where trainers only focus on you if you buy PT, the general floor trainers here help you correct alignment every single time. Best equipment in town!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
    date: "1 week ago"
  }
];

export const INSTA_POSTS: InstaPost[] = [
  {
    id: "inst-1",
    image: img1,
    likes: 342,
    comments: 24,
    caption: "Push past your limits. Heavy rack pull session at the Strength Zone! 🎯",
    link: "https://www.instagram.com/switch_fitness_gzb/"
  },
  {
    id: "inst-2",
    image: img2,
    likes: 198,
    comments: 12,
    caption: "Fueling right! Custom nutrition plans tailored for peak performance. 🥑",
    link: "https://www.instagram.com/switch_fitness_gzb/"
  },
  {
    id: "inst-3",
    image: img3,
    likes: 512,
    comments: 48,
    caption: "Community is everything. Training together, growing stronger together. 🔥💪",
    link: "https://www.instagram.com/switch_fitness_gzb/"
  },
  {
    id: "inst-4",
    image: img4,
    likes: 289,
    comments: 18,
    caption: "Strength. Discipline. Consistency. The Switch Fitness mindset. ⚡",
    link: "https://www.instagram.com/switch_fitness_gzb/"
  }
];

