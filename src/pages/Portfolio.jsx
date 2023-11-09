import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import admin from '../images/admin.jpg';
import simple from '../images/simple.jpg';
import cargo from '../images/cargo.jpg';
import deutsch from '../images/deutsch.jpg';
import andesa from '../images/andesa.jpg';
import dasarent from '../images/dasarent.jpg';
import temiryol from '../images/temiryol.jpg';
import shop from '../images/shop.jpg';
import garden from '../images/garden.jpg';
import youtube from '../images/youtube.jpg';
import lyriks from '../images/lyriks.jpg';
import ninja from '../images/ninja.jpg';
import editor from '../images/editor.jpg';
import primetech from '../images/primetech.jpg';
import fantom from '../images/fantom.jpg';
import portfolio from '../images/portfolio.jpg';
import Box from '../components/Box';


const data = {
  sites: [
    {
      id: 1,
      title: "Simple Design",
      image: simple,
      url:"https://fayzullaev99.github.io/simple_Design/app/dist/index.html"
    },
    {
      id: 2,
      title: "Admin Panel",
      image: admin,
      url:"https://adminreactjs.netlify.app/"
    },
    {
      id: 3,
      title: "Deutsch",
      image: deutsch,
      url:"https://deutschonline.netlify.app/"
    },
    {
      id: 4,
      title: "Andesa",
      image: andesa,
      url:"https://fayzullaev99.github.io/andesa/app/dist/index.html"
    },
    {
      id: 5,
      title: "Dasarent",
      image: dasarent,
      url:"https://fayzullaev99.github.io/dasarent/app/dist/index.html"
    },,
    {
      id: 14,
      title: "Temiryol",
      image: temiryol,
      url:"https://temiryol.netlify.app/"
    },
    {
      id: 8,
      title: "Youtube",
      image: youtube,
      url:"https://fayzullaev99youtube.netlify.app/"
    },
    {
      id: 9,
      title: "Lyriks",
      image: lyriks,
      url:"https://online-music-react.netlify.app/"
    },
    {
      id: 10,
      title: "Portfolio",
      image: portfolio,
      url:"https://meinfolio.netlify.app/"
    }
  ],
  apps: [
    {
      id: 12,
      title: "Online Shop",
      image: shop,
      url:"https://onlineshopreact.netlify.app/"
    },
    {
      id: 13,
      title: "Cargo",
      image: cargo,
      url:"https://onlineshopreact.netlify.app/"
    },
    {
      id: 15,
      title: "Garden",
      image: garden,
      url:"https://samarqand-garden.web.app/"
    },
    {
      id: 16,
      title: "Ninja Sushi",
      image: ninja,
      url:"https://ninjasushii.netlify.app/"
    },
    {
      id: 17,
      title: "PDF Editor",
      image: editor,
      url:"https://upworkforwingco.netlify.app/"
    },
    {
      id: 17,
      title: "Prime Tech",
      image: primetech,
      url:"https://primetechtest1.netlify.app/"
    },
    {
      id: 18,
      title: "Fantom",
      image: fantom,
      url:"https://forfantom.netlify.app/"
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
          <Tab eventKey="frontend" title="Frontend">
            <div className="portfolio__box">
              {data.sites.map((site) => (
                <Box key={site.id} image={site.image} title={site.title} />
              ))}
            </div>
          </Tab>
          <Tab eventKey="backend" title="Backend">
            <div className="portfolio__box">
              {data.apps.map((site) => (
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