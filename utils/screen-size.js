export const getScreenSize = () =>{
    if(window.innerWidth >= 1200){
        return "desktop";
    } else if(window.innerWidth >= 768){
        return "tablet";
    } else {
        return "mobile";
    }
};