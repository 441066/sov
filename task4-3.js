let deepEqual = (objectOne, objectTwo) => {
    if (typeof objectOne !== "object" && typeof objectTwo !== "object")
        return objectOne === objectTwo;
    if (objectOne == null || objectTwo == null) return false;
    if (Object.keys(objectOne).length != Object.keys(objectTwo).length)
        return false;
    else {
        const objectOneSorted = {};
        Object.keys(objectOne)
            .sort()
            .forEach(function (key) {
                objectOneSorted[key] = objectOne[key];
            });

        const objectTwoSorted = {};
        Object.keys(objectTwo)
            .sort()
            .forEach(function (key) {
                objectTwoSorted[key] = objectTwo[key];
            });

        return (
            JSON.stringify(objectOneSorted) === JSON.stringify(objectTwoSorted)
        );
    }
};
let Petya = { city: "Moscow", surname: "Bogdansky", age: 30 };
let Nastya = { surname: "Bogdansky", city: "Moscow", age: 29 };
console.log(deepEqual(Petya, Nastya));
console.log(deepEqual(1, 1));
