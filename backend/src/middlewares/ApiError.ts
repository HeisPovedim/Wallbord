class ApiError {
  code: number;
  message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }

  //data not filled from front
  //بيانات خطأ مثل تاكيد كلمة مرور غير مطابق للكلمة
  static badRequest(message: string = 'Bad Request') {
    return new ApiError(400, message);
  }

  /**Ошибка 500 Internal Server Error. Применяется тогда, когда запрос, отправленный фронтендом,
   * сформирован правильно, но на бэкенде при этом возникла какая-то ошибка. */
  static internal(message: string = 'Internal Error') {
    return new ApiError(500, message);
  }

  static NotFound(message: string = 'Not Found Error') {
    return new ApiError(404, message);
  }
}

export default ApiError;
