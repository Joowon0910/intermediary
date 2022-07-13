import "../css/ContentEdit.css";

// function disablePlaceholder() {
//   console.log(document.getElementById("placerholder"));
// }
const TITLE: number = 0;
const PASSWORD: number = 1;
const CONTENT: number = 2;
interface FormDataType {
  title: string;
  password: string;
  content: string;
}
interface ValidateType {
  isNoTitle: boolean;
  isTooLongTitle: boolean;
  isNonFitPassword: boolean;
  isNoContent: boolean;
}
export default function ContentEdit() {
  let isPlaceholderRemoved = false;
  let isWarnNoTitle = false;
  let isWarnTooLongTitle = false;
  let isWarnNonFitPassword = false;
  let isWarnNoContent = false;
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
  }

  function clickHiddenImageUploadBtn(): void {
    const hiddenInput = document.getElementById("image-upload-input");
    if (hiddenInput) {
      hiddenInput.click();
    }
  }

  function clickHiddenContentEditSubmitBtn(): void {
    const hiddenSubmit = document.getElementById("ContentEdit_submit");
    if (hiddenSubmit) {
      hiddenSubmit.click();
    }
  }
  function copyArticle() {
    const targetDiv = document.getElementsByClassName("Content_editer")[0];
    const textarea = document.getElementById("CopyHere");

    textarea.innerHTML = "";
    if (
      isPlaceholderRemoved === false ||
      targetDiv.innerHTML === "<div><br></div>" ||
      targetDiv.innerHTML === "<br>"
    )
      return;
    if (targetDiv.children.length === 0) {
      textarea.innerHTML = targetDiv.innerHTML;
      return;
    } else {
      for (const key in targetDiv.children) {
        if (targetDiv.children[key].outerHTML) {
          textarea.innerHTML += targetDiv.children[key].outerHTML;
        }
      }
    }
  }
  function checkAllofValidationIsOK(validateResult: ValidateType): boolean {
    if (
      validateResult.isNoContent === false &&
      validateResult.isNoTitle === false &&
      validateResult.isNonFitPassword === false &&
      validateResult.isTooLongTitle === false
    ) {
      return true;
    } else {
      return false;
    }
  }
  function validateFormData(
    formData: FormDataType,
    form: HTMLFormElement
  ): boolean {
    const validateResult: ValidateType = {
      isNoTitle: true,
      isTooLongTitle: true,
      isNonFitPassword: true,
      isNoContent: true,
    };
    validateResult.isNoTitle = formData.title.length === 0 ? true : false;
    validateResult.isTooLongTitle = formData.title.length > 100 ? true : false;
    validateResult.isNonFitPassword =
      formData.password.length <= 12 && formData.password.length >= 4
        ? false
        : true;
    validateResult.isNoContent = form[CONTENT].innerHTML === "" ? true : false;

    if (validateResult.isNoTitle === true) {
      // 제목 유효성 검사에 탈락했고
      if (isWarnNoTitle === false) {
        // 경고창을 안 띄웠으면
        form[TITLE].classList.add("ContentEdit_validation_false"); // 입력 칸에 빨간 밑줄 치고
        document
          .getElementsByClassName("No_title")[0]
          .classList.remove("disable");
        isWarnNoTitle = true; //경고 했음을 체크함
      }
    } else {
      if (isWarnNoTitle === true) {
        //경고가 이미 있으면
        form[TITLE].classList.remove("ContentEdit_validation_false");
        document.getElementsByClassName("No_title")[0].classList.add("disable");
        isWarnNoTitle = false; // 경고를 지웠다고 체크함
      }
    }

    if (validateResult.isTooLongTitle === true) {
      // 제목 유효성 검사에 탈락했고
      if (isWarnTooLongTitle === false) {
        // 경고창을 안 띄웠으면
        form[TITLE].classList.add("ContentEdit_validation_false"); // 입력 칸에 빨간 밑줄 치고
        document
          .getElementsByClassName("Too_long_title")[0]
          .classList.remove("disable");
        isWarnNoTitle = true; //경고 했음을 체크함
      }
    } else {
      if (isWarnTooLongTitle === true) {
        //경고가 이미 있으면
        form[TITLE].classList.remove("ContentEdit_validation_false");
        document
          .getElementsByClassName("Too_long_title")[0]
          .classList.add("disable");
        isWarnNoTitle = false; // 경고를 지웠다고 체크함
      }
    }

    if (validateResult.isNonFitPassword === true) {
      if (isWarnNonFitPassword === false) {
        form[PASSWORD].classList.add("ContentEdit_validation_false");
        document
          .getElementsByClassName("Non_fit_password")[0]
          .classList.remove("disable");
        isWarnNonFitPassword = true;
      }
    } else {
      if (isWarnNonFitPassword === true) {
        form[PASSWORD].classList.remove("ContentEdit_validation_false");
        document
          .getElementsByClassName("Non_fit_password")[0]
          .classList.add("disable");
        isWarnNonFitPassword = false;
      }
    }
    const NoContentWarning = document.getElementsByClassName(
      "ContentEdit_No_content"
    )[0];
    if (validateResult.isNoContent === true) {
      NoContentWarning.classList.remove("disable");
      isWarnNoContent = true;
    } else {
      if (isWarnNoContent === true) {
        NoContentWarning.classList.add("disable");
        isWarnNoContent = false;
      }
    }

    return checkAllofValidationIsOK(validateResult);
  }
  function clieckedContentEditSubmit(event: React.FormEvent<HTMLInputElement>): void {
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
        case "ContentEdit_input title ContentEdit_validation_false":
          formData.title = targetForm[key].value;

          break;
        case "ContentEdit_input password":
        case "ContentEdit_input password ContentEdit_validation_false":
          formData.password = targetForm[key].value;
          break;
        case "ContentEdit_content disable":
          formData.content = targetForm[key].innerText;
          break;
        default:
          break;
      }
    }
    const SubmitForm: HTMLFormElement = document.getElementById(
      "Article_form"
    ) as HTMLFormElement;
    if (validateFormData(formData, targetForm)) {
      console.log("done");
      SubmitForm.submit();
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
        <div className="ContentEdit_validation_warning ContentEdit_No_content disable">
          내용을 입력하세요
        </div>
        <div className="ContentEdit_btn" onClick={clickHiddenContentEditSubmitBtn}>
          완료
        </div>
        <div className="ContentEdit_btn" onClick={clickHiddenImageUploadBtn}>
          이미지 첨부
        </div>
      </div>
      <form className="Article_write_form" action="/api/board/addArticle" method="post" id="Article_form">
        <div className="ContentEdit_header_wrapper">
          <div className="ContentEdit_input_wrapper title_wrapper">
            <input
              className="ContentEdit_input title"
              placeholder="제목을 입력하세요"
              name="title"
            />
            <span className="ContentEdit_validation_warning No_title disable">
              제목을 입력해주세요
            </span>
            <span className="ContentEdit_validation_warning Too_long_title disable">
              제목은 100자 이내로 입력해주세요
            </span>
          </div>
          <div className="ContentEdit_input_wrapper password_wrapper">
            <input
              className="ContentEdit_input password"
              type={"password"}
              placeholder="비밀번호를 입력하세요(4~12자까지)"
              name="password"
            />
            <span className="ContentEdit_validation_warning Non_fit_password disable">
              비밀번호는 4~12자 이내로 입력해주세요
            </span>
          </div>
        </div>
        <div
          className="ContentEdit_content_wrapper"
          onClick={() => document.getElementById("Content_editer").focus()}
          spellCheck="true"
        >
          <div
            className="Content_editer"
            id="Content_editer"
            contentEditable="true"
            suppressContentEditableWarning={true}
            onKeyDown={deletePlaceholder}
            onFocus={(event) => {
              event.target.parentElement.classList.add(
                "ContentEdit_wrapper_on_focus"
              );
            }}
            onBlur={(event) =>
              event.target.parentElement.classList.remove(
                "ContentEdit_wrapper_on_focus"
              )
            }
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
          name="content"
          className="ContentEdit_content disable"
        ></textarea>
        <input
          id="ContentEdit_submit"
          className="disable"
          type="submit"
          onClick={(event) => {
            clieckedContentEditSubmit(event);
          }}
        />
      </form>
    </div>
  );
}


  /* <img
  src={require("../images/VideoGameController.png")}
  alt={require("../images/VideoGameController.png")}
  className=" left_located icon"
  draggable={true}
/> */

