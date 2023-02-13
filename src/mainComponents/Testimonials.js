import React from 'react';
import './../App.css';

function Testimonials(){
    return(
        <section className='testimonials' id="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonies">
                <article className='rate'>
                    <h2>10/10</h2>
                    <img src={require("./../images/olivia.png")} alt="Profile icon" style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                    }}/>
                    <p>Olivia Smith</p>
                    <p2>My experience at the Little Lemon restaurant can be summarized as an an excellent combination of flavors and aromas, culminating in a perfect dish </p2>
                </article>
                <article className='rate'>
                    <h2>9.5/10</h2>
                    <img src={require("./../images/sam.png")} alt="Profile icon" style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                    }}/>
                    <p>Sam Perez</p>
                    <p2>I loved the Bruschetta! Will be back to try the Lemon Dessert</p2>
                </article>
                <article className='rate'>
                    <h2>9.8/10</h2>
                    <img src={require("./../images/jhon.png")} alt="Profile icon" style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                    }}/>
                    <p>John Doe</p>
                    <p2>A red wine together with a tasty seasoned pasta made the perfect combination for a beautiful date night with my partner.</p2>
                </article>
                <article className='rate'>
                    <h2>10/10</h2>
                    <img src={require("./../images/claudia.png")} alt="Profile icon" style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                    }}/>
                    <p>Claudia Jones</p>
                    <p2>An experience full of flavor and a friendly staff. I spoke directly with the owners and I highlight their warm and human attention explaining the magic behind the dishes.</p2>
                </article>

            </div>
        </section>
    );
};

export default Testimonials;