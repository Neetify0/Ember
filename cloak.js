function openCloakedTab() {
    const faviconUrl = localStorage.getItem('faviconUrl') || '';
    const pageTitle = localStorage.getItem('pageTitle') || '';
    const embedUrl = localStorage.getItem('redirect') || '/';

    const win = window.open();

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

    localStorage.setItem('redirect', '/');
    
    window.close();
}