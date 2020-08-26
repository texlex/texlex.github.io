var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Hello! My name is ")
  .pauseFor(25)
  .typeString(
    '<span style="color:var(--red); font-weight:bold;">Mark Zimmermann</span>.'
  )
  .pauseFor(2500)
  .deleteAll()
  .typeString(
    'I am a <span style="color:var(--blue); font-weight:bold;">litigator</span>.'
  )
  .pauseFor(500)
  .deleteChars(10)
  .typeString(
    '<span style="color:var(--blue); font-weight:bold;">trademark attorney</span>.'
  )
  .pauseFor(1000)
  .deleteChars(25)
  .typeString(
    '<span style="color:red; font-weight:bold;">fight</span> for my clients.'
  )
  .pauseFor(2000)
  .start();

typewriter.start();
// var paused = false;
// function toggle() {
//   if (paused) {
//     typewriter.start();
//     document.getElementById("image").src = "images/pause.png";
//     paused = false;
//   } else {
//     typewriter.pause();
//     document.getElementById("image").src = "images/play.png";
//     paused = true;
//   }
// }
