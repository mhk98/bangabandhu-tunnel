// import React, { useState } from 'react';
// import firebase from '../firebase';
// // import firebase from '../firebase';

// const Otp = () => {
//   const [fname, setFname] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   let handleFullname = (event) => {
//     setFname(event.target.value);
//   };
//   let handlePhone = (event) => {
//     setPhone(event.target.value);
//   };
//   let handleEmail = (event) => {
//     setEmail(event.target.value);
//   };
//   let handlePassword = (event) => {
//     setPassword(event.target.value);
//   };

//   let handleClick = () => {
//     let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
//     // let number = '+9779849497787'
//     // console.log(typeof(number));
//     let number = '+880' + String(phone);
//     // console.log(number);
//     firebase
//       .auth()
//       .signInWithPhoneNumber(number, recaptcha)
//       .then(function (e) {
//         let code = prompt('enter the otp', '');
//         if (code == null) return;
//         e.confirm(code)
//           .then(function (result) {
//             console.log(result.user, 'user');
//             document.querySelector('label').textContent =
//               result.user.phoneNumber + 'Number verified';
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       });
//   };
//   return (
//     <div className="d-flex justify-content-center">
//       <form onSubmit={handleClick}>
//         <h1 className="text-center">Signup</h1>
//         <div>
//           <label for="name" hidden>
//             Full Name
//           </label>
//           <input
//             type="text"
//             name="fname"
//             id="Name"
//             placeholder="Full Name"
//             value={fname}
//             onChange={handleFullname}
//           />
//         </div>
//         <div>
//           <label for="Email" hidden>
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="Email"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmail}
//           />
//         </div>
//         <div>
//           <label for="Phone" hidden>
//             Phone
//           </label>
//           <input
//             type="number"
//             name="phone"
//             id="phone"
//             placeholder="+880-1777868841"
//             max="11"
//             value={phone}
//             onChange={handlePhone}
//           />
//         </div>
//         <div>
//           <label for="Password" hidden>
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             id="Password"
//             placeholder="Password"
//             value={password}
//             onChange={handlePassword}
//           />
//         </div>
//         <div id="recaptcha"></div>
//         {/* <Button className="btns" onClick={this.handleClick}>
//           Submit
//         </Button> */}
//         <input type="submit">Submit</input>
//       </form>
//     </div>
//   );
// };

// export default Otp;
