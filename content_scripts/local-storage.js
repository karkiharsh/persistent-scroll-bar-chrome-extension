//creating a cookie based on href

//calling this function every time user scrolls

export function save_website_scroll_state() {
  var website_href = window.location.search;
}

export default function saveSiteScrollData(website, scrollTop) {
  //website -> string
  // scrollTop -> position of scroll bar

  localStorage.setItem(website, scrollTop);
}

/* Issues 


what about sites like youtube,facebook ?




*/
