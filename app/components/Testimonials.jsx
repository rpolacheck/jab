import React, { Component } from 'react';

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
  }

  reelForward = () => {
    let { x } = this.state;
    this.intervalID = setInterval(() => this.setState({ x: x--}), 10)
  }

  reelBackward = () => {
    let { x } = this.state;
    this.intervalID = setInterval(() => this.setState({ x: x++}), 10)
  }

  stopReel = () => {
    clearInterval(this.intervalID);
  }

  render() {
    const {
      x,
    } = this.state;

    return (
      <section className="carousel">
        <div
          className="reel"
          style={{
            overflow: 'visible',
            transform: `translate(${x}px, 0px)`,
          }}
        >

          <article
          >
            <a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Pulvinar sagittis congue</a></h3>
            </header>
            <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
          </article>

          <article>
            <a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Fermentum sagittis proin</a></h3>
            </header>
            <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
          </article>

          <article>
            <a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Sed quis rhoncus placerat</a></h3>
            </header>
            <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
          </article>

          <article>
            <a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Ultrices urna sit lobortis</a></h3>
            </header>
            <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
          </article>

          <article>
            <a href="#" className="image featured"><img src="images/pic05.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Varius magnis sollicitudin</a></h3>
            </header>
            <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
          </article>

          <article>
            <a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Pulvinar sagittis congue</a></h3>
            </header>
            <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
          </article>

          <article>
            <a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Fermentum sagittis proin</a></h3>
            </header>
            <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
          </article>

          <article>
            <a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Sed quis rhoncus placerat</a></h3>
            </header>
            <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
          </article>

          <article>
            <a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Ultrices urna sit lobortis</a></h3>
            </header>
            <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
          </article>

          <article>
            <a href="#" className="image featured"><img src="images/pic05.jpg" alt="" /></a>
            <header>
              <h3><a href="#">Varius magnis sollicitudin</a></h3>
            </header>
            <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
          </article>
        </div>
        <span
          className="forward"
          onMouseEnter={this.reelForward}
          onMouseLeave={this.stopReel}
        />
        <span
          className="backward"
          onMouseEnter={() => {
            if (x < 0) this.reelBackward()
          }}
          onMouseLeave={this.stopReel}
        />
      </section>
    )
  }
}
