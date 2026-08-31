document.addEventListener("DOMContentLoaded", () => {
	const track = document.querySelector(".game-track");
	const selectors = document.querySelectorAll(".game-selector");

	if (!track || selectors.length === 0) {
		return;
	}

	selectors.forEach((selector) => {
		selector.addEventListener("click", () => {
			const gameIndex = Number(selector.dataset.game);

			track.style.transform = `translateX(-${gameIndex * 100}%)`;
			selectors.forEach((button) => {
				const isActive = button === selector;
				button.classList.toggle("is-active", isActive);
				button.setAttribute("aria-pressed", String(isActive));
			});
		});
	});
});

function hover(button) {
	const btn = document.getElementById(button);
    btn.innerHTML = btn.innerText.bold();
    setTimeout(() => {
        btn.innerHTML = btn.innerText;
    }, 300);
}
