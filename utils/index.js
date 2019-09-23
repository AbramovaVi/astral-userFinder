// TODO функция c двумя параметрами getUsers(data, firstName)

const getUsers = (data, firstName) => {
    const rez = [];
    data.map( item => {
        if (item.firstName === firstName) {
            rez.push(item);
        }});
    return rez;
};

module.exports = {
    getUsers
};
