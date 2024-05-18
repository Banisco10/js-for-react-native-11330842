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


function formattedArrayStrings(strings, numbers) {
    const formattedStrings = [];
    for (let i = 0; i < strings.length; i++) {
        if (numbers[i] % 2 === 0) {
          formattedStrings.push(strings[i].toUpperCase());
        } else {
          formattedStrings.push(strings[i].toLowercase());
    }
}
    return formattedStrings;
}
