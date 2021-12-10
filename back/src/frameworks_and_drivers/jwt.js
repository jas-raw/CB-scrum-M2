const { secret_key } = require("./config")

const generarJWT = ()=>{
    return jwt.sign({
        _id: this._id,
        nombre: this.name,
        email: this.email
    },secret_key)
}