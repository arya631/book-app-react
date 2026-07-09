import React from 'react'
import NavBar from './NavBar'

function ViewBook() {
  return (
    <div>
      <NavBar />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">

              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
                    className="card-img-top"
                    alt="The Alchemist"
                  />
                  <div className="card-body">
                    <h5 className="card-title">The Alchemist</h5>
                    <p className="card-text">
                      <strong>Author:</strong> Paulo Coelho
                    </p>
                    <p className="card-text">
                      <strong>Price:</strong> ₹499
                    </p>
                    <button className="btn btn-success">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
                    className="card-img-top"
                    alt="Atomic Habits"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Atomic Habits</h5>
                    <p className="card-text">
                      <strong>Author:</strong> James Clear
                    </p>
                    <p className="card-text">
                      <strong>Price:</strong> ₹599
                    </p>
                    <button className="btn btn-success">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
                    className="card-img-top"
                    alt="Rich Dad Poor Dad"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Rich Dad Poor Dad</h5>
                    <p className="card-text">
                      <strong>Author:</strong> Robert Kiyosaki
                    </p>
                    <p className="card-text">
                      <strong>Price:</strong> ₹450
                    </p>
                    <button className="btn btn-success">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg"
                    className="card-img-top"
                    alt="Ikigai"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Ikigai</h5>
                    <p className="card-text">
                      <strong>Author:</strong> Héctor García
                    </p>
                    <p className="card-text">
                      <strong>Price:</strong> ₹399
                    </p>
                    <button className="btn btn-success">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg"
                    className="card-img-top"
                    alt="Think and Grow Rich"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Think and Grow Rich</h5>
                    <p className="card-text">
                      <strong>Author:</strong> Napoleon Hill
                    </p>
                    <p className="card-text">
                      <strong>Price:</strong> ₹350
                    </p>
                    <button className="btn btn-success">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg"
                    className="card-img-top"
                    alt="The Psychology of Money"
                  />
                  <div className="card-body">
                    <h5 className="card-title">The Psychology of Money</h5>
                    <p className="card-text">
                      <strong>Author:</strong> Morgan Housel
                    </p>
                    <p className="card-text">
                      <strong>Price:</strong> ₹549
                    </p>
                    <button className="btn btn-success">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBook
