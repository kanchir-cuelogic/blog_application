export interface User {
    userName: string,
	password: string,
	firstName: string,
	lastName: string,
	email: string,
	phoneNumber: number
}

export interface Blog {
	blogTitle: string,
	blogDescription: string
}

export interface Comment {
	commentDetail: string,
	blogId: number
}