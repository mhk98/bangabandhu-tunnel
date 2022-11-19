import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
const useUser = () => {
  const [user, setUser] = useState([]);
  //mostofa ------- edit //
  useEffect(() => {
    let token = localStorage.getItem('SavedToken');
    let user_info = jwt_decode(token);
    if (user_info) {
      console.log(user_info);
      setUser(user_info);
    }
    // let userDetails = JSON.parse(localStorage.getItem("user_data"));
    // if (userDetails) {
    //   setUser(userDetails.data.data);
    // }
  }, []);
  return [user, setUser];
};
export default useUser;
