
export default class FilterError implements Error {

  name: string;
  message: string;
	private readonly _redirectUrl: string;
	private readonly _code?: string;

	constructor(name: string, message: string, redirectUrl: string) {

    this.name = `[ FilterError ]: filter exception > ${name}`;
    this.message = message;
		this._redirectUrl = redirectUrl;
		this._code = "F_EXCEPTION";
	}

  get code() {
    return this._code;
  }

  get redirectUrl() {
    return this._redirectUrl;
  }
}