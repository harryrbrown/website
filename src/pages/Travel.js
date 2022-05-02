import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";


export default class Travel extends React.Component{
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4maps.MapChart);
    
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Exclude Antartica
        polygonSeries.exclude = ["AQ"];

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.polygon.fillOpacity = 0.6;

        polygonSeries.data = [{
            "id": "GB",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "US",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "CA",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "FR",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "DE",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "ES",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "IT",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "CZ",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "CH",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "AT",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "NL",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "BE",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "LU",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "HU",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "SK",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "DK",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "SE",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "PT",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "QA",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "CN",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "JP",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "MY",
            "fill": chart.colors.getIndex(0)
          }, {
            "id": "SG",
            "fill": chart.colors.getIndex(0)
          }, ]
          
          polygonTemplate.propertyFields.fill = "fill";
          
        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = chart.colors.getIndex(0);

        // Add image series
        var imageSeries = chart.series.push(new am4maps.MapImageSeries());
        imageSeries.mapImages.template.propertyFields.longitude = "longitude";
        imageSeries.mapImages.template.propertyFields.latitude = "latitude";
        imageSeries.mapImages.template.tooltipText = "{title}";
        imageSeries.mapImages.template.propertyFields.url = "url";

        var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
        circle.radius = 3;
        circle.propertyFields.fill = "color";

        var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
        circle2.radius = 3;
        circle2.propertyFields.fill = "color";


        circle2.events.on("inited", function(event){
        animateBullet(event.target);
        })


        function animateBullet(circle) {
            var animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
            animation.events.on("animationended", function(event){
            animateBullet(event.target.object);
            })
        }

        var colorSet = new am4core.ColorSet();
    
        imageSeries.data = [ {
            "title": "New York",
            "latitude": 40.712776,
            "longitude": -74.005974,
            "color":colorSet.next()
          }, {
            "title": "Boston",
            "latitude": 42.360081,
            "longitude": -71.058884,
            "color":colorSet.next()
          }, {
            "title": "Toronto",
            "latitude": 43.651070,
            "longitude": -79.347015,
            "color":colorSet.next()
          }, {
            "title": "Naples",
            "latitude": 26.147369,
            "longitude": -81.795479,
            "color":colorSet.next()
          }, {
            "title": "Miami",
            "latitude": 25.761681,
            "longitude": -80.191788,
            "color":colorSet.next()
          }, {
            "title": "Paris",
            "latitude": 48.8567,
            "longitude": 2.3510,
            "color":colorSet.next()
          }, {
            "title": "Reims",
            "latitude": 49.2628,
            "longitude": 4.0347,
            "color":colorSet.next()
          }, {
            "title": "Toulouse",
            "latitude": 43.6045,
            "longitude": 1.444,
            "color":colorSet.next()
          }, {
            "title": "Montpellier",
            "latitude": 43.6119,
            "longitude": 3.8772,
            "color":colorSet.next()
          }, {
            "title": "Perpignan",
            "latitude": 42.6986,
            "longitude": 2.8956,
            "color":colorSet.next()
          }, {
            "title": "Nice",
            "latitude": 43.7034,
            "longitude": 7.2663,
            "color":colorSet.next()
          }, {
            "title": "Barcelona",
            "latitude": 41.383333,
            "longitude": 2.183333,
            "color":colorSet.next()
          }, {
            "title": "London",
            "latitude": 51.5002,
            "longitude": -0.1262,
            "color":colorSet.next()
          }, {
            "title": "Amsterdam",
            "latitude": 52.366667,
            "longitude": 4.9,
            "color":colorSet.next()
          }, {
            "title": "Luxembourg",
            "latitude": 49.611667,
            "longitude": 6.131944,
            "color":colorSet.next()
          }, {
            "title": "Copenhagen",
            "latitude": 55.676111,
            "longitude": 12.568333,
            "color":colorSet.next()
          }, {
            "title": "Stockholm",
            "latitude": 59.334591,
            "longitude": 18.063240,
            "color":colorSet.next()
          }, {
            "title": "Munich",
            "latitude": 48.133333,
            "longitude": 11.566667,
            "color":colorSet.next()
          }, {
            "title": "Berlin",
            "latitude": 52.52,
            "longitude": 13.405,
            "color":colorSet.next()
          }, {
            "title": "Prague",
            "latitude": 50.083333,
            "longitude": 14.416667,
            "color":colorSet.next()
          }, {
            "title": "Bratislava",
            "latitude": 48.143889,
            "longitude": 17.109722,
            "color":colorSet.next()
          }, {
            "title": "Vienna",
            "latitude": 48.2,
            "longitude": 16.366667,
            "color":colorSet.next()
          }, {
            "title": "Budapest",
            "latitude": 47.4925,
            "longitude": 19.051389,
            "color":colorSet.next()
          }, {
            "title": "Geneva",
            "latitude": 46.2,
            "longitude": 6.15,
            "color":colorSet.next()
          }, {
            "title": "Zurich",
            "latitude": 47.366667,
            "longitude": 8.55,
            "color":colorSet.next()
          }, {
            "title": "Naples",
            "latitude": 40.845,
            "longitude": 14.258333,
            "color":colorSet.next()
          }, {
            "title": "Brescia",
            "latitude": 45.541667,
            "longitude": 10.216667,
            "color":colorSet.next()
          }, {
            "title": "Milan",
            "latitude": 45.466944,
            "longitude": 9.19,
            "color":colorSet.next()
          }, {
            "title": "Porto",
            "latitude": 41.1579,
            "longitude": -8.6291,
            "color":colorSet.next()
          }, {
            "title": "Lisbon",
            "latitude": 38.7223,
            "longitude": -9.1393,
            "color":colorSet.next()
          }, {
            "title": "Tenerife",
            "latitude": 28.268611,
            "longitude": -16.605556,
            "color":colorSet.next()
          }, {
            "title": "Lanzarote",
            "latitude": 29.035,
            "longitude": -13.633,
            "color":colorSet.next()
          }, {
            "title": "Doha",
            "latitude": 25.286667,
            "longitude": 51.533333,
            "color":colorSet.next()
          }, {  
            "title": "Wuzhen",
            "latitude": 30.746111,
            "longitude": 120.495556,
            "color":colorSet.next()
          }, {
            "title": "Shanghai",
            "latitude": 31.228611,
            "longitude": 121.474722,
            "color":colorSet.next()
          }, {
            "title": "Kuala Lumpur",
            "latitude": 3.147778,
            "longitude": 101.695278,
            "color":colorSet.next()
          }, {
            "title": "Singapore",
            "latitude": 1.283333,
            "longitude": 103.833333,
            "color":colorSet.next()
          }, {
            "title": "Sapporo",
            "latitude": 43.066667,
            "longitude": 141.35,
            "color":colorSet.next()
          }, {
            "title": "Tokyo",
            "latitude": 35.6785,
            "longitude": 139.6823,
            "url": "http://www.google.co.jp",
            "color":colorSet.next()
          }, {
            "title": "Kyoto",
            "latitude": 35.011667,
            "longitude": 135.768333,
            "color":colorSet.next()
          } ];

        this.map = chart;
    }

    componentWillUnmount() {
        if (this.map) {
            this.map.dispose();
        }
    }

    render(){
        return (
            <div class="main">
                <div class="title">
                    <h1>
                        <span class="gradienttext">Travel </span>
                    </h1>
                <br></br>
            </div>
                <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
            </div>
        );
    }
}