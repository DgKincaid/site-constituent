import { Router, Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export class AuthRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public init(): void {
        this.router.post('/login', this.login);
    }

    public login(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);

        const email = req.body.email;
        const password = req.body.password;
        const PRIVATE_KEY: string = process.env.SEC ? process.env.SEC : '';

        // TODO: finish eamil and password validation
        // User Exists && Password is Correct
        if (this.validateEmail(email) && this.validatePassword(password)) {
            const userId = this.getUserIdByEmail(email);

            const token = jwt.sign({}, PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: 120,
                subject: userId
            });


            res.cookie('SESSIONID', token, { httpOnly: true, secure: true });
        }
        else {
            res.sendStatus(401);
        }
    }

    public validateEmail(email: string): boolean {

        if (email) {
            return true;
        }

        return false;
    }

    private validatePassword(password: string): boolean {

        if (password) {
            return true;
        }

        return false;
    }

    // TODO: Move to separete file
    private getUserIdByEmail(email: string): string {
        return Math.random().toString();
    }
}

const authRouter = new AuthRouter();

export default authRouter;