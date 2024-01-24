function applyDarkTheme(){
    //dark
    document.documentElement.style.setProperty('--color-background', 'var(--vt-c-black)');
    document.documentElement.style.setProperty('--color-background-soft', 'var(--vt-c-black-soft)');
    document.documentElement.style.setProperty('--color-background-mute', 'var(--vt-c-black-mute)');
    document.documentElement.style.setProperty('--color-border', 'var(--vt-c-divider-dark-2)');
    document.documentElement.style.setProperty('--color-border-hover', 'var(--vt-c-divider-dark-1)');
    document.documentElement.style.setProperty('--color-heading', 'var(--vt-c-text-dark-1)');
    document.documentElement.style.setProperty('--color-text', 'var(--vt-c-text-dark-2)');
}
function applyLightTheme(){
    // light
    document.documentElement.style.setProperty('--color-background', 'var(--vt-c-white)');
    document.documentElement.style.setProperty('--color-background-soft', 'var(--vt-c-white-soft)');
    document.documentElement.style.setProperty('--color-background-mute', 'var(--vt-c-white-mute)');
    document.documentElement.style.setProperty('--color-border', 'var(--vt-c-divider-light-2)');
    document.documentElement.style.setProperty('--color-border-hover', 'var(--vt-c-divider-light-1)');
    document.documentElement.style.setProperty('--color-heading', 'var(--vt-c-text-light-1)');
    document.documentElement.style.setProperty('--color-text', 'var(--vt-c-text-light-1)');
}
function checkDefaultTheme() {
    if(window.matchMedia("(prefers-color-scheme: dark)")){
        localStorage.setItem("testVue","darkTheme")
    }else if(window.matchMedia("(prefers-color-scheme: light)")){
        localStorage.setItem("testVue","lightTheme")
    }
}
function checkTheme(){
    if(localStorage.getItem("testVue")){
        return false;
    }else{
        return checkDefaultTheme();
    }
}
function changeTheme(){
    checkTheme();
    if (localStorage.getItem("testVue")==='darkTheme') {
        applyDarkTheme()
        return true
    }else if(localStorage.getItem("testVue")==='lightTheme'){
        applyLightTheme()
        return false
    }
}
function toggleTheme(){
    if (localStorage.getItem("testVue")==='darkTheme'){
        localStorage.setItem("testVue","lightTheme");
        return changeTheme();
    }else if(localStorage.getItem("testVue")==='lightTheme'){
        localStorage.setItem("testVue","darkTheme");
        return changeTheme();
    }
}
export {changeTheme,toggleTheme};