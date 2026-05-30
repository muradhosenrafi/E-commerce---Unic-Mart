import { FcGoogle } from "react-icons/fc";


const SingupButton = ({text,className}) => {
  return (
    <div className={`w-370px cursor-pointer h-[56px] flex justify-center gap-4 items-center border text-16px font-poping rounded-4px font-normal border-line ${className}`}>
<FcGoogle className="text-4xl" />{text}</div>
  )
}

export default SingupButton