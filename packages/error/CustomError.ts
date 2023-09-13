
export default class CustomError implements Error {

  name: string;
  message: string;

	constructor(name: string, message: string) {
    this.name = `[ CustomError ]: filter exception > ${name}`;
    this.message = message;
	}
}