import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Drawer, Row, Col, Divider } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import NavbarBack from './../components/NavbarBack';

import prosopagnosiapp from './../img/prosopagnosiapp.png';
import sentimentanalysis from './../img/sentimentanalysis.png';
import sparsematrix from './../img/sparsematrix.png';
import londonbusinessschool from './../img/lbs.png';
import newtondavid from './../img/newtondavid.png';
import newcroft from './../img/newcroft.png';
import chevillagehall from './../img/che.png';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './home.css';

const { Meta } = Card;

const FilledCard = ({ img, title, description, onclick }) => (
    <Card
        hoverable
        style={{ width: 400 }}
        onClick={onclick}
        cover={
        <img
            alt="example"
            src={img}
        />
        }
        actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}
    >
        <Meta
            title={title}
            description={description}
        />
    </Card>
);

export default class About extends React.Component{
    state = {visible: false};

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render(){
        const { visible } = this.state;

        var column_span = 8;
        if (window.innerWidth < 1024) {
            column_span = 24;
        }
        return (
            <div>
            
            <NavbarBack></NavbarBack>
            <div class="main">
                <div class="title">
                    <h1>
                        <span class="gradienttext" style={{background: "linear-gradient(#26547C, #333)"}}>Work</span>
                    </h1>
                    <br></br>
                </div>
                <div style={{width: "100%"}}>
                    
                <Divider orientation="left"><h1 style={{color: "#E01A4F"}}>Web Design</h1></Divider><br></br>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={column_span}>
                        <FilledCard img={newcroft} title="Haverhill Community Sports Association" onclick={this.showDrawer}
                            description="Since 2015 I have designed and maintained the website for The New Croft, the sports and leisure complex operated by the Haverhill
                            Community Sports Association in Haverhill, Suffolk. In 2020 the website was extended to include an online bar, allowing customers to order
                            food and drink directly to their seat, to facilitate the site's reopening following the coronavirus pandemic."></FilledCard>
                    </Col>
                    <Col className="gutter-row" span={column_span}>
                        <FilledCard img={newtondavid} title="Newton David Ltd" onclick={this.showDrawer}
                            description="Newton David is a health and safety consultancy based in Haverhill, Suffolk and operating across the UK. The company provides a
                            wide range of services, including delivering IOSH training, and wanted a small and lightweight website to promote their business. "></FilledCard>
                    </Col>
                    <Col className="gutter-row" span={column_span}>
                        <FilledCard img={londonbusinessschool} title="London Business School Healthcare Conference 2020" onclick={this.showDrawer}
                            description="I was commissioned by London Business School's Healthcare Club to create a website for their 11th annual conference in February
                            2020."></FilledCard>
                    </Col>
                </Row><br></br><br></br>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={column_span}>
                        <FilledCard img={chevillagehall} title="Cornish Hall End Village Hall" onclick={this.showDrawer}
                            description="For my final year project, I ..."></FilledCard>
                    </Col>
                    <Col className="gutter-row" span={column_span}>
                        <FilledCard img={chevillagehall} title="Grundstein Global" onclick={this.showDrawer}
                            description="For my final year project, I ..."></FilledCard>
                    </Col>
                </Row>
                <br></br><br></br>

                <Divider orientation="left"><h1 style={{color: "#E01A4F"}}>University</h1></Divider><br></br>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={column_span}>
                        <FilledCard img={sparsematrix} title="An aggregated sparse matrix factorisation model for market trading" onclick={this.showDrawer}
                            description="For my final year project, I ..."></FilledCard>
                    </Col>
                    <Col className="gutter-row" span={column_span}>
                        <FilledCard img={sentimentanalysis} title="Aspect-based sentiment analysis for investment" onclick={this.showDrawer}
                            description="Working with Goldman Sachs, we investigated streamlining the research process of a portfolio manager by using aspect-based sentiment
                            analysis to automatically parse news articles and documents."></FilledCard>
                    </Col>
                    <Col className="gutter-row" span={column_span}>
                        <FilledCard img={prosopagnosiapp} title="ProsopagnosiApp" onclick={this.showDrawer}
                            description="Second year university project in collaboration with Microsoft and Brunel University. A tool was developed to provide an initial online
                            screening for prosopagnosia. Using Google Glass, we then developed a prototype software to assist people with prosopagnosia in recognising familiar
                            faces. My personal highlight of university! 😃"></FilledCard>
                    </Col>
                </Row>
                <br></br><br></br>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={column_span}>
                        <FilledCard img="https://raw.githubusercontent.com/harryrbrown/harryrbrown.github.io/f6c2771eccfeab4a6fb589ecb8ec4e2ef366b4dd/img/arm11pim.png" title="PIM" 
                            description="Award-winning first year university project, involving writing an ARM11 emulator and assembler in C, followed by recreating Pong from scratch to 
                            run on a Raspberry Pi." onclick={this.showDrawer}></FilledCard>
                    </Col>
                </Row>

                <br></br><br></br>
                <Divider orientation="left"><h1 style={{color: "#E01A4F"}}>Apps</h1></Divider><br></br>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={column_span}>
                        <FilledCard img={sparsematrix} title="Fallen" onclick={this.showDrawer}
                            description="Mobile game released for Android in 2014."></FilledCard>
                    </Col>
                </Row>

                <br></br><br></br>
                
                </div>

                <Drawer
                    title="An aggregated sparse matrix factorisation model for market trading"
                    placement="left"
                    width={640}
                    closable={false}
                    onClose={this.onClose}
                    visible={visible}
                    key="left"
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
            </div>
        );
    }
}