const dummyItems = [
  {
    title: "Blue Bottle",
    area: "Canteen",
    date: "06-04-2025",
    color: "#4a90e2",
    keywords: ["bottle", "blue"],
    img: 'images/bottle.jpeg'
  },
  {
    title: "Single key",
    area: "Library",
    date: "07-04-2025",
    color: "Silver",
    keywords: ["keychain", "silver"],
    img: 'images/key2.jpeg'
  },
  {
    title: "Cycle",
    area: "Library",
    date: "07-04-2025",
    color: "Red",
    keywords: ["Cycle", "red"],
    img: 'images/cycle.jpeg'
  },
  {
    title: "Handkerchief",
    area: "Mess",
    date: "07-03-2025",
    color: "magenta",
    keywords: ["handkerchief", "magenta"],
    img: 'images/hanky.jpeg'
  }
];

function renderItems(items) {
  const results = document.getElementById("results");
  results.innerHTML = "";

  if (items.length === 0) {
    results.innerHTML = `<p>No items found matching your filters.</p>`;
    return;
  }

  items.forEach(item => {
    results.innerHTML += `
      <div class="card">
        <img src="${item.img}" alt="${item.title}" />
        <h4>${item.title}</h4>
        <p><strong>Area:</strong> ${item.area}</p>
        <p><strong>Date:</strong> ${item.date}</p>
        <div class="color-tag" style="background: ${item.color}; width: 20px; height: 20px; border-radius: 50%; margin-top: 5px;"></div>
      </div>
    `;
  });
}

function applyFilters() {
  const keyword = document.getElementById("keyword").value.toLowerCase().trim();
  const area = document.getElementById("area").value;
  const date = document.getElementById("foundDate").value;
  const color = document.getElementById("color").value.trim();

  const filtered = dummyItems.filter(item => {
    const keywordMatch =
      !keyword ||
      item.title.toLowerCase().includes(keyword) ||
      item.area.toLowerCase().includes(keyword) ||
      item.keywords.join(" ").toLowerCase().includes(keyword) ||
      item.color.toLowerCase().includes(keyword);

    const areaMatch = area === "Select Area" || !area || item.area === area;
    const dateMatch = !date || item.date === date;
    const colorMatch = !color || item.color.toLowerCase() === color.toLowerCase();

    return keywordMatch && areaMatch && dateMatch && colorMatch;
  });

  renderItems(filtered);
}


function goToCreatePost() {
  window.location.href = "create-post.html";
}

document.addEventListener("DOMContentLoaded", () => {
  renderItems(dummyItems);
});

  