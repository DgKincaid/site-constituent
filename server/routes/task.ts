import { Router, Request, Response, NextFunction } from 'express';

const tasks = [
    { name: 'task 1', priority: 'high', status: 'to_do'}
];

export class TaskRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public init(): void {
        this.router.get('/all', this.getAll);
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        console.log('get all tasks');

        res.status(200).send(tasks);
    }
}

const taskRouter = new TaskRouter();

export default taskRouter;