import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		});
		console.log(`Connected to MongoDB on host ${conn.connection.host} `);
	} catch (error) {
		console.error(`Error ${error.message}`);
	}
};

export default connectDB;
