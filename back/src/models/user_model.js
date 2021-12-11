const {Schema, model} = require("mongoose");

const user_model_chema = new Schema({
    name:{
        type: String
    },
    admin:{
        type: Boolean
    },
    email:{
        type: String
    },
    pass:{
        type: String
    }
});

module.exports = model("user_model",user_model_chema,"users")