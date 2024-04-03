import { CardLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

function Movie() {
  return (
    <div>
      <Header />
      <div className="content-flex">
        <SideBar />
        <div style={{ width: "100%" }}>
          <div className="movie-page">
            {/* <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row> */}
            <div id="main-heading">
              <h1 className="padding-left: 90px;">Favourite Movie</h1>{" "}
            </div>
            <div className=" d-flex flex-row flex-wrap gap-5  ruba">
              <Card style={{ width: "15rem", height: "" }}>
                <Card.Img variant="top" src="1.jpeg" />
                <Card.Body className="card-body">
                  <Card.Title>Harry Potter</Card.Title>
                  <Card.Text>
                    <p>
                      is a series of seven fantasy novels written by British
                      author J. K. Rowling.
                    </p>
                  </Card.Text>
                  <CardLink href="http://www.harrypotter.com">
                    <Button variant="danger">watch me</Button>
                  </CardLink>
                </Card.Body>
              </Card>

              <Card style={{ width: "15rem", height: "" }}>
                <Card.Img variant="top" src="3.jpeg" />
                <Card.Body className="d-flex flex-row flex-wrap gap-5 justify-content-center">
                  <Card.Title>Marvel</Card.Title>
                  <Card.Text>
                    <p>
                      is the site of Marvel Entertainment! Browse official
                      Marvel movies, characters, comics, TV shows, videos.
                    </p>
                  </Card.Text>
                  <CardLink href="http://www.harrypotter.com">
                    <Button variant="danger">Watch Me</Button>
                  </CardLink>
                </Card.Body>
              </Card>

              <Card style={{ width: "15rem", height: "" }}>
                <Card.Img variant="top" src="4.jpeg" />
                <Card.Body className="d-flex flex-row flex-wrap gap-5 justify-content-center">
                  <Card.Title>The Matrix</Card.Title>
                  <Card.Text>
                    <p>
                      is a 1999 science fiction action film written and directed
                      by the Wachowskis.
                    </p>
                  </Card.Text>
                  <CardLink href="http://www.harrypotter.com">
                    <Button variant="danger">Watch Me</Button>
                  </CardLink>
                </Card.Body>
              </Card>

              <Card style={{ width: "15rem", height: "" }}>
                <Card.Img variant="top" src="5.jpeg" />
                <Card.Body className="d-flex flex-row flex-wrap gap-5 justify-content-center">
                  <Card.Title>Watch Me</Card.Title>
                  <Card.Text>
                    <p>
                      is an American epic space opera media franchise created by
                      George Lucas,
                    </p>
                  </Card.Text>
                  <CardLink href="http://www.harrypotter.com">
                    <Button variant="danger">Watch Me</Button>
                  </CardLink>
                </Card.Body>
              </Card>

              <Card style={{ width: "15rem", height: "" }}>
                <Card.Img variant="top" src="2.jpeg" />
                <Card.Body className="d-flex flex-row flex-wrap gap-5 justify-content-center">
                  <Card.Title>Lord of The Ring</Card.Title>
                  <Card.Text>
                    <p>
                      is a trilogy of epic fantasy adventure films directed by
                      Peter Jackson, based on the novel.
                    </p>
                  </Card.Text>
                  <CardLink href="http://www.google.com">
                    <Button variant="danger">Watch Me</Button>
                  </CardLink>
                </Card.Body>
              </Card>

              <Card style={{ width: "15rem", height: "" }}>
                <Card.Img variant="top" src="6.jpeg" />
                <Card.Body className="d-flex flex-row flex-wrap gap-5 justify-content-center">
                  <Card.Title>The Hunger Games</Card.Title>
                  <Card.Text>
                    <p>
                      is a 2012 American dystopian action film directed by Gary
                      Ross
                    </p>
                  </Card.Text>
                  <CardLink href="http://www.google.com">
                    <Button variant="danger">Watch Me</Button>
                  </CardLink>
                </Card.Body>
              </Card>

              <Card style={{ width: "15rem", height: "" }}>
                <Card.Img variant="top" src="7.jpeg" />
                <Card.Body className="d-flex flex-row flex-wrap gap-5 justify-content-center">
                  <Card.Title>Divergent</Card.Title>
                  <Card.Text>
                    <p>
                      is a 2014 American dystopian science fiction action film
                      directed by Neil Burger
                    </p>
                  </Card.Text>
                  <CardLink href="http://www.google.com">
                    <Button variant="danger">Watch Me</Button>
                  </CardLink>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
