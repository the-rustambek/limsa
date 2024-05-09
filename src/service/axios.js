import axios from "axios";

const baseUrl = "";

export const SendData = async (message) => {
    const url = `${baseUrl}sendMessage?chat_id=-&text=${message}`

    axios.post(url);
}