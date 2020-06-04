import React, { useEffect } from "react";
import styled from "styled-components";
import { result, data } from "./mockup";

// import C3Chart from 'react-c3js';
// import 'c3/c3.css';

const App = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            // const d3 = require('d3-scale');

            setTimeout(() => {
                // ============================
                const temp = window;
                const d3 = temp.d3;
                // ============================

                //var data = [];
                var data = [
                    { depthNum: 0, depth: 4 },
                    { depthNum: 1, depth: 8 },
                    { depthNum: 2, depth: 10 },
                    { depthNum: 3, depth: 11 },
                    { depthNum: 4, depth: 15 },
                    { depthNum: 5, depth: 19 },
                    { depthNum: 6, depth: 22 },
                    { depthNum: 7, depth: 23 },
                    { depthNum: 8, depth: 30 },
                ];
                
                var svg = d3.select("svg");
               
                var margin = { top: 20, right: 20, bottom: 110, left: 40 };
                var margin2 = { top: 436, right: 20, bottom: 30, left: 40 };
                var width =+ svg.attr("width") - margin.left - margin.right;
                var width2 =+ svg.attr("width") - margin2.left - margin2.right;
                var height =+ svg.attr("height") - margin.top - margin.bottom;
                var height2 =+ svg.attr("height") - margin2.top - margin2.bottom;

                var xScale = d3.scaleLinear().range([0, width]);
                var xScale2 = d3.scaleLinear().range([0, width]);
                var yScale = d3.scaleLinear().range([height, 0]);
                var yScale2 = d3.scaleLinear().range([height2, 0]);

                //console.log(xScale);

                var xAxis = d3.axisBottom(xScale).tickSize(0),
                    xAxis2 = d3.axisBottom(xScale2),
                    yAxis = d3.axisLeft(yScale),
                    yAxis2 = d3.axisLeft(yScale2);
           
                var zoom = d3
                    .zoom()
                    .scaleExtent([0.7, Infinity])
                    .translateExtent([
                        [0, 0],
                        [width, height],
                    ])
                    .extent([
                        [0, 0],
                        [width, height],
                    ])
                    .on("zoom", zoomed);

                var line = d3
                    .line()
                    .x(function (d) {
                        return xScale(d.depthNum);
                    })
                    .y(function (d) {
                        return yScale(d.depth);
                    });

                var line2 = d3
                    .line()
                    .x(function (d) {
                        return xScale2(d.depthNum);
                    })
                    .y(function (d) {
                        return yScale2(d.depth);
                    });

                    svg.selectAll(".dot")
                    .data(data)
                    .enter().append("circle")
                    .attr("class", "dot")                  
                    .attr("cx", line.x())
                    .attr("cy", line.y())
                    .attr("r", 5);

                var clip = svg
                    .append("defs")
                    .append("svg:clipPath")
                    .attr("id", "clip")
                    .append("svg:rect")
                    .attr("width", width)
                    .attr("height", height)
                    .attr("x", 0)
                    .attr("y", 0);

                var Line_chart = svg
                    .append("g")
                    .attr("class", "focus")
                    .attr(
                        "transform",
                        "translate(" + margin.left + "," + margin.top + ")"
                    )
                    .attr("clip-path", "url(#clip)");

                var focus = svg
                    .append("g")
                    .attr("class", "focus")
                    .attr(
                        "transform",
                        "translate(" + margin.left + "," + margin.top + ")"
                    );

                var context = svg
                    .append("g")
                    .attr("class", "context")
                    .attr(
                        "transform",
                        "translate(" + margin2.left + "," + margin2.top + ")"
                    );

                xScale.domain(
                    d3.extent(data, function (d) {
                        return d.depthNum;
                    })
                );
                yScale.domain([
                    0,
                    d3.max(data, function (d) {
                        return d.depth;
                    }),
                ]);
                xScale2.domain(xScale.domain());
                yScale2.domain(yScale.domain());

                focus
                    .append("g")
                    .attr("class", "axis axis--x")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                focus.append("g").attr("class", "axis axis--y").call(yAxis);

                Line_chart.append("path")
                    .datum(data)
                    .attr("class", "line")
                    .attr("d", line);

                context
                    .append("path")
                    .datum(data)
                    .attr("class", "line")
                    .attr("d", line2);

                context
                    .append("g")
                    .attr("class", "axis axis--x")
                    .attr("transform", "translate(0," + height2 + ")")
                    .call(xAxis2);          

                svg.append("rect")
                    .attr("class", "zoom")
                    .attr("width", width)
                    .attr("height", height)
                    .attr(
                        "transform",
                        "translate(" + margin.left + "," + margin.top + ")"
                    )
                    .call(zoom);

                function zoomed() {                    
                    var t = d3.event.transform;
                    xScale.domain(t.rescaleX(xScale2).domain());
                    Line_chart.select(".line").attr("d", line);
                    focus.select(".axis--x").call(xAxis);    
                    
                    var k = d3.event.transform.k;
                    console.log(k);
                    

                    if( k < 1) {
                        console.log('축소');                        
                    } 

                    if( k > 1) {
                        console.log('확대');                        
                    } 

                }

                //genLine(10);
                //console.log(data);
            }, 1000);
        }
    }, []);

    return (
        <Styled>
            <svg width="479" height="500"></svg>
        </Styled>
    );
};

export default App;

const Styled = styled.div`
    .line {
        fill: none;
        stroke: steelblue;
        stroke-width: 1.5px;
    }
  .zoom {
    cursor: move;
    fill: none;
    pointer-events: all;
  }
`;
