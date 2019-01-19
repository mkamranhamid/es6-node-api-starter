import { Router } from 'express';
import { login, register, forgetPwd, verifyEmail } from './auth.controller';

export default () => {
    let api = Router();

    // POST
    api.post('/login', login);
    api.post('/register', register);
    api.post('/forgetPwd', forgetPwd);

    // GET
    api.get('/verifyEmail', verifyEmail);

    return api;
}
