import BoardListFrame from "../components/BoardListFrame";
interface propsType {
    boardTitle: string;
    page:string;
  }
export default function BoardList(props:propsType) {
    return (<BoardListFrame page={props.page} boardTitle={props.boardTitle}/>);
}