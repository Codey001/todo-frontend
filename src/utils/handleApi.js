import axios from "axios";
const baseURL = "https://todo-backend-q3n6.onrender.com";

const getAllToDo = (setToDo) => {
  axios.get(baseURL).then(({ data }) => {
    console.log("data --->", data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseURL}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((e) => console.log(e));
};

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
  axios
    .post(`${baseURL}/update`, { _id: toDoId, text })
    .then((data) => {
      console.log(data);
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((e) => console.log(e));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseURL}/delete`, { _id})
    .then((data) => {
      console.log('deleted ---->data',data);
      getAllToDo(setToDo);
    })
    .catch((e) => console.log(e));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
