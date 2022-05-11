import '../css/ContentBar.css';
export default function ContentBar() {
  return (
    <div className="content_bar_wrapper">
      <div className="content_bar index">#N</div>
      <div className="content_bar title">this is title</div>
      <div className="content_bar writer">author</div>
      <div className="content_bar date_created">date created</div>
    </div>
  );
}
