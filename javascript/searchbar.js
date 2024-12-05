const clothes = [
  "Classic White T-Shirt",
  "Sweeter Wibu Nadia",
  "Sweeter Dio",
  "Sempak Oversized",
  "Black Leather Jacket",
  "Casual Polo Shirt",
  "Plaid Flannela Shirt",
  "Au Ah Gelap",
  "Kolor Vintage",
  "Baju Budak Korporat"
];


  function filterclothes() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const recommendations = document.getElementById('clothRecommendations');
    recommendations.style.display = query ? 'block' : 'none'; // Menampilkan daftar ketika mengetik

    const filteredclothes = clothes.filter(cloth => cloth.toLowerCase().includes(query));
    
    recommendations.innerHTML = ''; // Menghapus daftar sebelumnya
    filteredclothes.forEach(cloth => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.textContent = cloth;
      recommendations.appendChild(listItem);
    });
  }