
import { DateTime } from "luxon";
import { FORMAT_DATE_TIME } from "@interfaces/type/common";

export default class HandlerError implements Error {

  name: string;
  message: string;
  private readonly _code: string;
  private readonly _today: string;

  constructor(message: string, code: string, today?: string) {

    Error.captureStackTrace(this, HandlerError);

    this.name = "[ HandlerError ]: API fetch exception";
    this.message = message;
    this._code = code;
    this._today = today ?? DateTime.now().toFormat(FORMAT_DATE_TIME);
  }

  get code() {
    return this._code;
  }

  get today() {
    return this._today;
  }
}