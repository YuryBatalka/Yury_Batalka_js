var str = function (abc) {
if (abc == null) {
console.log ("Is empty")
} else {
console.log ("Is not empty");
}
};

str.isNonEmptyStr = function(par) {
return par == null;
};

str.isNonEmptyStr();
str.isNonEmptyStr("");
str.isNonEmptyStr("a");
str.isNonEmptyStr(1);
str();
str("a");