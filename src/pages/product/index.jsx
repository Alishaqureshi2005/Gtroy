
import { ProductCard } from "../../component/Productcard";
import Sidebar from "../../component/sidebar";
import Laptop from '../../media/earbudandcemera/image.png'
import Handfree from '../../media/handfree.jpg'
import Speaker from '../../media/speaker/speaker.webp'
import Torch from '../../media/torch.webp'
import Laptopstand from '../../media/earbudandcemera/image.png'
import Headphones from '../../media/earbudandcemera/headp.webp'
import Camera from '../../media/earbudandcemera/carousel-mount_1.webp'
import Cameraholder from '../../media/earbudandcemera/2.webp'
import Camerabag from '../../media/earbudandcemera/D6.webp'
import Earbuds from '../../media/earbudandcemera/earbud.webp'
import Smartwatch from '../../media/watch.jpg'
import Datacable from '../../media/powerbankandcharger/cabile.webp'


const products = [
  { name: 'Hands Free', price: 2500, rating: 5, img: Handfree },
  { name: 'Speaker', price: 6500, rating: 5, img: Speaker },
  { name: 'Torch', price: 5500, rating: 4, img: Torch },
  { name: 'Laptop Stands', price: 6500, rating: 5, img: Laptopstand },
  { name: 'Head Phones', price: 4000, rating: 5, img: Headphones },
  { name: 'Canon Camera', price: 10500, rating: 5, img: Camera },
  { name: 'Camera Holder', price: 55000, rating: 5, img: Cameraholder },
  { name: 'Camera Bag', price: 5500, rating: 5, img: Camerabag },
  { name: 'Ear Buds', price: 3600, rating: 4, img: Earbuds },
  { name: 'Laptop Stand', price: 5500, rating: 5, img: Laptop },
  { name: 'Smart Watch', price: 4000, rating: 5, img: Smartwatch },
  { name: 'Data Cable', price: 2050, rating: 4, img: Datacable },
];
const ProductGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </div>
);
const ProductPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      <main className="flex-1">
        <ProductGrid />
      </main>
      <Sidebar />
    </div>
  );
};

export default ProductPage;