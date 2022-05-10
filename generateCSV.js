function generateCSV(data) {
    let newData;
    for (let i = 0; i < data.length; i++) {
        newData = data[i] + `\n`;
    }
    return `
    ${newData}`
}

module.exports = generateCSV;