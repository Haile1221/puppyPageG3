import React from 'react';
import  BuannerPuppy  from "../../assets/images/banner-puppies.jpg"
import  PuppyOne from "../../assets/images/puppy-1.jpg"
import  PuppyTwo from "../../assets/images/puppy-2.jpg"
import  PuppyThree from "../../assets/images/puppy-3.jpg"
import  PuppyFour from "../../assets/images/puppy-4.jpg"

const Body = () => {
  return (
    <div>


<div className="banner-puppy mt-5 mb-5">
  <img src={BuannerPuppy} className="img-fluid w-100" alt="Banner Puppy" />
</div>
<section className="container-fluid  " >
  <div className="row justify-content-center justify-content-xl-center">
    <div className="col-12 col-md-6 col-xl-3 puppy-item mb-5">
      <img src={PuppyOne} className="img-fluid w-100" alt="Puppy 1" />
    </div>

    <div className="col-12 col-md-6 col-xl-3 puppy-item text-center missingpuppy d-none d-md-block">
      <p>Puppy missing here!!</p>
    </div>

    <div className="col-12 col-md-6 col-xl-3 puppy-item">
      <img src={PuppyTwo} className="img-fluid w-100" alt="Puppy 2" />
    </div>

    <div className="col-12 text-center headingTwo m-5">
      <h2>More Puppies</h2>
    </div>

    <div className="col-12 col-md-6 col-xl-3 puppy-item   Puppy-3  mb-5 ">
      <img src={PuppyThree} className="img-fluid w-100 "  alt="Puppy 3" />
    </div>

    <div className="col-12 col-md-6 col-xl-3 puppy-item ">
      <img src={PuppyFour} className="img-fluid w-100  puppy-4 ml-5" alt="Puppy 4" />
    </div>
  </div>
</section>




    </div>
  );
}

export default Body;
