function enter() {
    localStorage.setItem('decrypted', 'true');
    window.location.href = '/';
}

if (window.location.pathname !== '/encrypted/') {
    if (localStorage.getItem('decrypted') !== 'true') {
        window.location.href = '/encrypted';
    }
}