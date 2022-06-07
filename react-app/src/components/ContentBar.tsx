import { Link } from "react-router-dom";
import "../css/ContentBar.css";
import { useState } from "react";
import { connect } from "react-redux";
import store from "../redux/IndexkeyStore";
interface propsType {
  boardTitle: string;
  page:string;
  id: number;
  state: stateType;
}
interface stateType {
  indexKey: number;
  selectedIndex: number;
}

function ContentBar(props: propsType) {
  const [contentBarTitle, setContentBarTitle] = useState("title");
  const [selectedIndex, setSelectedIndex] = useState((props.state.selectedIndex-1)*10+props.id);
  store.subscribe(() => {
    setSelectedIndex((props.state.selectedIndex-1)*10+props.id);
  });
  return (
    <Link
      to={`/${props.page}/board/${props.page}/${props.boardTitle}`}
      className="content_bar_wrapper"
    >
      <div className="content_bar index">#{selectedIndex}</div>
      <div className="content_bar title">{props.boardTitle}</div>
      <div className="content_bar writer">author</div>
      <div className="content_bar date_created">date created</div>
    </Link>
  );
}

function mapStateToProps(state: stateType) {
  return { state: state };
}
export default connect(mapStateToProps)(ContentBar);
