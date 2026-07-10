import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewBook = () => {
  const [data, changeData] = useState([
    {
      book: "The Alchemist",
      avathar: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
      author: "Paulo Coelho",
      price: "499"
    },
    {
      book: "Atomic Habits",
      avathar: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
      author: "James Clear",
      price: "599"
    },
    {
      book: "Rich Dad Poor Dads",
      avathar: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
      author: "Robert Kiyosaki",
      price: "450"
    },
    {
      book: "Think and Grow Rich",
      avathar: "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg",
      author: "Napoleon Hill",
      price: "350"
    }
  ])

  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="row g-3">

              {data.map((value, index) => {
                return (
                  <div
                    className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
                  >
                    <div className="card h-100">
                      <img
                        src={value.avathar}
                        className="card-img-top"
                        alt={value.book}
                      />

                      <div className="card-body">
                        <h5 className="card-title">{value.book}</h5>

                        <p className="card-text">
                          <strong>Author:</strong> {value.author}
                        </p>

                        <p className="card-text">
                          <strong>Price:</strong> ₹{value.price}
                        </p>

                        <button className="btn btn-success">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBook