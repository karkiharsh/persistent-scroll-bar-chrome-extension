export default function calculateScrollProgress() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop =
    window.ScrollY ||
    window.pageYOffset ||
    document.body.scrollTop +
      ((document.documentElement && document.documentElemetn.scrollTop) || 0);

  const scrolled = scrollTop + windowHeight;
  const progress = (scrolled / documentHeight) * 100;

  return progress.toFixed(2);
}

//add event Listener for scroll

document.addEventListener("scroll", () => {
  const scrollProgress = calculateScrollProgress();
  console.log(`Scroll progress: ${scrollProgress}%`);
});
