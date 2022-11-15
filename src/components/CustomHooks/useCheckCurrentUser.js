import { useState, useEffect } from "react";
import axios from "axios";

const useCheckCurrentUser = (currentUserAPI) => {
  // debugger;
  currentUserAPI = "http://localhost:2323/api/v1/user/currentUser";
  console.log("Inside useCheckCurrentUser");
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    if (!currentUser) {
      const token = localStorage.getItem("token");
      if (token) {
        axios
          .get(currentUserAPI, {
            headers: {
              authorization: `bearer ${token}`,
            },
          })
          .then((res) => {
            if (res.data) {
              if (res.data.success) {
                setCurrentUser(res.data.user);
              }
            }
          });
      }
    }
  });

  return currentUser;
};

export default useCheckCurrentUser;
