import displayHome from "./Home";
import displayMenu from "./Menu";
import displayAbout from "./About";

function displayContent() {
  const main = document.querySelector("#content");
  if (!main) return; 

  const renderHome  = () => { main.innerHTML = ""; displayHome();  };
  const renderMenu  = () => { main.innerHTML = ""; displayMenu();  };
  const renderAbout = () => { main.innerHTML = ""; displayAbout(); };

  renderHome();

  document.addEventListener("click", (e) => {
    const t = e.target.closest(".rb-logo, .nav-home, .homeBtn, .nav-menu, .menuBtn, .nav-about, .aboutBtn");
    if (!t) return;

    if (t.matches(".rb-logo, .nav-home, .homeBtn")) return renderHome();
    if (t.matches(".nav-menu, .menuBtn"))          return renderMenu();  
    if (t.matches(".nav-about, .aboutBtn"))        return renderAbout();
  });
}

export default displayContent;
