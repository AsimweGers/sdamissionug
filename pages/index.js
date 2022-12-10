import { useState } from "react";

export default function Home() {
  return (
    <div>
      <head>
        <title>SdaMissionUg | Sda To The World</title>
        <link rel="icon" href="/uquickslogo.png" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:title" content="SdaMissionUg | Sda To The World" />
        <meta property="og:description" content="" />
      </head>
      <div className="container mb-4">
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 justify-center flex flex-wrap">
            <h1> Am the home section</h1>
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8 mx-4">
              <h1>Post Wigdet</h1>
              <h1>Label</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
