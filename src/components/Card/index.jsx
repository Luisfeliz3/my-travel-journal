import "./styles.css";
import location_logo from "../../Images/redLocation.png";

export default function Card(props) {
  // console.log(props)
  return (
    <div>

        <img
          alt="travel-logo"
          className="card--travel-img"
          src={props.item.coverImg}
        />
       

      <div className="card">
      <img src={location_logo} alt="location-logo" className="location_logo" />
        <section className="card--content">
          <div className="card--location--links">
            <p className="card--country">{props.item.country}</p>
            <p>
              <a href="http://travel.com">View On Goole Maps</a>
            </p>
          </div>
          <h1>Mount Fuji</h1>
          <div className="card--info">
            <p>{props.item.date}</p>
          </div>
          <p className="card--bio">{props.item.description}</p>
        </section>
        <div className="qwer"></div>
      </div>
    </div>
  );
}
