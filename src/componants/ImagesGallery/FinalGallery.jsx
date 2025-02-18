import React from "react";
import { ImageGallery } from "./ImageGallery";
import im1 from "../../assets/image.png";
import im2 from "../../assets/im2.jpg";
import im3 from "../../assets/im3.jpg";
import im4 from "../../assets/im4.jpg";
import im5 from "../../assets/im5.jpg";

const FinalGallery = () => {
  const galleryItems = [
    { imageUrl: "https://res.cloudinary.com/dg6qtpags/image/upload/v1738228895/your-cloudinary-folder-name/gi1e19knyjm1ybfdl4na.jpg", caption: "" },
    { imageUrl: "https://res.cloudinary.com/dg6qtpags/image/upload/v1738228905/your-cloudinary-folder-name/bwidxy4vkdy2leyyyjdw.jpg", caption: "" },
    { imageUrl: im1, caption: "" },
    { imageUrl: "https://res.cloudinary.com/dg6qtpags/image/upload/v1738228911/your-cloudinary-folder-name/k1cbf8akte3qgjtld1oe.jpg", caption: "" },
    { imageUrl: "https://res.cloudinary.com/dg6qtpags/image/upload/v1738228916/your-cloudinary-folder-name/s1xrpeea210ws7rf1vzs.jpg", caption: "" },
    { imageUrl: "https://res.cloudinary.com/dg6qtpags/image/upload/v1738228923/your-cloudinary-folder-name/rpzaigcmwtwpmbvmgbpt.jpg", caption: "" },
  ];

  const isMobile = window.innerWidth <= 768; 

  return (
    <div className=" ">
      <h1 className="text-center my-4 text-6xl  text-white font-bold">Previous Glimpses</h1>
      <ImageGallery
        items={galleryItems}
        direction="left"       
        speed="normal"    
        background = "cover"    
        pauseOnHover={true}    
        imageWidth={isMobile ? 350 : 450} 
        imageHeight={isMobile ? 200 : 300}     
      />
    </div>
  );
};
// dhiren-mhatre@dhiren-mhatre-Inspiron-15-3511:~/Downloads/backend$ node index.js 
// Uploading: DSC_0326.jpg
// Uploaded DSC_0326.jpg: https://res.cloudinary.com/dg6qtpags/image/upload/v1738228895/your-cloudinary-folder-name/gi1e19knyjm1ybfdl4na.jpg
// Uploading: DSC_0344.jpg
// Uploaded DSC_0344.jpg: https://res.cloudinary.com/dg6qtpags/image/upload/v1738228905/your-cloudinary-folder-name/bwidxy4vkdy2leyyyjdw.jpg
// Uploading: IMG_2752.jpg
// Uploaded IMG_2752.jpg: https://res.cloudinary.com/dg6qtpags/image/upload/v1738228911/your-cloudinary-folder-name/k1cbf8akte3qgjtld1oe.jpg
// Uploading: IMG_2841.jpg
// Uploaded IMG_2841.jpg: https://res.cloudinary.com/dg6qtpags/image/upload/v1738228916/your-cloudinary-folder-name/s1xrpeea210ws7rf1vzs.jpg
// Uploading: IMG_3932.jpg
// Uploaded IMG_3932.jpg: https://res.cloudinary.com/dg6qtpags/image/upload/v1738228923/your-cloudinary-folder-name/rpzaigcmwtwpmbvmgbpt.jpg
export default FinalGallery;