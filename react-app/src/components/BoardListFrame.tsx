import ContentBar from "./ContentBar";
import ListNavigator from "./ListNavigator";
import BoardTitle from "./BoardListTitle";
import "../css/BoardListFrame.css";
import { Provider } from "react-redux";
import store from "../redux/IndexkeyStore";
interface propsType {
  boardTitle: string;
  page: string;
}

export default function BoardListFrame(props: propsType) {
  return (
    <Provider store={store}>
      <div className="board_list_frame_page_wrapper">
        <BoardTitle title={props.boardTitle} />

        <ContentBar page={props.page} boardTitle={props.boardTitle} id={1} />
        <ContentBar
          page={props.page}
          boardTitle={`${props.boardTitle}2`}
          id={2}
        />
        <ContentBar
          page={props.page}
          boardTitle={`${props.boardTitle}3`}
          id={3}
        />
        <ContentBar
          page={props.page}
          boardTitle={`${props.boardTitle}4`}
          id={4}
        />
        <ContentBar
          page={props.page}
          boardTitle={`${props.boardTitle}5`}
          id={5}
        />
        <ContentBar
          page={props.page}
          boardTitle={`${props.boardTitle}6`}
          id={6}
        />
        <ContentBar
          page={props.page}
          boardTitle={`${props.boardTitle}7`}
          id={7}
        />
        <ContentBar
          page={props.page}
          boardTitle={`${props.boardTitle}8`}
          id={8}
        />
        <ContentBar
          page={props.page}
          boardTitle={`${props.boardTitle}9`}
          id={9}
        />
        <ContentBar
          page={props.page}
          boardTitle={`${props.boardTitle}10`}
          id={10}
        />

        <ListNavigator />
      </div>
    </Provider>
  );
}
