document.addEventListener("DOMContentLoaded", function () {
    const mapBtn = document.querySelector(".map-btn");
    const mapContainer = document.getElementById("mapContainer");

    if (mapBtn && mapContainer) {
        mapBtn.addEventListener("click", function () {
            mapContainer.style.display =
                mapContainer.style.display === "block" ? "none" : "block";
        });
    }
});