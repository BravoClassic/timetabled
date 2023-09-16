// import React from "react";
import Event from "./Event";
const Calendar = () => {
  return (
    <div className="Calendar">
      <h1>Calendar</h1>
      <table>
        <thead>
            <tr>
          <th></th>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
            </tr>
        </thead>
          <tbody>
            <tr>
            <td className="time">8:00am</td>
                <Event location="Maple & Ash" event={"Fancy Dinner 🎩"} color="blue" />
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
            <td className="time">9:00am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">10:00am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event location="The Cloud" event="Databases 💻" color="yellow" />
                <td></td>
            </tr>
            <tr>
                <td className="time">11:00am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">12:00pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">01:00pm</td>
                <td></td>
                <Event location="Chick Fil' A" event="Lunch 🍚" color="green" />
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">02:00pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">03:00pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event location="ColorStack" event="Coding Club 👨🏽‍💻" color="orange" />
            </tr>
            <tr>
                <td className="time">04:00pm</td>
                <td></td>
                <td></td>
                <td></td>
                <Event location="Planet Fitness" event="Gym 🏋🏼‍♂️" color="blue" />
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">05:00pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            
          </tbody>
      </table>
    </div>
  );
};

export default Calendar;
