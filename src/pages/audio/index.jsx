import { ProductCard } from "../../component/Productcard";
import Sidebar from "../../component/sidebar";
import Speaker1 from '../../media/speaker/1.webp'
import Speaker2 from '../../media/speaker/2.webp'
import Speaker3 from '../../media/speaker/3.webp'
import Speaker4 from '../../media/speaker/speaker.webp'
import Speaker5 from '../../media/speaker/5.webp'
import Speaker6 from '../../media/speaker/6.webp'
import Speaker7 from '../../media/speaker/7.webp'
import Speaker8 from '../../media/speaker/1.webp'
import Speaker9 from '../../media/speaker/2.webp'
import Speaker10 from '../../media/speaker/3.webp'
import Speaker11 from '../../media/speaker/speaker.webp'
import Speaker12 from '../../media/speaker/5.webp'
import Speaker13 from '../../media/speaker/6.webp'
import Speaker14 from '../../media/speaker/7.webp'
import Speaker15 from '../../media/speaker/1.webp'

const products = [
  { name: 'Speaker with strap', price: 2500, rating: 5, img: Speaker1 },
  { name: 'Speaker', price: 6500, rating: 5, img:Speaker2  },
  { name: 'UBl SPeakers', price: 5500, rating: 4, img: Speaker3 },
  { name: 'Mini speaker', price: 6500, rating: 5, img: Speaker4 },
  { name: 'MINI LOCK SPEAKER ', price: 4000, rating: 5, img: Speaker5 },
  { name: 'SONY SPEAKER', price: 10500, rating: 5, img: Speaker6 },
  { name: 'Event speakers ', price: 55000, rating: 5, img: Speaker7 },
  { name: 'jbl mini', price: 5500, rating: 5, img: Speaker8 },
  { name: 'speaker', price: 3600, rating: 4, img: Speaker9 },
  { name: 'Audionic speaker', price: 5500, rating: 5, img: Speaker10},
  { name: 'party speaker', price: 4000, rating: 5, img: Speaker11 },
  { name: 'quality voice ', price: 2050, rating: 4, img: Speaker12 },
  { name: 'small speaker ', price: 2050, rating: 4, img: Speaker13 },
  { name: 'lock speaker ', price: 2050, rating: 4, img: Speaker14 },
  { name: 'potable speaker ', price: 2050, rating: 4, img: Speaker15 },
];

const ProductGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </div>
);

const Audio = () => {
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

export default Audio;