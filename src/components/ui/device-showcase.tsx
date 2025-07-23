"use client";

import React from 'react';

const DeviceShowcase = () => {
  return (
    <div className="pb-20">
      <div className="container devices">
        <div className="screen monitor">
          <div className="content">
            <div className="pg">
              <ul className="btns">
                <li></li><li></li><li></li>
              </ul>
              <div className="screen-content">
                <ul className="txt">
                  <li></li>        
                  <li className="big"></li>
                  <li className="third"></li>
                  <li className="third"></li>
                  <li className="third"></li>
                  <li></li>        
                  <li></li>
                  <li className="third"></li>
                  <li className="third"></li>
                  <li className="third"></li>
                  <li className="third"></li>
                  <li className="third"></li>
                  <li className="third"></li>
                  <li></li>        
                  <li className="big"></li>
                  <li className="third"></li>
                  <li className="third"></li>
                  <li className="third"></li>
                  <li className="third"></li>
                  <li className="third"></li>
                  <li className="third"></li>
                </ul> 
              </div>
            </div>
          </div>
          <div className="base">
            <div className="grey-shadow"></div>
            <div className="foot top"></div>
            <div className="foot bottom"></div>
          </div>
        </div>
        
        <div className="laptop">
          <div className="content">
            <ul className="txt">
              <li></li>        
              <li className="big"></li>
              <li className="third"></li>
              <li className="third"></li>
              <li className="third"></li>
              <li></li>        
              <li></li>
              <li className="third"></li>
              <li className="third"></li>
              <li className="third"></li>
              <li className="third"></li>
              <li className="third"></li>
              <li className="third"></li>
              <li></li>        
              <li className="big"></li>
              <li className="third"></li>
              <li className="third"></li>
              <li className="third"></li>
              <li className="third"></li>
              <li className="third"></li>
              <li className="third"></li>
            </ul>           
          </div>
          <div className="btm"></div>
        </div>
        
        <div className="phone">
          <div className="screen">
            <div className="content">
              <ul className="txt">
                <li></li>
                <li></li>
                <li className="half"></li>
                <li className="half"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className="half"></li>
                <li className="half"></li>
                <li className="half"></li>
                <li className="half"></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="ipad">
          <div className="screen">
            <div className="content screen-content">
              <ul className="txt">
                <li></li>
                <li className="big"></li>
                <li className="half"></li>
                <li className="half"></li>
                <li className="half"></li>
                <li className="half"></li>
                <li></li>        
                <li></li>
                <li className="half"></li>
                <li className="half"></li>
                <li className="half"></li>
                <li className="half"></li>
                <li className="half"></li>
                <li className="half"></li>
                <li className="half"></li>
                <li className="half"></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>  
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .container {
          max-width: 680px;
          margin: 2em auto;
          position: relative;
        }

        .devices {
          font-size: 10px;
          padding: 1em;
        }

        @media (min-width: 38em) {
          .devices {
            font-size: 16px;
          }
        }

        .devices > .screen {
          width: 28.750em;
          height: 17.5em;
          position: relative;  
          background: #f8f8f8;
          border: 10px solid #1f1f1f;
          border-radius: 10px;
          margin: 0 auto;
        }

        @media (min-width: 38em) {
          .devices > .screen {
            border: 20px solid #1f1f1f;
          }
        }

        .monitor > div {
          position: absolute;
        }

        .monitor:before,
        .monitor:after,
        .laptop:before{
           content: "";
           position: absolute;
           left: 50%;
         }

        .monitor:before,
        .laptop:before {
          top: -0.250em;
          margin: -0.188em 0 0 -0.188em;
          width: 0.250em;
          height: 0.250em;
          border-radius: 0.250em;
          background: #d8dbe1;
        }

        @media (min-width: 38em) {
          .monitor:before,
          .laptop:before {
            top: -10px;
          }
        }

        .screen:after {
          width: 8px;
          height: 8px;
          border-radius: 8px;
          bottom: -5px;
          margin: 0 0 -0.250em -0.250em;
          background: #e8ebf0;
        }

        @media (min-width: 38em) {
          .screen:after {
            bottom: -10px;
          }
        }

        .content {
          width: 26.25em;
          height: 15em;
          left: 50%;
          margin-left: -13.125em;
          overflow: hidden;
        }

        .content:before {
          content: "";
          position: absolute;
          right: -90px;
          width: 200px;
          height: 300px;
          transform: rotate(45deg);
          background: linear-gradient(to bottom, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);
          z-index: 5;
        }

        .pg {
          width: 240px;
          height: 180px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin: -90px 0 0 -120px;
          background: #ffffff;
          border: 1px solid #e8ebf0;
          border-top: 20px solid #d8dbe1;
          border-radius: 5px;
        }

        .screen-content {
          overflow: hidden;
          height: 159px;
        }

        .btns {
          position: absolute;
          top: -20px;
          left: 7px;
        }

        .btns:before {
          content: "";
          position: absolute;
          left: 35px;
          top: 5px;
          height: 10px;
          width: 185px;
          background: #fff;
          border-radius: 3px;
        }

        .btns > li {
          display: inline-block; 
          list-style: none;
          width: 5px;
          height: 5px;
          border-radius: 5px;
          background: #fc5254;
          margin-right: 4px;
        }

        .btns li:nth-child(2) {
           background: #fcae52; 
        }

        .btns li:nth-child(3) {
           background: #66b34e; 
        }

        .txt {
          margin: 10px auto; 
          width: 85%;
          text-align: center;
          font-size: 0;
        }

        .txt > li {
          background: #e8ebf0;
          width: 100%;
          height: 15px;
          margin-bottom: 9px;
          font-size: 10px;
        }

        @media (min-width: 38em) {
          .txt > li {
            font-size: 16px;
          }
        }

        .txt > li.big {
          height: 60px;
        }

        .screen .txt,
        .laptop .txt {
          animation: scroll 4s 1s cubic-bezier(0.250, 0.100, 0.250, 1.000) infinite;
        }

        @keyframes scroll {
          20%,60% { transform: translateY(-62%); }
          80% { margin-top: -50px; }
        }

        .txt > .third {
          height: 43px;
          width: 30%;
          margin-right: 5%;
          display: inline-block;  
        }

        .txt > li:nth-child(5),
        .txt > li:nth-child(10),
        .txt > li:nth-child(13), 
        .txt > li:nth-child(18),
        .txt > li:nth-child(21) {
          margin-right: 0;
        }

        .base {
          width: 5.625em;
          height: 3.1em;
          bottom: -3.9em;
          left: 50%;
          margin-left: -2.8125em;
          background: #e8ebf0;
        }

        @media (min-width: 38em) {
          .base {
            bottom: -4.375em;
          }
        }

        .base:before,
        .base:after,
        .grey-shadow:before,
        .grey-shadow:after{
          content: "";
          position: absolute;
          top: 0;
        }

        .base:before {
          border-left: 0.813em solid transparent;
          border-right: 0px solid transparent;
          border-bottom: 3.125em solid #e8ebf0;
          left: -0.77em;
        }

        .base:after {
          border-right: 0.813em solid transparent;
          border-left: 0px solid transparent;
          border-bottom: 3.125em solid #e8ebf0;
          right: -0.77em;
        }

        .base > div {
           position: absolute; 
        }

        .grey-shadow {
          width: 5.625em;
          height: 0.750em;
          background: #d8dbe1;
          top: 0;
        }

        .grey-shadow:before {
          border-left: 3px solid transparent;
          border-right: 0px solid transparent;
          border-bottom: 0.750em solid #d8dbe1;
          left: -3px;
        }

        .grey-shadow:after {
          border-right: 3px solid transparent;
          border-left: 0px solid transparent;
          border-bottom: 0.750em solid #d8dbe1;
          right: -2px;
          z-index: 1;
        }

        .foot {
          background: #e8ebf0;
        }

        .foot.top {
          width:7.250em;
          height: 0.313em;
          bottom: -0.313em;
          left: 50%;
          margin-left: -3.625em;
        }

        .foot.top:before,
        .foot.top:after,
        .foot.bottom:before {
          content: "";
          position: absolute;
          top: 0px;
        }

        .foot.top:before {
          border-left: 16px solid transparent;
          border-right: 0px solid transparent;
          border-bottom: 5px solid #e8ebf0;
          left: -16px;
        }

        .foot.top:after {
          border-right: 1em solid transparent;
          border-left: 0px solid transparent;
          border-bottom: 5px solid #e8ebf0;
          right: -1em;
        }

        .foot.bottom {
          width: 9.375em;
          height: 0.313em;
          bottom: -0.625em;
          left: 50%;
          margin-left: -4.688em;
        }

        .laptop {
          width: 14.688em;
          height: 9.688em;
          background: #f8f8f8;
          border: 0.750em solid #1f1f1f;
          border-radius: 10px 10px 0 0;
          position: absolute;
          bottom: -5em;
          right: 1.875em;
          z-index: 2;
        }

        .laptop:before {
         top: -6px;
        }

        .laptop > div {
          position: absolute; 
        }

        .laptop > .content {
          width: 13.188em;
          height: 8.188em;
          left: 0;
          margin-left: 0;
          background: #fff;
        }

        .btm {
          width: 18.500em;
          height: 0.625em;
          bottom: -1.188em;
          left: 50%;
          margin-left: -9.250em;
          border-radius: 0 0 20px 20px;
          background: #e8ebf0;
          z-index: 1;
        }

        .btm:before {
          content: "";
          position: absolute;
          width: 42px;
          height: 4px;
          left: 50%; 
          top: 0;
          margin-left: -21px;
          border-radius: 0 0 5px 5px;
          background: #d8dbe1;
        }

        .phone {
          width: 4.125em;
          height: 8.750em;
          position: absolute;
          bottom: -5em;
          left: 1em;
          border-radius: 8px;
          background: #1f1f1f;
          border: 1.563em solid #1f1f1f;
          border-left: 0.313em solid #1f1f1f;
          border-right: 0.313em solid #1f1f1f;
        }

        .phone:before,
        .phone:after {
          content: "";
          position: absolute;
          left: 50%;
          background: #474e5d;
        }

        .phone:before {
          background: #474e5d;
          width: 1.250em;
          height: 0.250em;
          margin-left: -0.625em;
          top: -0.750em;
          border-radius: 2px;
        }

        .phone:after {
          width: 0.625em;
          height: 0.625em;
          border-radius: 0.625em;
          bottom: -1.125em;
          margin-left: -0.313em;
        }

        .phone .screen {
          width: 3.50em;
          height: 5.625em;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .phone .content {
          background: #fff;
          width: 100%;
          height: 21em;
          left: 0%;
          margin-left: 0px;
        }

        .phone .txt > li {
          height: 1.250em;
        }

        .txt > li.half {
          width: 44%;
          margin-right: 6%;
          display: inline-block;  
        }

        .txt > li.half:nth-of-type(even) {
          margin-right: 0;
        }

        .ipad {
          width: 8.75em;
          height: 12.750em;
          position: absolute;
          bottom: -5em;
          left: 6em;
          border-radius: 8px;
          background: #1f1f1f;
          border: 1.563em solid #1f1f1f;
          border-left: 0.313em solid #1f1f1f;
          border-right: 0.313em solid #1f1f1f;
        }

        .ipad:before,
        .ipad:after {
          content: "";
          position: absolute;
          left: 50%;
          background: #474e5d;
        }

        .ipad:before {
          background: #474e5d;
          width: 1.250em;
          height: 0.250em;
          margin-left: -0.625em;
          top: -0.750em;
          border-radius: 2px;
        }

        .ipad:after {
          width: 0.625em;
          height: 0.625em;
          border-radius: 0.625em;
          bottom: -1.125em;
          margin-left: -0.313em;
        }

        .ipad .screen {
          width: 8em;
          height: 9.7em;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .ipad .content {
          background: #fff;
          width: 100%;
          left: 0%;
          margin-left: 0px;
        }

        .ipad .half {
          height: 35px;
        }
          
        .shadow {
          position: absolute;
          width: 350px;
          height: 15px;
          left: 50%;
          margin-left: -175px;
          z-index: -1;
          bottom: -20px;
        }

        .laptop .shadow {
          width: 450px;
          margin-left: -225px; 
          bottom: -26px;
        }

        .phone .shadow {
          bottom: -30px;
          margin-left: -50px;
          height: 10px;
          width: 100px
        }

        .phone .txt {
          animation: scroll 4s 1s cubic-bezier(0.250, 0.100, 0.250, 1.000) infinite;
        }
      `}</style>
    </div>
  );
};

export default DeviceShowcase;
