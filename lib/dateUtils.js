//TODO: figure out right way to define modules in meteor. if nothing else, make this standard JS
//TODO: write unit tests

dateUtils = {

  _displayFormat : "LL",

  _dbFormat : "YYYY-MM-DD",

  todayDisplayFormat : function() {
    return moment().format("LL");
  },

  todayDbFormat : function() {
    return moment().format("YYYY-MM-DD");
  },

  fromDisplayToDbFormat : function(str) {
    return moment(str, this._displayFormat).format(this._dbFormat);
  },

  fromDbToDisplayFormat : function(str) {
    return moment(str, this._dbFormat).format(this._displayFormat);
  },

  isValidDbFormat : function(str) {
    return moment(str, this._dbFormat).isValid();
  }
};