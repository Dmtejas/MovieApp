import mongoose, { connect } from 'mongoose'

const dbConnection = async () => {
    try {
        const connectionResponse = await mongoose.connect('mongodb+srv://tejas:tejas123@cluster0.daqsqsc.mongodb.net/Movies-Backend')
        if(connectionResponse) {
            console.log(`Connected to Database : ${connectionResponse.connection.name} ${connectionResponse.connection.host}`)
        } else {
            throw new Error(`Error connecting to DB`);
        }
    } catch(err) {
        console.log(`Error occurred in connecting with database`);
        
    }
}

export {dbConnection};