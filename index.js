"use strict";
exports.__esModule = true;
exports.hello = void 0;
var world = "world";
function hello(who) {
    if (who === void 0) { who = world; }
    return "Hello ".concat(who, "! ");
}
exports.hello = hello;
console.log(hello());
var Status;
(function (Status) {
    Status["Todo"] = "Todo";
    Status["Doing"] = "Doing";
    Status["Done"] = "Done";
})(Status || (Status = {}));
console.log(Status.Todo, Status.Doing, Status.Done); // Todo Doing Done
