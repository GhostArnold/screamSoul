function divide(x, y) {
    if (y === 0) {
        throw "Деление на ноль невозможно";
    }
    return x / y;
}

try {
    let result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.log("Произошла ошибка:", error);
}
