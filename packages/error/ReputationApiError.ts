
import { DateTime } from "luxon";
import { FORMAT_DATE_TIME, } from "@interfaces/type/common";

export default class ReputationApiError implements Error {

  name: string;
  message: string;
  private readonly _code: string;
  private readonly _date: DateTime;
  constructor(code: string, message: string) {

    Error.captureStackTrace(this, ReputationApiError);

    this.name = "[ ReputationApiError ]: API fetch exception";
    this.message = message;
    this._code = code;
    this._date = DateTime.now();
  }

  get code() {
    return this._code;
  }

  get date() {
    return this._date.toFormat(FORMAT_DATE_TIME);
  }
}