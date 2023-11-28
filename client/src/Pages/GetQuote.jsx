import React, { useState } from "react";

function GetQuote() {
  const [ourdata, setData] = useState("");
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [Address1, setAddress1] = useState("");
  const [Address2, setAddress2] = useState("");
  const [Distance, setDistance] = useState("");
  const [Price, setPrice] = useState(0);
  function handleForm(event) {
    event.preventDefault();
    let productDetails = {
      Height: Height,
      Weight: Weight,
      SAddress: Address1,
      RAddress: Address2,
      Distance: Distance,
    };
    fetch("/api/quote", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        let DistanceFare = 0;
        let HeightCharges = 0;
        let WeightCharges = 0;
        if (data["Height"] > 0 && data["Height"] <= 12) {
          if (data["Weight"] >= 1 && data["Weight"] <= 20) {
            setPrice(data["Distance"] * 0.75);
          } else if (data["Weight"] > 20) {
            DistanceFare = data["Distance"] * 0.75;
            WeightCharges = (data["Weight"] - 20) * 0.5;
            setPrice(DistanceFare + WeightCharges);
          }
        }

        if (data["Height"] > 12) {
          if (data["Weight"] >= 1 && data["Weight"] <= 20) {
            DistanceFare = data["Distance"] * 0.75;
            HeightCharges = (data["Height"] - 12) * 0.05;
            setPrice(DistanceFare + HeightCharges);
          } else if (data["Weight"] > 20) {
            DistanceFare = data["Distance"] * 0.75;
            WeightCharges = (data["Weight"] - 20) * 0.5;
            HeightCharges = (data["Height"] - 12) * 0.05;
            setPrice(DistanceFare + HeightCharges + WeightCharges);
          }
        }

        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    console.log("Clicked");
  }
  return (
    <div>
      <h4>Let's get started!</h4>
      <form>
        <label>Sender's Name</label>
        <input type="text" name="Sender's Name" /> <br />
        <label>Email Address</label>
        <input type="text" name="Email Address" /> <br />
        <label>Phone number</label>
        <input type="text" name="Phone number" /> <br />
        <label>City</label>
        <input type="text" name="City" /> <br />
        <label>Date</label>
        <input type="text" name="Date" /> <br />
        <label>Destination City</label>
        <input type="text" name="Destination City" /> <br />
        <label>Name of the product</label>
        <input type="text" name="Product" /> <br />
      </form>
      <h4>Delivery Specifications</h4>
      <form onSubmit={handleForm}>
        <label>Height of the product (in)</label>
        <input
          type="text"
          name="Height"
          onChange={(e) => setHeight(e.target.value)}
        />{" "}
        <br />
        <label>Weight of the product (kg)</label>
        <input
          type="text"
          name="Weight"
          onChange={(e) => setWeight(e.target.value)}
        />{" "}
        <br />
        <label>Sender's Address </label>
        <input
          type="text"
          name="Address1"
          onChange={(e) => setAddress1(e.target.value)}
        />{" "}
        <br />
        <label>Receiver's address</label>
        <input
          type="text"
          name="Address2"
          onChange={(e) => setAddress2(e.target.value)}
        />{" "}
        <br />
        <label>Distance between the source and destination (km)</label>
        <input
          type="text"
          name="Distance"
          onChange={(e) => setDistance(e.target.value)}
        />{" "}
        <br />
        <input type="submit" value="Submit Details" />
      </form>
      {ourdata && (
        <div>
          <h3>Get your delivery quote</h3>
          <h4>Your delivery estimate is ${Price}</h4>
        </div>
      )}
    </div>
  );
}
export default GetQuote;
