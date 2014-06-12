var DBSCAN = require('../lib/index.js').DBSCAN;

var dataset = [
    [1,1],[0,1],[1,0],
    [10,10],[13,13],[10,13],
    [54,54],[55,55],[89,89],[57,55]
];

var dbscan = new DBSCAN();
var clusters = dbscan.run(dataset, 5, 2);
console.log(clusters);