function openCloakedTab() {
    const faviconUrl = document.getElementById('favicon-url').value || '';
    const pageTitle = document.getElementById('page-title').value || '';
    const embedUrl = "/";

    localStorage.setItem('faviconUrl', faviconUrl);
    localStorage.setItem('pageTitle', pageTitle);

    const win = window.open();

    if (!win) {
        alert("Pop-up blocked! Please enable pop-ups and reload for this site to use the tab cloaking feature or disable it through settings.");
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
}