import { MdOutlineArrowForwardIos } from "react-icons/md";


const CategoryList = ({type,className,text,classNameicon}) => {
  return (
    <div className="">
        <li className={`list-none cursor-pointer text-base py-2 text-black font-poping font-normal  ${className}`}>{text}{type=="true" && <MdOutlineArrowForwardIos className={`inline-block ml-13 ${classNameicon}`}/>}
</li>
    </div>
  )
}

export default CategoryList