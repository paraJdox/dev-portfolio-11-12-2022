import { navLinks } from "../data/nav-links-data.js";

const navLinkElement = (nav) => {
  // create the navLink element using an <li>
  const listItem = document.createElement("li");

  // create a hyperlink element <a>
  const hyperlink = document.createElement("a");

  // only apply this style to the intro link (first nav link)
  // to look good on the first page load
  if (nav.href === "#intro") {
    listItem.classList.add("current");
  }

  // add data to the hyperlink element
  hyperlink.setAttribute("href", `${nav.href}`);
  hyperlink.classList.add("smoothscroll");
  hyperlink.textContent = nav.label;

  // so the resume nav link will be opened in another tab
  if (nav.label === "Resume") {
    hyperlink.setAttribute("target", "_blank");
    hyperlink.classList.remove("smoothscroll");
  }

  // add the hyperlink <a> in the newly created list item <li>
  listItem.append(hyperlink);

  return listItem;
};

/*===============
  MAIN FUNCTION
===============*/
export const renderNavLinks = () => {
  // get the (parent) element from the UI that will store our nav links
  const navContainer = document.querySelector(".s-header__menu-links");

  // add the link elements to the (parent) nav container (to be displayed in the UI)
  navLinks.forEach((nav) => {
    navContainer.append(navLinkElement(nav));
  });
};
