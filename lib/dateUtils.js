//TODO: write unit tests
//TODO: is this the right way to do a utility class in JS/meteor?

function DateUtils() {};

DateUtils.prototype._displayFormat = "LL";

DateUtils.prototype._dbFormat = "YYYY-MM-DD";

DateUtils.prototype.todayDisplayFormat = function() {
  return moment().format(this._displayFormat);
};

DateUtils.prototype.todayDbFormat = function() {
  return moment().format(this._dbFormat);
};

DateUtils.prototype.fromDisplayToDbFormat = function(str) {
  return moment(str, this._displayFormat).format(this._dbFormat);
};

DateUtils.prototype.fromDbToDisplayFormat = function(str) {
  return moment(str, this._dbFormat).format(this._displayFormat);
};

DateUtils.prototype.isValidDbFormat = function(str) {
  return moment(str, this._dbFormat).isValid();
};

dateUtils = new DateUtils();