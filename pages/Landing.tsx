// React
import React from "react";

function Landing() {
  return (
    <section>
      <div>
        <h1>Landing Page</h1>
      </div>
      <a href="/login">
        <div className="bg-gt-main-green-300 p-4 w-2/12">Login</div>
      </a>
      <a href="/signup">
        <div className="bg-gt-main-green-700 p-4 w-2/12">SignUp</div>
      </a>
    </section>
  );
}

export default Landing;
