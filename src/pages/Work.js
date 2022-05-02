import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Drawer, Row, Col, Divider } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import NavbarBack from './../components/NavbarBack';

import prosopagnosiapp from './../img/prosopagnosiapp.png';
import sentimentanalysis from './../img/sentimentanalysis.png';
import sparsematrix from './../img/sparsematrix.png';
import londonbusinessschool from './../img/lbs.jpeg';
import newtondavid from './../img/newtondavid.jpeg';
import newcroft from './../img/newcroft.jpeg';
import chevillagehall from './../img/che.jpeg';
import pierview from './../img/pierview_border.png';
import tripshappen from './../img/tripshappen_border.png';
import grundstein from './../img/grundstein.jpeg';
import fallen from './../img/fallen.png';
import screenprint from './../img/screenprint.png';
import fractals from './../img/fractals.png';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './home.css';

const { Meta } = Card;

const FilledCard = ({ img, title, description, onclick, cardWidth }) => (
    <Card
        hoverable
        style={{ width: cardWidth }}
        onClick={onclick}
        cover={
        <img
            alt="example"
            src={img}
        />
        }
    >
        <Meta
            title={title}
            description={description}
        />
    </Card>
);

export default class About extends React.Component{
    state = {
        visible: false,
        drawer_title: "",
        drawer_contents: <></>
    };

