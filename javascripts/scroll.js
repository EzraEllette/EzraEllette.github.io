const scroll = (direction) => {
  const multiplier = direction === "up" ? -1 : 1;

  let scrollOptions = () => {
    return {
      top: window.innerHeight * multiplier,
      behavior: "smooth"
    };
  }

  return () => {
    window.scrollBy(scrollOptions());
  }
}

document.getElementById("down-arrow").addEventListener('click', scroll());
document.getElementById("up-arrow").addEventListener('click', scroll("up"));