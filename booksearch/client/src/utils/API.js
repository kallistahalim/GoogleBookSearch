import axios from "axios";

export default {
  getBook: function(query) {
    return axios.get("/api/booksearch", { params: { q: query } });
  }
};
