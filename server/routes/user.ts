import { Router, Request, Response, NextFunction } from 'express';

export class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public init(): void {
    }

    public userById(req: Request, res: Response, next: NextFunction) {

    }
}