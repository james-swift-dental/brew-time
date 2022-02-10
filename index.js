function selectName() {
    const loader = document.getElementById('loader');
    const list = Array.from(document.getElementsByClassName('brewer'));
    const brewers = document.getElementById('brewers');
    
    loader.classList.remove('hide');
    brewers.classList.add('hide');
    
    setTimeout(() => loader.classList.add('hide'), 2200);
    setTimeout(() => brewers.classList.remove('hide'), 2200);

    const randomElement = Math.floor(Math.random() * list.length);
    list[randomElement].classList.add('highlight');
}
