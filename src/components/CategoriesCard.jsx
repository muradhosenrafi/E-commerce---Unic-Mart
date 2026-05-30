import Image from "../components/Image"


const CategoriesCard = ({catagoryimge,text,title,className,classchang}) => {
  return (
    <div className={`group w-170px h-145px  hover:border hover:border-white flex flex-col hover:bg-view duration-300 cursor-pointer text-secondary justify-center items-center rounded-4px border-line border-2 ${classchang}`}>
<Image className="group-hover:invert duration-300" src={catagoryimge} alt="phone png"/>
<h2 className={`text-black group-hover:text-white duration-300 pt-16px font-poping text-16px font-normal ${className}`}>{text}</h2>
<p className="font-normal text-base font-poping group-hover:text-white text-black">{title}</p>
    </div>
  )
}

export default CategoriesCard