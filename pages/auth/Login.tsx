// React
import React from "react";

// Images
import Logo from "../../src/assets/Logo.png";
import PlantBG from "../../src/assets/PlantBG.png";

function Login() {

    return (
        <body className="bg-gt-main-green-50">
            <div className="container m-auto ">
                <div className="grid grid-cols-2">
                    <section className="w-50 h-screen bg-gradient-to-b from-[#C2F3C3] to-[#8CDF8F]">
                        <div className="bg-white justify-center self-center m-auto rounded-lg w-9/12">
                            <img src={Logo} className="flex justify-center self-center" />
                        </div>
                    </section>
                    <section>
                        <img src={PlantBG} className="h-screen w-screen"/>
                    </section>
                </div>
            </div>
        </body>
    )
}

export default Login;
