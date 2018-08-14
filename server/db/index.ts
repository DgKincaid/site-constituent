import DataStore from 'nedb';

export class DbHelper {
    public dbUser: DataStore;

    constructor() {
        this.dbUser = new DataStore({ filename: './users.db', autoload: true });
    }

    public init() {
        console.log('init');
        this.dbUser.loadDatabase();
    }
}

const dbHelper = new DbHelper();

export default dbHelper;