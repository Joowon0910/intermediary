import "../css/ListNavigator.css";
import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../redux/IndexkeyStore";
const CHANGE_INDEX_KEY = "CHANGE_INDEX_KEY";
interface stateType {
  indexKey: number;
  selectedIndex: number;
}
function ListNavigator(props: any) {
  const [indexVaule, setIndexValue] = useState(props.state.indexKey);
  function SelectIndex(target: any) {
    props.changeIndexKey(CHANGE_INDEX_KEY, target.id);
  }
  function changeIndexKey(btn: string) {
    switch (btn) {
      case "<<": {
        //START

        break;
      }
      case "<": {
        //SUB
        props.subIndexKey(btn);
        setIndexValue(props.state.indexKey);
        break;
      }
      case ">": {
        //ADD
        props.addIndexKey(btn);
        setIndexValue(props.state.indexKey);
        break;
      }
      case ">>": {
        //END

        break;
      }
      default: {

        break;
      }
    }
  }
  return (
    <div className="list_navigator_wrapper">
      <div
        className="list_navigator item left_double_arrow"
        onClick={() => {
          changeIndexKey("<<");
        }}
      >{`<<`}</div>
      <div
        className="list_navigator item left_arrow"
        onClick={() => {
          changeIndexKey("<");
        }}
      >{`<`}</div>
      <div
        className="list_navigator item"
        id={`${indexVaule* 10 + 1}`}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          SelectIndex(e.target);
        }}
      >
        {indexVaule * 10 + 1}
      </div>
      <div
        className="list_navigator item"
        id={`${indexVaule * 10 + 2}`}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          SelectIndex(e.target);
        }}
      >
        {indexVaule * 10 + 2}
      </div>
      <div
        className="list_navigator item"
        id={`${indexVaule* 10 + 3}`}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          SelectIndex(e.target);
        }}
      >
        {indexVaule * 10 + 3}
      </div>
      <div
        className="list_navigator item"
        id={`${indexVaule * 10 + 4}`}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          SelectIndex(e.target);
        }}
      >
        {indexVaule * 10 + 4}
      </div>
      <div
        className="list_navigator item"
        id={`${indexVaule * 10 + 5}`}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          SelectIndex(e.target);
        }}
      >
        {indexVaule * 10 + 5}
      </div>
      <div
        className="list_navigator item"
        id={`${indexVaule * 10 + 6}`}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          SelectIndex(e.target);
        }}
      >
        {indexVaule * 10 + 6}
      </div>
      <div
        className="list_navigator item"
        id={`${indexVaule * 10 + 7}`}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          SelectIndex(e.target);
        }}
      >
        {indexVaule * 10 + 7}
      </div>
      <div
        className="list_navigator item"
        id={`${indexVaule * 10 + 8}`}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          SelectIndex(e.target);
        }}
      >
        {indexVaule * 10 + 8}
      </div>
      <div
        className="list_navigator item"
        id={`${indexVaule * 10 + 9}`}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          SelectIndex(e.target);
        }}
      >
        {indexVaule * 10 + 9}
      </div>
      <div
        className="list_navigator item"
        id={`${indexVaule * 10 + 10}`}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          SelectIndex(e.target);
        }}
      >
        {indexVaule * 10 + 10}
      </div>
      <div
        className="list_navigator item right_arrow"
        onClick={() => {
          changeIndexKey(">");
        }}
      >{`>`}</div>
      <div
        className="list_navigator item right_double_arrow"
        onClick={() => {
          changeIndexKey(">>");
        }}
      >{`>>`}</div>
    </div>
  );
}
function mapStateToProps(state: stateType) {
  return { state: state };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addIndexKey: (text: string) => dispatch(actionCreators.addIndexKey(text)),
    subIndexKey: (text: string) => dispatch(actionCreators.subIndexKey(text)),
    changeIndexKey: (text: string, value:number) => dispatch(actionCreators.changeIndexKey(text,value)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ListNavigator);
