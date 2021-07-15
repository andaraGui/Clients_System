import userAPI from "./API";

class UserAPIController {

    async findAllUsers(teste) {
        await userAPI.get()
            .then(response => {
                teste = response.data;
                return teste;
            })
            .catch(error => {
                console.log(error);
            })
            return teste;
    }

    findUserById(id) {
        userAPI.get(`/${id}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    addUser(name, email, age) {
        userAPI.post({ name, email, age })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }


    editUserById(id, name, email, age) {
        userAPI.put(`/${id}`, { name, email, age })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    deleteUserById(id) {
        userAPI.delete(`/${id}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }



}

export default new UserAPIController();