export default function Card() {
  return (
    <div className="p-card">
      <div className="p-card__content">
        <p>CLOUD AND SERVER</p>
        <hr />
        <img
          className="p-card__image"
          alt=""
          src="https://assets.ubuntu.com/v136f1139e-Design-and-Web-Team-Blog.jpg"
          width="330"
          height="185"
        />
        <h2 className="p-heading--4">
          <a href="#">Open Source Robotics Challenges</a>
        </h2>
        <p className="p-heading--6">
          By <a href="#">cprov</a> on 27 November 2018
        </p>
        <hr />
        <p>Article</p>
      </div>
    </div>
  );
}
