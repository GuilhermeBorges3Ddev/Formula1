import React, { Component } from 'react';
import * as d3 from "d3";

class BarChartPilotoPais extends Component {

    componentDidMount() {
        this.createChart();
    }

    createChart() {
        const scope = this;

        const svg = d3.select("#chart-container")
            .append("svg")
            .attr("height", this.props.height)
            .attr("width", this.props.width);

        const chart = svg.append('g').attr('transform', `translate(-10, 70)`);

        const xAxis = d3.scaleBand()
            .range(this.props.xRange)
            .domain(this.props.xDomain)
            .padding(0.4)

        const yAxis = d3.scaleLinear()
            .range(this.props.yRange)
            .domain(this.props.yDomain);

        chart.append('g')
            .call(d3.axisLeft(yAxis));

        chart.append('g')
            .attr('transform', `translate(0, ${this.props.yRange[0]})`)
            .call(d3.axisBottom(xAxis));

        // Linhas na horizontal
        chart.append('g')
            .attr('class', 'grid')
            .call(d3.axisLeft()
                .scale(yAxis)
                .tickSize(-this.props.width, 0, 0)
                .tickFormat(''));

        // Barras
        chart.selectAll()
            .data(this.props.data)
            .enter()
            .append('rect')
            .on('mouseenter', function (bar, i) {
                d3.select(this)
                    .transition()
                    .duration(300)
                    .style('fill', "#afe2fa")
                    .style('stroke', "#4fc1f7");

                const y = yAxis(bar.yField);
                chart.append('line')
                    .attr('id', 'limit')
                    .attr('x1', 0)
                    .attr('y1', y)
                    .attr('x2', scope.props.width)
                    .attr('y2', y)

            })
            .on('mouseleave', function (bar, i) {
                d3.select(this)
                    .transition()
                    .duration(300)
                    .style('fill', "#4fc1f7")
                    .style('stroke', "none");

                chart.selectAll('#limit').remove()
            })
            .on('click', function (bar, i) {
                console.log(bar);
            })
            .attr('x', (s) => xAxis(s.xField))
            .attr('y', (s) => yAxis(s.yField))
            .attr('height', (s) => this.props.height - yAxis(s.yField) - 160)
            .attr('width', xAxis.bandwidth());

        // Texto nas barras
        chart.selectAll()
            .data(this.props.data)
            .enter()
            .append('text')
            .attr('class', 'value')
            .attr('x', (a) => xAxis(a.xField) + xAxis.bandwidth() / 2)
            .attr('y', (a) => yAxis(a.yField) + 30)
            .attr('text-anchor', 'middle')
            .text((a) => a.yField);

        // Título
        svg.append('text')
            .attr('x', 0)
            .attr('y', 20)
            .attr('text-anchor', 'start')
            .attr("class", "title")
            .text(this.props.title);

        // Texto na lateral
        svg.append('text')
            .attr('x', -this.props.height / 2)
            .attr('y', 10)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .attr("class", "left-text")
            .text('Quantidade');
    }

    render() {
        return <div id="chart-container" className="pr-5"></div>
    }
}

export default BarChartPilotoPais;