class Errors{
	constructor() {};

	static noEmail() {
		throw new Error ('This is uncorrect email.');
	}
	static noStudent() {
		throw new Error ('This email is not found');
	}
}


export default Errors;