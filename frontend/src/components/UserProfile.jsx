// import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./../styles/Auth/UserProfile.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState();

  useEffect(() => {
    const id = localStorage.getItem("id");

    const fetchUserDetails = async () => {
      setIsLoading(true);
      try {
        setResponse(
          await axios.get(`http://127.0.0.1:8000/api/users/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
        );
        setUserDetails(response.data);

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/aa";
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="user-profile-container">
      <div className="profile-header">
        <h2>Welcome, {userDetails.name}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="user-details">
        <div className="avatar">
          <img
            src={`https://avatars.dicebear.com/api/human/${userDetails.email}.svg`}
            alt="Avatar"
          />
        </div>
        <div className="info">
          <p>
            <span className="label">Name:</span> {userDetails.name}
          </p>
          <p>
            <span className="label">Email:</span> {userDetails.email}
          </p>
          <p>
            <span className="label">Coin Balance:</span>{" "}
            {userDetails.coin_amount}
          </p>
          {/* Add more user details as needed */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
