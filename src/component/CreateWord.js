import useFetch from "../hooks/useFetch";
import { useRef } from "react";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  //console.log(days);
  //form 태그에 있는 버튼의 새로고침을 막아줌
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    //useRef사용해서 DOM요소에 접근하기(input값 가져오기)
    console.log(engRef.current.value);
    console.log(korRef.current.value);
    console.log(dayRef.current.value);

    fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eng: engRef.current.value,
        kor: korRef.current.value,
        day: dayRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이완료되었습니다.");
      }
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef}></input>
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef}></input>
      </div>
      <div className="input_area">
        <select ref={dayRef}>
          {days.map((day) => {
            return <option key={day.id}>{day.day}</option>;
          })}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}
