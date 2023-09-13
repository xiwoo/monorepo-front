
export default class NotOverrideError implements Error {

  name: string;
  message: string;

  constructor(name: string, message: string) {
    this.name = `[ NotOverrideError ]: required Override method > ${name}`;
    this.message = message;
  }


}