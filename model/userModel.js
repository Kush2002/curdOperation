const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	token:{
		type:String
	},
	username:{
		type:String
	},
	password:{
		type:String
	},
	confirmPassword:{
		type:String
	}
});

const User = mongoose.model("User",userSchema);
module.exports = User;