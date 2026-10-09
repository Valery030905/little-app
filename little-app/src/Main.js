function Main() {
    return (
        <main>
            <section className="hero">
                <div className="container hero-content-wrapper">

                    <div className="hero-content">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>

                        <p>We are a family-owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern twist.
                            Come and experience the flavors of the Mediterranean at Little Lemon, where we are
                            dedicated to providing the best Italian cuisine in the heart of Chicago.
                        </p>
                        <a href="/Reservation">
                            <button className="btn-reserve">Reserve a Table</button>
                        </a>
                    </div>
                    <div className="hero-image">
                        <img src="/images/hero-image.jpg" alt="Little Lemon restaurant" />
                    </div>
                </div>
            </section>

                <section className="specials">
                    <div className="container">
                        <div className="specials-header">
                            <h2>This Weeks Specials!</h2>
                            <button className="btn-menu">Online Menu</button>
                        </div>

                        <div className="specials-container">
                            <article className="card">
                                <img src="/images/greek-salad.jpg" alt="Greek Salad" />
                                <h3>
                                    Greek Salad
                                    <span className="price">$12.99</span>
                                </h3>
                                <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                                <div className="order">
                                    <a href="/">Order a delivery
                                        <span class="material-symbols-outlined">
                                            room_service
                                        </span>
                                    </a>
                                </div>
                            </article>

                            <article className="card">
                                <img src="/images/bruschetta.jpg" alt="Bruschetta" />
                                <h3>
                                    Bruschetta
                                    <span className="price">$5.99</span>
                                </h3>
                                <p>Our traditional grilled bread rubbed with garlic and seasoned with salt and olive oil, topped with fresh diced tomatoes, and a drizzle of rich balsamic glaze.</p>
                                <div className="order">
                                    <a href="/">Order a delivery
                                        <span class="material-symbols-outlined">
                                            room_service
                                        </span>
                                    </a>
                                </div>
                            </article>

                            <article className="card">
                                <img src="/images/dessert.jpg" alt="Dessert" />
                                <h3>
                                    Lemon Dessert
                                    <span className="price">$6.99</span>
                                </h3>
                                <p>A light and creamy lemon delight featuring layers of crisp graham cracker crust, tangy homemade lemon curd, and a fluffy topped whip of fresh cream.</p>
                                <div className="order">
                                    <a href="/">Order a delivery
                                        <span class="material-symbols-outlined">
                                            room_service
                                        </span>
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="testimonials">
                    <h2>Testimonials</h2>
                    <div className="testimonials-container">
                        <article className="testimonial">
                            <p>"The food was amazing! The flavors were so fresh and the presentation was beautiful. I will definitely be coming back!"</p>
                            <p>- John Doe</p>
                        </article>
                        <article className="testimonial">
                            <p>"I had the best dining experience at Little Lemon. The staff was friendly and attentive, and the food was out of this world!"</p>
                            <p>- Jane Smith</p>
                        </article>
                        <article className="testimonial">
                            <p>"Little Lemon is my go-to spot for Mediterranean cuisine. The dishes are always flavorful and satisfying. Highly recommend!"</p>
                            <p>- Michael Johnson</p>
                        </article>
                    </div>
                </section>
        </main>
    );
}

export default Main;