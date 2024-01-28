import notFound from "../assets/icons8-unknown-results-96.png";
import Assets from "../components/Assets";

const PageNotFound = () => {
  {/*Uses an Assets component to render an image and a message in case
   when users search returns no results */}
  return (
    <div>
      <Assets
        src={notFound}
        message={`Ooops the page you're looking for doesn't exist`}
      />
    </div>
  );
};

export default PageNotFound;
