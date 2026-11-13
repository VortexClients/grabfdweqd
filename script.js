document.addEventListener("DOMContentLoaded", () => {
    const voteBtns = document.querySelectorAll("#VoteBtn");
    const votelinkBtns = document.querySelectorAll("#VoteLinkBtn");
    const trailerVideo = document.getElementById("TrailerVideo");

    voteBtns.forEach((voteBtn) => {
        voteBtn.addEventListener("click", () => {
            window.location.href = "https://forms.gle/tcPo9pF5JRdyhEaR7";
        });
    });

    votelinkBtns.forEach((votelinkBtn) => {
        votelinkBtn.addEventListener("click", () => {
            window.location.href = "https://forms.gle/tcPo9pF5JRdyhEaR7";
        });
    });

    trailerVideo.addEventListener("click", () => {
        if (trailerVideo) {
            trailerVideo.innerHTML = `<iframe src="https://www.youtube.com/embed/QZfVihKGPUw?autoplay=1"title="Bloxd Awards Trailer "allow="autoplay; encrypted-media; picture-in-picture"allowfullscreen> </iframe>`;
        }
    });

});

/* might not use this shit but is not like a countdown type bs until the day of the event  "Mr GEORGECR"
const awardDate = new Date("2026-12-31T20:00:00+02:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = awardDate - now;

    if (distance <= 0) {
        clearInterval(countdown);

        document.querySelector(".countdown-section h2").textContent =
            "The Bloxd Awards 2026 are LIVE!";

        document.querySelector(".countdown").style.display = "none";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

}, 1000);

*/
