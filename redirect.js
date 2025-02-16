function enter() {
    localStorage.setItem('decrypted294500281234', 'true');
    if (localStorage.getItem('redirect')) {
        window.location.href = localStorage.getItem('redirect');
        localStorage.setItem('redirect', '/');
    } else {
        window.location.href = '/';
    }
}

if (window.location.pathname !== '/lock/') {
    if (localStorage.getItem('decrypted294500281234') !== 'true') {
        localStorage.setItem('redirect', window.location.href);
        window.location.href = '/lock/';
    }
}

if (window.location.href !== 'about:blank' && window.top === window.self && window.location.pathname !== '/lock/' && window.location.pathname !== '/cloak/' && window.location.pathname !== '/feedback/') {
    localStorage.setItem('redirect', window.location.href);
    window.location.href = '/cloak/';
}