document.addEventListener('DOMContentLoaded', () => {
    const sites = [
        { selector: '.nextcloud', url: 'https://cloud.wyattduber.com/' },
	{ selector: '.plex', url: 'https://plex.wyattduber.com/web/index.html' },
        { selector: '.upptime', url: 'https://status.wyattduber.com/' },
        { selector: '.paste', url: 'https://paste.wyattduber.com/' },
        { selector: '.docs', url: 'https://docs.wyattduber.com/' },
        { selector: '.amp', url: 'https://server.endofthemapparty.com/' }
    ];

    sites.forEach(site => {
        checkSiteStatus(site.url, site.selector);
    });
});

function checkSiteStatus(url, selector) {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyUrl + url, { method: 'HEAD' })
        .then(response => {
            console.log(`Site: ${url}, Status: ${response.status}`);
            updateStatus(selector, response.ok);
        })
        .catch(() => {
            updateStatus(selector, false);
        });
}

function updateStatus(selector, isOnline) {
    const element = document.querySelector(selector);
    if (element) {
        const statusDiv = document.createElement('div');
        statusDiv.className = `status ${isOnline ? 'online' : 'offline'}`;
        statusDiv.textContent = isOnline ? 'Online' : 'Offline';

        // Append the status div after the last child of the element
        element.appendChild(statusDiv);
    }
}
