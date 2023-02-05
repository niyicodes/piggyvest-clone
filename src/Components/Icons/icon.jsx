export const Menu = () => {
 return (
  <svg
   fill="none"
   stroke="currentColor"
   stroke-width="1.5"
   viewBox="0 0 24 24"
   xmlns="http://www.w3.org/2000/svg"
   aria-hidden="true"
   style={myStyle}
  >
   <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
   ></path>
  </svg>
 );
};

export const X = () => {
 return (
  <svg
   fill="none"
   stroke="currentColor"
   stroke-width="1.5"
   viewBox="0 0 24 24"
   xmlns="http://www.w3.org/2000/svg"
   aria-hidden="true"
   style={myStyle}
  >
   <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M6 18L18 6M6 6l12 12"
   ></path>
  </svg>
 );
};

export const RightArrow = () =>{
 return(
  <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={arrow}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
</svg>
 )
}


const myStyle = {
 width: "40px"
}

const arrow ={
 width: "30px",
 color: "green"
}