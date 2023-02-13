import React from 'react';
import './App.css';


function Main(){
    return (
    <main>
        <section className="intro">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur.</p>
            <button style={{borderRadius: 12}}>Reserve a Table</button>
            <img src={require("./images/4food.jpg")} alt="Four pieces of food" style={{
                borderRadius: 10,
                }}/>
        </section>

        <section className="specials">
            <h1>This weeks specials!</h1>
            <button style={{marginBottom: 10}}>Online Menu</button>
            <div className='cards'>
                <article className='card1'>
                    <img src={require("./images/greekSalad.jpg")} alt="Greek Salad" style={{
                    width: 300,
                    height: 225,
                    borderRadius: 10,
                    }}/>
                    <h2 className='dish'>Greek salad</h2>
                    <p className='price' style={{color: '#FA7000', fontWeight: 'bold'}}>$12.99</p>
                    <p className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <p className='order'>Order a Delivery <img src={require("./images/bikeIcon.png")} alt="Delivery icon" style={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    paddingLeft: 20,
                    }}/></p>
                </article>
                <article className='card2'>
                    <img src={require("./images/bruschetta.jpg")} alt="Bruschetta" style={{
                    width: 300,
                    height: 225,
                    borderRadius: 10,
                    }}/>
                    <h2 className='dish'>Bruschetta</h2>
                    <p className='price' style={{color: '#FA7000', fontWeight: 'bold'}}>$5.99</p>
                    <p className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <p className='order'>Order a Delivery <img src={require("./images/bikeIcon.png")} alt="Delivery icon" style={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    paddingLeft: 20,
                    }}/></p>
                </article>
                <article className='card3'>
                    <img src={require("./images/lemonDessert.jpg")} alt="Lemon Dessert" style={{
                    width: 300,
                    height: 225,
                    borderRadius: 10,
                    }}/>
                    <h2 className='dish'>Lemon Dessert</h2>
                    <p className='price' style={{color: '#FA7000', fontWeight: 'bold'}}>$5.00</p>
                    <p className="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <p className='order'>Order a Delivery <img src={require("./images/bikeIcon.png")} alt="Delivery icon" style={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    paddingLeft: 20,
                    }}/></p>

                </article>
            </div>
        </section>

        <section className='testimonials'>
            <h1>Testimonials</h1>
            <div className="testimonies">
                <article className='rate'>
                    <h2>10/10</h2>
                    <img src={require("./images/olivia.png")} alt="Profile icon" style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                    }}/>
                    <p>Olivia Smith</p>
                    <p2>My experience at the Little Lemon restaurant can be summarized as an an excellent combination of flavors and aromas, culminating in a perfect dish </p2>
                </article>
                <article className='rate'>
                    <h2>9.5/10</h2>
                    <img src={require("./images/sam.png")} alt="Profile icon" style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                    }}/>
                    <p>Sam Perez</p>
                    <p2>I loved the Bruschetta! Will be back to try the Lemon Dessert</p2>
                </article>
                <article className='rate'>
                    <h2>9.8/10</h2>
                    <img src={require("./images/jhon.png")} alt="Profile icon" style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                    }}/>
                    <p>John Doe</p>
                    <p2>A red wine together with a tasty seasoned pasta made the perfect combination for a beautiful date night with my partner.</p2>
                </article>
                <article className='rate'>
                    <h2>10/10</h2>
                    <img src={require("./images/claudia.png")} alt="Profile icon" style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                    }}/>
                    <p>Claudia Jones</p>
                    <p2>An experience full of flavor and a friendly staff. I spoke directly with the owners and I highlight their warm and human attention explaining the magic behind the dishes.</p2>
                </article>

            </div>
        </section>

        <secion className='outro'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            <div className="chefPic">
                <img className="top" src={require("./images/chef.jpg")} alt="Chef chooking" style={{
                    width: 350,
                    height: 250,
                    borderRadius: 10,
                }}/>
                <img className="bot" src={require("./images/marioAndAdrian.jpg")} alt="Mario and Adrian" style={{
                    width: 350,
                    height: 250,
                    borderRadius: 10,
                }}/>
            </div>
        </secion>
    </main>
    );
};

export default Main;
