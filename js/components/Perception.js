import React, { Component } from 'react';
import _ from 'lodash';
import $ from 'jquery';

class Perception extends Component {
    d3: null
    Rune: null

    ease(i) {
        var val = (1 + Math.sin(i * Math.PI * 2 - Math.PI / 2)) / 2;
        console.log (val);
        return val;
        //return (Math.sin(i * Math.PI * 2));
    }

    componentDidMount() {
        require(['../d3', '../rune'], (d3, Rune) => {
            window.d3 = d3;
            this.d3 = d3;
            this.Rune = Rune;
            this.pause = false;
            var ease = this.ease;
            var loopDuration = 65000;
            var step = function(ts) {
                if (!this.pause) {
                    $('#perception').html('');
                    this.r = new Rune({
                        container: "#perception",
                        width: 500,
                        height: 500,
                        // debug: true
                    });
                    var randVal = 1;//ease((ts / loopDuration) % 1);
                    //d3.select('svg').html('');
                    var bgPadding = 40 + randVal * 40;
                    this.bookcover({
                        bgPadding: bgPadding,
                        bgPadding2: bgPadding + 5 + randVal * 20,
                        stripes: {
                            width: 10 + randVal * 20,
                            colors: [
                                '#94630F',
                                '#161519'
                            ],
                            anomalousColor: '#FFFFFF',
                            getColor: function(i) {
                                return this.colors[i % this.colors.length];
                            },
                            anomalySectionFraction: .5,
                            //anomalousStripeIndexRatio: 0.2
                            anomalousStripeIndex: 5
                        },
                        rotation: 70// -(ease((ts / loopDuration) % 1)) * 360
                    });
                }
                //window.requestAnimationFrame(step.bind(this));
            };

            window.requestAnimationFrame(step.bind(this));
            $('#perception').click(() => {
                this.pause = !this.pause;
            });
        });
    }

    render() {
        return (
            <div id='perception'>
            </div>
        );
    }

    bookcover(params={}) {
        var r = this.r;
        var bgPadding = 40 + Math.ceil(Math.random() * 40);
        var params = _.merge({
            bgPadding: bgPadding,
            bgPadding2: bgPadding + 5 + Math.ceil(Math.random() * 20),
            stripes: {
                width: 10 + Math.ceil(Math.random() * 20),
                colors: [
                    '#94630F',
                    '#161519'
                ],
                anomalousColor: '#FFFFFF',
                getColor: function(i) {
                    return this.colors[i % this.colors.length];
                },
                anomalySectionFraction: .5,
                //anomalousStripeIndexRatio: Math.random()
                anomalousStripeIndex: 14
            },
            rotation: 10 * Math.random() * 45,
        }, params);
        var stripeCount = Math.floor(
            r.width / params.stripes.width);
        var anomalySectionStripeCount = Math.floor(
            r.width / params.stripes.width * 
            params.stripes.anomalySectionFraction);
        var anomalousStripeIndex = params.stripes.anomalousStripeIndex; 
            //Math.floor((stripeCount - anomalySectionStripeCount) / 2) +
            //Math.ceil(params.stripes.anomalousStripeIndexRatio * anomalySectionStripeCount);

        function addStripesToGroup(group) {
            var x = -params.stripes.width / 2;

            var i = 0, color;

            do {
                if (i === anomalousStripeIndex) {
                    color = params.stripes.anomalousColor;
                } else {
                    color = params.stripes.getColor(i);
                }
                r.path(0, 0, group)
                    .lineTo(x, 0)
                    .lineTo(x + params.stripes.width, 0)
                    .lineTo(x + params.stripes.width, r.height)
                    .lineTo(x, r.height)
                    .lineTo(x, 0)
                    .fill(color)
                    .rotate(0, r.width / 2, r.height / 2)
                    .stroke(color);
                i++;
            } while((x += params.stripes.width) < r.width);
        }

        addStripesToGroup(r.group(0, 0));

        var circleGroup = r.group(0, 0);
        addStripesToGroup(circleGroup);
        circleGroup.rotate(params.rotation, r.width / 2, r.height / 2);

        var innerCircleGroup = r.group(0, 0);
        addStripesToGroup(innerCircleGroup);

        r.circle(r.width / 2, r.height / 2, r.width / 2 - params.bgPadding);
        r.circle(
            r.width / 2, r.height / 2, r.width / 2 - 2 * params.bgPadding2);
        r.draw();
        
        var circleMask = this.d3.select('circle:nth-of-type(1)').remove();
        var innerCircleMask = this.d3.select('circle:nth-of-type(1)').remove();
        this.d3.select('svg')
            .append('defs')
            .append('clipPath').attr('id', 'circle-mask')
            .append(function() {
                return circleMask.node();
            });
        this.d3.select('defs')
            .append('clipPath').attr('id', 'inner-circle-mask')
            .append(function() {
                return innerCircleMask.node();
            });
        this.d3.select('g:nth-child(2)').attr('clip-path', 'url(#circle-mask)');
        this.d3.select('g:nth-child(3)').attr('clip-path', 'url(#inner-circle-mask)');
    }
};

export default Perception;
