import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "../components/Button";
import { ToastContainer, toast } from 'react-toastify';

const Forget = ({ closePopup, onSend }) => {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (!email) {
     toast.warning("Please enter email");
      return;
    }else{
         toast.success("Reset Your Password");
    }

    onSend(email);
    closePopup();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-[400px] p-6 rounded-lg relative">

        <RxCross2
          onClick={closePopup}
          className="absolute top-3 right-3 text-2xl cursor-pointer hover:text-red-500"
        />

        <h2 className="text-xl font-poping font-semibold mb-4 text-center">
          Enter Your Email
        </h2>

        <input
        className=""
         
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 placeholder:text-xs  placeholder:font-poping text-xs font-poping rounded mb-4 outline-none"
        />

<div onClick={handleSend}> 
    <Button className="!w-full" text="Send"/>
</div>

      </div>
    </div>
  );
};

export default Forget;