import { AsideHeader } from "../../components/aside-header";
import "./home.css";

const images = [
  "/illustrations/illustration-1.jpg",
  "/illustrations/illustration-2.webp",
  "/illustrations/illustration-3.jpg",
  "/illustrations/illustration-4.jpg",
  "/illustrations/illustration-5.jpg",
  "/illustrations/illustration-6.jpg",
  "/illustrations/illustration-7.jpg",
  "/illustrations/illustration-8.jpeg",
];

export const HomePage = () => {
  return (
    <main className="flex flex-row">
      <AsideHeader />

      <div className="overflow-scroll h-[100vh] grid grid-cols-3">
        {images.map((img) => (
          <img
            src={img}
            key={img}
            className="w-full h-full grid object-cover"
          />
        ))}
      </div>
    </main>
  );
};