    showDrawer = (drawer_title, drawer_contents) => {
        this.setState({
            visible: true,
            drawer_title: drawer_title,
            drawer_contents: drawer_contents
        });
    };
    
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render(){
        var column_span = 8;
        var card_width = 400;
        if (window.innerWidth < 1024) {
            column_span = 24;
            card_width = window.innerWidth * 0.8;
        }
        return (
            <div>
            <div class="main">
                <div class="title">
                    <h1>
                        <span class="gradienttext">Work</span>
                    </h1>
                    <br></br>
                </div>
                <div style={{width: "100%"}}>
                    
                <Divider orientation="left"><h1 style={{color: "#E01A4F"}}>Web Development and Design</h1></Divider><br></br>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} md={16} xl={8}>
                        <FilledCard 
                            img={tripshappen} 
                            title="TripsHappen" 
                            onclick={() => this.showDrawer("TripsHappen", <><p>Developed in collaboration with <a href="https://www.linkedin.com/in/matthew-barrett-a49929177/">
                                Matthew Barrett
                            </a>.
                            </p><p><b>Link: <a href="https://tripshappen.co.uk">TripsHappen</a></b></p></>)} 
                            description="TripsHappen is an aggregator of cheap flights departing from the UK, specifically within the immediate next two weeks. Front end 
                            designed in React / Typescript, with MUI as the component library and deck.gl for the globe visualisation.">
                        </FilledCard><br></br>
                    </Col>
                    <Col xs={24} md={16} xl={8}>
                        <FilledCard 
                            img={newcroft} 
                            title="Haverhill Community Sports Association" 
                            // cardWidth={card_width}
                            description="Since 2015 I have designed and maintained the website for The New Croft, the sports and leisure complex operated by the Haverhill
                            Community Sports Association in Haverhill, Suffolk. In 2020 the website was extended to include an online bar, allowing customers to order
                            food and drink directly to their seat, to facilitate the site's reopening following the coronavirus pandemic.">
                        </FilledCard><br></br>
                    </Col>
                    <Col xs={24} md={16} xl={8}>
                        <FilledCard 
                            img={newtondavid} 
                            title="Newton David Ltd" 
                            // cardWidth={card_width}
                            description="Newton David is a health and safety consultancy based in Haverhill, Suffolk and operating across the UK. The company provides a
                            wide range of services, including delivering IOSH training, and wanted a small and lightweight website to promote their business. ">
                        </FilledCard><br></br>
                    </Col>
                </Row><br></br><br></br>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} md={16} xl={8}>
                        <FilledCard 
                            img={londonbusinessschool} 
                            title="London Business School Healthcare Conference" 
                            // cardWidth={card_width}
                            description="I was commissioned by London Business School's Healthcare Club to create a website for their 10th and 11th annual conferences in 
                            2019 and 2020.">
                        </FilledCard>
                    </Col>
                    <Col xs={24} md={16} xl={8}>
                        <FilledCard 
                            img={chevillagehall} 
                            title="Cornish Hall End Village Hall" 
                            // cardWidth={card_width}
                            description="I designed a new website for the Cornish Hall End Village Hall, after it was refurbished and reopened in 2020. I then trained some
                            of the Hall's staff on updating the site and adding new content.">
                        </FilledCard><br></br>
                    </Col>
                    <Col xs={24} md={16} xl={8}>
                        <FilledCard 
                            img={pierview} 
                            title="Pierview Holidays" 
                            // cardWidth={card_width}
                            description="In 2020 I helped to build a lettings website for a holiday property in North Wales.">
                        </FilledCard><br></br>
                    </Col>
                </Row>
                <br></br><br></br>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} md={16} xl={8}>
                        <FilledCard 
                            img={grundstein} 
                            title="Grundstein Global" 
                            // cardWidth={card_width}
                            description="I developed the website for Grundstein Global using Spring Boot.">
                        </FilledCard><br></br>
                    </Col>
                </Row>
                <br></br><br></br>

                <Divider orientation="left"><h1 style={{color: "#E01A4F"}}>University</h1></Divider><br></br>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} md={16} xl={8}>
                        <FilledCard 
                            img={sparsematrix} 
                            title="An aggregated sparse matrix factorisation model for market trading" 
                            // cardWidth={card_width}
                            description="For my final year project, I developed a sparce matrix factorisation model to analyse the relationship between public sentiment on Twitter,
                            Reuters news articles, and stock market prices. My work was selected among the Department of Computing's 2019/20 Distinguished Projects.">
                        </FilledCard><br></br>
                    </Col>
                    <Col xs={24} md={16} xl={8}>
                        <FilledCard 
                            img={sentimentanalysis} 
                            title="Aspect-based sentiment analysis for investment" 
                            // cardWidth={card_width}
                            description="Working with Goldman Sachs, we investigated streamlining the research process of a portfolio manager by using aspect-based sentiment
                            analysis to automatically parse news articles and documents.">
                        </FilledCard><br></br>
                    </Col>
                    <Col xs={24} md={16} xl={8}>
                        <FilledCard 
                            img={prosopagnosiapp} 
                            title="ProsopagnosiApp" 
                            // cardWidth={card_width}
                            description="Second year university project in collaboration with Microsoft and Brunel University. A tool was developed to provide an initial online
                            screening for prosopagnosia. Using Google Glass, we then developed a prototype software to assist people with prosopagnosia in recognising familiar
                            faces. My personal highlight of university! 😃">
                        </FilledCard>
                    </Col>
                </Row>
                <br></br><br></br>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} md={16} xl={8}>
                        <FilledCard 
                            img="https://raw.githubusercontent.com/harryrbrown/harryrbrown.github.io/f6c2771eccfeab4a6fb589ecb8ec4e2ef366b4dd/img/arm11pim.png" 
                            title="PIM" 
                            // cardWidth={card_width}
                            description="Award-winning first year university project, involving writing an ARM11 emulator and assembler in C, followed by recreating Pong from scratch to 
                            run on a Raspberry Pi.">
                        </FilledCard><br></br>
                    </Col>
                </Row>

                <br></br><br></br>
                <Divider orientation="left"><h1 style={{color: "#E01A4F"}}>Apps</h1></Divider><br></br>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} md={16} xl={8}>
                        <FilledCard 
                            img={fallen} 
                            title="Fallen" 
                            onclick={() => this.showDrawer("Fallen", <><p>Written in Unity, Fallen is a game where you fall while trying to avoid hitting the sides of an 
                                endlessly-generating pipe. It later incorporated Google Play's achievements and leaderboard functionality for competitive play.</p>
                                <p><b>Link: <a href="https://play.google.com/store/apps/details?id=com.Suune.Faller">https://play.google.com/store/apps/details?id=com.Suune.Faller</a></b></p></>)} 
                            // cardWidth={card_width}
                            description="Mobile game released for Android in 2014.">
                        </FilledCard><br></br>
                    </Col>
                    <Col xs={24} md={16} xl={8}>
                        <FilledCard 
                            img={screenprint} 
                            title="ScreenPrint" 
                            onclick={() => this.showDrawer("ScreenPrint", <><p>ScreenPrint was my first useful project in VB.NET, borne out of frustration at Windows 7's lack of 
                                keyboard-friendly screenshotting options. ScreenPrint sits in the application tray and can take full-screen, active window or region-based screenshots 
                                at the input of a keyboard shortcut of the user's choice (on Mac, the equivalent seems to be ⇧-⌘-Ctrl-3/4). I still use it to this day, mainly out of habit.
                                </p><p><b>Link: <a href="https://drive.google.com/file/d/1TxczzTD0Uv5DUXE-TalJrFosPvG7qmIK/view?usp=sharing">Download</a></b></p></>)} 
                            // cardWidth={card_width}
                            description="Improved screen capturing for Windows. Written in .NET in 2015.">
                        </FilledCard><br></br>
                    </Col>
                    <Col xs={24} md={16} xl={8}>
                        <FilledCard 
                            img={fractals} 
                            title="OpenCL Fractals" 
                            onclick={() => this.showDrawer("OpenCL Fractals", <><p>A sixth-form project, implementing OpenCL within Python to render Mandelbrot and Julia fractals.
                            </p><p><b>Link: <a href="https://github.com/harryrbrown/opencl-fractals">GitHub</a></b></p></>)} 
                            // cardWidth={card_width}
                            description="Python fractal generator, leveraging OpenCL to improve rendering speeds.">
                        </FilledCard><br></br>
                    </Col>
                </Row>

                <br></br><br></br>
                
                </div>

                <Drawer
                    title={this.state.drawer_title}
                    placement="left"
                    // width={640}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    key="left"
                    >
                    {this.state.drawer_contents}
                </Drawer>
            </div>
            </div>
        );
    }
}