import React from 'react';

export default function Gym(){
    return (
        <div className="wrapper style1">

					<section id="features" className="container special">
						<header>
							<h2>Jab Fitness Gym</h2>
							<p>Our gym offers a variety of equipment, enough to accomodate a full body workout!
								Our Boxing Timer will keep you on track:  3-minute round & 1 minute rest

							</p>
						</header>
						<div className="row">
							<article className="col-4 col-12-mobile special">
								<a href="#" className="image featured"><img src={require("../../public/images/jabgym1.jpg")} alt="" /></a>
								<p>
									Jab offers 10 speedbag stations with varying weights, sizes, and brands.  
									Feel free to bring your own bag too!
								</p>
							</article>
							<article className="col-4 col-12-mobile special">
								<a href="#" className="image featured"><img src={require("../../public/images/jabgym2.jpg")} alt="" /></a>
								<p>
									Jab Fitness has 10 Ringside Leather Heavy Bags ranging from 75 lbs. to 150lbs.
									Also, 2 Ringside Leather Double End Bags and a wide range of jump ropes - 
									including speed, leather and beaded ropes.  Jab also offers hand wraps and Ringside Boxing gloves.
								</p>
							</article>
							<article className="col-4 col-12-mobile special">
								<a href="#" className="image featured"><img src={require("../../public/images/jabgym3.jpg")} alt="" /></a>
								<p>
									Jab also has a Parabody Weight System that includes Bench, Squat, Hack Squat, Lat Pull-Down,
									Leg Press Machine, Roman Chair/Hyper-Extension, Pull-up and Dip station.  Jab also features 2
									Stationary Bikes and a number of dumbell freeweights.  If that isn't enough, you can also flip
									tires and use our Battle Ropes.
								</p>
							</article>
						</div>
					</section>

				</div>

    )
};