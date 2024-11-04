// 텍스트 확대하기
const intro = gsap.timeline();
intro.to("#intro span", { scale: 60, duration: 2 })
    .to("#intro span", { autoAlpha: 0 })

ScrollTrigger.create({
    animation: intro,
    trigger: "#intro",
    start: "top top",
    end: "+=4000",
    scrub: true,
    pin: true,
    anticipatePin: 1
});

// 텍스트 화이트
const text_white = gsap.timeline();
text_white.to("#white .t1", { xPercent: 300 }, "text")
    .to("#white .t2", { xPercent: -300 }, "text")
    .to("#white .t3", { xPercent: 300 }, "text");

ScrollTrigger.create({
    animation: text_white,
    trigger: "#white",
    start: "top top",
    end: "+=2600",
    scrub: true,
    pin: true,
    anticipatePin: 1,
});

// 텍스트 블랙
const text_black = gsap.timeline();
text_black.to("#black .t4", { xPercent: -300 }, "text")
    .to("#black .t5", { xPercent: 300 }, "text")
    .to("#black .t6", { xPercent: -300 }, "text");

ScrollTrigger.create({
    animation: text_black,
    trigger: "#black",
    start: "top top",
    end: "+=2600",
    scrub: true,
    pin: true,
    anticipatePin: 1,
});

// 가로 효과
let projects = gsap.utils.toArray(".project");

gsap.to(projects, {
    xPercent: -100 * (projects.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: "#website",
        pin: true,
        scrub: 1,
        snap: 1 / (projects.length - 1),
        end: "+=7000"
        // end: document.querySelector("#parallax__cont").offsetWidth
    }
});

// 배경 고정
let panels = gsap.utils.toArray(".side-item");
let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));

panels.forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false
    });
});

ScrollTrigger.create({
    snap: {
        snapTo: (progress, self) => {
            let panelStarts = tops.map(st => st.start),
                snapScroll = gsap.utils.snap(panelStarts, self.scroll());
            return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
        },
        duration: 0.5
    }
});
