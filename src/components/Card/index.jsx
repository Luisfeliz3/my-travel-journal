import "./styles.css";

export default function Card(props) {
  return (
    <div className="card">
      <img
        className="card--travel-img"
        src="https://source.unsplash.com/WLxQvbMyfas"
      />
      <img />
      <section className="card--content">
        <div className="card--location--links">
          <p className="card--country">Japan</p>
          <p>
            <a>View On Goole Maps</a>
          </p>
        </div>
        <h1>Mount Fuji</h1>
        <div className="card--info">
          <p>12 Jan, 2021 - 24 Jan, 2021</p>
        </div>
        <p className="card--bio">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </section>
      <div className="qwer"></div>
    </div>
  );
}
