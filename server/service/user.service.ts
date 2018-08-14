import User from '../db/model/user';

export class UserService {

    public validateEmail(email: string): boolean {
        if (email) {
            return true;
        }
        return false;
    }

    public validatePassword (password: string): boolean {

        if (password) {
            return true;
        }

        return false;
    }

    public getUserIdByEmail(email: string): string {
        return Math.random().toString();
    }

    public save(user: any): Promise<any> {
        // Able to process user if needed before save

        return User.save(user);
    }

    public findByEmail(email: string): Promise<any> {
        return User.findByEmail(email);
    }
}

const userService = new UserService();

export default userService;