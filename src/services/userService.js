import axios from 'axios';

class UserService {
    static loggedIn = (body) => axios.post('/auth/login', body)
}

export default UserService;