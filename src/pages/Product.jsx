import CategoryList from "../components/CategoryList";
import Container from "../components/Container"
import Flex from "../components/Flex"
import { useSelector } from "react-redux";
import {Link } from "react-router-dom";
import PaginatedItems from "../components/PaginatedItems";
import { useState } from "react";


import bustprod1 from "../assets/raincort.png"
import bustprod2 from "../assets/bag.png"
import bustprod3 from "../assets/grafixcaard.png"
import bustprod4 from "../assets/bookself.png"
import Card from "../components/Card";



const Product = () => {

  let [show,setShow]=useState(9)


let handleSelect =(e)=>{
  setShow(e.target.value);
  
}

const [currentPage, setCurrentPage] = useState(1);
const products = [
  {
    id: 1,
    productimage: bustprod1,
    producttitle: "The north coat",
    price: "$260",
    disprice: "$360",
    rating: "",
    stock: "(65)",
  },
  {
    id: 2,
    productimage: bustprod2,
    producttitle: "Gucci duffle bag",
    price: "$960",
    disprice: "$1160",
    rating: "Best",
    stock: "(65)",
  },
  {
    id: 3,
    productimage: bustprod3,
    producttitle: "RGB liquid CPU Cooler",
    price: "$160",
    disprice: "$170",
    rating: "Best",
    stock: "(65)",
  },
  {
    id: 4,
    productimage: bustprod4,
    producttitle: "Small BookSelf",
    price: "$360",
    disprice: "",
    rating: "Best",
    stock: "(65)",
  },
  {
    id: 5,
    productimage: bustprod4,
    producttitle: "Small BookSelf",
    price: "$360",
    disprice: "",
    rating: "Best",
    stock: "(65)",
  },
  {
    id: 6,
    productimage: bustprod4,
    producttitle: "Small BookSelf",
    price: "$360",
    disprice: "",
    rating: "Best",
    stock: "(65)",
  },
  {
    id: 7,
    productimage: bustprod4,
    producttitle: "Small BookSelf",
    price: "$360",
    disprice: "",
    rating: "Best",
    stock: "(65)",
  },
  {
    id: 8,
    productimage: bustprod4,
    producttitle: "Small BookSelf",
    price: "$360",
    disprice: "",
    rating: "Best",
    stock: "(65)",
  },
  {
    id: 9,
    productimage: bustprod4,
    producttitle: "Small BookSelf",
    price: "$360",
    disprice: "",
    rating: "Best",
    stock: "(65)",
  },
  {
    id: 10,
    productimage: bustprod4,
    producttitle: "Small BookSelf",
    price: "$360",
    disprice: "",
    rating: "Best",
    stock: "(65)",
  },

  
];

const itemsPerPage = show;

const totalPages = Math.ceil(products.length / itemsPerPage);

const startIndex = (currentPage - 1) * itemsPerPage;

const currentProducts = products.slice(
  startIndex,
  startIndex + itemsPerPage
);


    
    const ona = useSelector((state) => state.breadCrumb.previouseValue);
    
  return (
    <section>
        <Container>

{/* /brudcumb/ */}
       <Flex className="py-80px gap-2">
              <h1 className="font-poping font-normal text-xs text-text">
            <Link to={ona=="Home"? "/" :`/${ona}`}>{ona}</Link>
            </h1>
       <span className="font-poping font-normal text-xs text-black">
            / shop
          </span>
         </Flex>


            <Flex>
                <div className="w-3/12">
                <CategoryList 
                type=""
                className="!text-20px !font-bold"
                text="Shop by Category"
                classNameicon="!ml-[0px]"
                />
                
                <CategoryList 
                type=""
                className=""
                text="Woman’s Fashion"
                classNameicon="!ml-0"
                />
                
                <CategoryList 
                type=""
                className=""
                text="Men’s Fashion"
                classNameicon="!ml-0"
                />
                
                <CategoryList 
                type=""
                className=""
                text="Electronics"
                classNameicon="!ml-0"
                />
                
                <CategoryList 
                type=""
                className=""
                text="Home & Lifestyle"
                classNameicon="!ml-0"
                />
                
                <CategoryList 
                type=""
                className=""
                text="Medicine"
                classNameicon="!ml-0"
                />
                
                <CategoryList 
                type=""
                className=""
                text="Sports & Outdoor"
                classNameicon="!ml-0"
                />
                
                <CategoryList 
                type=""
                className=""
                text="Baby’s & Toys"
                classNameicon="!ml-0"
                />
                
                <CategoryList 
                type=""
                className=""
                text="Groceries & Pets"
                classNameicon="!ml-0"
                />
                
                <CategoryList 
                type=""
                className=""
                text="Health & Beauty"
                classNameicon="!ml-0"
                />
                
                <CategoryList 
                type=""
                className="!text-20px pt-40px pb-4 !font-bold"
                text="Shop by Color"
                classNameicon="!ml-0"
                />
                
                <div className="flex gap-3 py-2 cursor-pointer">
                    <div className="rounded-full h-20px w-20px bg-black"></div>
                    <h1 className="text-base font-poping font-normal">Color 1</h1>
                </div>
                <div className="flex gap-3 py-2 cursor-pointer">
                    <div className="rounded-full h-20px w-20px bg-red-400"></div>
                    <h1 className="text-base font-poping font-normal">Color 2</h1>
                </div>
                <div className="flex gap-3 py-2 cursor-pointer">
                    <div className="rounded-full h-20px w-20px bg-red-300"></div>
                    <h1 className="text-base font-poping font-normal">Color 3</h1>
                </div>
                <div className="flex gap-3 py-2 cursor-pointer">
                    <div className="rounded-full h-20px w-20px bg-red-800"></div>
                    <h1 className="text-base font-poping font-normal">Color 4</h1>
                </div>
                <div className="flex gap-3 py-2 cursor-pointer">
                    <div className="rounded-full h-20px w-20px bg-amber-400"></div>
                    <h1 className="text-base font-poping font-normal">Color 5</h1>
                </div>
                
                </div>
                <div className="w-full w-8/12">

               
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}

              <div className="w-full w-8/12">
              <Flex className="justify-end">
              <div className="mb-5 text-base font-poping py-2 px-5 border border-line font-normal">
                <label htmlFor="">Show :</label>
              <select onChange={handleSelect}>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              </div>
              </Flex>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {currentProducts.map((item) => (
    <Card
      key={item.id}
      productimage={item.productimage}
      type={true}
      rating={item.rating}
      disprice={item.disprice}
      producttitle={item.producttitle}
      price={item.price}
      stock={item.stock}


    />
  ))}
</div>
 <PaginatedItems
  totalPages={totalPages}
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
/>   

</div>
             {/* </div> */}
                </div>
            </Flex>
           
        </Container>
    </section>
  )
}

export default Product