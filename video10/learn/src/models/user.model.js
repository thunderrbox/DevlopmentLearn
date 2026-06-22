import mongoose from 'mongoose';

/*
	User model schema and usage notes

	How a User will be saved in the DB:
	- Each document in the 'users' collection will use this schema.
	- The schema below is intentionally minimal/empty here; in a real
		application you would define fields such as:
			{
				username: { type: String, required: true, unique: true },
				email:    { type: String, required: true, unique: true },
				password: { type: String, required: true },
				createdAt:{ type: Date, default: Date.now },
				// ...any other user-specific fields
			}

	Example usage (in application code):
		import { User } from './models/user.model.js'

		// create and save a user
		const u = new User({ username: 'alice', email: 'a@a.com', password: 'hashed' });
		await u.save();

		// find users
		const found = await User.findOne({ username: 'alice' });

	Notes:
	- Mongoose will map this model to the 'users' collection (lowercased, pluralized).
	- Validate and sanitize inputs before saving (especially passwords).
	- Consider adding indexes for fields you query frequently (e.g. email).
*/

const userSchema = new mongoose.Schema({
	// keep schema empty for now; add fields above as needed
});

// Export the model. Use mongoose.model (not mongoose.Schema.model).
export const User = mongoose.model('User', userSchema);