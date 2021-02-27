System.register([], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var NoUserLoggedIn, API2, api2, loggedInUser;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("default", null);
            NoUserLoggedIn = (function (_super) {
                __extends(NoUserLoggedIn, _super);
                function NoUserLoggedIn() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return NoUserLoggedIn;
            }(Error));
            API2 = (function () {
                function API2() {
                }
                API2.prototype.getLoggedInUserID = function () {
                    return;
                };
                API2.prototype.getFriendIDs = function (userID) {
                    var uid = [userID];
                    return uid;
                };
                API2.prototype.getUserName = function (userID) {
                    return "";
                };
                return API2;
            }());
            api2 = new API2();
            loggedInUser = api2.getLoggedInUserID();
            if (loggedInUser instanceof Error) {
                console.error(loggedInUser.message);
            }
            else {
                var friendsList = api2.getFriendIDs(loggedInUser);
                if (friendsList instanceof Error) {
                    console.error(friendsList.message);
                }
                else {
                    for (var _i = 0, friendsList_1 = friendsList; _i < friendsList_1.length; _i++) {
                        var friend = friendsList_1[_i];
                        console.info(friend);
                    }
                }
                var userName = api2.getUserName(loggedInUser);
                if (userName === 'string') {
                    console.info("logged in user: " + userName);
                }
                else if (userName instanceof Error) {
                    console.error(userName.message);
                }
            }
        }
    };
});
//# sourceMappingURL=exercise_own.js.map