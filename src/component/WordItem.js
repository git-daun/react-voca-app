import { useState } from "react";

export default function WordItem({ word: w }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(w.isDone);
  //변수명 겹치지 않도록 props는 w로 받고
  //새로 만들어줄 상태를 word로 설정
  const [word, setIsword] = useState(w);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  const checkShow = () => {
    // setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${w.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  const del = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${w.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setIsword({ id: 0 });
        }
      });
    }
  };
  if (word.id === 0) {
    return null;
  }

  return (
    <>
      <tr className={isDone ? "off" : ""}>
        <td>
          <input type="checkbox" checked={isDone} onChange={checkShow} />
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
          <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
          <button className="btn_del" onClick={del}>
            삭제
          </button>
        </td>
      </tr>
    </>
  );
}
