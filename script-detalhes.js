document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('id');
    const data = workshops[courseId];

    if (!data) {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('js-title').textContent = data.title;
    document.getElementById('js-category').textContent = data.category;
    document.getElementById('js-duration').textContent = data.duration;
    document.getElementById('js-hero-icon').src = data.icon;
    document.getElementById('js-download').href = data.downloadLink;
    document.getElementById('js-separator').className = `inner-sep ${data.colorClass}`;

    const grid = document.getElementById('js-materials-grid');
    grid.innerHTML = data.recommendations.map(item => `
        <article class="material-card glass">
            <div class="thumb-placeholder"></div>
            <div class="card-content">
                <div class="pill-meta">
                    <span class="pill-cat">${item.type}</span>
                    <span class="pill-dur">${item.channel}</span>
                </div>
                <h4 class="material-title">${item.title} ↗</h4>
                <p class="material-desc">${item.desc}</p>
            </div>
        </article>
    `).join('');
});