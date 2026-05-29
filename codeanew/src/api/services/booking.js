import client from "../client";

export const submitBooking = async (bookingData) => {
  const response = await client.post("/items/bookings", {
    name: bookingData.name,
    email: bookingData.email,
    booking_date: bookingData.date,
    cal_booking_id: bookingData.uid,
    status: "upcoming",
  });
  return response.data;
};
