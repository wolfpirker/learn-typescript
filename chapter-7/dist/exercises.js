System.register([], function (exports_1, context_1) {
    "use strict";
    var Some, None, api, friendsUserNames;
    var __moduleName = context_1 && context_1.id;
    function listOfOptionsToOptionOfList(list) {
        var empty = {};
        var result = list.map(function (_) { return _.getOrElse(empty); }).filter(function (_) { return _ !== empty; });
        if (result.length) {
            return new Some(result);
        }
        return new None();
    }
    return {
        setters: [],
        execute: function () {
            exports_1("default", null);
            Some = (function () {
                function Some(value) {
                    this.value = value;
                }
                Some.prototype.flatMap = function (f) {
                    return f(this.value);
                };
                Some.prototype.getOrElse = function () {
                    return this.value;
                };
                return Some;
            }());
            None = (function () {
                function None() {
                }
                None.prototype.flatMap = function () {
                    return this;
                };
                None.prototype.getOrElse = function (value) {
                    return value;
                };
                return None;
            }());
            api = new API();
            friendsUserNames = api
                .getLoggedInUserID()
                .flatMap(api.getFriendIDs)
                .flatMap(function (_) { return listOfOptionsToOptionOfList(_.map(api.getUserName)); });
        }
    };
});
//# sourceMappingURL=exercises.js.map