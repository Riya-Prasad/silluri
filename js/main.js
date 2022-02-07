
/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 1500,
    reset: true,
})


sr.reveal(`.logo, 
            .primary-nav a,
            .about .container .grid .middle-sec,
            .blogs .container h2,
            .blogs .container p,
            .blogs .card img
            `,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about .container .grid img,
            .project .right-side .grid img,
            .newsletter .rectangle,
            .footer .footer-content .footer-data,
            .footer .footer-content .footer-data img,
            .footer .columns .footer-title,
            .footer .columns .footer-title li
            `,{
    origin: 'bottom',
    interval: 100,
})

sr.reveal(`.hero .left-side .flex h1,
            .hero .left-side .flex p,
            .hero .left-side .flex .btn,
            .project .left-img`,{
    origin: 'left',
    interval: 100,
})

sr.reveal(`.project .right-side h1,
            .project .right-side p`,{
    origin: 'right',
    interval: 100,
})
