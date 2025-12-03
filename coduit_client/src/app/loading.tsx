"use client";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader animate-pulse">
            <div className="bar vertical left   orange"></div>  
            <div className="bar vertical right  lime"></div>    

            <div className="bar horizontal top    red"></div>
            <div className="bar horizontal bottom blue"></div>  
      </div>
      {/* <div>
        <p className="text-white">Loading interests</p>
      </div> */}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-diretion:column;
  gap:20px;
  align-items: center;
  justify-content: center;
  z-index: 9999;


        .loader {
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: rotate(165deg);
            
        }

        .image-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 76px;
            height: 76px;
            background-color: white;
            padding: 2px;
            border-radius: 20px;
            z-index: 100; 
        }

        .image-container img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .bar {
            position: absolute;
            border-radius: 50px;
        }
        .left  { left: 0; }
        .right { right: 0; }
        .top    { top: 0; }
        .bottom { bottom: 0; }
        .orange{ 
            background: orange;      
            z-index: 30; 
            animation: loading4 2.5s infinite ease-in-out;
        }
        .lime  { 
            background: lime;       
            z-index: 50;
            animation: loading3 2.5s infinite ease-in-out;
         } 
        .red {
            background: red;    
            z-index: 40; 
            animation: loading1 2.5s infinite ease-in-out;

        }
        .blue  { 
            background: blue;      
            z-index: 20; 
            animation: loading2 2.5s infinite ease-in-out;
        } 
        @keyframes loading1 {
            0% {
                width: 40%;
                left: -30%;
                height: 40%;
                border-radius: 100%;
            }
            25% {
                width: 180%;
                left: -30%;
                border-radius: 100px;
                height: 40%;
            }
            50%,75%{
                width: 40%;
                height: 40%;
                border-radius: 50%;
                left:115%;
            }
            100% {
                width: 40%;
                left: -30%;
                height: 40%;
                border-radius: 100%;
            }
        }
        @keyframes loading2 {
            0% {
                width: 40%;
                right: -30%;
                height: 40%;
                border-radius: 100%;
            }
            25%{
                width: 160%;
                height: 40%;
                border-radius: 100px;
                right: -30%;
            }
            50%, 75%{
                width: 40%;
                height: 40%;
                border-radius: 50%;
                right: 115%;
            }
            100% {
                width: 40%;
                right: -30%;
                height: 40%;
                border-radius: 100%;
            }
        }
        @keyframes loading3 {
            0% {
                width: 40%;
                top: -30%;
                height: 40%;
                border-radius: 100%;
            }
             25%{
                height: 160%;
                width: 40%;
                border-radius: 100px;
                top: -30%;
            }
            50%, 75%{
                height: 40%;
                width: 40%;
                border-radius: 50%;
                top: 115%;
            }
            100% {
                height: 40%;
                top: -30%;
                width: 40%;
                border-radius: 100%;
            } 
        }
        @keyframes loading4 {
            0% {
                width: 40%;
                bottom: -30%;
                height: 40%;
                border-radius: 100%;
            }
             25%{
                height: 160%;
                width: 40%;
                border-radius: 100px;
                bottom: -30%;
            }
            50%, 75%{
                height: 40%;
                width: 40%;
                border-radius: 50%;
                bottom: 115%;
            }
            100% {
                height: 40%;
                bottom: -30%;
                width: 40%;
                border-radius: 100%;
            } 
        }
`;

export default Loader;