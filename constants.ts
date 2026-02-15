import { Zap, Activity, CircleDot, Truck, Sun, Shield, Target, Coffee } from 'lucide-react';

// 👇 PASTE YOUR LOGO IMAGE LINK HERE (inside the quotes)
export const COMPANY_LOGO_URL = "https://lh3.googleusercontent.com/d/17gCpw1WBeA4-ApZghW98UGt6zWim3rXd"; 

export const WAITLIST_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdo_lDmndX-2-Aw1ugAVoHkBGuQjJUVebJISaZnTKT2jBVPoA/viewform?usp=publish-editor";

export const ACTIVITIES = [
  {
    id: 1,
    title: "Round Cricket Turf",
    description: "Experience cricket on our massive circular turf.",
    spec: "110M² Diameter",
    image: "https://lh3.googleusercontent.com/d/14_3beuQUWKzjc_fJJHDpFUuLQmddyaef",
    icon: CircleDot,
  },
  {
    id: 2,
    title: "Go-Karting",
    description: "High-speed adrenaline on our professional track.",
    spec: "20,000 ft Track",
    // Converted to direct link
    image: "https://lh3.googleusercontent.com/d/19siy4-MgFkOAjPvaEU5ALUllxsHuQtoD", 
    icon: Truck,
  },
  {
    id: 3,
    title: "Glow Pickleball",
    description: "Pickleball under UV neon lights for a futuristic game.",
    spec: "Neon Ambience",
    // Converted to direct link
    image: "https://lh3.googleusercontent.com/d/1Q1Qkf_l5nexf08A4Pw9tuuBA3_MeR7iF",
    icon: Zap,
  },
  {
    id: 4,
    title: "Standard Pickleball",
    description: "International standard courts for serious players.",
    spec: "Pro Courts",
    // Converted to direct link
    image: "https://lh3.googleusercontent.com/d/1X4xI5bMJkfLk5PklxhRi5e59xxbDSRyl",
    icon: Activity,
  },
  {
    id: 5,
    title: "Padel",
    description: "The fastest growing racket sport in the world.",
    spec: "Glass Courts",
    // Converted to direct link
    image: "https://lh3.googleusercontent.com/d/1OEKn7w9L2Z7060OyMI0_ICmxaLWEBpOC",
    icon: Shield,
  },
  {
    id: 6,
    title: "Indoor Badminton",
    description: "Wind-free indoor courts for perfect shots.",
    spec: "BWF Standard",
    // Converted to direct link
    image: "https://lh3.googleusercontent.com/d/1tYbfCxgPxcqAlO8jQq_ap39toIcWAdTz",
    icon: Sun,
  },
  {
    id: 7,
    title: "Rectangular Cricket",
    description: "Classic turf cricket with automated bowling.",
    spec: "Bowling Machine",
    image: "https://lh3.googleusercontent.com/d/1ueh7Ue2NiFngLorkNG04IRX69bTMeeza",
    icon: Target,
  },
  {
    id: 8,
    title: "Open Roof Cafe",
    description: "Unwind with premium refreshments in our scenic open-air lounge.",
    spec: "Sky View",
    // Converted to direct link
    image: "https://lh3.googleusercontent.com/d/1qU9GBpnlWYEIGLHQ6_7XrAwTKcdPxXHr",
    icon: Coffee,
  },
];

export const MEMBERSHIPS = [
  {
    id: 'base',
    name: 'Base',
    price: '₹2000',
    period: '/year',
    features: ['Access to community events', 'Standard booking priority', '5% off on F&B', 'Member ID Card'],
    recommended: false,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '₹4000',
    period: '/year',
    features: ['Priority booking (24hr advance)', 'Exclusive tournament access', '15% off on F&B', 'Locker access', 'Free guest passes (2/mo)'],
    recommended: true,
  },
];

export const FAQS = [
  {
    question: "When is ArenaX opening?",
    answer: "We are currently in the final stages of preparation. Join our waitlist to get exclusive updates and early access notifications!"
  },
  {
    question: "Where is ArenaX located?",
    answer: "We are located in the heart of Jalandhar, designed to be easily accessible from all major parts of the city."
  },
  {
    question: "Do I need a membership to play?",
    answer: "No, ArenaX welcomes walk-ins! However, our Memberships offer significant benefits like priority booking, discounts on food & beverages, and exclusive event access."
  },
  {
    question: "Can I book the entire arena for events?",
    answer: "Absolutely! ArenaX is the perfect venue for corporate events, birthday parties, and tournaments. Contact us for custom packages."
  },
  {
    question: "What equipment do I need to bring?",
    answer: "You don't even need to bring sports shoes – we provide them! We supply equipment for most activities. However, please note that we do not provide cricket equipment, so please bring your own bat and kit."
  }
];

export const LINKS = {
  instagram: "https://www.instagram.com/arenax_jal/",
  email: "arenaxjal@gmail.com",
};