// TODO функция c двумя параметрами getUsers(data, firstName)

const getUsers = (data, firstName) => {

    let res = data.filter( item => {
        return (item.firstName === firstName)
    });
    return res;
};

module.exports = {
    getUsers
};
