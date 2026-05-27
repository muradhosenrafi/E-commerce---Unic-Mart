
import CategoryList from "../components/CategoryList";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image"
import Bannerimage from "../assets/banner.jpg"

const Banner = () => {
  return (
  

<section className="pt-48px pb-140px">
<Container>
<Flex>
<div className='w-3/12 relative after:w-1px after:h-390px after:absolute after:-top-14% after:right-55px after:bg-line after:content-[""] '>
<Flex className="flex-col gap-y-4">
<CategoryList className =""type="true" text="Woman’s Fashion"/>
<CategoryList classNameicon="ml-20"type="true" text="Men’s Fashion"/>
<CategoryList text="Electronics"/>
<CategoryList text="Home & Lifestyle"/>
<CategoryList text="Medicine"/>
<CategoryList text="Sports & Outdoor"/>
<CategoryList text="Baby’s & Toys"/>
<CategoryList text="Groceries & Pets"/>
<CategoryList text="Health & Beauty"/>
</Flex>


</div>
<div className="w-9/12">
<Image src={Bannerimage} alt="Banner image"/>
</div>
</Flex>
</Container>
</section>

  )
}

export default Banner