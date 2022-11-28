const num = 13;
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: `data${num}.csv`,
  header: [
    { id: "counter", title: "Operations" },
    { id: "data", title: "Data" },
  ],
});

const set = [
  {
    data: 0,
    counter: 0,
  },
];

function findSequence(number) {
  let counter = 0;
  let num = number;
  while (num > 1) {
    counter++;

    if (isEven(num) === true) {
      num = num / 2;
      console.log(num);
    } else {
      num = num * 3 + 1;
      console.log(num);
    }
    set.push({
      counter: counter,
      data: num,
    });
  }
}

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function toCSV() {
  findSequence(num);
  csvWriter
    .writeRecords(set)
    .then(() => console.log("The CSV file was written successfully"));
}

toCSV();
