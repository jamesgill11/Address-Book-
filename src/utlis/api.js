import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://my-new-address-book2.herokuapp.com/api/",
});

export const getContacts = () => {
  return axiosInstance
    .get("contacts")
    .then(({ data: { contact } }) => {
      return contact;
    })
    .catch((err) => err);
};

export const postContact = (id, first_name, last_name, phone, email) => {
  return axiosInstance
    .post("contacts", { id, first_name, last_name, phone, email })
    .then(({ data: { contact } }) => {
      return contact;
    })
    .catch((err) => err);
};

export const delContact = (id) => {
  return axiosInstance.delete(`contacts/${id}`);
};

export const updateContact = (id, first_name, last_name, phone, email) => {
  return axiosInstance
    .patch(`contacts/${id}`, { first_name, last_name, phone, email })
    .then(({ data: { contact } }) => {
      console.log(contact);

      return contact;
    });
};
