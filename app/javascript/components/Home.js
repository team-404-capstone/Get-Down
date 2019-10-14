import React from "react"
import PropTypes from "prop-types"
import Event from "./Event"
import LinkedIn from "/Users/jonathan/Desktop/Get-Down/app/assets/images/LI-In-Bug.png"
import { Card, CardLink, CardGroup, CardBody, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBodyNav, Navbar, NavItem, NavLink, NavbarBrand, Jumbotron, Container, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'

const items = [
  {
    src: 'https://c.pxhere.com/photos/22/67/adult_alcoholic_beverages_bar_beer_bench_beverage_drink_facial_expression-1560077.jpg!d',
    altText: 'Slide 1',
  },
  {
    src: 'https://www.maxpixel.net/static/photo/2x/Venice-California-Beach-Playing-Basketball-Game-1978357.jpg',
    altText: 'Slide 2',
  },
  {
    src: 'https://explorespain.org/wp-content/uploads/2019/02/Tumb_sanjuan.jpg',
    altText: 'Slide 3',
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
    const icon = { width: "15%", height: "20%"};
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
          <h1>THIS IS OUR HOME PAGE</h1>
          <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
        </Jumbotron>

        <Jumbotron>
          <br />
          <h2 style={text}>TEAM 404</h2>
          <br/>
          <hr style={margin} />
          <br/>
          <CardGroup style={{ margin: "0 12%" }}>
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


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ORIGINAL NAVBAR
// <nav class="navbar navbar-expand-md navbar-dark bg-primary mb-2">
//       	<a class="navbar-brand" href="./events">Light text</a>
//       	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
//       		<span class="navbar-toggler-icon"></span>
//       	</button>
//       	<div class="collapse navbar-collapse" id="navbarColor02">
//       		<ul class="navbar-nav ml-auto">
//       			<li class="nav-item">
//       				<a class="nav-link" href="#" title="Current breakpoint tier">
//       					Tier
//       					<span class="d-xl-inline d-none">XL</span>
//       					<span class="d-lg-inline d-xl-none d-none">LG</span>
//       					<span class="d-md-inline d-lg-none d-none">MD</span>
//       					<span class="d-sm-inline d-md-none d-none">SM</span>
//       					<span class="d-inline d-sm-none">XS</span>
//       				</a>
//       			</li>
//       			<li class="nav-item">
//                 <a class="nav-link" href="/users/sign_up">Sign Up</a>
//                 <a class="nav-link" href={sign_in_route}>Log In</a>
//             </li>
//       		</ul>
//       	</div>
//       </nav>
