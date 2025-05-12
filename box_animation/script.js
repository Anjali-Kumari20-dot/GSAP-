gsap.to("#box1", {
  x: 1200,
  duration: 3,
  delay: 1,
  rotate: 360,
  borderRadius: "50%",
  backgroundColor: "orange",
  repeat: -1,
  yoyo: true,
});
gsap.from("#box2", {
  x: 1200,
  duration: 3,
  delay: 1,
  backgroundColor: "blue",
});
