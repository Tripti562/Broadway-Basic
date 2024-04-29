import Main from "./Main";
import mainData from "./Data";
import Border from "./Border";

export default function(){
    const users =mainData.map(function(singleData){
        return(
            <div>
                <Main
            image={singleData.image}
            countryname={singleData.countryname}
            destinyname={singleData.destinyname}
            duration={singleData.duration}
            detail={singleData.detail}
            />
            <Border></Border>
            </div>
            
        );
      });
      return(
      
                       
            <>{users}</>

        
       
      )
}