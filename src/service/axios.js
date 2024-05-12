import axios from "axios";

const baseUrl = "https://api.telegram.org/bot6697491268:AAGy5ZEybcydM30rYmDhj8szNb1wtTrK7vg/";

export const SendData = (message) => {
  const url = `${baseUrl}sendMessage?chat_id=-1002036825261&text=${message}`;

  axios
    .post(url)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
