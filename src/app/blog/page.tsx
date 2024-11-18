import BlogContainer from "./blog-container";

// css
import "./page.css";

// json
const blogs = [
  {
    id: 1,
    aurthor: "Wai Zaw Tun",
    time: { year: 2024, month: 10, date: 6, hour: 10, minute: 51 },
    tags: ["coding", "java", "array"],
    body: { image: null, text: "This is testing" },
  },
  {
    id: 2,
    aurthor: "Wai Zaw Tun",
    time: { year: 2024, month: 6, date: 6, hour: 10, minute: 51 },
    tags: ["coding", "java"],
    body: {
      image: "http://localhost:3000/profile-image.jpg",
      text: "This is my profile picture.",
    },
  },
  {
    id: 3,
    aurthor: "Wai Zaw Tun",
    time: { year: 2024, month: 6, date: 6, hour: 10, minute: 51 },
    tags: ["coding", "array"],
    body: { image: null, text: null },
  },
  {
    id: 4,
    aurthor: "Wai Zaw Tun",
    time: { year: 2024, month: 6, date: 6, hour: 10, minute: 51 },
    tags: ["coding", "java", "array"],
    body: { image: null, text: null },
  },
  {
    id: 5,
    aurthor: "Wai Zaw Tun",
    time: { year: 2024, month: 6, date: 6, hour: 10, minute: 51 },
    tags: ["java", "array"],
    body: { image: null, text: null },
  },
  {
    id: 6,
    aurthor: "Symbiote",
    time: { year: 2024, month: 10, date: 7, hour: 3, minute: 10 },
    tags: [],
    body: { image: null, text: null },
  },
  //   {
  //     id: 2,
  //     aurthor: "Wai Zaw Tun",
  //     time: { year: 2024, month: 6, date: 1, hour: 13, minute: 34 },
  //     tags: ["coding", "java", "sorting"],
  //   },
];

export default function Blog() {
  return (
    <div className="blog-container">
      {blogs.map((blog, index) => (
        <BlogContainer key={index} {...blog} />
      ))}
    </div>
  );
}
