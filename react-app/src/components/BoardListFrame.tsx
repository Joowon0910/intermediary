import ContentBar from "./ContentBar";
import ListNavigator from "./ListNavigator";
import BoardTitle from "./BoardListTitle";
import "../css/BoardListFrame.css";
import { Provider } from "react-redux";
import store from "../redux/IndexkeyStore";
import { useState } from "react";
interface propsType {
  boardTitle: string;
  page: string;
}
const TitleInitialValue:string[] = ["가","나","다","라","마","사","아","자","차","타"];
export default function BoardListFrame(props: propsType) {
  const [contentBarTitle, setContentBarTitle] = useState(TitleInitialValue);
  return (
    <Provider store={store}>
      <div className="board_list_frame_page_wrapper">
        <BoardTitle title={props.boardTitle} />

        <ContentBar
          page={props.page}
          boardTitle={contentBarTitle[0]}
          id={1}
        />
        <ContentBar
          page={props.page}
          boardTitle={contentBarTitle[1]}
          id={2}
        />
        <ContentBar
          page={props.page}
          boardTitle={contentBarTitle[2]}
          id={3}
        />
        <ContentBar
          page={props.page}
          boardTitle={contentBarTitle[3]}
          id={4}
        />
        <ContentBar
          page={props.page}
          boardTitle={contentBarTitle[4]}
          id={5}
        />
        <ContentBar
          page={props.page}
          boardTitle={contentBarTitle[5]}
          id={6}
        />
        <ContentBar
          page={props.page}
          boardTitle={contentBarTitle[6]}
          id={7}
        />
        <ContentBar
          page={props.page}
          boardTitle={contentBarTitle[7]}
          id={8}
        />
        <ContentBar
          page={props.page}
          boardTitle={contentBarTitle[8]}
          id={9}
        />
        <ContentBar
          page={props.page}
          boardTitle={contentBarTitle[9]}
          id={10}
        />

        <ListNavigator />
      </div>
    </Provider>
  );
}
