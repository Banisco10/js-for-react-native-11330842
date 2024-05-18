function processArray(numbers) {
    const result = [];
    numbers.forEach(num => {
        if (num % 2 === 0) {
            result.push(num * num);
        } else {
            result.push(num * 3);
        }
    });
    return result;
}
