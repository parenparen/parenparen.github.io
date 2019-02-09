
(function () {
    var chart$ = $('<div>').attr ('class', 'chart');
    $('body').append (chart$);

    function generate () {
        var clusters = parseInt ($('[name="clusters"]').val (), 10);
        var dataSetSize = parseInt ($('[name="data-set-size"]').val (), 10);

        var kMeans = new KMeans;
        var data = (new Array (dataSetSize)).join (' ').split (' ').map (function () { 
            return [Math.random () * 20, Math.random () * 20];
        });
        kMeans.K = clusters;
        kMeans.data = data;
        kMeans.run ();

        var chart = new mlCharts.ClusterChart (chart$.get (0), kMeans.data);
        chart.plot (kMeans.mu, kMeans.c);
    }
    generate ();

    $('form').submit (function () {
        generate ();
        return false;
    });
}) ();
