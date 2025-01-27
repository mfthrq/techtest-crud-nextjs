import { v4 as uuid } from 'uuid';

export const getListOfUsers = () => {
    const users = localStorage.getItem("@users");
    return users ? JSON.parse(users) : [];
};

export const addUser = (user) => {
    const users = getListOfUsers();
    users.push({ id: uuid(), ...user });
    localStorage.setItem("@users", JSON.stringify(users));
};
