const testArray = [10, "name", false, null, undefined, { city: "Lviv" }, function(a, b) { return a + b; }, Symbol()];

const filterBy = (arr, dataType) => arr.filter((item) => typeof item !== dataType);

console.group("#MY ARRAY:");
console.log(testArray);
console.groupEnd("#MY ARRAY:");

console.group("#STRING IS FILTRED");
console.log(filterBy(testArray, "string"));
console.groupEnd("#STRING IS FILTRED");

console.group("#NUMBER IS FILTRED");
console.log(filterBy(testArray, "number"));
console.groupEnd("#NUMBER IS FILTRED");

console.group("#OBJECT IS FILTRED");
console.log(filterBy(testArray, "object"));
console.groupEnd("#OBJECT IS FILTRED");

console.group("#UNDEFINED IS FILTRED");
console.log(filterBy(testArray, "undefined"));
console.groupEnd("#UNDEFINED IS FILTRED");

console.group("#BOOLEAN IS FILTRED");
console.log(filterBy(testArray, "boolean"));
console.groupEnd("#BOOLEAN IS FILTRED");

console.group("#FUNCTION IS FILTRED");
console.log(filterBy(testArray, "function"));
console.groupEnd("#FUNCTION IS FILTRED");

console.group("#SYMBOL IS FILTRED");
console.log(filterBy(testArray, "symbol"));
console.groupEnd("#SYMBOL IS FILTRED");