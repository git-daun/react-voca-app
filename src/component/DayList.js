//import dummy from "../db/data.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DayList() {
  //dummy.days 데이터 사용
  //console.log(dummy);

  //fetch로 데이터 변경
  //1. data를 저장할 state로 만들기
  //2. useEffect써서 한번만 요청하기
  //3. state로 데이터 바꿔주기
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/days")
      .then((res) => res.json())
      .then((data) => setDays(data));
  }, []);

  return (
    <ul className="list_day">
      {days.map((day) => {
        return (
          <li key={day.id}>
            <Link to={`/word/${day.day}`}>Day {day.day}</Link>
          </li>
        );
      })}
    </ul>
  );
}
