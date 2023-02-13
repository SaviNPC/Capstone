import React from 'react';
import './../App.css';

function Specials(){
    return(
        <section className="specials" id="specials">
            <h1>This weeks specials!</h1>
            <button style={{marginBottom: 10}}>Online Menu</button>
            <div className='cards'>
                <article className='card1'>
                    <img src={require("./../images/greekSalad.jpg")} alt="Greek Salad" style={{
                    width: 300,
                    height: 225,
                    borderRadius: 10,
                    }}/>
                    <h2 className='dish'>Greek salad</h2>
                    <p className='price' style={{color: '#FA7000', fontWeight: 'bold'}}>$12.99</p>
                    <p className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <p className='order'>Order a Delivery <img src={require("./../images/bikeIcon.png")} alt="Delivery icon" style={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    paddingLeft: 20,
                    }}/></p>
                </article>
                <article className='card2'>
                    <img src={require("./../images/bruschetta.jpg")} alt="Bruschetta" style={{
                    width: 300,
                    height: 225,
                    borderRadius: 10,
                    }}/>
                    <h2 className='dish'>Bruschetta</h2>
                    <p className='price' style={{color: '#FA7000', fontWeight: 'bold'}}>$5.99</p>
                    <p className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <p className='order'>Order a Delivery <img src={require("./../images/bikeIcon.png")} alt="Delivery icon" style={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    paddingLeft: 20,
                    }}/></p>
                </article>
                <article className='card3'>
                    <img src={require("./../images/lemonDessert.jpg")} alt="Lemon Dessert" style={{
                    width: 300,
                    height: 225,
                    borderRadius: 10,
                    }}/>
                    <h2 className='dish'>Lemon Dessert</h2>
                    <p className='price' style={{color: '#FA7000', fontWeight: 'bold'}}>$5.00</p>
                    <p className="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <p className='order'>Order a Delivery <img src={require("./../images/bikeIcon.png")} alt="Delivery icon" style={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    paddingLeft: 20,
                    }}/></p>

                </article>
            </div>
        </section>
    );
};

export default Specials;