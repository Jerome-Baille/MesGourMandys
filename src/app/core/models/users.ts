export class Users {
    _id!: string;
    email!: String;
    firstName!: String; 
    lastName!: String;
    password!: String;
    phone!: String;
    address?: String;
    zipcode?: String;
    city?: String;
    birthday?: Date;
    avatar?: String;
    isAdmin!: Boolean
}