import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const isAuth = Cookies.get("is_auth"); // Retrieve is_auth cookie

      if (isAuth) {
        console.log("is_auth cookie:", isAuth);
        try {
          localStorage.setItem("is_auth", true);
          navigate("/home");
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      } else {
        console.log("User is not authenticated");
      }
    };

    getData();
  }, []);

  return <div>Profile</div>;
}

export default Profile;
