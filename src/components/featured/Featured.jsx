import { PlayArrow,InfoOutlined } from "@material-ui/icons";
import "./featured.scss"

export default function Featured() {
   return (
      <div className="featured">
         <img
            // width="100%"
            src="https://images.unsplash.com/photo-1541708848705-cec66ea1efc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
         />
         <div className="info">
         <img
            width="100%"
            src="https://e7.pngegg.com/pngimages/859/930/png-clipart-the-conjuring-logo-font-graphics-brand-annabelle-text-logo.png"
            alt=""
         />
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quo, quibusdam provident sequi magni aspernatur a ratione odio qui sint. Quod rem aspernatur nisi voluptate repudiandae voluptatem minus illum architecto.</span>
            <div className="buttons">
               <button className="play">
                  <PlayArrow/>
                  <span>Play</span>
               </button>
               <button className="more">
                  <InfoOutlined />
                  <span>Info</span>
               </button>
            </div>
         </div>
      </div>
   );
}
