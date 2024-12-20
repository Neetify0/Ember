function openCloakedTab() {
    const faviconUrl = localStorage.getItem('faviconUrl') || '';
    const pageTitle = localStorage.getItem('pageTitle') || '';
    const embedUrl = window.location.href;

    localStorage.setItem('faviconUrl', faviconUrl);
    localStorage.setItem('pageTitle', pageTitle);

    const enablePopups = localStorage.getItem('enablePopups') === 'true';

    if (!enablePopups || window.top !== window) {
        return;
    }

    const win = window.open();

    if (!win) {
        alert("Pop-up blocked! Please enable pop-ups and reload for this site to use the tab cloaking feature.");
        return;
    }

    win.document.title = pageTitle;

    const link = win.document.createElement('link');
    link.rel = 'icon';
    link.href = faviconUrl;
    win.document.head.appendChild(link);

    const iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.src = embedUrl;

    win.document.body.style.margin = '0';
    win.document.body.style.padding = '0';
    win.document.body.style.overflow = 'hidden';

    win.document.body.appendChild(iframe);

    window.close();
}

function loadCloakSettings() {
    const faviconUrl = localStorage.getItem('faviconUrl') || '';
    const pageTitle = localStorage.getItem('pageTitle') || '';
    const enablePopups = localStorage.getItem('enablePopups') === 'true'; 

    if (document.getElementById('favicon-url')) {
        document.getElementById('favicon-url').value = faviconUrl;
    }

    if (document.getElementById('page-title')) {
        document.getElementById('page-title').value = pageTitle;
    }

    if (document.getElementById('enable-popups')) {
        document.getElementById('enable-popups').checked = enablePopups;
    }
}

function savePopupSetting() {
    const enablePopups = document.getElementById('enable-popups') ? document.getElementById('enable-popups').checked : false;
    const faviconUrl = document.getElementById('favicon-url') ? document.getElementById('favicon-url').value : '';
    const pageTitle = document.getElementById('page-title') ? document.getElementById('page-title').value : '';

    localStorage.setItem('enablePopups', enablePopups ? 'true' : 'false');
    localStorage.setItem('faviconUrl', faviconUrl);
    localStorage.setItem('pageTitle', pageTitle);
}

document.addEventListener('DOMContentLoaded', loadCloakSettings);

if (localStorage.getItem('enablePopups') === 'true' && window.top === window) {
    openCloakedTab();
}

if (document.getElementById('enable-popups')) {
    document.getElementById('enable-popups').addEventListener('change', savePopupSetting);
}

if (document.getElementById('favicon-url')) {
    document.getElementById('favicon-url').addEventListener('input', savePopupSetting);
}

if (document.getElementById('page-title')) {
    document.getElementById('page-title').addEventListener('input', savePopupSetting);
}