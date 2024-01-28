let navBar = document.getElementById('nav-bar');
let navLinks = document.getElementsByClassName('nav-list-link');
let navLinksArr = []
for(let navLink of navLinks){
    navLinksArr.push(navLink);
};

let homeLinks = document.getElementsByClassName('home-links');
let homeLinksArr = [];
for(let homeLink of homeLinks){
    homeLinksArr.push(homeLink);
};

for(let navLink of navLinksArr) 
{
    navLink.addEventListener('click',function(e){
        e.preventDefault();
        removeCurrent();
        setCurrent(e.target);
    }
    );
};

for(let homeLink of homeLinks){
    homeLink.addEventListener('click',function(e)
    {
        e.preventDefault();
        if(e.target.innerText == 'Projects Section')
        {
            setCurrent(navLinksArr[1]);
        }
        else{setCurrent(navLinksArr[2]);}
    });
};

window.onscroll = function(ev) {
    if(window.scrollY >= 444 && window.scrollY < 617)
    {
        removeCurrent();
        navLinksArr[1].classList.add('current');
    }
    else if(window.scrollY < 444)
    {
        removeCurrent();
        navLinksArr[0].classList.add('current');
    }
    else
    {
        removeCurrent();
        navLinksArr[2].classList.add('current');
    }

    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        navToggle(true)
    }
    else
    {
        navToggle(false)
    }
};

function navToggle(value)
{
    
    if(value){
        navBar.style.bottom = '0';
        navBar.style.left = '0';
        navBar.style.right = '0'
        navBar.style.width = '100%';
        navBar.style.borderRadius = '0';
        navBar.style.padding = '2rem 1.5rem'
        navBar.style.transition = 'all 0.5s';
    }
    else
    {
        navBar.style='';
    }
}

function removeCurrent()
{
    for(let navLink of navLinksArr)
    {
        navLink.classList.remove('current')
    };
}

function setCurrent(ele)
{
    
    ele.classList.add("current");
    if(ele.innerText == 'Projects')
    {
        window.scrollTo({top: 444, behavior: 'smooth'});
    }
    else if(ele.innerText == 'Contact Me')
    {
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
    }
    else
    {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
};