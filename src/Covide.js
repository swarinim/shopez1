import React from "react";
import "./Covide.css";
import Product from "./Product";

function Covid() {
  return (
    <div className="covid">
      <div className="covid__container">
        
         

        <div className="covid__row">
          <Product
            id="12321341"
            title="Mask"
            price={200}
            rating={5}
            image="https://cdn.discordapp.com/attachments/731151031592812585/842255804974235648/download_2.jpg"
          />
          <Product
            id="49538094"
            title="Set of 4  Mask"
            price={600.0}
            rating={4}
            image="https://cdn.discordapp.com/attachments/731151031592812585/842255821102514176/download_1.jpg"
          />
          <Product
            id="49538094"
            title="Sanitiser"
            price={200.0}
            rating={4}
            image="https://cdn.discordapp.com/attachments/731151031592812585/842255867688255508/images.jpg"
          />
        </div>

        <div className="covid__row">
          <Product
            id="4903850"
            title=" Sanitiser "
            price={400.99}
            rating={3}
            image="https://cdn.discordapp.com/attachments/731151031592812585/842255848692514816/images_1.jpg"
          />
          <Product
            id="23445930"
            title="Dettol "
            price={200.99}
            rating={5}
            image="https://cdn.discordapp.com/attachments/731151031592812585/842255882204872704/download.jpg"
          />
          <Product
            id="4903850"
            title=" Gloves "
            price={100.99}
            rating={3}
            image="https://cdn.discordapp.com/attachments/731151031592812585/842255901276373032/download_5.jpg"
          />
          
        </div>

        <div className="covid__row">
          <Product
            id="23445930"
            title="White Gloves"
            price={200.99}
            rating={5}
            image="https://cdn.discordapp.com/attachments/731151031592812585/842255755944132618/download_4.jpg"
          />
          <Product
            id="90829332"
            title="PPE KIT"
            price={945.98}
            rating={4}
            image="https://cdn.discordapp.com/attachments/731151031592812585/842255790995013692/download_3.jpg"
          />
          <Product
            id="3254354345"
            title="Set of covid essentials"
            price={1200.99}
            rating={4}
            image="https://cdn.discordapp.com/attachments/731151031592812585/842255772011200522/images_2.jpg"
          />
          
        </div>
      </div>
    </div>
  );
}

export default Covid;
