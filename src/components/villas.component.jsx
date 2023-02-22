import React from "react";
import { Link } from 'react-router-dom';

/**vlv-villages version 2.05 - VillasComponent 
 * - Features:
 * 
 *   --> Building Basic 'VillasComponent'.
 * 
 * Note: Pending to build the data amd the 
 * styles.
 */

const VillasComponent = () => {

    return(
        <section id="villas">
            <div className="villas-1">
                <h2 className="villas-1--title">Standard Villa</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    consequat semper viverra nam libero justo. Leo vel orci porta non 
                    pulvinar neque laoreet suspendisse.
                </p>
                <Link to='#' className="villas-1--link">Starting at $200</Link>
            </div>

            <div className="villas-2">
                <h2 className="villas-2--title">Superior Villa</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    consequat semper viverra nam libero justo. Leo vel orci porta non 
                    pulvinar neque laoreet suspendisse.
                </p>
                <Link to='#' className="villas-2--link">Starting at $350</Link>
            </div>

            <div className="villas-3">
                <h2 className="villas-3--title">Infinity Villa</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    consequat semper viverra nam libero justo. Leo vel orci porta non 
                    pulvinar neque laoreet suspendisse.
                </p>
                <Link to='#' className="villas-3--link">Starting at $700</Link>
            </div>

            <div className="villas-4">
                <h2 className="villas-4--title">Ultra Villa</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    consequat semper viverra nam libero justo. Leo vel orci porta non 
                    pulvinar neque laoreet suspendisse.
                </p>
                <Link to='#' className="villas-4--link">Starting at 1100.00</Link>
            </div>

            <div className="villas-5">
                <h2 className="villas-5--title">Galactic Villa</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    consequat semper viverra nam libero justo. Leo vel orci porta non 
                    pulvinar neque laoreet suspendisse.
                </p>
                <Link to='#' className="villas-5--link">Starting at $1300.00</Link>
            </div>

            <div className="villas-6">
                <h2 className="villas-6--title">Cosmic Villa</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    consequat semper viverra nam libero justo. Leo vel orci porta non 
                    pulvinar neque laoreet suspendisse.
                </p>
                <Link to='#' className="villas-6--link">Starting at $1500.00</Link>
            </div>

        </section>
    )
}

export default VillasComponent;