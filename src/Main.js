import React from 'react';
import './App.css';


function Main(){
    return (
    <main>
        <section className="intro">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur.</p>
            <button>Reserve a Table</button>
            <img src={require("./images/4food.jpg")} alt="Four pieces of food" style={{
                width: 200,
                height: 300,
                borderRadius: 10,
                }}/>
        </section>

        <section className="specials">
            <h1>This weeks specials!</h1>
            <button style={{marginBottom: 10}}>Online Menu</button>
            <div className='cards'>
                <article className='card1'>
                    <img src={require("./images/greekSalad.jpg")} alt="Greek Salad" style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    }}/>
                    <h1 className='dish'>Greek salad</h1>
                    <p className='price'>$12.99</p>
                    <p className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <p className='order'>Order a Delivery</p>
                    <img src={require("./images/bikeIcon.png")} alt="Delivery icon" style={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    }}/>
                </article>
                <article className='card2'>
                    <img src={require("./images/bruschetta.jpg")} alt="Bruschetta" style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    }}/>
                    <h1 className='dish'>Bruschetta</h1>
                    <p className='price'>$5.99</p>
                    <p className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <p className='order'>Order a Delivery</p>
                    <img src={require("./images/bikeIcon.png")} alt="Delivery icon" style={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                    }}/>
                </article>
                <article className='card3'>
                    <img src={require("./images/lemonDessert.jpg")} alt="Lemon Dessert" style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    }}/>
                    <h1 className='dish'>Lemon Dessert</h1>
                    <p className='price'>$5.00</p>
                    <p className="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <p className='order'>Order a Delivery</p>
                    <img src={require("./images/bikeIcon.png")} alt="Delivery icon" style={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                    }}/>

                </article>
            </div>
        </section>

        <section className='testimonials'>
            <h1>Testimonials</h1>
            <div className="testimonies">
                <article className='rate1'>
                    <h1>Rating</h1>
                    <img src={require("./images/eye.png")} alt="Eye icon" style={{
                        width: 30,
                        height: 20,
                        borderRadius: 10,
                    }}/>
                    <p>Name</p>
                    <p2>Review Text</p2>
                </article>
                <article className='rate2'>
                    <h1>Rating</h1>
                    <img src={require("./images/eye.png")} alt="Eye icon" style={{
                        width: 30,
                        height: 20,
                        borderRadius: 10,
                    }}/>
                    <p>Name</p>
                    <p2>Review Text</p2>
                </article>
                <article className='rate3'>
                    <h1>Rating</h1>
                    <img src={require("./images/eye.png")} alt="Eye icon" style={{
                        width: 30,
                        height: 20,
                        borderRadius: 10,
                    }}/>
                    <p>Name</p>
                    <p2>Review Text</p2>
                </article>
                <article className='rate4'>
                    <h1>Rating</h1>
                    <img src={require("./images/eye.png")} alt="Eye icon" style={{
                        width: 30,
                        height: 20,
                        borderRadius: 10,
                    }}/>
                    <p>Name</p>
                    <p2>Review Text</p2>
                </article>

            </div>
        </section>

        <secion className='outro'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            <img src={require("./images/chef.jpg")} alt="Chef chooking" style={{
                width: 300,
                height: 200,
                borderRadius: 10,
            }}/>
            <img src={require("./images/marioAndAdrian.jpg")} alt="Mario and Adrian" style={{
                width: 300,
                height: 200,
                borderRadius: 10,
            }}/>
        </secion>
    </main>
    );
};

export default Main;
