function updatePrice() {
      const event = document.getElementById("event");
      const price = document.getElementById("price");
      price.value = "₹" + event.value;
}