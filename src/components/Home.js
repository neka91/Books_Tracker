function Home(props) {
  return (
    <div className="home">
      <img className="homePicture" src={props.homePicture1} alt="Books" />
      <img className="homePicture" src={props.homePicture2} alt="Books" />
    </div>
  );
}

export default Home;
