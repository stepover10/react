import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Chart, Line } from 'react-chartjs-2';
import { result } from './mockup';
import styled from 'styled-components';

const dataResult = () =>{
  return result.map((v) => {
    if (v.weight){
      return {
        x: v.date,
        y: v.weight
      }
    }
  })
}

function* generateMoments(start, end, step) {
  const variableMoment = start.clone();
  while(true) {
    variableMoment.add(step);
    if(variableMoment < end) {
      yield variableMoment.clone();
    } else {
      break;
    }
  }
}

const defOptions:any = {
  type: 'line',        
  showAllTooltips: true,        
  tooltip: {
    enabled: true
  },
  legend: {
    display: false,
  },
  layout: {
    padding: {
        left: 10,
        right: 0,
        top: 0,
        bottom: 0
    }
  },
  scales: {
    xAxes: [
      {        
        barPercentage: 5,
        categoryPercentage: 5,
        type: "time",
        colorLast: '#000',
        gridLines: {
          drawTicks: false,          
          zeroLineColor: 'rgba(0,0,0,0.1)',
          color: 'rgba(0,0,0,0.1)',          
        },        
        ticks: {
          padding: 20,
          maxRotation: 0,
          fontColor: 'rgba(0,0,0,0)',
          autoSkip: true,          
        }
      }                    
    ],
    yAxes: [
      {              
        color: '#000',
        gridLines: {
          drawTicks: false,
          drawOnChartArea: false
        },
        ticks: {
          min: 65,
          max: 82,
          fontSize: 12,
          beginAtZero: false,
          padding: 5,
          callback: function (value, index, values) {
            if (!index || values.length - 1 === index) {
              return;
            }
            return value;
          }
        }
      }
    ]
  }
};

