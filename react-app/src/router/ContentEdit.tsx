import { visitFunctionBody } from "typescript";
import "../css/ContentEdit.css";

// function disablePlaceholder() {
//   console.log(document.getElementById("placerholder"));
// }
interface FormDataType {
  title: string;
  password: string;
  content: string;
}
export default function ContentEdit() {
  let isPlaceholderRemoved = false;
  function attachImageToarticle(files: HTMLInputElement["files"]) {
    let file: File;
    if (files) {
      file = files[0];
    } else {
      return;
    }
    const parent = document.getElementsByClassName("Content_Editer")[0];
    const preview = document.createElement("p");
    const img = document.createElement("img");
    img.classList.add("Article_image");
    preview.appendChild(img);

    const reader = new FileReader();
    reader.onload = (function (aImg: HTMLImageElement) {
      return function (event) {
        if (event.target != null) {
          aImg.src = String(event.target.result);
        }
      };
    })(img);
    reader.readAsDataURL(file);
    parent.appendChild(preview);
    console.log(files);
  }

  function clickHiddenImageUploadBtn(): void {
    const hiddenInput = document.getElementById("image-upload-input");
    if (hiddenInput) {
      hiddenInput.click();
    }
  }

  function clickHiddenSubmitBtn(): void {
    const hiddenSubmit = document.getElementById("submit");
    if (hiddenSubmit) {
      hiddenSubmit.click();
    }
  }
  function copyArticle() {
    const targetDiv = document.getElementsByClassName("Content_editer")[0];
    const textarea = document.getElementById("CopyHere");
    textarea.innerHTML = "";
    if (targetDiv.children.length === 0) {
      textarea.innerHTML = targetDiv.textContent;
      return;
    } else {
      for (const key in targetDiv.children) {
        if (targetDiv.children[key].outerHTML) {
          textarea.innerHTML += targetDiv.children[key].outerHTML;
        }
      }
    }
    console.log(targetDiv);
  }

  function clieckedSubmit(event: React.FormEvent<HTMLInputElement>): void {
    event.preventDefault();
    copyArticle();
    const targetForm = event.currentTarget.form;
    const formData: FormDataType = { title: "", password: "", content: "" };
    for (const key in targetForm) {
      if (!targetForm[key]) break;
      if (targetForm[key].value === "" || !targetForm[key].value) continue;
      let item: string = targetForm[key].className;
      switch (item) {
        case "ContentEdit_input title":
          formData.title = targetForm[key].value;
          break;
        case "ContentEdit_input password":
          formData.password = targetForm[key].value;
          break;
        case "ContentEdit_content disable":
          formData.content = targetForm[key].value;
          break;
        default:
          console.log("get to default");
          break;
      }
    }
    //back to board list
  }

  function deletePlaceholder() {
    if (isPlaceholderRemoved) return;
    const placeholder = document.getElementsByClassName(
      "Content_editer_placeholder"
    )[0];
    placeholder.outerHTML = "";
    isPlaceholderRemoved = true;
  }

  return (
    <div className="ContentEdit_frame">
      <div className="Header_wrapper">
        <span className="Header_title">공지사항 - 새 글 작성</span>
        <input
          type={"file"}
          className="disable"
          id="image-upload-input"
          accept=".jpg, .jpeg, .png"
          onChange={(event) => attachImageToarticle(event.target.files)}
        />
        <div className="ContentEdit_btn" onClick={clickHiddenSubmitBtn}>
          완료
        </div>
        <div className="ContentEdit_btn" onClick={clickHiddenImageUploadBtn}>
          이미지 첨부
        </div>
      </div>
      <form className="Article_write_form">
        <div className="ContentEdit_header_wrapper">
          <input
            className="ContentEdit_input title"
            placeholder="제목을 입력하세요"
          />
          <input
            className="ContentEdit_input password"
            type={"password"}
            placeholder="비밀번호를 입력하세요(4~12자까지)"
          />
        </div>

        <div className="ContentEdit_content_wrapper" spellCheck="true">
          <div
            className="Content_editer"
            contentEditable="true"
            suppressContentEditableWarning={true}
            onKeyDown={deletePlaceholder}
          >
            <p
              className="Content_editer_placeholder"
              onClick={deletePlaceholder}
            >
              내용을 입력하세요
            </p>
          </div>
        </div>
        <textarea
          id="CopyHere"
          className="ContentEdit_content disable"
        ></textarea>
        <input
          type="submit"
          className="disable"
          id="submit"
          onClick={(event) => {
            clieckedSubmit(event);
          }}
        />
      </form>
    </div>
  );
}

{
  /* <img
  src={require("../images/VideoGameController.png")}
  alt={require("../images/VideoGameController.png")}
  className=" left_located icon"
  draggable={true}
/> */
}
