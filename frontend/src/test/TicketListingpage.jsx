import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Ticket.css";

const TicketListingPage = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://127.0.0.1:8000/api/tickets", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTickets(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchTickets();
  }, [token]);

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handlePurchase = async () => {
    if (!selectedTicket) {
      alert("Please select a ticket before purchasing.");
      return;
    }
    try {
      setLoading(true);
       await axios.post(
         `http://127.0.0.1:8000/api/book-ticket/${selectedTicket.id}`,
         {},
         {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         }
       );
      alert("Ticket purchased successfully!");
      setSelectedTicket(null);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Ticket Listing</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket.id}>
              <div>{ticket.ticket_name}</div>
              <div>Price: {ticket.price}</div>
              <button onClick={() => handleTicketSelect(ticket)}>Select</button>
            </li>
          ))}
        </ul>
      )}
      {selectedTicket && (
        <div>
          <h3>Selected Ticket</h3>
          <p>Name: {selectedTicket.ticket_name}</p>
          <p>Price: {selectedTicket.price}</p>
          <button onClick={handlePurchase}>Purchase</button>
        </div>
      )}
    </div>
  );
};

export default TicketListingPage;
