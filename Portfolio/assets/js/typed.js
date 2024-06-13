document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ['Web Developer.', 'Frontend Developer.', 'Backend Developer.', 'Laravel Developer.'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    }
    var options2 = {
        strings: ["HTML, CSS, JS.", "Bootstrap, Tailwind CSS.", "React JS.", "PHP, MySQL, Laravel."],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    };

    var typed = new Typed('#typed-output1', options)
    var typed2 = new Typed("#typed-output2", options2);
});