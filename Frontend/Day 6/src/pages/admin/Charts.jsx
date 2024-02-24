import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Charts extends Component {
	render() {
		const options = {
			title: {
				text: "User Statistics"
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "2000-2005",  y: 10  },
					{ label: "2006-2010", y: 15  },
					{ label: "2011-2015", y: 25  },
					{ label: "2016-2020",  y: 30  },
					{ label: "2021-2023",  y: 28  }
				]
			}
			]
		}
		return (
		<div style={{marginTop:'30px',width:'550px'}}>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Charts; 