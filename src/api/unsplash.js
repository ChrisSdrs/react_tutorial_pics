import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 0jEc2Jpa5ylvHR95kIcvu_kqq_trxZOx4iGpAAVsh64",
  },
});
