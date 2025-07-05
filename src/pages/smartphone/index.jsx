import { ProductCard } from "../../component/Productcard";
import Sidebar from "../../component/sidebar";
import Phone1 from "../../media/phones/1.webp";
import Phone2 from "../../media/phones/2.webp";
import Phone3 from "../../media/phones/3.webp";
import Phone4 from "../../media/phones/4.webp";
import Phone5 from "../../media/phones/5.webp";
import Phone6 from "../../media/phones/6.webp";
import Phone7 from "../../media/phones/7.webp";
import Phone8 from "../../media/phones/1.webp";
import Phone9 from "../../media/phones/2.webp";
import Phone10 from "../../media/phones/3.webp";
import Phone11 from "../../media/phones/4.webp";
import Phone12 from "../../media/phones/5.webp";

const products = [
  { name: 'SMART PHONE', price: 2500, rating: 5, img: Phone1 },
  { name: 'Speaker', price: 6500, rating: 5, img:Phone2  },
  { name: 'UBl SPeakers', price: 5500, rating: 4, img: Phone3 },
  { name: 'Mini speaker', price: 6500, rating: 5, img: Phone4 },
  { name: 'MINI LOCK SPEAKER ', price: 4000, rating: 5, img: Phone5 },
  { name: 'SONY SPEAKER', price: 10500, rating: 5, img: Phone6 },
  { name: 'Event speakers ', price: 55000, rating: 5, img: Phone7 },
  { name: 'jbl mini', price: 5500, rating: 5, img: Phone8 },
  { name: 'speaker', price: 3600, rating: 4, img: Phone9 },
  { name: 'Audionic speaker', price: 5500, rating: 5, img: Phone10},
  { name: 'party speaker', price: 4000, rating: 5, img: Phone11 },
  { name: 'quality voice ', price: 2050, rating: 4, img: Phone12 },
];

const ProductGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </div>
);

const Smartphone = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      <main className="flex-1 order-2 lg:order-1">
        <ProductGrid />
      </main>
      <div className="order-1 lg:order-2">
        <Sidebar />
      </div>
    </div>
  );
};

export default Smartphone;