import { Router } from 'express';
const appRouter = Router();
import { login } from '../Controllers/AuthController.js';
import { login as _login } from '../Validators/user.validators.js';


// Login User
appRouter.post('/login', _login, (req, res) => {
    login(req).then((data) => {
        res.status(200).send(data)
    }).catch(err => res.status(500).send(err))
});


// Export the Router
export default appRouter;