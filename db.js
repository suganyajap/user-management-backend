const {MongoClient} = require("mongodb")

const client= new MongoClient(process.env.URL)

module.exports={

    db:null,
    users:null,

    async connect()
    {
        await client.connect()
        console.log("connected to DataBase")

        this.db=client.db(process.env.MONGODB_NAME)
        console.log("Database Selected",process.env.MONGODB_NAME)


        this.users=this.db.collection("users")

    }

}