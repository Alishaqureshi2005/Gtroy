import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Datacable from '../media/powerbankandcharger/cabile.webp'
import Power from '../media/powerbankandcharger/powerbank.webp'
import Camera from '../media/canon.png'
import Charger from '../media/powerbankandcharger/charger.webp'
import Torch from '../media/torch.webp'

const Sidebar = () => {
  const filters = {
    'Product Type': [
      'Wired', 'Data Cables', 'Chargers', 'Laptops', 'Tablets', 'Laptop Stand', 'Camera Lens', 'Screen Light', 'Lens', 'Ear Pods', 'Head Phones',
      'Phone Cases', 'Power Banks', 'Speakers', 'Torches', 'Camera Holder', 'Smartwatch', 'Covers', 'Tripod', 'Internet Devices'
    ],
    'Ratings': ['5/5', '4/5', '3.5/5'],
    'Brands': [
      'LG', 'Apple', 'Samsung', 'Oppo', 'Nokia', 'Infinix', 'Realme', 'Techno', 'Sony', 'Xiaomi', 'Amazon',
      'Aiwa', 'AMD', 'Blackberry', 'HP', 'Lenovo', 'Huawei', 'Sony Ericsson', 'Vivo', 'Alcatel', 'Alienware'
    ],
    'Memory': ['16 GB', '32 GB', '64 GB', '128 GB', '250 GB']
  };

  // Helper to render stars
  const renderStars = (ratingStr) => {
    const rating = parseFloat(ratingStr);
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <span className="flex items-center gap-1 sm:gap-2 text-base sm:text-lg text-black">
        {[...Array(fullStars)].map((_, i) => <FaStar key={i} />)}
        {halfStar && <FaStarHalfAlt />}
      </span>
    );
  };

  return (
    <aside className="w-full lg:w-80 xl:w-96 p-3 sm:p-4 bg-yellow-400 text-black overflow-y-auto space-y-4 sm:space-y-6 text-xs sm:text-sm">
      <h2 className="font-bold text-base sm:text-lg">FILTERS:</h2>

      {/* Product Type first */}
      <div>
        <h3 className="font-extrabold mb-2 uppercase text-xs sm:text-sm">Product Type</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {filters['Product Type'].map((option, i) => (
            <label key={i} className="flex items-center">
              <input type="checkbox" className="mr-2 check" />
              <span className="font-extrabold text-xs sm:text-sm">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price second */}
      <div>
        <h3 className="font-extrabold text-xs sm:text-sm mb-2 uppercase">Price</h3>
        <div className="flex flex-col items-center space-y-2">
          <input
            type="range"
            min="2000"
            max="10000"
            step="500"
            className="w-full accent-black"
            style={{ accentColor: 'black' }}
          />
          <div className="flex justify-between items-center w-full px-2">
            <span className="font-bold text-xs sm:text-sm">RS 2000</span>
            <span className="font-bold text-xs sm:text-sm">RS 10000</span>
          </div>
        </div>
      </div>

      {/* Ratings third */}
      <div>
        <h3 className="font-extrabold mb-2 uppercase text-xs sm:text-sm">Ratings</h3>
        <div className="grid grid-cols-1 gap-2 sm:gap-3 text-black">
          {filters['Ratings'].map((option, i) => (
            <label key={i} className="flex items-center">
              {renderStars(option)}
              <span className="ml-1 font-extrabold text-xs sm:text-sm">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands fourth */}
      <div>
        <h3 className="font-extrabold mb-2 uppercase text-xs sm:text-sm">Brands</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {filters['Brands'].map((option, i) => (
            <label key={i} className="flex items-center">
              <input type="checkbox" className="mr-2 check" />
              <span className="font-extrabold text-xs sm:text-sm">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Memory last */}
      <div>
        <h3 className="font-extrabold mb-2 uppercase text-xs sm:text-sm">Memory</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {filters['Memory'].map((option, i) => (
            <label key={i} className="flex items-center">
              <input type="checkbox" className="mr-2 check" />
              <span className="font-extrabold text-xs sm:text-sm">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2 uppercase text-xs sm:text-sm">SOLD OUT:</h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          <img src={Datacable} alt="Sold item" className="w-full h-12 sm:h-14 object-cover rounded" />
          <img src={Power} alt="Sold item" className="w-full h-12 sm:h-14 object-cover rounded" />
          <img src={Camera} alt="Sold item" className="w-full h-12 sm:h-14 object-cover rounded" />
          <img src={Charger} alt="Sold item" className="w-full h-12 sm:h-14 object-cover rounded" />
          <img src={Torch} alt="Sold item" className="w-full h-12 sm:h-14 object-cover rounded" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;