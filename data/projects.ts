export type ProjectType = {
  id: number;
  title: string;
  category: string;
  subcategory?: string;
  image: string;
};

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Web Design",
    image: "/images/web1.jpg",
  },
  {
    id: 2,
    title: "Social Media Post",
    category: "Graphic Design",
    subcategory: "Social Media Design",
    image: "/images/design1.jpg",
  },
  {
    id: 3,
    title: "ID Card Design",
    category: "Graphic Design",
    subcategory: "ID Cards",
    image: "/images/idcard.jpg",
  },
  {
    id: 4,
    title: "Letterhead Design",
    category: "Graphic Design",
    subcategory: "Letterheads",
    image: "/images/letterhead.jpg",
  },


  {
    id: 5,
    title: "Letterhead Design",
    category: "Graphic Design",
    subcategory: "Letterheads",
    image: "/images/letterhead.jpg",
  },
  {
    id: 6,
    title: "Letterhead Design",
    category: "Graphic Design",
    subcategory: "Letterheads",
    image: "/images/letterhead.jpg",
  },
  {
    id: 7,
    title: "Letterhead Design",
    category: "Graphic Design",
    subcategory: "Letterheads",
    image: "/images/letterhead.jpg",
  },
  {
    id: 8,
    title: "Letterhead Design",
    category: "Graphic Design",
    subcategory: "Letterheads",
    image: "/images/letterhead.jpg",
  },
  {
    id: 9,
    title: "Letterhead Design",
    category: "Graphic Design",
    subcategory: "Letterheads",
    image: "/images/letterhead.jpg",
  },
  // Add more as needed
];
