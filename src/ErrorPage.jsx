import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            {/*
    Graphic from https://www.opendoodles.com/
*/}

<div className="grid h-screen px-4 bg-white place-content-center">
  <div className="text-center">
  
   <img src="https://i.ibb.co/Qfr7jwz/error-page.png" alt="" />
    <h1
      className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
    >
      Uh-oh!
    </h1>

    <p className="mt-4 text-gray-500">We can't find that page.</p>
  </div>

  <div className="text-center mt-10"> <Link to={'/'}><button className="btn font-bold bg-gradient-to-t from-green-200 via-cyan-200 to-blue-300"> BACK TO HOME</button></Link> </div>
</div>
        </div>
    );
};

export default ErrorPage;