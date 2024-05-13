import axios from "axios";
import { message } from "antd";

const baseUrl =
  "https://api.telegram.org/bot6697491268:AAGy5ZEybcydM30rYmDhj8szNb1wtTrK7vg/";

export const SendData = (messageTg) => {
  const url = `${baseUrl}sendMessage?chat_id=-1002036825261&text=${messageTg}`;

  axios
    .post(url)
    .then(() => message.success("Ma'lumotingiz jonatildi!"))
    .catch(() => message.error("Ma'lumotingiz jo'natishda xatolik yuz berdi!"));
};