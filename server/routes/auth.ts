import { Router, Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

import UserService from '../service/user.service';

export class AuthRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public init(): void {
        this.router.post('/login', this.login);
        this.router.post('/register', this.register);
    }

    public register(req: Request, res: Response, next: NextFunction) {
        const email = req.body.email;
        const password = req.body.password;

        // TODO: Move to seperate user file
        const PRIVATE_KEY: string = process.env.SEC ? process.env.SEC : '';

        console.log(req.body);
        const user = {
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            address: req.body.address
        };

        UserService.save(user).then((newUser) => {
            console.log('save completed: ', newUser);

            const token = jwt.sign({}, PRIVATE_KEY, {
                expiresIn: 120,
                subject: newUser._id
            });

            res.status(200).send({
                token: token,
                expiresIn: 120
            });
        });
    }

    public login(req: Request, res: Response, next: NextFunction) {
        const email = req.body.email;
        const password = req.body.password;
        const PRIVATE_KEY: string = process.env.SEC ? process.env.SEC : '';


        // TODO: finish eamil and password validation
        // User Exists && Password is Correct
        if (UserService.validateEmail(email) && UserService.validatePassword(password)) {

            UserService.findByEmail(email).then((user) => {

                console.log(user);
                const token = jwt.sign({}, PRIVATE_KEY, {
                    expiresIn: 120,
                    subject: user._id.toString()
                });

                res.status(200).send({ token: token, expiresIn: 120, userId: user._id });
            });
        }
        else {
            res.sendStatus(401);
        }
    }
}

const authRouter = new AuthRouter();

export default authRouter;