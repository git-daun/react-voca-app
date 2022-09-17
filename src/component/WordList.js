import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import WordItem from "./WordItem";

export default function WordList() {
  //console.log(dummy);
  //dummy.words 데이터 사용
  //day를 임의로 고정, 필터가되는지 확인
  //const day = 1;

  //uasParams로 url값 가져오기
  const day = useParams().day;
  console.log(day);
  const filteredList = dummy.words.filter((word) => {
    return word.day === Number(day);
  });
  //console.log(filteredList);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {filteredList.map((word) => {
            return <WordItem word={word} key={word.id} />;
          })}
        </tbody>
      </table>
    </>
  );
}
