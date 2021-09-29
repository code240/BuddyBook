import React from 'react'
import "../../AllCss/null.css";
const CookieDelete = () => {
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
      let get = getCookie("load");
      if(get!==""){
        document.cookie = "load=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }
    return (
        <>
         <div className="nulldiv"></div>   
        </>
    )
}

export default CookieDelete;
