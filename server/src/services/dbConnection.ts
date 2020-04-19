import mongoose from "mongoose";

export interface IDbConnection{
    connect(): Promise<void>;
}

export class MongoDbConnection implements  IDbConnection{
    public conn: mongoose.Mongoose;
    async connect(): Promise<void> {
        this.conn = await mongoose.connect('mongodb://localhost:27017/admin', {useUnifiedTopology:true, useNewUrlParser: true});
    }
}