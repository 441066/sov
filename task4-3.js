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

        for (let i = 0; i < Object.keys(objectOneSorted).length; i++) {
            if (
                objectOneSorted[Object.keys(objectOneSorted)[i]] !==
                    objectTwoSorted[Object.keys(objectTwoSorted)[i]] ||
                objectOneSorted[
                    objectOneSorted[Object.keys(objectOneSorted)[i]]
                ] !==
                    objectTwoSorted[
                        objectTwoSorted[Object.keys(objectTwoSorted)[i]]
                    ]
            )
                return false;
        }
    }
    return true;
};
let Petya = { city: "Moscow", surname: "Bogdansky", age: 30 };
let Nastya = { surname: "Bogdansky", city: "Moscow", age: 30 };
console.log(deepEqual(Petya, Nastya));
console.log(deepEqual(1, 1));