const Zoom = () => {
  const [state, setState] = useState(false);
  const [opt, setOpt] = useState({
    stage: 1,
    data: {
      labels:  Array.from(
        generateMoments(
          moment('2020-06-20'), 
          moment('2020-06-30'), 
          moment.duration({ days: 1})
        )
      ).map(m => m.format('YYYY-MM-DD')), 
      datasets: [    
        {    
          data: [
            {x:'2020-06-20', y:77},
            {x:'2020-06-21', y:75},
            {x:'2020-06-23', y:75},
            {x:'2020-06-24', y:75},
            {x:'2020-06-25', y:75},
          ],
          pointBackgroundColor: '#fff',
          hoverBackgroundColor: '#ddd',
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverBorderWidth: 10,                    
          borderColor: '#48c2c5',
          fill: false,    
          xAxesGroup: 'A',
          lineTension: 0,  
        }
      ]
    },
    options: defOptions    
  });

  const zoomChange = (stage) => {
    const { data, options } = opt;
    switch (stage) {
      case 1 : { // 일주일                 
        //options.scales.xAxes[0].ticks.maxTicksLimit = 1;       
        data.labels = Array.from(
          generateMoments(
            moment('2020-06-20'), 
            moment('2020-06-30'), 
            moment.duration({ days: 1})
          )
        ).map(m => m.format('YYYY-MM-DD'));
        break;
      }
      case 2 : { // 1개월 : 3 +-3일 간격으로 보임                     
        //options.scales.xAxes[0].ticks.maxTicksLimit = 3;      
        data.labels = Array.from(
          generateMoments(
            moment('2020-05-30'), 
            moment('2020-06-30'), 
            moment.duration({ days: 3})
          )
        ).map(m => m.format('YYYY-MM-DD'));
        break;
      }
      case 3 : { // 3개월 : 10일 +-10간격으로 노출  
        options.scales.xAxes[0].ticks.maxTicksLimit = 10;     
        data.labels = Array.from(
          generateMoments(
            moment('2020-03-01'), 
            moment('2020-06-30'), 
            moment.duration({ days: 10})
          )
        ).map(m => m.format('YYYY-MM-DD'));                  
        break;
      }
      case 4 : { // 1년 : 1개월 + 11 단위로 노출  
        options.scales.xAxes[0].ticks.maxTicksLimit = 1;
        data.labels = Array.from(
          generateMoments(
            moment('2019-06-30'), 
            moment('2020-06-30'), 
            moment.duration({ month: 1})
          )
        ).map(m => m.format('YYYY-MM-DD'));
        break;
      }
      case 5 : { // 3개월 단위로 노출      
        options.scales.xAxes[0].ticks.maxTicksLimit = 3;
        data.labels = Array.from(
          generateMoments(
            moment('2017-06-30'), 
            moment('2020-06-30'), 
            moment.duration({ month: 3})
          )
        ).map(m => m.format('YYYY-MM-DD'));; 
        break;
      }
    }
    return {
      data,
      options
    };
  }

  const tabMove = (stage:number) => e => { 
    setOpt({
      ...opt,
      stage,
      data: zoomChange(stage).data,
      options: zoomChange(stage).options
    });
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {        
      const zoom = require('chartjs-plugin-zoom');        
      const ChartAnnotation = require('chartjs-plugin-annotation');           
      defOptions.pan = {
        enabled: true,
        mode: 'x',
        speed: 10,        
      }   
      defOptions.zoom = {
        enabled: true,
        drag: false,
        mode: 'x',  
        // sensitivity: 0.5,      
        // onZoomComplete: ({chart}) => { 
        //   let _stage;
        //   if (1590769228470.3145 > chart.scales['x-axis-0'].min) {
        //     _stage = opt.stage + 1;            
        //   } else {
        //     _stage = opt.stage - 1;          
        //   }
        //   setOpt({
        //     ...opt,
        //     stage: _stage,
        //     data: zoomChange(_stage)
        //   });
        // }
      }
      defOptions.annotation = {
        annotations: [
          {
            drawTime: 'beforeDatasetsDraw',
            type: 'box',            
            yScaleID: 'y-axis-0',
            yMin: 0,
            yMax: 70,
            backgroundColor: 'rgba(153, 153, 153, 0.2)'
          }, {
            drawTime: 'beforeDatasetsDraw',
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 70,
            borderColor: '#aaa',
            borderWidth: 1,
            borderDashOffset: 2,
            borderDash: [4, 4],            
            label: {
              cornerRadius: 0,
              position: 'left',
              backgroundColor: '#c9c9c9',
              content: '표준 73-75kg',
              enabled: true,              
            }
          } 
        ]
      }
      
      Chart.pluginService.register({        
        afterDraw: _this => {
          const ctx = _this.chart.ctx;  
          const xAxis = _this.scales['x-axis-0'];
          const yAxis = _this.scales['y-axis-0'];

          console.log(_this.data.datasets[0].data) 

          ctx.save();        
          _this.data.datasets[0].data.forEach((l, i) => {
            const x = xAxis.getPixelForValue(l.x);      
               
            ctx.fillStyle = '#999';
            if (String(l.x).indexOf('Sat') !== -1) ctx.fillStyle = '#4285f4';
            if (String(l.x).indexOf('Sun') !== -1) ctx.fillStyle = '#d81414';          
            const DD = moment(l.x).format('MM/DD');            
            ctx.fillText(DD, x, yAxis.bottom + 20);
          });
          ctx.restore();
        }        
      })
      
      setState(true);
      setOpt({
        ...opt,      
        options: defOptions
      });
    }
  }, []);

  if (!state) return null;

  const {
    stage, 
    options,
    data
  } = opt;

  return (
    <StyledWrapper>
      <div className="data-menu">
        <ul>
          {
            [
              {
                stage: 1,              
                text: '일주일'
              }, {
                stage: 2,                
                text: '1개월'
              }, {
                stage: 3,                
                text: '3개월'
              }, {
                stage: 4,                
                text: '1년'
              }, {
                stage: 5,                
                text: '3년'
              }
          ].map((v,i) => {
              return (
                <li key={i}>
                  <span
                    onClick={tabMove(v.stage)}
                    data-index={v.stage === stage}
                  >          
                    <i />          
                    <b>{v.text}</b>
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='yaxis-bg' />
      {/* <div className='xaxis-bg' /> */}
      <Line
        height={300}
        data={data}        
        options={options}
      />
    </StyledWrapper>
  );
};
export default Zoom;
const StyledWrapper = styled.div`
  position: relative;  
  .mock-up-header{
    height: 100px;
    background: #ececec;
  }
  .yaxis-bg{
    position: absolute;
    left: 0;
    top: 0;
    // background: #ececec;    
    width: 29px;
    height: 80%;
    z-index: -1;
  }
  .data-menu{
  display: block;
  width: 100%;  
  background: #ececec;
  border-bottom: 1px solid #c9c9c9;
  ul {
    display: flex;
    height: 50px;
    padding: 0 10px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      text-align: center;      
      span{
        position: relative;
        padding: 8px 10px;
        font-size: 14px;        
        b{
          position: relative;
          z-index: 2;
        }
      }
      span[data-index="true"]{             
        i{
          position: absolute;
          top: 0;
          left: 0;          
          width: 100%;
          height: 31px;
          display: block;
          background: #fff;
          border-radius: 100px;
          box-shadow: 1px 1px 4px #ddd;
          -webkit-animation: btnAni 0.4s linear;
          animation: btnAni 0.4s linear;
          z-index: 1; 
        }           
      }
      @keyframes btnAni {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
}
  /* .xaxis-bg{
    position: absolute;
    left: 0;
    bottom: 0;
    background: #ececec;
    border-right: 1px solid #999;
    width: 100%;
    height: 1px;
    z-index: -1;
  } */
`;