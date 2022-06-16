import '../css/BoardFrame.css';
import BoardContent from './BoardContent';
import BoardTitle from './BoardTitle';
interface propsType {
    title: string;
}
// 글 수정, 삭제 추가하기
export default function BoardFrame(props:propsType) {
    return (<div className='board_frame_wrapper'>
        <BoardTitle   title={props.title}/>
        <BoardContent/>
    </div>);
}