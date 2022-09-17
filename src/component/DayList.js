import dummy from "../db/data.json";
import { Link } from "react-router-dom";

export default function DayList() {
  //console.log(dummy);
  //dummy.days 데이터 사용

  return (
    <ul className="list_day">
      {dummy.days.map((day) => {
        return (
          <li key={day.id}>
            <Link to={`/word/${day.day}`}>Day {day.day}</Link>
          </li>
        );
      })}
    </ul>
  );
}
