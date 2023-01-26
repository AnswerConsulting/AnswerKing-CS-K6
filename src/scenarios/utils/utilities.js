export function getRandomValueFromArray(data) {
    const index = Math.floor(Math.random() * data.length);
    const randomData = data[index];
    return randomData;
}