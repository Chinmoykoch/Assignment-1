import React from "react";
import "./page.scss";

function UserImage() {
  const Page = [
    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
    },
    {
      image:
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx",
    },
    {
      image:
        "https://images.hindustantimes.com/auto/img/2021/08/27/600x338/WhatsApp_Image_2021-02-26_at_11.16.43_1614318425088_1614318432264_1630046377802.jpeg"},
    {
      image:
        "https://cdn.motor1.com/images/mgl/zP74K/s6/mmclead.jpg",
    },
    {
      image:
        "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/866c7a427d5649e2bde571187f6fd725.jpg",
    },
    {
      image:
        "https://i0.wp.com/www.car-revs-daily.com/wp-content/uploads/2019/03/Grabber-Lime_1-resized.jpg?fit=800%2C534&ssl=1",
    },
    {
      image:
        "https://cdn-fastly.autoguide.com/media/2023/07/02/13458328/mercedes-benz-maybach-s-class-review-specs-pricing-features-videos-and-more.jpg?size=720x845&nocrop=1",
    },
    {
      image:
        "https://cdn.carbuzz.com/gallery-images/1600/781000/600/781669.jpg",
    },
    {
      image:
        "https://smgmedia.blob.core.windows.net/images/114178/1440/mclaren-720s-coupe-petrol-79f60b3c2fc2.jpg",
    },
    {
      image:
        "https://starrluxurycars.com/wp-content/uploads/2023/05/SLC-range-rover-vogue-lwb-chicago-hire-starr-luxury-cars-chicago-illinois-architecture-lakefront-navy-pier-willis-tower-john-hancock-wrigley-field-sports.jpg",
    },
    {
      image:
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/10-porsche-718-cayman-gt4-rs-top-10.jpg?itok=BacF-43A",
    },
    {
      image:
        "https://autobunny-docs.s3.ca-central-1.amazonaws.com/929/car/forsale/images/2020/06/pic-8e41b8d247d873bf5fd6b6ec52af6abd.jpg",
    },
    {
      image:
        "https://images.prestigeonline.com/content/uploads/2017/12/12062127/Rolls-Royce2.jpg",
    },
    {
      image:
        "https://images.classic.com/vehicles/cabc85b0ecd836226e89af8a703447a7.jpeg?ar=16%3A9&fit=crop&w=600",
    },
    {
      image:
        "https://cdn.osvehicle.com/1665621625596.jpg",
    },
    {
      image:
        "https://4.bp.blogspot.com/-hsr-GAsXbMc/V_pq7N2CEdI/AAAAAAAAjQQ/TfcLF9T22PkEZr98ZHN351xSJB3gzQijwCEw/s400/2017_audi_r8_v10_plus_00.jpg",
    },
    {
        image:
        "https://www.topgear.com/sites/default/files/2022/05/Aston%20Martin%20V12%20Vantage%20Photo%20Max%20Earey%20052.jpg"
    },
         
    {
        image:
        "https://www.topgear.com/sites/default/files/2022/05/Aston%20Martin%20V12%20Vantage%20Photo%20Max%20Earey%20052.jpg"
    },
    {
        image:
        "https://www.topgear.com/sites/default/files/2022/05/Aston%20Martin%20V12%20Vantage%20Photo%20Max%20Earey%20052.jpg"
    },
    {
        image:
        "https://www.topgear.com/sites/default/files/2022/05/Aston%20Martin%20V12%20Vantage%20Photo%20Max%20Earey%20052.jpg"
    },
    {
        image:
        "https://www.topgear.com/sites/default/files/2022/05/Aston%20Martin%20V12%20Vantage%20Photo%20Max%20Earey%20052.jpg"
    },
    {
        image:
        "https://www.topgear.com/sites/default/files/2022/05/Aston%20Martin%20V12%20Vantage%20Photo%20Max%20Earey%20052.jpg"
    },
    {
        image:
        "https://www.topgear.com/sites/default/files/2022/05/Aston%20Martin%20V12%20Vantage%20Photo%20Max%20Earey%20052.jpg"
    },
                
    {
        image:
        "https://www.topgear.com/sites/default/files/2022/05/Aston%20Martin%20V12%20Vantage%20Photo%20Max%20Earey%20052.jpg"
    },
             
              
  ];

  return (
    <div className="page">
    <h1>Select Your Favourite Cars</h1>
        <div className="container">
        {Page.map((p, index) => (
            <div className="user_image" key={index}>
            <img src={p.image} alt={`Car ${index + 1}`} />
            </div>
        ))}
        </div>
    </div>
  );
}

export default UserImage;
