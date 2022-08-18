import React from "react";
import "./Header.css";
// import facebook1 from './images/facebook1.png';
import link from './images/facebook1.png';
import link1 from './images/indeed.png';
import link2 from './images/linkedin.png';

function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <div className="logo">
            <h1>PortFollio</h1>
          </div>
          <div className="manu-items">
            <ul>
              <li className="li-menu-item">
                <a href="">Home</a>
              </li>
              <li className="li-menu-item">
                <a href="">About</a>
              </li>
              <li className="li-menu-item">
                <a href="">PortFolio</a>
              </li>
              <li className="li-menu-item">
                <a href="">Blog</a>
              </li>
              <li className="li-menu-item">
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="talk-btn">
            <a href="" className="btn-primary">
              Lets Talk
            </a>
          </div>
        </nav>

        <section className="prosonal-info">
          <div className="picd info">
            <div className="name-data">
              <span>Web Designer & Developer</span>
              <h1 className="one">I'm MUHAMMAD</h1>
              <h1 className="two">Bilal Jami</h1>
              <a href="">More About Me</a>
            </div>
            {/* <ul className="social-links">
                <li className="link"></li>
                <li className="link1"></li>
                <li className="link2"></li>
            </ul> */}
          </div>
          <div className="picd photo">
            {/* <img src={facebook1} /> */}
          </div>
        </section>

        <section className="container aboutme">
          <h1>About Me</h1>
          <p>
            I am an ambitious Software Developer with good front-end design and
            development. I am energetic, passionate, and ever-ready to face
            challenges and learn new technologies. I am very eager to serve in
            the field of web apps to add more value, which will increase the
            organization's profitability. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta soluta nobis illum magnam sint, praesentium mollitia assumenda officiis quae totam repellat aliquam quia ea deserunt aliquid. Deserunt voluptatibus rem numquam reprehenderit? Assumenda, laboriosam? Tempore hic adipisci exercitationem consequuntur voluptate consequatur est sequi corrupti amet. Expedita odio est quis assumenda voluptate animi ipsam mollitia ducimus quo, fugit sint temporibus magnam itaque! Magnam laborum molestias necessitatibus omnis alias, ullam debitis temporibus, aut totam vel eum enim dolorum dolores eius ducimus fuga quis qui vitae earum distinctio! Quibusdam dolorem ipsa veniam, sed pariatur temporibus id tempore impedit voluptatum dolores ratione, odit inventore unde. Dolore quibusdam, delectus laudantium tempora ratione et possimus eos quaerat velit! Quidem id, rerum aliquam, accusamus ducimus dolorem velit debitis pariatur tempora unde architecto fuga enim earum doloremque at cum maxime quos, illum laboriosam? Id ea perferendis dolor dignissimos quibusdam repudiandae explicabo, at sit vero doloremque earum dolore. Velit, praesentium? Similique quidem saepe harum rerum excepturi molestias laudantium quos doloribus, ea nisi aspernatur odio exercitationem porro qui autem dolores unde, fugiat voluptatibus? Recusandae cupiditate fugiat modi, error rerum voluptates voluptatum adipisci nemo harum quos placeat eaque ducimus ullam? Natus aliquam deleniti, voluptatibus quam voluptatem nesciunt obcaecati est? Veritatis quaerat ipsa, dolor alias sed non eum animi delectus quod blanditiis doloremque minima eaque eveniet facere obcaecati provident, autem corporis laudantium? Amet impedit similique dolore assumenda aperiam! Laboriosam labore aperiam ipsam, blanditiis impedit iusto libero? Rerum molestiae dignissimos iure? Eum sunt tempore suscipit eaque asperiores quas iste nulla? Obcaecati ullam impedit unde est asperiores, praesentium sunt nulla ratione, nostrum dolorum voluptates sapiente reprehenderit saepe. Culpa vel temporibus quos, in, mollitia eveniet obcaecati quisquam dolores doloremque sequi rerum nostrum doloribus consectetur expedita, nam dolorum! Mollitia, exercitationem repudiandae sunt aliquid sapiente rem tenetur hic, voluptate porro minima unde quibusdam architecto. Perspiciatis, nobis tenetur?
          </p>
        </section>

        <section className="portfolio">

        </section>

        <section className="container">
                <h1 className="let-talkh1">Let's Talk</h1>
            <div className="lets-talk-sect">
                
                <div className="form-data">
                    <form action="">
                        <span className="inform">Get In Touch</span><br />
                        <input type="text" name="" id="" placeholder="Name" required /><br />
                        <input type="text" name="" id="" placeholder="Last name" required /><br />
                        <input type="email" name="" id="" placeholder="Email" required /><br />
                        <input type="text" name="" id="" placeholder="Subject" required /><br />
                        <input type="text" name="" id="" placeholder="Message" required /><br />
                        <input type="submit" name="" id="" value={'Send Message'} />
                    </form>
                </div>
            
            
                <div className="contact-data">

                    <div>
                    <h1>Office Address</h1>
                    <p>Gulberg III Lahore</p>
                    </div>
                    <div>
                    <h1>Official Mail</h1>
                    <p>bilal.jami2020@gmail.com</p>
                    </div>
                    <div>
                    <h1>Official Phone</h1>
                    <p>0300-6797788</p>
                    </div>
                    
                </div>
            </div>
        </section>

        <footer className="container footer">
            <h1>PortFolio</h1>
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">PortFolio</a></li>
                <li><a href="">Home</a></li>
            </ul>
            <p>All right reserved 2022</p>
        </footer>

      </header>
    </>
  );
}

export default Header;
