import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

function FlipCard() {
  return (
    <div>
      <Header />
      <div className="content-flex">
        <SideBar />
        <div style={{ width: "100%" }}>
          <div className="id-card">
            <div className="FlipCardContainer">
              <div className="Flipcard">
                <div className="front">
                  <img
                    src="ruba2.jpg"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="back">
                  <h4>Ruba Hassounsa</h4>
                  <p>Business Information Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
