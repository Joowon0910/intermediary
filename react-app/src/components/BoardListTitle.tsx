import "../css/BoardListTitle.css";
interface propsType {
  title: string;
}

export default function BoardListTitle(props: propsType) {
  function changeTitleURLtoString(propsTitle: string): string {
    switch (propsTitle) {
      case "notice": {
        return "공지사항";
      }
      case "content_summary": {
        return "방송 컨텐츠 정리";
      }
      case "collabo_suggest": {
        return "콜라보 제의";
      }
      case "content_confirm": {
        return "컨텐츠 활용 인증";
      }
      case "self_introduction": {
        return "자기 소개";
      }
      default: {
        return " ";
      }
    }
  }
  return (
    <div className="board_list_title_wrapper">
      {changeTitleURLtoString(props.title)}
    </div>
  );
}
