import mongoose from "mongoose";


const connectDB =(url)=>{
    // this option is useful when we implements search funtionality
    mongoose.set('strictQuery',true);

    // connecting
    mongoose.connect(url)
    .then(()=> console.log('MongoDB connected'))
    .catch((err)=> console.log(err));
}

export default connectDB