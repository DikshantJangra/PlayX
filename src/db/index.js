import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`)
        console.log(`\n MongoDB connected!! DB Info(read more about it): ${connectionInstance}`) // Read more about connection instance
    }
    catch(error){
        console.log(`MONGODB connection error: ${error}`);
        // we can directly throw an error but node.js gives us an option to directly exit the process (read more about it)
        process.exit(1)
    }
}
export default connectDB