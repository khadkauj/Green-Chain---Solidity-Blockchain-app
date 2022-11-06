import { useEffect, useState } from "react";

const colors = ["#F6EEE3", "#FDF5E6", "#ECD9BA"];
const delay = 10000; 
const text =["Promoting Green token and NFT","Calculating carbon footprint of firms","Building trust between consumers and firms using blockchain"]

function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide" 
            key={index}
            style={{ backgroundColor }}
          ><div className='text-design'>{text[index]}</div></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div key={idx}  className={`slideshowDot${index === idx ? " active" : ""}`}></div>
        ))} 
      </div> 
      <style jsx>{`
                .content_container {
                  display: flex;
                  flex-direction: column;
                  height: 92vh;
                }
                .title {
                  font-size: 2vh;
                }
                .count {
                  font-size: 2.5vh;
                } 

                .button-design{ 
                 margin-left: auto !important;
                
              } 
              
              .button-design:hover {
                  background-color: #4CAF50; /* Green */
                  color: white;
                }  
            
                
                .sliders {
                  background-color: black;
                } 
                .slideshow {
                  margin: 0 auto;
                  overflow: hidden;
                  max-width: 500px; 
                  margin-top:30px;
                }
                
                .slideshowSlider {
                  white-space: nowrap;
                  transition: ease 1000ms;
                }
                
                .slide {
                  display: inline-block;
                  height: 120px;
                  width: 100%;
                  border-radius: 40px;
                }
                
                /* Buttons */
                
                .slideshowDots { 
                  text-align: center;
                }
                
                .slideshowDot {
                  display: inline-block;
                  height: 20px;
                  width: 20px;
                  border-radius: 50%;
                
                  cursor: pointer;
                  margin: 15px 7px 0px;
                
                  background-color: #c4c4c4;
                } 
                .slideshowDot.active {
                  background-color: #6a0dad;
                } 
                .text-design{
                  margin-top:50px; 
                  color: black;  
                  text-align: center;
                }
      `}</style>
    </div>
    
  );
}

export default Slideshow