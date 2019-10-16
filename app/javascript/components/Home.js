import React from "react"
import PropTypes from "prop-types"
import Event from "./Event"
import LinkedIn from "./LI-In-Bug.png"
import { Card, CardLink, CardGroup, CardBody, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBodyNav, Navbar, NavItem, NavLink, NavbarBrand, Jumbotron, Container, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'

const items = [
  {
    src: 'https://c.pxhere.com/photos/22/67/adult_alcoholic_beverages_bar_beer_bench_beverage_drink_facial_expression-1560077.jpg!d',
    altText: 'Slide 1',
  },
  {
    src: 'https://explorespain.org/wp-content/uploads/2019/02/Tumb_sanjuan.jpg',
    altText: 'Slide 2',
    },
    {
      src: 'https://c1.staticflickr.com/3/2858/9989653436_d67cf96f12_b.jpg',
      altText: 'Slide 3',
    }
];

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }

    onExiting() {
      this.animating = true;
    }

    onExited() {
      this.animating = false;
    }

    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }

    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    const { activeIndex } = this.state;
    const icon = { width: "15%" };
    const margin = { textAlign: "justified", margin: "0 13%" };
    const text = { textAlign: "center" };
    const card = { width: "18rem" };

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          className="img-fluid"
        >
        <img style={{height:"60%", width:"60%"}} src={item.src} alt={item.altText}
          className="img-fluid"
        />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (

    <React.Fragment>
      <Container>
      <br/>
      <br/>
        <Jumbotron>
        <center>
        <Carousel
          className="img-responsive"
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        </center>
        </Jumbotron>

        <Jumbotron>
         <center>
          <h2 id="jumbotron-message">Get Down brings energy and liveliness to the general public by connecting them through events in real time.
          </h2>
         </center>
        </Jumbotron>

        <Jumbotron>
          <br />
          <h2 style={text}>TEAM 404</h2>
          <br/>
          <hr style={margin} />
          <br/>
          <CardGroup style={{ margin: "0 12%" }} id="card-group">
            <Card style={card}>
              <CardImg top width="100%" src="https://media.licdn.com/dms/image/C5603AQHr69lDQBHzBA/profile-displayphoto-shrink_800_800/0?e=1576713600&v=beta&t=SZyKwtT9wGLN-IAGULXrlcHmFFn7LdwTjjSCD3BOqbY" />
              <CardBody>
                <CardTitle>Adam Cruse</CardTitle>
                <CardSubtitle>Full-Stack Developer.</CardSubtitle>
                <br/>
                <CardLink href="https://github.com/adamcruser" target="blank">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style={icon} />
                </CardLink>
                <CardLink href="https://www.linkedin.com/in/adamcruser/" target="blank">
                  <img src={LinkedIn} style={icon} />
                </CardLink>
              </CardBody>
            </Card>
            <Card style={card}>
              <CardImg top width="100%" src="https://media.licdn.com/dms/image/C5603AQFuaJGVHjSAzA/profile-displayphoto-shrink_800_800/0?e=1576713600&v=beta&t=Kdv5dZLNOc-_AkhfFXWx15sbblyoaOP6rzTC07S94Ts" />
              <CardBody>
                <CardTitle>Jonathon Arbona</CardTitle>
                <CardSubtitle>Full-Stack Developer.</CardSubtitle>
                <br/>
                <CardLink href="https://github.com/jnarbona91" target="blank">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style={icon} />
                </CardLink>
                <CardLink href="https://www.linkedin.com/in/jonarbona/" target="blank">
                  <img src={LinkedIn} style={icon} />
                </CardLink>
              </CardBody>
            </Card>
            <Card style={card}>
              <CardImg top width="100%" src="https://avatars3.githubusercontent.com/u/52896948?s=460&v=4" />
              <CardBody>
                <CardTitle>Conor Preston</CardTitle>
                <CardSubtitle>Full-Stack Developer.</CardSubtitle>
                <br/>
                <CardLink href="https://github.com/conorpreston13" target="blank">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style={icon} />
                </CardLink>
                <CardLink href="https://www.linkedin.com/in/conorpreston/" target="blank">
                  <img src={LinkedIn} style={icon} />
                </CardLink>
              </CardBody>
            </Card>
            <Card style={card}>
              <CardImg top width="100%" src="https://avatars3.githubusercontent.com/u/36896050?s=460&v=4" />
              <CardBody>
                <CardTitle>Jon Simpson</CardTitle>
                <CardSubtitle>Full-Stack Developer.</CardSubtitle>
                <br/>
                <CardLink href="https://github.com/jonbsimp" target="blank">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style={icon} />
                </CardLink>
                <CardLink href="https://www.linkedin.com/in/jonbsimp/" target="blank">
                  <img src={LinkedIn} style={icon} />
              </CardLink>
              </CardBody>
            </Card>
            <Card style={card}>
              <CardImg top width="100%" src="https://media.licdn.com/dms/image/C4D03AQENHSP_eFipew/profile-displayphoto-shrink_800_800/0?e=1576713600&v=beta&t=PZY2ovuq6xn8RIw_m_6b3dTZ1pd8YiMBL-YgC6o95XU" />
              <CardBody>
                <CardTitle>Katya Neumann</CardTitle>
                <CardSubtitle>Full-Stack Developer.</CardSubtitle>
                <br/>
                <CardLink href="https://github.com/Blackcatwhitesocks" target="blank">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style={icon} />
                </CardLink>
                <CardLink href="https://www.linkedin.com/in/katyaneumann/" target="blank">
                  <img src={LinkedIn} style={icon} />
                </CardLink>
              </CardBody>
            </Card>
          </CardGroup>
        </Jumbotron>
      </Container>
    </React.Fragment>

    );
  }
}

export default Home
