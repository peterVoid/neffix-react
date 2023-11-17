import Main from "../components/Main";
import Rows from "./../components/Rows";
import request from "./../Request";
const Home = () => {
  return (
    <>
      <Main />
      <Rows rowId="1" title="Up Coming" fetchigURL={request.requestUpComing} />
      <Rows rowId="2" title="Popular" fetchigURL={request.requestPopular} />
      <Rows rowId="3" title="Trending" fetchigURL={request.requestTrending} />
      <Rows rowId="4" title="Top Rated" fetchigURL={request.requestTopRated} />
      <Rows rowId="5" title="Horror" fetchigURL={request.requestHorror} />
    </>
  );
};

export default Home;
