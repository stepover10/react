import React, { useEffect } from 'react';
import styled from 'styled-components';
import { result } from './mockup';


// import C3Chart from 'react-c3js';
// import 'c3/c3.css';

const App = () => {

  useEffect(() => {

    if (typeof window !== 'undefined') {
      // const d3 = require('d3-scale');

      setTimeout(() => {
        // ============================
        const temp: any = window;
        const d3 = temp.d3;
        // ============================

        const margin = {top: 20, right: 20, bottom: 50, left: 70},
              width = 500 - margin.left - margin.right,
              height = 500 - margin.top - margin.bottom;


        var xscale = d3.scaleLinear()
          .domain( result.map(function (v) { 
            return v.date; 
          }))
          .range([0, width - 100]);
        var x2 = xscale.copy(); // reference.

        var yscale = d3.scaleLinear()
          .domain( result.map(function (v) { 
            return v.weight; 
          }))
          .range([height/2, 0]);
        var y2 = yscale.copy(); // reference.


        var x_axis = d3.axisBottom().scale(xscale)
        var y_axis = d3.axisLeft().scale(yscale)

        var zoom = d3.zoom().scaleExtent([-3, 10]).on("zoom", zoomed);
        var svg = d3.select("svg").call(zoom);
        
        var xAxisTranslate = height/2 + 10;   
        var x_axisZoom = svg.append("g")
          .attr("transform", "translate(50, " + xAxisTranslate  +")")
          .call(x_axis)
               
        var y_axisZoom = svg.append("g")
          .attr("transform", "translate(50, 10)")
          .call(y_axis)

          
        function zoomed() {
          xscale.range(x2.range().map(function (d) {
            return d3.event.transform.applyX(d);
          }))

          yscale.range(y2.range().map(function (d) {
            return d3.event.transform.applyY(d);
          }))

          // console.log( d3.zoomTransform(this).x );
          x_axisZoom.call(xscale);
          y_axisZoom.call(yscale);
        }


        svg.selectAll("line")
          .style({
              "stroke":"red", //눈금색 설정.
              "shape-rendering":"crispEdges"//눈금선을 얇게 설정
          });


      }, 1000);
    }
  }, [])

  return (
    <Styled>
      <svg width="100%"></svg>
    </Styled>
  )
}

export default App;

const Styled = styled.div`
.c3-axis-x .tick line {
   display: none;
}


`;