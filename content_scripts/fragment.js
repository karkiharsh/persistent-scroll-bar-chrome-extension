// look for the node .. and highlight it  from the beginning with a fading look

/* 
I think we shall try to position user to 

*/

//this is chatGPT for reference .. getBoundingClientRect()
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.querySelectorAll("*").forEach((el) => {
  if (isElementInViewport(el)) {
    console.log(el, "is in the viewport");
  }
});

//---- IntersectionObserver API .. this is chatGPT for reference

// Create an Intersection Observer instance
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target, "is in the viewport");
      }
    });
  },
  {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.1, // Adjust this threshold to control when the callback is triggered
  }
);

// Observe all elements

// wrap this function in an event listener
document.querySelectorAll("*").forEach((el) => {
  observer.observe(el);
});
