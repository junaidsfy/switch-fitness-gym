/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string; // references lucide icons
  image: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  tag: string;
  image: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  image: string;
  socials: {
    instagram?: string;
    facebook?: string;
  };
}

export interface GalleryItem {
  id: string;
  url: string;
  category: "Interiors" | "Equipment" | "Training" | "Atmosphere";
  title: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
}

export interface InstaPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  link: string;
}
