// alert("unpacked extension loaded");
alert("hi");

console.log(document);

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
