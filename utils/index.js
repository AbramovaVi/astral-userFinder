// TODO функция c двумя параметрами getUsers(data, firstName)

const getUsers = (data, firstName) => {

    return data.filter(item => {
            return (item.firstName.includes(firstName));
        }
    )
};

module.exports = {
    getUsers
};
