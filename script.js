const regex = /\s([^\\{}]+\s?[^\\{}]+)\\/gm;
const regex2 = /(\d+-\d+-\d+)\s(\d+:\d+:\d+.?\d+)\s(\w+)\s+(\d+.?\d+)\s(\w+)/gm;

let str = '';

// grabs the user-inputted string
function getStr () {
    str = document.getElementById('RTF').value;
}

// executes code on submit button click
function exec() {
    // turning str into an array of each 'CSV' entry
    str = str.split(' }}');

    let m;
    let matches = [];

    // I can't match what I need to match with pure regex because I need each entry to be a match and then find a random # of repeated groups within that match which I do not believe regex supports, because there is no repeatable pattern in that case
    // Instead I turned str into an array and then I am finding all of the groups (now individual matches) within each index, joining them to be one string (which is how the data needs to be presented) and pushing them to the matches array
    // The code iterates to the next entry and repeats the process
    // This gives provides the data exactly the way the user wants it
    for (i=0; i < str.length; i++) {
        let join = '';
        while (m = regex.exec(str[i])) {
            m.forEach((match, groupIndex) => {
                if (groupIndex === 1) {
                    join = join + ' ' + match;
                }
            
            })
        }
        matches.push(join);
    }

    // <3 bmw so m2 it is
    let m2;
    let matchReplace = '';
    let identifiers = []

    while ((m2 = regex2.exec(str)) !== null) {
        if (m2.index === regex.lastIndex) {
            regex2.lastIndex++;
        }
        
        m2.forEach((match, groupIndex) => {
            if (match && groupIndex === 0) {
                // adds delimiter for csv entry
                matchReplace = match.split(/\s+/).join(',');
                matchReplace = matchReplace + ',';
                identifiers.push(matchReplace);
            }
        });
    }

    let newData = '';

    function generateCSV() {
        for (let i = 0; i < matches.length; i++) {
            if (matches[i] || identifiers[i]) {
                newData = newData + identifiers[i] + matches[i] + `<br>`;
            }
        }
    }

    generateCSV();

    // saving this in case of need for CSV file creation
    // writeFile(newData);

    document.getElementById('formatted-data').innerHTML = newData;
}

// runs the program
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    getStr();
    exec();
});


// saving this in case I need to generate a csv file at some point

// function writeFile(data) {
//     return new Promise((resolve, reject) => {
//     fs.writeFile('./menu.csv', data, err => {
//         if (err) {
//             console.log(err);
//             reject(err);
//             return;
//         }

//         resolve({
//             ok: true,
//             message: 'Menu created!'
//         })
//     })
//     })
// }

    

    

        
    

