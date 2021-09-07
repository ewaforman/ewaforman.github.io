import "../scss/main.scss";

fetch("https://api.github.com/users/ewaforman/repos?sort=created&direction=asc")
  .then((res) => res.json())
  .then((res) => {
    const conteiner = document.querySelector(".project__grid--js");
    for (let repo of res) {
      console.log(repo);
      const { description, homepage, html_url, name } = repo;

      const template = `<article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        <div class="project__content">
          <img src="img/github-cat.svg" alt="" />
          <h3 class="project__grid project__title">
            <span class="project__label">project:</span>
            <span>${name}</span>
          </h3>
          <p class="project__grid project__grid">
            <span class="project__label">description: </span>
            <span> ${description} </span>
          </p>
          <p class="project__grid">
            <span class="project__label">Github: </span>
            <span>
              <a class="project__link" href="${html_url}" title="${name}">
                source_code</a
              ></span
            >
          </p>
          <p class="project__grid">
            <span class="project__label">demo: </span>
            <span>
              
              <a class="project__link" href="${homepage}" title="${name}">seeHere</a
              ></span
            >
          </p>
        </div>
      </article>`;

      const templateWithoutHomepage = `<article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        <div class="project__content">
          <img src="img/github-cat.svg" alt="" />
          <h3 class="project__grid project__title">
            <span class="project__label">project:</span>
            <span>${name}</span>
          </h3>
          <p class="project__grid project__grid">
            <span class="project__label">description: </span>
            <span> ${description} </span>
          </p>
          <p class="project__grid">
            <span class="project__label">Github: </span>
            <span>
              <a class="project__link" href="${html_url}" title="${name}">
                source_code</a
              ></span
            >
          </p> 
        </div>
      </article>`;

      if (description && homepage) {
        conteiner.innerHTML += template;
      }
      if (description && !homepage) {
        conteiner.innerHTML += templateWithoutHomepage;
      }
    }
  })
  .catch((e) => console.log(e));
