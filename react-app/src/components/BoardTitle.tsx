import "../css/BoardTitle.css";
interface propsTpye {
  title: string;
}
export default function BoardTitle(props: propsTpye) {
  return (
      <div className="board_header_wrapper">
        <span className="board_index">#{1}</span>
        <span className="board_date_created">2022-02-02</span>
        <div className="board_title">{props.title}</div>
      </div>
  );
}
