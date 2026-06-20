import CategoryList from "../components/CategoryList";
import Container from "../components/Container"
import Flex from "../components/Flex"
import { useSelector } from "react-redux";
import {Link } from "react-router-dom";
import PaginatedItems  from "../components/PaginatedItems";


// import bustprod1 from "../assets/raincort.png"
// import bustprod2 from "../assets/bag.png"
// import bustprod3 from "../assets/grafixcaard.png"
// import bustprod4 from "../assets/bookself.png"
// import Card from "../components/Card";

const Product = () => {
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

        <PaginatedItems itemsPerPage={4} />

             {/* </div> */}
                </div>
            </Flex>
           
        </Container>
    </section>
  )
}

export default Product