import Image from "../components/Image"


const ServiceCard = ({iconimg,hedin,title}) => {
  return (

    <div className="w-270px h-161px">
     <div className="justify-center items-center flex flex-col">
         <Image className="pb-24px" src={iconimg} alt=""cardimage/>
         <h4 className="font-semibold text-20px pb-2 font-poping">{hedin}</h4>
         <p className="font-normal text-14px font-poping">{title}</p>
     </div>
    </div>
  )
}

export default ServiceCard