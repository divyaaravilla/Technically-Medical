import React, { useState, useEffect } from "react";
import CountdownTimer from "../components/CountDownTimer";
import Navigation from "../components/Navigation";

import { getAppointment } from "../services/users";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  // get all users' info when the page loads
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAppointment();
      setAppointments(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Navigation />
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Patient's Id</th>
            <th>Doctor's Name</th>
            <th>Time Left for Appointment</th>
          </tr>
          {appointments.map((appointment) => (
            <tr key={appointment.userid}>
              <td>{appointment.userid}</td>
              <td>{appointment.userDoctor}</td>
              <td>
                <CountdownTimer targetDate={appointment.userAppointment} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Appointment;
