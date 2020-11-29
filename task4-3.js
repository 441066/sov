let deepEqual = (objectOne, objectTwo) => {
    if (typeof objectOne !== "object" && typeof objectTwo !== "object")
        return objectOne === objectTwo;
    if (objectOne == null || objectTwo == null) return false;
    if (Object.keys(objectOne).length != Object.keys(objectTwo).length)
        return false;
    else {
        for (let i = 0; i < Object.keys(objectOne).length; i++) {
            if (
                objectOne[Object.keys(objectOne)[i]] !==
                    objectTwo[Object.keys(objectTwo)[i]] ||
                objectOne[objectOne[Object.keys(objectOne)[i]]] !==
                    objectTwo[objectTwo[Object.keys(objectTwo)[i]]]
            )
                return false;
        }
    }
    return true;
};
let Petya = { surname: "Bogdansky", city: "Moscow", age: 30 };
let Nastya = { surname: "Bogdansky", city: "Moscow", age: 29 };
console.log(deepEqual(Petya, Nastya));
console.log(deepEqual(1, 1));
