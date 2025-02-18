const setKey = (key, value) => {
    localStorage.setItem(key, value);
}

const getKey = (key) => {
    return localStorage.getItem(key);
}

const removeKey = (key) => {
    localStorage.removeItem(key);
}

export {setKey, getKey, removeKey};