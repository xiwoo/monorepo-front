
export default class InterceptorError implements Error {

  name: string;
  message: string;
	private readonly _redirectUrl: string;
	private readonly _code?: string;

	constructor(name: string, message: string, redirectUrl: string, code?: string) {

    this.name = `[ InterceptorError ]: interceptor exception > ${name}`;
    this.message = message;
		this._redirectUrl = redirectUrl;
		this._code = code;
	}

  get code() {
    return this._code;
  }

  get redirectUrl() {
    return this._redirectUrl;
  }
}