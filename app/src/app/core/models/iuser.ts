export interface Iuser {
    _id: String,
    name: String,
    email: String,
    password: String,
    rePassword: String
}

export interface IuserSignin {
    email: String,
    password: String,
}