import { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import loginimg from "../assets/login.png";
import Button from "../components/Button";
import Hedding from "../components/Hedding";
import { Link, useNavigate } from "react-router-dom";
import SingupButton from "../components/SingupButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup,sendEmailVerification} from "firebase/auth";
  import { ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider } from "firebase/auth";



const SingUp = () => {
  const auth = getAuth();
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
let navigate=useNavigate()


  const handleSingup = () => {
   createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

sendEmailVerification(auth.currentUser)
  .then(() => {
   
 toast.warning("click this email variyfacition!")
setTimeout(()=>{
navigate("/login")
}, 2000)

  });


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    if(errorCode.includes("auth/email-already-in-use")){
      toast.error("Email Alredy Add")
    }

  });

  };

let handleGoogle = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};

  return (
    <section className="pt-60px pb-140px">
      <Container>
        <Flex>
          <div className="w-7/12">
            <Image src={loginimg} alt="login jpg" />
          </div>

          <div className="w-5/12 items-center justify-end flex">
            <div className="w-370px h-[530px]">
              <Hedding text="Create an account" />

              <p className="pt-24px text-16px font-poping font-normal">
                Enter your details below
              </p>

              <div className="flex flex-col">
                <div className="border-b border-line my-40px">
                  <input  onChange={(e)=>setName(e.target.value)}
                    className="text-16px font-poping font-normal outline-none placeholder:text-16px placeholder:font-poping placeholder:font-normal w-full"
                    type="text"
                    placeholder="Name"
                  />
     
                </div>

                <div className="border-b border-line">
                  <input  onChange={(e)=>setEmail(e.target.value)}
                    className="text-16px font-poping font-normal w-full outline-none placeholder:text-16px placeholder:font-poping placeholder:font-normal"
                    type="text"
                    placeholder="Email or Phone Number"
                  />
                </div>

                <div className="border-b border-line mt-40px flex items-center">
                  <input onChange={(e)=>setPassword (e.target.value)}
                    className="text-16px font-poping font-normal outline-none placeholder:text-16px placeholder:font-poping placeholder:font-normal w-full"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />

                  {showPassword ? (
                    <FaEyeSlash
                      className="text-xl cursor-pointer"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <FaEye
                      className="text-xl cursor-pointer"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </div>

              <Flex className="justify-between flex-col items-center pt-40px">
               <div onClick={handleSingup}>
                 <Button  className="w-370px" text="Create Account" />
               </div>


<div onClick={handleGoogle}>
                    <SingupButton
                    className="mt-16px"
                    text="Sign up with Google"
                  />
            
</div>

                <div className="flex gap-16px pt-[34px]">
                  <p className="text-16px font-poping font-normal">
                    Already have account?
                  </p>

                  <Link to="/login">
                    <p className="underline underline-offset-8 text-16px font-poping font-normal">
                      Log in
                    </p>
                  </Link>
                </div>
              </Flex>
            </div>
          </div>
        </Flex>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
      </Container>
    </section>
  );
};

export default SingUp;