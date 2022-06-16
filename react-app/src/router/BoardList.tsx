import { useParams } from "react-router-dom";
import BoardListFrame from "../components/BoardListFrame";

const PAGE: string = "page";
const BOARDTITLE = "boardTitle";
const ListOfPages: string[] = [
  "notice",
  "content_summary",
  "collabo_suggest",
  "content_confirm",
  "self_introduction",
];
export default function BoardList() {
  const param = useParams();
  if (!param[PAGE] || !ListOfPages.includes(String(param[PAGE]))) {
    window.location.href='http://localhost:3000/login';
  }
  return (
    <BoardListFrame
      page={typeof param[PAGE] ? String(param[PAGE]) : ""}
      boardTitle={typeof param[BOARDTITLE] ? String(param[PAGE]) : ""}
    />
  );
}
