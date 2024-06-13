import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/amazonSlice";

const Products = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  const productsData = data.data;

  return (
    <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
      {productsData.map((item) => (
        <div
          key={item.id}
          className="hover:shadow-testShadow relative z-30 flex h-auto flex-col gap-4 border-[1px] border-gray-200 bg-white py-6 shadow-none duration-200 hover:cursor-pointer hover:border-transparent"
        >
          <span className="absolute right-2 top-2 text-xs capitalize italic text-gray-500">
            {item.category}
          </span>
          {/*  Product Image Start here */}
          <div className="group relative flex h-auto w-full items-center justify-center">
            <img
              className="h-64 w-52 object-contain"
              src={item.image}
              alt="ProductImg"
            />
            {/*  Product mini drop down Start here  */}
            <ul className="absolute -bottom-[160px] flex h-36 w-full flex-col items-end justify-center gap-2 bg-gray-100 duration-700 group-hover:bottom-0 backdrop-filter backdrop-blur-sm bg-opacity-75">
              <li className="productLi">
                Compare
                <span>
                  <ApiIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Cart
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>
              <li className="productLi">
                View Details{" "}
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Wish List{" "}
                <span>
                  <FavoriteIcon />
                </span>
              </li>
            </ul>
            {/*  Product mini drop down End here  */}
          </div>
          {/*  Product Image End here  */}
          {/*  Product Info Start here */}
          <div className="z-10 flex flex-col gap-1 bg-white px-4">
            <div className="flex items-center justify-between">
              <h2 className="font-titleFont text-lg font-medium tracking-wide text-amazon_blue">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm font-semibold text-gray-600">
                ${item.price}
              </p>
            </div>
            <div>
              <p className="text-sm">{item.description.substring(0, 100)}</p>
              <div className="flex text-yellow-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    category: item.category,
                    image: item.image,
                    quantity: 1,
                  }),
                )
              }
              className="to mt-3 w-full rounded-md border border-yellow-500 bg-gradient-to-tr from-yellow-400 to-yellow-200 py-1.5 font-titleFont text-base font-medium duration-200 hover:border-yellow-700 hover:from-yellow-300 hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500"
            >
              Add to Cart
            </button>
          </div>
          {/*  Product Info End here  */}
          {/*  Product Image Start here */}

          {/*  Product drop-down Start here */}
          {/*  Product drop-down End here  */}

          {/*  Product Image End here */}
          {/*  Product Info Start here */}
          {/* Product Info End here  */}
        </div>
      ))}
    </div>
  );
};

export default Products;


// import { useLoaderData } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
// import ApiIcon from "@mui/icons-material/Api";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { useDispatch, useSelector} from "react-redux";
// import { addToCart } from "../redux/amazonSlice";

// const Products = () => {
//   const dispatch = useDispatch();
//   const data = useLoaderData();
//   const searchQuery = useSelector((state) => state.amazon.searchQuery);
//   const selectedCategory = useSelector((state) => state.amazon.selectedCategory);
//   const productData = data;

//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleViewDetails = (product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedProduct(null);
//   };

//   const filteredProducts = productData.filter((item) => {
//     const categoryMatch = selectedCategory === 'All' || item.category.toLowerCase().includes(selectedCategory.toLowerCase());
//     const searchMatch = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase());
//     return categoryMatch && searchMatch;
//   });
//   console.log("Filtered Products:", filteredProducts);

//   return (
//     <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 px-4'>
//       {filteredProducts.length > 0 ? (
//         filteredProducts.map((item) => (
//           <div key={item.id} className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4'>
//             <span className='text-xs capitalize italic absolute top-2 right-5 text-gray-500'>{item.category}</span>
//             <div className='w-full h-auto flex items-center justify-center relative group'>
//               <img className='w-52 h-64 object-contain' src={item.image} alt={item.title} />
//               <ul className='w-full h-36 bg-gray-100 absolute bottom-[-170px] flex flex-col items-end justify-center gap-2 font-titlefont px-2 border-1 border-r group-hover:bottom-0 duration-700'>
//                 <li className='productLi'>
//                   Compare <span><ApiIcon /></span>
//                 </li>
//                 <li className='productLi'>
//                   Add To Cart <span><ShoppingCartIcon /></span>
//                 </li>
//                 <li className='productLi' onClick={() => handleViewDetails(item)}>
//                   View Details <span><ArrowCircleRightIcon /></span>
//                 </li>
//                 <li className='productLi'>
//                   Add to WishList <span><FavoriteIcon /></span>
//                 </li>
//               </ul>
//             </div>
//             <div className='px-4 z-10 bg-white'>
//               <div className='flex items-center justify-between'>
//                 <h2 className='font-titleFont tracking-wide text-lg text-amazon_blue font-bold'>
//                   {item.title.substring(0, 20)}
//                 </h2>
//                 <p className='text-sm text-gray-600 font-semibold'>${item.price}</p>
//               </div>
//               <div>
//                 <p className='text-sm'>{item.description.substring(0, 100)}...</p>
//                 <div className='text-yellow-500'>
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                 </div>
//               </div>
//               <button onClick={() => dispatch(addToCart({
//                 id: item.id,
//                 title: item.title,
//                 description: item.description,
//                 price: item.price,
//                 category: item.category,
//                 image: item.image,
//                 quantity: item.quantity
//               }))} className='w-full font-titlefont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-300 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Add to Cart</button>
//             </div>
//           </div>
//         ))
//       ) : (
//         <div className='col-span-full flex justify-center items-center h-64'>
//           <p className='text-xl text-gray-700'>No product available</p>
//         </div>
//       )}
//       {isModalOpen && selectedProduct && (
//         <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
//           <div className='bg-white p-4 rounded-lg max-w-lg w-full relative'>
//             <button onClick={closeModal} className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'>
//               Close
//             </button>
//             <h2 className='text-xl font-bold mb-2'>{selectedProduct.title}</h2>
//             <img className='w-64 h-64 object-contain mx-auto' src={selectedProduct.image} alt={selectedProduct.title} />
//             <p className='text-gray-700 mt-4'>{selectedProduct.description}</p>
//             <p className='text-lg font-semibold mt-2'>${selectedProduct.price}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;

