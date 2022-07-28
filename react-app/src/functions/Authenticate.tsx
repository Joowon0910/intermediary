import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 *  @param {string} page 다음 중 하나 입력 {Board, BoardList, ContentEdit, ModifyAccountInfo, Mypage, Scheduler}
 */
async function checkAuth() {
}

const checkAuthFromApp = async ():Promise<any> => {

    try{
      const res = await axios
      .post(
        "/page/access",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        }
      );
      if(res.status === 200 && res.data === "pass") {
        return res;
      }
    } catch(error){
      return error;
    }
  }

const Authenticate = {
  checkAuth,
  checkAuthFromApp,
};

export default Authenticate;
