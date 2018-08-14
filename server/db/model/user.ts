import { DbHelper } from '../index';

export class User extends DbHelper {

    constructor() {
        super();
    }

    public save(user: any): Promise<any> {
        const savePromise = new Promise((resolve, reject) => {
            this.dbUser.insert(user, function(err, newUser) {
                console.log(newUser);

                resolve(newUser);
            });
        });

        return savePromise;
    }

    public findByEmail(email: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.dbUser.findOne({ email: email }, function(err: any, user: any) {
                console.log('user found: ', user);
                resolve(user);
            });
        });
    }
}

const user = new User();

export default user;