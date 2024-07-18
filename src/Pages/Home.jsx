import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';
import './Home.css';
import Recipe from '../components/Recipe';

function Home() {
  const Url = window.location.href;
  return (
    <>
      <Header />

      <section id='home'>
        <div className="row mb-5">
          <div className="col-1"></div>
          <div className="col-md-5 col-sm-10 mt-5">
            <h1 className='mt-5 fs-1 fw-bold'>Huge Selection of Delicious Recipes</h1>
            <p className='mt-5 p-2' style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, similique quidem adipisci repudiandae libero necessitatibus sunt perspiciatis modi. Esse blanditiis incidunt repellendus sequi illo deserunt iure quisquam vitae explicabo aliquid!</p>
            <div className='d-flex mt-5'>
              <Link to={'/recipes'}><Button variant="dark w-100">Explore Latest</Button></Link>
            </div>
          </div>
          <div className="col-md-5 col-sm-10 mt-5 d-flex justify-content-center">
            <img className='shadow rounded img-fluid' src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg" alt="no image" />
          </div>
          <div className="col-1"></div>
        </div>
             <Recipe/>
       <div className="row w-100 mt-5">
          <div className="col-md-1"></div>
          {<div className="col-md-10 d-flex justify-content-center flex-wrap">
            <Card className='border-0 m-3 card-fixed-size'>
              <Card.Img variant="top" src="https://calbizjournal.com/wp-content/uploads/2023/06/cooking-terms.jpg" className="card-img-fixed" />
              <Card.Body>
                <Card.Title className='text-center'>Find Recipes</Card.Title>
                <Card.Text>
                  Choose from a variety of recipes that suit your taste and diets.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='border-0 m-3 card-fixed-size'>
              <Card.Img variant="top" src="https://www.thedailymeal.com/img/gallery/10-cooking-tips-beginners-need-to-know/intro-1689602728.jpg" className="card-img-fixed" />
              <Card.Body>
                <Card.Title className='text-center'>Cook and have fun</Card.Title>
                <Card.Text>
                  Simple step-by-step instructions for your cooking recipes.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='border-0 m-3 card-fixed-size'>
              <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/healthy-food-home-happy-woman-600nw-1397470610.jpg" className="card-img-fixed" />
              <Card.Body>
                <Card.Title className='text-center'>Become a creator</Card.Title>
                <Card.Text>
                  As a creator, you can create your recipes and share them with users.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>}
          <div className="col-md-1"></div>
        </div>

        <div className="row w-100" style={{ marginTop: '2%' }}>
          <h3 style={{ marginLeft: '8%' }}>Latest Recipes</h3>
          <div className="col-md-1"></div>
          <div className="col-md-10 d-flex flex-wrap">
          <div className="col-md-1"></div>


            <Card className='mt-4 shadow card-fixed-size'>
              <Card.Img variant="top" src="https://www.eatingthaifood.com/wp-content/uploads/2017/05/thai-cashew-chicken-recipe-1024x683.jpg" className="card-img-fixed" />
              <Card.Body>
                <Card.Title>Lemon Garlic Baked Chicken</Card.Title>
              </Card.Body>
             {/* <div className="d-flex justify-content-around mt-1 p-2">
                <FacebookShareButton url={Url} quote="Lemon Garlic Baked Chicken">
                  <FacebookIcon size={25} round />
                </FacebookShareButton>
                <TwitterShareButton url={Url} title="Lemon Garlic Baked Chicken">
                  <TwitterIcon size={25} round />
                </TwitterShareButton>
                <WhatsappShareButton url={Url} title="Lemon Garlic Baked Chicken">
                  <WhatsappIcon size={25} round />
                </WhatsappShareButton>
              </div>*/}
            </Card> 

            <Card className='mt-4 shadow ms-4 card-fixed-size'>
              <Card.Img variant="top" src="https://i.ytimg.com/vi/FxLcVJdNt5o/maxresdefault.jpg" className="card-img-fixed" />
              <Card.Body>
                <Card.Title>Calamares a la Romana Chicken</Card.Title>
              </Card.Body>
              {/*<div className="d-flex justify-content-around mt-1 p-2">
                <FacebookShareButton url={Url} quote="Lemon Garlic Baked Chicken">
                  <FacebookIcon size={25} round />
                </FacebookShareButton>
                <TwitterShareButton url={Url} title="Lemon Garlic Baked Chicken">
                  <TwitterIcon size={25} round />
                </TwitterShareButton>
                <WhatsappShareButton url={Url} title="Lemon Garlic Baked Chicken">
                  <WhatsappIcon size={25} round />
                </WhatsappShareButton>
              </div>*/}
            </Card>

            <Card className='mt-4 shadow ms-4 card-fixed-size'>
              <Card.Img variant="top" src="https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-2.jpg" className="card-img-fixed" />
              <Card.Body>
                <Card.Title>Chinese Fried Noodles</Card.Title>
              </Card.Body>
              {/*<div className="d-flex justify-content-around mt-1 p-2">
                <FacebookShareButton url={Url} quote="Lemon Garlic Baked Chicken">
                  <FacebookIcon size={25} round />
                </FacebookShareButton>
                <TwitterShareButton url={Url} title="Lemon Garlic Baked Chicken">
                  <TwitterIcon size={25} round />
                </TwitterShareButton>
                <WhatsappShareButton url={Url} title="Lemon Garlic Baked Chicken">
                  <WhatsappIcon size={25} round />
                </WhatsappShareButton>
              </div>*/}
            </Card>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row mt-5">
          <div className="col-md-1"></div>
          <div className="col-md-10 mt-5 d-flex justify-content-center align-items-center flex-column ">
            <h1 className='text-center'>Publish Your Recipe for Free</h1>
            <p className='text-center mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <Link to={'/login'} className='text-center'><Button variant="dark w-100 my-4">Submit Recipe</Button></Link>
          </div>
          <div className="col-md-1"></div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Home;
