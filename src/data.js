const pagesKey = 'pages';

const pagesJson = localStorage.getItem(pagesKey);
const pagesStore = JSON.parse(pagesJson);

export default {
  getAllPages() {
    return pagesStore;
  },

  getSinglePage(index) {
    return pagesStore[index];
  },

  editPage(index, page) {
    pagesStore[index] = page;
    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
  },
};
