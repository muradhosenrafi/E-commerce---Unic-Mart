import { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import loginimg from "../assets/login.png";
import Button from "../components/Button";
import Hedding from "../components/Hedding";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
 import { ToastContainer, toast } from 'react-toastify';
import Forget from "../layouts/Forget";

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const auth = getAuth();
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
   
    const navigate = useNavigate();



let HandleLogin=()=>{
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
if(userCredential.user.emailVerified){
toast.success("Login Successfully")
setTimeout(()=>{
navigate("/")
}, 2000)

}else{
  toast.error("Varify Your Email!")
}

})
.catch((error) => {
  const errorCode = error.code;
  if(errorCode.includes("auth/invalid-credential")){
    toast.error("opps! invalid-credential")
  }
  });
}

  const handleSendEmail = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info("Check your email for the password !");
        setShowPopup(false);
      })
      .catch((error) => {
       toast.error(error.message);
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
            <div className="w-370px h-326px">
              <Hedding text="Log in to Exclusive" />

              <p className="pt-24px pb-48px text-16px font-poping font-normal">
                Enter your details below
              </p>

              <div className="flex flex-col">
                <div className="border-b border-line">
                  <input onChange={(e)=>setEmail(e.target.value)}
                    className="w-full text-16px font-poping font-normal outline-none placeholder:text-16px placeholder:font-poping placeholder:font-normal"
                    type="text"
                    placeholder="Email or Phone Number"
                  />
                </div>

                {/* PASSWORD FIELD WITH EYE ICON */}
                <div className="border-b border-line mt-40px flex items-center">
                  <input onChange={(e)=>setPassword(e.target.value)}
                    className="outline-none text-16px font-poping font-normal placeholder:text-16px placeholder:font-poping placeholder:font-normal w-full"
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

              <Flex className="justify-between items-center pt-40px">
                <Link to="/login">
                <div onClick={HandleLogin}>
                    <Button text="LogIn" />
                </div>
                </Link>

                  <p onClick={()=>setShowPopup(true)} className="text-16px font-poping font-normal cursor-pointer text-view">
                    Forget Password?
                  </p>
      {showPopup && (
        <Forget
          closePopup={() => setShowPopup(false)}  // 🔥 THIS IS CANCEL FIX
          onSend={handleSendEmail}
        />
      )}

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

export default Login;