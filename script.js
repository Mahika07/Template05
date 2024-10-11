document.addEventListener('DOMContentLoaded', function () { window.setTimeout(document.querySelector('svg').classList.add('animated'), 1000); })

// Project Onclick function
function readmore(event) {
    const projectContent = event.target.closest('.project_content');

    const projectPara = projectContent.querySelector('.project_para');
    if (projectPara.style.display === 'block') {
        projectPara.style.display = 'none';
        projectContent.style.height = '370px'
    } else {
        projectPara.style.display = 'block';
        projectContent.style.height = 'auto'
    }
}
// Service Onclick function
function service_read_more(event) {
    const service_content = event.target.closest('.service_content');

    const service_para = service_content.querySelector('.service_para');
    const up_arrow = service_content.querySelector('.fa-angle-up');
    const down_arrow = service_content.querySelector('.fa-angle-down');
    if (service_para.style.display === 'block') {
        service_para.style.display = 'none';
        up_arrow.style.display = 'none';
        down_arrow.style.display = 'block';
    } else {
        service_para.style.display = 'block';
        up_arrow.style.display = 'block';
        down_arrow.style.display = 'none';

    }
}
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            navItems.forEach((navItem) => navItem.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('#navbarSupportedContent li a')

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    current = "#" + current
    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute("href") === current) {
            a.classList.add('active')
        }
    })
})
