import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import backgroundImage from '../assets/background.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

library.add(faEye, faEyeSlash);

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = {
      email: '',
      password: '',
    };

    // Validate email
    if (!email) {
      newErrors.email = 'Email is required';
      hasErrors = true;
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Password is required';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Perform login logic here
    if (email === 'example@example.com' && password === 'password') {
      // Successful login
      console.log('Login successful');
    } else {
      // Failed login
      newErrors.email = 'Invalid email or password';
      newErrors.password = 'Invalid email or password';
      setErrors(newErrors);
    }
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row md:my-4">
        <div className="md:w-1/2 md:my-4" style={{ position: 'relative' }}>
          <img id="backgroundImage" src={backgroundImage} alt="Login" className="h-screen object-cover" />
          <div className='comLogo' style={{ position: "absolute", top: "0", left: "0", padding: "2rem" }}>
            <h1 style={{ color: "white", fontSize: "2rem" }}>exo</h1>
          </div>
         

<div>
    <div className='comContent flex flex-col' style={{ fontSize: '1.5rem', position: 'absolute', top: '16rem', left: '1rem' }}>
      <h1 style={{ display: 'inline-block', fontWeight: 'bold', color: 'white', margin: '0' }}>100% Uptime 😎</h1>
      <p style={{ margin: '0', color: 'white' }}>Zero infrastructure <br /> Management</p>
    </div>
  </div>

          <div className='imageFooter  ' style={{ fontSize: "1.5rem", position: "absolute", bottom: "2rem", left: "1rem", width: "90%" }}>
            <div className="website">
              <p style={{ color: "white" }}>
                <FontAwesomeIcon icon={faGlobe} className="mr-2 w-5 h-5" /> aesthisia.com
              </p>
            </div>
            <div className="social-icons">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-white" />
              <FontAwesomeIcon icon={faFacebook} className="mr-2 text-white" />
              <FontAwesomeIcon icon={faInstagram} className="mr-2 text-white" />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-white shadow-lg rounded px-8 pt-6 pb-8 flex flex-col justify-center items-center mt-2 m-3">
          <div className="flex flex-col justify-center items-center mb-6">
            <img id="logo" src={logo} alt="logo" className="h-0.5 object-cover" />
            <h1 className='text-4xl'>Welcome <span className='headingColor'>Back!</span></h1>
            <p>Glad to see you, Again!</p>
          </div>
          <form className='mb-11' onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className={`shadow appearance-none border rounded-md  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email && 'border-red-500'
                  }`}
                id="email"
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div >
              <div className="relative">
                <input
                  className={`shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password && 'border-red-500'
                    }`}
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={toggleShowPassword}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="text-gray-600"
                  />
                </div>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div className="flex justify-end mb-6">
              <Link to="/forgot-password" className="forget text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-black rounded-md hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline flex-1 shadow-md hover:shadow-lg"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="flex justify-between ">
            <p>
              Don't have an account yet? <Link to="/signup" className="signUp text-blue-500 hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


// import React, { useState } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import backgroundImage from '../assets/background.png';
// import logo from '../assets/logo.png';
// import { Link } from 'react-router-dom';
// import { faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';


// library.add(faEye, faEyeSlash);

// const Login: React.FC = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [errors, setErrors] = useState({
//         email: '',
//         password: '',
//     });

//     const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(e.target.value);
//         setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
//     };

//     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(e.target.value);
//         setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
//     };

//     const toggleShowPassword = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         let hasErrors = false;
//         const newErrors = {
//             email: '',
//             password: '',
//         };

//         // Validate email
//         if (!email) {
//             newErrors.email = 'Email is required';
//             hasErrors = true;
//         }

//         // Validate password
//         if (!password) {
//             newErrors.password = 'Password is required';
//             hasErrors = true;
//         }

//         if (hasErrors) {
//             setErrors(newErrors);
//             return;
//         }

//         // Perform login logic here
//         if (email === 'example@example.com' && password === 'password') {
//             // Successful login
//             console.log('Login successful');
//         } else {
//             // Failed login
//             newErrors.email = 'Invalid email or password';
//             newErrors.password = 'Invalid email or password';
//             setErrors(newErrors);
//         }
//     };

//     return (
//         <div className="flex justify-center items-center h-screen">
//             <div className="flex flex-col md:flex-row md:my-4">
//                 <div className="md:w-1/2 md:my-4" style={{ position: "relative" }}>
//                     <img id="backgroundImage" src={backgroundImage} alt="Login" className="h-screen object-cover" />
//                     <div className='comLogo' style={{ position: "absolute", top: "0", left: "0", padding: "2rem" }}>
//                         <h1 style={{ color: "white", fontSize: "2rem" }}>exo</h1>
//                     </div>
                   
//                     <div className='comContent flex flex-col' style={{ fontSize: "1.5rem", position: "absolute", top: "16rem", left: "1rem" }}>
//                         <h1 style={{ display: "inline-block", fontWeight: "bold", color: "white", margin: "0" }}>100% Uptime 😎</h1>

//                         <p style={{ margin: "0", color: "white" }}>Zero infrastructure <br /> Management</p>
//                     </div>
//                     <div className='imageFooter  ' style={{ fontSize: "1.5rem", position: "absolute", bottom: "2rem", left: "1rem", width: "90%" }}>
//                         <div className="website">
//                             <p style={{ color: "white" }}>
//                                 <FontAwesomeIcon icon={faGlobe} className="mr-2 w-5 h-5" /> aesthisia.com
//                             </p>
//                         </div>
//                         <div className="social-icons">
//                             <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-white" />
//                             <FontAwesomeIcon icon={faFacebook} className="mr-2 text-white" />
//                             <FontAwesomeIcon icon={faInstagram} className="mr-2 text-white" />
//                         </div>
//                     </div>


//                 </div>
//                 <div className="md:w-1/2 bg-white shadow-lg rounded px-8 pt-6 pb-8 flex flex-col justify-center items-center mt-2 m-3">
//                     <div className="flex flex-col justify-center items-center mb-6">
//                         <img id="logo" src={logo} alt="logo" className="h-0.5 object-cover" />
//                         <h1 className='text-4xl'>Welcome <span className='headingColor'>Back!</span></h1>
//                         <p>Glad to see you, Again!</p>
//                     </div>
//                     <form className='mb-11' onSubmit={handleSubmit}>
//                         <div className="mb-4">
//                             <input
//                                 className={`shadow appearance-none border rounded-md  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email && 'border-red-500'
//                                     }`}
//                                 id="email"
//                                 type="email"
//                                 placeholder="Enter your Email"
//                                 value={email}
//                                 onChange={handleEmailChange}
//                             />
//                             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//                         </div>
//                         <div >
//                             <div className="relative">
//                                 <input
//                                     className={`shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password && 'border-red-500'
//                                         }`}
//                                     id="password"
//                                     type={showPassword ? 'text' : 'password'}
//                                     placeholder="Enter your password"
//                                     value={password}
//                                     onChange={handlePasswordChange}
//                                 />
//                                 <div
//                                     className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                                     onClick={toggleShowPassword}
//                                 >
//                                     <FontAwesomeIcon
//                                         icon={showPassword ? faEyeSlash : faEye}
//                                         className="text-gray-600"
//                                     />
//                                 </div>
//                             </div>
//                             {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//                         </div>
//                         <div className="flex justify-end mb-6">
//                             <Link to="/forgot-password" className="forget text-blue-500 hover:underline">
//                                 Forgot Password?
//                             </Link>
//                         </div>
//                         <div className="flex items-center justify-between">
//                             <button
//                                 className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline flex-1 shadow-md hover:shadow-lg"
//                                 type="submit"
//                             >
//                                 Log In
//                             </button>
//                         </div>
//                     </form>
//                     <div className="flex justify-between ">
//                         <p>
//                             Don't have an account yet? <Link to="/signup" className="signUp text-blue-500 hover:underline">Sign Up</Link>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
