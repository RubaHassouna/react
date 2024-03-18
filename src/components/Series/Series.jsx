import { Card } from "react-bootstrap";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

// Import Swiper styles

// Install Swiper components
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
<meta name="viewport" content="width=device-width, initial-scale=1.0" />;

function Series(props) {
  console.log(props);

  return (
    <div className="series-page">
    <div className="Cards-container ">
      <Card className="Card" style={{ width: "200px", height: "" }}>
        {/* <Card> */}
        <div className="frontt" style={{}}>
          <Card.Img
            className="card-img"
            variant="top"
            src={props.img}
            style={{ height: "300px" }}
          />
        </div>
        <Card.Body className=" d-flex flex-row flex-wrap gap-3 justify-content-center ">
          <div className="frontt">
            <Card.Title className="title">{props.title} </Card.Title>
          </div>
          <div className="backk">
            <Card.Text>
              <span className="rating">{props.rating}⭐⭐⭐⭐</span>

              <p className="Desc">{props.Desc}</p>
            </Card.Text>
          </div>
          {/* <CardLink href="http://www.harrypotter.com"> */}
          {/* <Button variant="danger">Watch Me</Button> */}
          {/* </CardLink> */}
        </Card.Body>
      </Card>

      {/* <div className="img-card">
        <img src={props.img} style={{ width: "400px" }} alt="img" />
      </div>
      <div className="Top">
        <h1>{props.title}</h1>
        <h3>{props.rating}</h3>
      </div>
      <div className="Desc">
        <h2>{props.Desc}</h2>
      </div> */}
    </div>
    </div>
  );
}

export default Series;
