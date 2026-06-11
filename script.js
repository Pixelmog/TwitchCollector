async function loadUserFromURL() {

    const params = new URLSearchParams(window.location.search);
    const user = params.get("user");

    const output = document.getElementById("output");

    if (!user) {
        output.innerHTML = "<h2>No user specified</h2>";
        return;
    }

    try {
        const res = await fetch("collections.json");
        const data = await res.json();

        if (!data[user]) {
            output.innerHTML = `
                <h2>${user}</h2>
                <p>No collection found.</p>
            `;
            return;
        }

        let html = `<h2>${user}'s Collection</h2>`;

        data[user].forEach(item => {
            html += `<div>⭐ ${item}</div>`;
        });

        output.innerHTML = html;

    } catch (err) {
        console.error(err);
        output.innerHTML = "<p>Error loading data</p>";
    }
}

loadUserFromURL();