import React from 'react';

export default function Contact(){
    return (
        // Footer
        <div id="footer">
            <div class="container">
                <div class="row">
                        {/* Contact */}
                            <section class="contact">
                                <header>
                                    <h3>Contact Jab</h3>
                                </header>
                                <p>Follow Jab on Twitter and Facebook.  Email Joe with any questions</p>
                                <ul class="icons">
                                    <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                                    <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                                    <li><a href="#" class="icon fa-envelope"><span class="label">Email</span></a></li>
                                </ul>
                            </section>

                        {/* Map    */}
                        <div>
                        <iframe height="450" width="600" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDXXj1hf3DogRSv9XESj_iTw&key=AIzaSyA4OJ4wDQeFu86oDTaV05cF6LyRkgR5W00" allowfullscreen>
                        </iframe>
                        </div>
                    </div>
                </div>
            </div>
    )
};