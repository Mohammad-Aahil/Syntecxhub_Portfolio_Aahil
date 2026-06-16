// Load sections dynamically

fetch("sections/about.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("about-section").innerHTML = data));

fetch("sections/skills.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("skills-section").innerHTML = data));

fetch("sections/projects.html")
  .then((res) => res.text())
  .then(
    (data) => (document.getElementById("projects-section").innerHTML = data),
  );

fetch("sections/contact.html")
  .then((res) => res.text())
  .then(
    (data) => (document.getElementById("contact-section").innerHTML = data),
  );
