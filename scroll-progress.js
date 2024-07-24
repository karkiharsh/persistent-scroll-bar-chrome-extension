//browser behaviour keeps on changing , so for consistency we must check our program
// across different browsers!

export default function calculateScrollProgress() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // window.ScrollY -> read only

  // document.body.scrollTop -> pretty consistent to set value

  /*  
  window.scrollY and document.body.scrollTop are related and consistent on chrome . 


      console.log('Current scroll position:');
      console.log('window.scrollY:', window.scrollY); 
      console.log('document.documentElement.scrollTop:', document.documentElement.scrollTop);
      console.log('document.body.scrollTop:', document.body.scrollTop);
*/

  const scrollTop =
    //The || operator in JavaScript is the logical OR operator.
    // It evaluates operands from left to right and returns the first truthy value it encounters
    window.ScrollY ||
    window.pageYOffset ||
    document.body.scrollTop +
      ((document.documentElement && document.documentElemetn.scrollTop) || 0);

  const scrolled = scrollTop + windowHeight;
  const progress = (scrolled / documentHeight) * 100;

  return progress.toFixed(2);
}

//manually set scroll bar through :

/*
window.scrollTo(0,y)
window.scrollBy(x,y) -> scrolls by amount



*/
//add event Listener for scroll

document.addEventListener("scroll", () => {
  const scrollProgress = calculateScrollProgress();
  console.log(`Scroll progress: ${scrollProgress}%`);
});
