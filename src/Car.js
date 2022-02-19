import React, { useEffect } from "react";
import "./Car.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Car() {
  var parallex = document.getElementsByClassName("bugattitextcon");
  var parallex2 = document.getElementsByClassName("lamtextcon");
  var parallex3 = document.getElementsByClassName("ferraritextcon");
  var parallex4 = document.getElementsByClassName("cartextcon");
  var parallex5 = document.getElementsByClassName("car5textcon");
  var parallex6 = document.getElementsByClassName("bugatti1");

  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    parallex[0].style.marginRight = (value / 2) * 1 + "px";
    parallex2[0].style.marginRight = (value / 2) * 1 + "px";
    parallex3[0].style.marginRight = (value / 2) * 1 + "px";
    parallex4[0].style.marginRight = (value / 2) * 1 + "px";
    parallex5[0].style.marginRight = (value / 2) * 1 + "px";
    parallex6[0].style.marginRight = value * 1 + "px";
    return () => {
      window.removeEventListener("scroll");
    };
  });
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <div className="bugatti">
        <div className="bugatti1">
          <h1 className="bugattitext1">Super Cars*</h1>
        </div>
      </div>
      <div className="bugattinote">
        <div className="btncon">
          <button data-aos="fade-up" className="btn">
            <a href="https://www.bugatti.com/chiron/" target="_blank">
              Visit
            </a>
          </button>
        </div>
        <div className="bugattitextcon">
          <h1 className="bugattitext">Bugatti Chiron</h1>
        </div>
      </div>
      <div className="lam">
        <div className="btncon2">
          <button data-aos="fade-up" className="btn">
            <a
              href="https://www.lamborghini.com/en-en/models/huracan"
              target="_blank"
            >
              Visit
            </a>
          </button>
        </div>
        <div className="lamtextcon">
          <h1 className="lamtext">Lamborghini Huracán</h1>
        </div>
      </div>
      <div className="lamnote">
        <div className="btncon2">
          <button data-aos="fade-up" className="btn">
            <a
              href="https://www.ferrari.com/en-EN/auto/laferrari"
              target="_blank"
            >
              Visit
            </a>
          </button>
        </div>
        <div className="ferraritextcon">
          <h1 className="ferraritext">Ferrari LaFerrari</h1>
        </div>
      </div>
      <div className="car4">
        <div className="btncon2">
          <button data-aos="fade-up" className="btn">
            <a
              href="https://www.porsche.com/pap/_french-polynesia_/motorsportandevents/motorsport/customerracing/racingcars/911-gt2-rs-clubsport/"
              target="_blank"
            >
              Visit
            </a>
          </button>
        </div>
        <div className="cartextcon">
          <h1 className="cartext">porsche gt2 rs</h1>
        </div>
      </div>
      <div className="car5">
        <div className="btncon2">
          <button data-aos="fade-up" className="btn">
            <a
              href="https://www.audiusa.com/us/web/en/models/r8/r8-coupe/2022/overview.html"
              target="_blank"
            >
              Visit
            </a>
          </button>
        </div>
        <div className="car5textcon">
          <h1 className="car5text">Audi R8</h1>
        </div>
      </div>
    </>
  );
}

export default Car;
