export default function saveSiteScrollData(website, scrollTop) {
  //website -> string
  // scrollTop -> position of scroll bar

  localStorage.setItem(website, scrollTop);
}
