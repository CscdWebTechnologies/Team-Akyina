import React from "react";
import "../assets/styles/body.css";
import BodyImage from "./BodyImage";

const Body = () => {
  return (
    <div className="main_body">
      <div className="body_wrap">
        <div className="bodycont">
          <a href="/" class="btc_sign">
            <p>
              <i class="fab fa-btc"></i>
            </p>
            <p>Jump Start Your Portfolio</p>
            <p>
              <i class="fas fa-arrow-right"></i>
            </p>
          </a>
          <h1 class="bodystart">
            Jump start <br /> your crypto <br /> portfolio
          </h1>
          <p class="starting_paragraph">
            Coinbase is the easiest place to buy and sell cryptocurrency. Sign
            up and get started today.
          </p>
          <form>
            <div className="form__group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form__group">
              <input type="submit" placeholder="Get started" />
            </div>
          </form>
          <a href="/" className="terms">
            * Terms apply
          </a>
        </div>

        <div className="body_image">
          <BodyImage />
        </div>
      </div>
    </div>
  );
};

export default Body;
