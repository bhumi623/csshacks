document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("itemName").value;
    const area = document.getElementById("itemArea").value;
    const date = document.getElementById("itemDate").value;
    const color = document.getElementById("itemColor").value;
    const desc = document.getElementById("itemDesc").value;
    const image = document.getElementById("itemImage").files[0];
  
    if (!image) {
      alert("Please upload an image.");
      return;
    }
  

    alert(`Posted: ${name} found in ${area} on ${date}.`);
  
    window.location.href = "found.html";
  });
  