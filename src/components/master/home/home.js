import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="container clearfix">
            <img
              className="profile-image img-fluid float-left"
              src="https://avatars2.githubusercontent.com/u/17609809?s=460&u=23479ef61fee85d85ddbc40d057c65d21207ad5e&v=4"
              alt="James Lee"
            />
            <div className="profile-content float-left">
              <h1 className="name">Parthiban Subramanian</h1>
              <h2 className="desc">MEAN Stack Developer</h2>

              <ul className="social list-inline">
                <li className="list-inline-item">
                  <a href="https://twitter.com/ImparthiS">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-stack-overflow"></i>
                  </a>
                </li>
                <li className="list-inline-item last-item">
                  <a href="#">
                    <i className="fab fa-codepen"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="container sections-wrapper">
          <div className="row">
            <div className="primary col-lg-8 col-12">
              <section className="about section">
                <div className="section-inner">
                  <h2 className="heading">About Me</h2>
                  <div className="content">
                    <p>
                      Write a brief intro about yourself. It's a good idea to
                      include your personal interests and hobbies as well. Lorem
                      ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                      commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec.
                      Commodo ligula eget dolor. Aenean massa.
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div class="secondary col-lg-4 col-12">
              <aside class="info aside section">
                <div class="section-inner">
                  <h2 class="heading sr-only">Basic Information</h2>
                  <div class="content">
                    <ul>
                      <li>
                        <i class="fas fa-kiwi-bird"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
