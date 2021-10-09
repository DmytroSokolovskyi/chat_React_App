import {axiosInstance} from "./config";
import moment from "moment";
import {setMsg} from "../redux/actions";

const getJoke = (id) => async (dispatch) => {
    const joke = await axiosInstance.get();
    const userMsg = {sender: true, time: moment().format(), value: joke.data.value};
    dispatch(setMsg({id, userMsg}));
}

export {getJoke};
