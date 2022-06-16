import BoardFrame from "../components/BoardFrame";
import { useParams } from "react-router-dom";

export default function Board() {
  const param = useParams();
  console.log(param);
  return <BoardFrame title={param.title as string} />;
}
