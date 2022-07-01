import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  // sendSignInLinkToEmail,
  // isSignInWithEmailLink,
  // signInWithEmailLink,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [togglepage, setTogglepage] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [otpPage, setOtpPage] = useState(false);
  const [countryCode, setCountryCode] = useState();
  const [phone, setPhone] = useState();
  const [expandForm, setExpandForm] = useState(false);
  const [OTP, setOTP] = useState();
  const provider = new GoogleAuthProvider();
  const [loginError, setLoginError] = useState();
  const [registerError, setRegisterError] = useState();

  const HandleSignIn = () => {
    setTogglepage(!togglepage);
  };
  //   onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });

  // const actionCodeSettings = {
  //   // URL you want to redirect back to. The domain (www.example.com) for this
  //   // URL must be in the authorized domains list in the Firebase Console.
  //   url: "http://localhost:3000/",
  //   // This must be true.
  //   handleCodeInApp: true,
  //   // iOS: {
  //   //   bundleId: "com.example.ios",
  //   // },
  //   // android: {
  //   //   packageName: "com.example.android",
  //   //   installApp: true,
  //   //   minimumVersion: "12",
  //   // },
  //   // dynamicLinkDomain: "localhost.page.link",
  // };

  // const EmailVerify = async (e) => {
  //   e.preventDefault();

  //   sendSignInLinkToEmail(auth, loginEmail, actionCodeSettings)
  //     .then(() => {
  //       // The link was successfully sent. Inform the user.
  //       // Save the email locally so you don't need to ask the user for it again
  //       // if they open the link on the same device.
  //       window.localStorage.setItem("emailForSignIn", loginEmail);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ...
  //     });
  // };

  // if (isSignInWithEmailLink(auth, window.location.href)) {
  //   // Additional state parameters can also be passed via URL.
  //   // This can be used to continue the user's intended action before triggering
  //   // the sign-in operation.
  //   // Get the email if available. This should be available if the user completes
  //   // the flow on the same device where they started it.
  //   let email = window.localStorage.getItem("emailForSignIn");
  //   if (!email) {
  //     // User opened the link on a different device. To prevent session fixation
  //     // attacks, ask the user to provide the associated email again. For example:
  //     email = window.prompt("Please provide your email for confirmation");
  //   }
  //   // The client SDK will parse the code from the link for you.
  //   signInWithEmailLink(auth, email, window.location.href)
  //     .then((result) => {
  //       // Clear email from storage.
  //       window.localStorage.removeItem("emailForSignIn");
  //       // You can access the new user via result.user
  //       // Additional user info profile not available via:
  //       // result.additionalUserInfo.profile == null
  //       // You can check if the user is new or existing:
  //       // result.additionalUserInfo.isNewUser
  //     })
  //     .catch((error) => {
  //       // Some error occurred, you can inspect the code: error.code
  //       // Common errors could be invalid email and invalid or expired OTPs.
  //     });
  // }

  const GoogleSign = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const username = res.user.displayName;
        const email = res.user.email;
        const profilePic = res.user.photoURL;

        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const HandleOtp = (e) => {
    e.preventDefault();
    const phoneNumber = countryCode + phone;
    if (phoneNumber.length >= 12) {
      setExpandForm(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const verifyOTP = (e) => {
    let otp = e.target.value;
    setOTP(otp);
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
      window.location.reload(false);
    }
  };

  const Register = async (e) => {
    e.preventDefault();
    // const phoneNumber = countryCode + phone;
    // console.log(registerEmail, phoneNumber);
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        localStorage.setItem("user", user);
        sendEmailVerification(auth.currentUser).then(() => {
          alert("Mail has been sent to your email");
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (error) {
          setRegisterError("You already have an account with this email id");
        }
        // ..
      });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const phoneNumber = countryCode + phone;

        const res = fetch(
          "https://demdeeauthentication-default-rtdb.firebaseio.com/userData.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              registerEmail,
              phoneNumber,
            }),
          }
        );
        console.log(res);
        // if (res) {
        //   setFormValues({
        //     username: "",
        //     email: "",
        //     phone: "",
        //     subject: "",
        //     message: "",
        //   });
        //   alert("Form has been successfully submitted and stored");
        // } else {
        //   alert("Form could not be submitted !! Please try again");
        // }
      }
    });

    navigate("/");
  };
  const Login = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in
        // setUser(userCredential.user);
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (error) {
          setLoginError("Please Enter Correct Credentials");
        }
      });

    navigate("/");
  };
  return (
    <div className="ml-1 mr-8">
      {!togglepage ? (
        <div className="">
          <div className="text-2xl font-bold mt-6">Sign In</div>
          {/* {<div className="mt-4">
            Please fill below details to sign in
          </div>} */}
          <div className="flex mt-6">
            <div
              onClick={() => {
                setOtpPage(false);
              }}
              className={`bg-white ${
                otpPage === false ? "text-deepblue  border-black" : null
              } hover:border-black border-gray-100 text-black border-solid border-2 cursor-pointer px-12 py-2 rounded-xl font-bold`}
            >
              Sign In with Email
            </div>
            <div
              onClick={() => {
                setOtpPage(true);
              }}
              className={`bg-white ml-6 ${
                otpPage === true ? "text-deepblue  border-black" : null
              } border-gray-100 hover:border-black text-black  border-solid border-2 cursor-pointer px-12 py-2 rounded-xl font-bold`}
            >
              Sign In with OTP
            </div>
          </div>
          {otpPage ? (
            <div>
              <div className="text-xl font-bold mt-6">Phone Number</div>
              <input
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                type="tel"
                name="phone"
                required
                placeholder="Enter your mobile number"
                className="w-full border-solid border-2 border-gray-100 px-3 py-2 mt-4"
              />
              <div className="text-lg font-bold mt-6">Country</div>
              <select
                name=""
                id=""
                required
                onChange={(e) => {
                  setCountryCode(e.target.value);
                }}
                className="w-full border-solid border-2 border-gray-100 py-1 rounded-lg"
              >
                <option value="">Select a Country</option>
                <option value="+91">India (+91)</option>
                <option value="+61">Australia (+61)</option>
                <option value="+1">Canada (+1)</option>
                <option value="+49">Germany (+49)</option>
                <option value="+974">Qatar (+974)</option>
                <option value="+46">Sweden (+46)</option>
                <option value="+44">United Kingdom (+44)</option>
                <option value="+1">United States of America (USA) (+1)</option>
                <option value="+263">Zimbabwe (+263)</option>
              </select>
              {expandForm ? (
                <div>
                  <div className="text-lg font-bold mt-6">Enter OTP</div>
                  <input
                    onChange={verifyOTP}
                    value={OTP}
                    type="text"
                    placeholder="Enter the 6 digit OTP"
                    className="w-full text-sm border-solid border-2 border-gray-100 px-3 py-2 mt-4"
                  />
                </div>
              ) : (
                <button
                  onClick={HandleOtp}
                  className="px-10  cursor-pointer relative left-[40%] mt-4 py-2 rounded-2xl text-white bg-deepblue font-bold text-sm hover:text-white hover:bg-orange"
                >
                  Request OTP
                </button>
              )}

              <div className="" id="recaptcha"></div>
            </div>
          ) : (
            <form action="">
              <div className="text-xl font-bold mt-6">Email</div>
              <input
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                  setLoginError(null);
                }}
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full border-solid border-2 border-gray-100 px-3 py-2 mt-4"
              />
              <div className="text-xl font-bold mt-6">Password</div>
              <input
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                  setLoginError(null);
                }}
                type="password"
                name="password"
                required
                placeholder="Enter your Password"
                className="w-full border-solid border-2 border-gray-100 px-3 py-2 mt-4"
              />
              <div className="text-sm mt-4">Forgot Password?</div>
              {loginError ? (
                <div className="bg-red-500 text-white text-sm py-1 px-2 w-[60%] mt-3 rounded-lg">
                  {loginError}
                </div>
              ) : null}

              <button
                onClick={Login}
                // onClick={EmailVerify}
                className="px-10  cursor-pointer relative left-[40%] mt-4 py-2 rounded-2xl text-white bg-deepblue font-bold text-sm hover:text-white hover:bg-orange"
              >
                SIGN IN
              </button>
            </form>
          )}

          <div className="flex mt-6 justify-center">
            <div className="text-sm">Don’t have an account? </div>
            <div
              onClick={HandleSignIn}
              className="text-orange font-bold text-sm hover:text-deepblue ml-1 cursor-pointer"
            >
              Sign Up For Free
            </div>
          </div>

          <div
            onClick={GoogleSign}
            className="px-10 flex w-fit relative left-[30%] mt-6 py-2 rounded-2xl text-white bg-red-500 font-bold text-sm hover:text-red-500 hover:bg-white cursor-pointer"
          >
            <AiOutlineGooglePlus className="text-xl" />
            <div className="ml-3">Sign In With Google</div>
          </div>

          <div className="flex mt-6 justify-center">
            <div className="text-sm cursor-pointer">Are you a Specialist? </div>
          </div>
          <div className="text-sm mt-6">
            By submitting this form you agree to Demdee's privacy policy, terms
            of use and allow us to contact you for special offers and promotions
          </div>
        </div>
      ) : (
        <div className="">
          <div className="text-2xl font-bold mt-4">Create An Account</div>
          <div className="mt-2">
            Please fill the below details to register demdee's account
          </div>
          <form action="" className="">
            <div className="text-lg font-bold mt-4">Email</div>
            <input
              onChange={(event) => {
                setRegisterEmail(event.target.value);
                setRegisterError("");
              }}
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-full border-solid border-2 border-gray-100 px-3 py-1 mt-2 rounded-lg"
            />
            <div className="text-lg font-bold mt-6">Mobile Number</div>
            <input
              onChange={(event) => {
                setPhone(event.target.value);
                setRegisterError("");
              }}
              type="tel"
              name="phone"
              required
              placeholder="Enter your Mobile Number"
              className="w-full border-solid border-2 border-gray-100 px-3 py-1 mt-2 rounded-lg"
            />
            <div className="text-lg font-bold mt-6">Country</div>
            <select
              name=""
              id=""
              required
              onChange={(e) => {
                setCountryCode(e.target.value);
                setRegisterError("");
              }}
              className="w-full border-solid border-2 border-gray-100 py-1 rounded-lg"
            >
              <option value="">Select a Country</option>
              <option value="+91">India (+91)</option>
              <option value="+61">Australia (+61)</option>
              <option value="+1">Canada (+1)</option>
              <option value="+49">Germany (+49)</option>
              <option value="+974">Qatar (+974)</option>
              <option value="+46">Sweden (+46)</option>
              <option value="+44">United Kingdom (+44)</option>
              <option value="+1">United States of America (USA) (+1)</option>
              <option value="+263">Zimbabwe (+263)</option>
            </select>
            <div className="text-lg font-bold mt-6">Password</div>
            <input
              onChange={(event) => {
                setRegisterPassword(event.target.value);
                setRegisterError("");
              }}
              type="password"
              name="password"
              required
              placeholder="Enter your Password"
              className="w-full border-solid border-2 border-gray-100 px-3 py-1 mt-2 rounded-lg"
            />
            {registerError ? (
              <div className="bg-red-500 text-white text-sm py-1 px-2 w-[60%] mt-3 rounded-lg">
                {registerError}
              </div>
            ) : null}
            <button
              onClick={Register}
              className="px-10 relative left-[40%] mt-10 py-2 rounded-2xl text-white bg-deepblue font-bold text-sm hover:text-white hover:bg-orange cursor-pointer"
            >
              SIGN UP
            </button>
          </form>
          <div className="flex mt-6 justify-center">
            <div className="text-sm">Already have an account? </div>
            <div
              onClick={HandleSignIn}
              className="text-orange font-bold text-sm hover:text-deepblue ml-1 cursor-pointer"
            >
              Sign In
            </div>
          </div>

          <div className="flex mt-3 justify-center">
            <div className="text-sm  cursor-pointer">Are you a Therapist? </div>
          </div>
          <div className="text-sm mt-4">
            By submitting this form you agree to Demdee's privacy policy, terms
            of use and allow us to contact you for special offers and promotions
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
