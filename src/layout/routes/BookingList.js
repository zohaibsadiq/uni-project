
import React, { useEffect, useState } from "react"; // Import necessary hooks
import { IoMdRefresh } from "react-icons/io"; // Import a refresh icon for manual reload

const BookingList = () => {
  const [bookings, setBookings] = useState([]); // State to hold fetched data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/bookings"); // Fetch data from the backend
      if (response.ok) {
        const data = await response.json(); // Parse JSON data
        setBookings(data); // Update state with fetched data
        setIsLoading(false); // Update loading state
      } else {
        throw new Error("Failed to fetch data"); // Handle non-200 responses
      }
    } catch (error) {
      setError(error.message); // Set the error state
      setIsLoading(false); // Update loading state
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component is mounted
  }, []); // Empty dependency array ensures it runs only once on component mount

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Show an error message if there's an error
  }

  return (
    <div>
      <h2>Bookings List</h2>
      <button onClick={fetchData} title="Refresh">
        <IoMdRefresh /> {/* Refresh button for manual data reload */}
      </button>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            <strong>Name:</strong> {booking.name} <br />
            <strong>Phone Number:</strong> {booking.phoneNumber} <br />
            <strong>City:</strong> {booking.city} <br />
            <strong>Service:</strong> {booking.service} <br />
            <strong>Address:</strong> {booking.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList; // Export the component
