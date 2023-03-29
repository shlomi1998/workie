"use strict";
exports.__esModule = true;
var react_1 = require("react");
function CheckingUserData() {
    return (react_1["default"].createElement("div", null));
}
exports["default"] = CheckingUserData;
// import React, { useState } from 'react'
// import Enrollment from '../../pages/Enrollment';
//        const  checkFirstName=isValidFirstNameName;;
//        const  checkLastName=isValidLastName;
//        const  checkEmail=isValidEmail;
//        const  checkPassword=isValidPassword;
//        const  checkPasswordAuthentication=isValidPasswordAuthentication;
//        const  checkPasswordEqual =areStringsEqual
//     }
// console.log(props.person)
// ;
// const [errors, setErrors] :any = useState({
//     errorfirstName:"",
//     errorlastName:"",
//     erroremail:"",
//     errorpassword:"",
//     errorpasswordAuthentication:""
//   });
//   return (
//     <div>
//     </div>
//   )
// }
// export default CheckingUserData;
// import React, { useState } from 'react';
// function App() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const usernameRegex = /^[a-zA-Z0-9]+$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//     if (!usernameRegex.test(username)) {
//       setError('שם משתמש לא תקין, אנא הזן שם משתמש מתאים');
//       return;
//     }
//     if (!passwordRegex.test(password)) {
//       setError('סיסמה לא תקינה, אנא הזן סיסמה מתאימה');
//       return;
//     }
//     // אם הגענו לכאן זאת אומרת ששם המשתמש והסיסמה תקינים
//     console.log('שם משתמש וסיסמה תקינים');
//   };
//   return (
//     <div>
//       <h1>בדיקת שם משתמש וסיסמה באמצעות רגקס</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">שם משתמש:</label>
//           <input type="text" id="username" value={username} onChange={handleUsernameChange} />
//         </div>
//         <div>
//           <label htmlFor="password">סיסמה:</label>
//           <input type="password" id="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         {error && <div>{error}</div>}
//         <button type="submit">שלח</button>
//       </form>
//     </div>
//   );
// }
// export default App;
