
var mlCharts = (function () {

var mlCharts = {};

mlCharts.ClusterChart = (function () {

function ClusterChart (elem, data) {
    this.elem = elem;
    $(elem).find ('svg').remove ();
    this.svg = d3.select (this.elem).append ('svg');
    this.colors = ['red', 'blue', 'green', 'orange', 'teal'];
    this.data = data;
    this._setUpClickBehavior ();
    this.clickFn = function (x, y) {};
};

ClusterChart.prototype._setUpClickBehavior = function () {
    var that = this;
    this.svg.on ('click', function () {
        var x = d3.event.offsetX;
        var y = d3.event.offsetY;
        var viewBox = that.svg.attr ('viewBox').split (' ').
            map (function (a) { return parseInt (a, 10); });
        var width = $(that.svg[0][0]).width ();
        var height = $(that.svg[0][0]).height ();
        var xCoord = (x / width) * viewBox[2] + viewBox[0];
        var yCoord = viewBox[3] - 
            ((y / height) * viewBox[3]) + viewBox[1];
        that.clickFn (xCoord, yCoord);
    });
};

ClusterChart.prototype.addData = function (data) {
    this.data = this.data.concat ([data]);
};

ClusterChart.prototype.plot = function (clusters, clusterAssignment) {
    var that = this;
    var retDict = this._getSvgProperties ();
    var yScale = retDict.yScale;
    var minX = retDict.minX;
    var maxX = retDict.maxX;
    var maxY = retDict.maxY;
    var data = this.data;
    this.svg.attr (
        'viewBox', 
        minX + ' -1 ' + 
        (1 + parseInt (maxX, 10)) + ' ' +
        (2 + maxY)
    );

    for (var i in clusters) {
        var filteredData = data.filter (function (datum, j) {
            return clusterAssignment[j] == i;
        });

        var classNum = i;
        this.svg.selectAll ('circle.class' + classNum)
                .data (filteredData)
            .enter ()
                .append ('circle')
                .attr ('class', 'class' + classNum)
                .each (function (d) {
                    var x = d[0],
                        y = maxY - d[1];
                    d3.select (this).attr ({
                        cx: x,
                        cy: y,
                        r: .25,
                        fill: that.colors[classNum]
                    })
                })
        ;
    }
};

ClusterChart.prototype._getSvgProperties = function () {
    var yScale = 5;
    var minX = Math.min.apply (null, this.data.map (function (a) {
            return a[0];
        })) - 1,
        maxX = Math.max.apply (null, this.data.map (function (a) {
            return a[0];
        })) + 1,
        maxY = Math.max.apply (null, this.data.map (function (a) {
            return a[1];
        }));
    return {
        yScale: yScale,
        minX: minX,
        maxX: maxX,
        maxY: maxY,
    }
};

return ClusterChart;

}) ();

return mlCharts;

}) ();


