import { useParams } from "react-router-dom";
import WordItem from "./WordItem";
import useFetch from "../hooks/useFetch";

export default function WordList() {
  const day = useParams().day;
  // console.log(day);
  const data = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {data.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {data.map((word) => {
            return <WordItem word={word} key={word.id} />;
          })}
        </tbody>
      </table>
    </>
  );
}
