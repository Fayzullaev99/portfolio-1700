import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import working from '../images/image1.png';
import nike from '../images/nike.png';
import grayson from '../images/grayson.png';
import airpods from '../images/airpods.png';
import gotrip from '../images/gotrip.png';
import openshop from '../images/openshop.png';
import ciniphile from '../images/ciniphile.png';
import nike2 from '../images/nike2.png';
import portfolio from '../images/portfolio.png';
import silver from '../images/silver.png';
import tatembo from '../images/tatembo.png';
import todolist from '../images/todolist.png';
import weather from '../images/weather.png';
import Box from '../components/Box';


const data = {
  sites: [
    {
      id: 1,
      title: "Working",
      image: working,
      url:"https://fayzullaev99.github.io/cinema/app/dist/"
    },
    {
      id: 2,
      title: "Nike",
      image: nike
    },
    {
      id: 3,
      title: "Grayson",
      image: grayson
    },
    {
      id: 4,
      title: "Air Pods",
      image: airpods
    },
    {
      id: 5,
      title: "Go Trip",
      image: gotrip
    },
    {
      id: 6,
      title: "Open Shop",
      image: openshop
    },
    {
      id: 7,
      title: "Nike",
      image: nike2
    },
    {
      id: 8,
      title: "Ciniphile",
      image: ciniphile
    },
    {
      id: 9,
      title: "Portfolio",
      image: portfolio
    },
    {
      id: 10,
      title: "Silver",
      image: silver
    },
    {
      id: 11,
      title: "Tatembo",
      image: tatembo
    },
  ],
  apps: [
    {
      id: 12,
      title: "Todo List",
      image: todolist
    },
    {
      id: 13,
      title: "Weather",
      image: weather
    }
  ]
}

function Portfolio() {
  return (
    <div className='portfolio'>
      <TypeAnimation
        sequence={[
          "Portfolio", 1000
        ]}
        speed={1}
        className='title'
      />
      <div className="portfolio__block">
        <h3 className='box-title'>Gallery <span></span></h3>
        <Tabs
          defaultActiveKey="all"
          id="uncontrolled-tab-example"
          className="portfolio__tabs"
        >
          <Tab eventKey="all" title="All">
            <div className="portfolio__box">
              {data.sites.map((site) => (
                <Box key={site.id} image={site.image} title={site.title} url={site.url} />
              ))}
              {data.apps.map((site) => (
                <Box key={site.id} image={site.image} title={site.title} />
              ))}
            </div>
          </Tab>
          <Tab eventKey="application" title="Web-Applications">
            <div className="portfolio__box">
              {data.apps.map((site) => (
                <Box key={site.id} image={site.image} title={site.title} />
              ))}
            </div>
          </Tab>
          <Tab eventKey="sites" title="Web-Sites">
            <div className="portfolio__box">
              {data.sites.map((site) => (
                <Box key={site.id} image={site.image} title={site.title} />
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Portfolio