import axios from "axios";
import { baseUrl } from "./api";

export const imageUploader=(e,setValue)=>{
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post(`${baseUrl}upload`, data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        setValue((prev) => {
          return [...prev, ...filenames];
        });
      });
}