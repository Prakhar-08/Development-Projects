import React from 'react';
import './Home.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import StarsIcon from '@material-ui/icons/Stars';
import FourKIcon from '@material-ui/icons/FourK';
import Categories from './Categoreis';


const Home = () => {
    return (
        <div className="home">
            <div className="home-intro">
                <h1>A broad selection of courses</h1>
                <p>Choose from 1000 online video courses with new additions published every month with top class instructors.</p>
            </div>
            <div className="Wed-portion same">
                <h3>Expand your career opportunities with Web Development</h3>
                <p>Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability.</p>
            </div>
            <div className="App-portion same">
                <h3>Expand your career opportunities with Web Development</h3>
                <p>Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability.</p>
            </div>
            <div className="design-bar">
                <div className="bar">
                    <span><PlayCircleFilledIcon style={{fontSize: "50", marginRight: "15px", marginTop: "15px"}}/></span>
                    <h3>Learn in-demand skills with over various video courses</h3>
                </div>
                <div className="bar">
                    <StarsIcon style={{fontSize: "50", marginRight: "15px", marginTop: "15px"}}/>
                    <h3>Choose courses taught by real-world experts</h3>
                </div>
                <div className="bar">
                    <FourKIcon style={{fontSize: "50", marginRight: "15px", marginTop: "15px"}}/>
                    <h3>Learn at your own pace, with lifetime access at high Quality</h3>
                </div>
            </div>
            <div className="Game-portion same">
                <h3>Expand your career opportunities with Web Development</h3>
                <p>Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability.</p>
            </div>
            <div className="Accesories-portion same">
                <h3>Expand your career opportunities with Web Development</h3>
                <p>Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability.</p>
            </div>
            <Categories />
            
        </div>
    )
}

export default Home

