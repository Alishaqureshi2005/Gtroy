export const ProductCard = ({ product }) => (
  <div className="bg-yellow-400 text-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="bg-white p-4">
      <img src={product.img} alt={product.name} className="h-32 sm:h-40 lg:h-48 mx-auto mb-2 object-contain" />
    </div>
    <div className="p-3 sm:p-4">
      <h3 className="font-bold text-lg sm:text-xl mb-2 line-clamp-2">{product.name.toUpperCase()}</h3>
      <div className="flex items-center justify-between">
        <p className="text-black text-base sm:text-lg mb-1">{'★'.repeat(product.rating)}</p>
        <p className="font-bold text-base sm:text-lg">RS {product.price}</p>
      </div>
    </div>
  </div>
);