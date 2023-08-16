import http from '../confighttp/http-comon';

const getAll = () => {
  return http.get("/article");
};

const get =( id:any )=> {
  return http.get(`/article/${id}`);
};

const create = (data:any) => {
  return http.post("/article", data);
};

const update = (id:any, data:any) => {
  return http.put(`/article/${id}`, data);
};

const remove = (id:any) => {
  return http.delete(`/article/${id}`);
};

const removeAll = () => {
  return http.delete(`/article`);
};

const findByTitle = (title:any) => {
  return http.get(`/article?title=${title}`);
};

const ArticleService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ArticleService;