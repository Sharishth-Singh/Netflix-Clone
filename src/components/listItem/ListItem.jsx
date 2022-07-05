import "./listItem.scss"
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
export default function ListItem({index}) {
   const [isHovered,setisHovered] = useState(false);
   const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
   return (
      <div 
         className="listItem" 
         style={{ left: isHovered && index*225 - 50 + index*2.5}}
         onMouseEnter={() => setisHovered(true)} onMouseLeave={() => setisHovered(false)}
      >
         <img
            src="https://static.digit.in/OTT/v2/images/tr:w-1200/up-86235jpg"
            alt=""
         />
         {isHovered && (
            <>
               <video src={trailer} autoPlay={true} loop />
               <div className="itemInfo">
                  <div className="icons">
                     <PlayArrow className="icon"/>
                     <Add  className="icon"/>
                     <ThumbUpAltOutlined  className="icon"/>
                     <ThumbDownAltOutlined  className="icon"/>
                  </div>
                  <div className="itemInfoTop">
                     <span>1 hour 14 mins</span>
                     <span className="limit">+16</span>
                     <span>1999</span>
                  </div>
                  <div className="desc">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid culpa illum similique in voluptatibus non recusandae cupiditate.
                  </div>
                  <div className="genre">Action</div>
               </div>
            </>
         )}
      </div>
   )
}
