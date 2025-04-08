function registerUser() {
  const name = document.getElementById("name").value.trim();
  const campus = document.getElementById("campus").value;

  if (!name || campus === "Choose campus") {
    alert("Please enter your name and select a campus.");
    return;
  }

  localStorage.setItem("userName", name);
  localStorage.setItem("campus", campus);

  window.location.href = "home.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const userName = localStorage.getItem("userName");
  const campus = localStorage.getItem("campus");

  const nameEl = document.getElementById("username");
  const campusEl = document.getElementById("usercampus");

  if (nameEl) nameEl.textContent = userName || "User";
  if (campusEl) campusEl.textContent = campus || "Campus";

  const addBtn = document.querySelector(".floating-btn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      window.location.href = "create-post.html"; // to be built
    });
  }

  const footerIcons = document.querySelectorAll(".footer-nav i");
  footerIcons.forEach((icon) =>
    icon.addEventListener("click", () => {
      footerIcons.forEach((i) => i.classList.remove("active"));
      icon.classList.add("active");
    })
  );
});
document.addEventListener("DOMContentLoaded", async () => {
  // ✅ Check if you’re on the home page
  if (window.location.pathname.includes("home.html")) {
    const feed = document.querySelector(".post-feed");
    if (!feed) return;

    const res = await fetch('/api/posts');
    const posts = await res.json();

    posts.reverse().forEach(post => {
      const card = document.createElement("div");
      card.classList.add("post-card");
      card.innerHTML = `
        <img src="${post.image}" class="post-img single" />
        <div class="post-content">
          <h3>${post.title}</h3>
          <p>${post.description}</p>
          <div class="post-meta">${post.date}</div>
        </div>
      `;
      feed.appendChild(card);
    });
  }
  

});
