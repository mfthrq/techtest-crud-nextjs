// Services for Authentication Logic
export const setDefaultUser = () => {
    const defaultUser = { username: "admin", password: "123456" };
    localStorage.setItem("@defaultUser", JSON.stringify(defaultUser));
};

export const isAuthenticated = () => {
    const user = localStorage.getItem("@defaultUser");
    return user ? true : false;  // Kembalikan true jika ada, false jika tidak ada
};

export const login = (username, password) => {
    const user = JSON.parse(localStorage.getItem("@defaultUser"));
    if (user.username === username && user.password === password) {
        localStorage.setItem("@isLoggedIn", "true");
        return true;
    }
    return false;
};

export const logout = () => {
    localStorage.removeItem("@isLoggedIn");
};
