import Api from "./api.js";

export default {
  search(search) {
    return Api().get("search", { params: { q: search } });
  },

  getDetails(slug) {
    return Api().get(slug);
  },
};
