//#!/usr/bin/node 

if (typeof require !== 'undefined') {
    var math = require ('mathjs');
    var assert = require ('assert');
} else {
    var math = mathjs;
    var assert = console.assert;
}

var KMeans = (function () {

function KMeans () {
    this.data = [];    
    this.c = [];    
    this.mu = [];    
    this.K = null;
    this.initializations = 100;
};

KMeans.prototype.distortion = function (mu, c) {
    var that = this;
    return math.mean (this.data.map (function (datum, i) {
        return math.square (
            math.sqrt (math.sum (math.square (math.subtract (datum, mu[c[i]])))));
    }), 0);
};

KMeans.prototype.initialize = function () {
    var mu = [];
    for (var i = 0; i < this.K; i++) {
        mu[i] = this.data[Math.floor (Math.random () * this.data.length)];
    }
    return mu;
};

KMeans.prototype.cluster = function () {
    var that = this;

    var prevCost = null,
        cost = null,
        mu = this.initialize (),
        c = [];
    do {
        // assign
        for (var i in this.data) {
            c[i] = mu.map (function (centroid, j) {
                return [
                    j, math.sqrt (math.sum (math.square (math.subtract (that.data[i], centroid))))];
            }).reduce (function (prev, curr) {
                return curr[1] < prev[1] ? curr : prev;
            }, [null, Infinity])[0];
        }

        // move
        for (var i = 0; i < this.K; i++) {
            var filteredData = this.data.filter (function (datum, j) { 
                return c[j] === i; 
            });
            if (!filteredData.length) { 
                mu[i] = (new Array (this.data[0].length)).join (' ').split (' ').
                    map (function () { return Infinity; });
            } else {
                mu[i] = math.mean (filteredData, 0);
            }
        }
        prevCost = cost;
        cost = this.distortion (mu, c);
    } while (prevCost !== cost);

    return [cost, mu, c];
};

KMeans.prototype.run = function () {
    var output = [];
    for (var i = 0; i < this.initializations; i++) {
        output.push (this.cluster ());
    }
    var best = output.reduce (function (prev, curr, index) {
        return curr[0] < prev[0] ? curr : prev;
    }, [Infinity, null, null]);
    this.mu = best[1];
    this.c = best[2];
};

return KMeans;

}) ();

if (typeof module !== 'undefined') module.exports = NN;

//GLOBAL.test = function () {
//
//    var data = (new Array (20)).join (' ').split (' ').map (function () { 
//        return [Math.random () * 20 - 10, Math.random () * 20 - 10];
//    });
////        [1, 2],
////        [3, 4],
////        [0, 2],
////        [4, 8],
////        [10, 12],
////        [1, 5],
////    ];
//    var kMeans = new KMeans;
//    kMeans.K = 2;
//    kMeans.data = data;
//    kMeans.run ();
//    console.log ('kMeans = ');
//    console.log (kMeans);
//    
//};

