Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {videos:["./0.mp4", "./2.mp4", "./3.mp4" ]});
Shery.makeMagnet(".headings")
gsap.to(".felfelem", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1
});

let section = document.querySelectorAll(".felfelem");
Shery.imageEffect(".images", {
    style: 4,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
      section.forEach(function(section, index){
        ScrollTrigger.create({
          trigger: section,
          start: "top top ",
          scrub: 1,
          onUpdate: function(prog){
            setScroll(prog.progress + index);
          },
        });
      });  
    },
  });

 