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


const myStyle = {
 width: "40px"
}