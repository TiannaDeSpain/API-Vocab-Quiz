import { quizTemplate } from "./quiz.mjs";

export function toggleNav() {
  var updateElement = document.getElementById("menu-icon");
  var sidebar = document.getElementById("sidebar");
  updateElement.classList.toggle("open");
  sidebar.classList.toggle("open");

  var p = document.getElementById("hamwords");

    if(p.innerHTML === "menu") { 
       p.innerHTML = "close";
    } else {
       p.innerHTML = "menu";
    };
}

export function getLocalStorage(key) {
  try {
    const value = localStorage.getItem(key);
    if (value === null) {
      return null;
    }
    return JSON.parse(value);
  } catch (error) {
    console.error("Error retrieving from local storage:", error);
    return null;
  }
}

// save data to local storage
export function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}


// async function convertToJson(res) {
//   const data = await res.json();
//   if (res.ok) {
//     return data;
//   } else {
//     throw {
//       name: "servicesError",
//       message: data
//     };
//   }
// }



// Partials

// export function renderListWithTemplate(templateFn, parentElement, list, position = 'afterbegin', clear = true) {
//   if (clear) {
//     parentElement.innerHTML = "";
//   }
//   const htmlString = list.map(templateFn);
//   parentElement.insertAdjacentHTML(position, htmlString.join(""));
// }

// export async function renderWithTemplate(template, parentElement, data, position = 'afterbegin', clear = true) {
//   if (clear) {
//     parentElement.innerHTML = "";
//   }

//   const htmlString = await template(data);
//   parentElement.insertAdjacentHTML(position, htmlString);
  
// }


// function loadTemplate(path) {
//   return async function () {
//     const res = await fetch(path);
//     if (res.ok) {
//       const html = await res.text();
//       return html;
//     }
//   };
// }

// export function loadHeaderFooter() {
//   const headerTemplateFn = loadTemplate("./partials/header.html");
//   const headerLocation = document.querySelector("#main-header");
//   renderWithTemplate(headerTemplateFn, headerLocation);
//   console.log('hi')
// }
