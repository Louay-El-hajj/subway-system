// import React, { useState } from "react";
// import axios from "axios";

// const RequestCoins = () => {
//   const [coins, setCoins] = useState("");
//   const userId = localStorage.getItem('loggedUser');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("userId", userId);
//       formData.append("coins", coins);

//       const response = await axios.post(
//         "http://localhost/subway-system/backend/",
//         formData
//       );

//       console.log(response.data);

//       if (response.data.status === "success") {
//         console.log(response.data.message);
//         console.log("Your request has been sent successfully.");
//       } else {
//         console.log(response.data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="number"
//         className="coin-request-amount"
//         value={coins}
//         onChange={(e) => setCoins(e.target.value)}
//         placeholder="Enter coins amount"
//         required
//       />
//       <button type="submit">Submit Request</button>
//     </form>
//   );
// };

// export default RequestCoins;

import React, { useState } from "react";
import axios from "axios";

const RequestCoins = () => {
  const [coins, setCoins] = useState("");
  const userId = localStorage.getItem('loggedUser');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("coins", coins);

      const response = await axios.post(
        "http://localhost/subway-system/backend/",
        formData
      );

      console.log(response.data);

      if (response.data.status === "success") {
        console.log(response.data.message);
        console.log("Your request has been sent successfully.");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        className="coin-request-amount"
        value={coins}
        onChange={(e) => setCoins(e.target.value)}
        placeholder="Enter coins amount"
        required
      />
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default RequestCoins;