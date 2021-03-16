import Image from "next/image";
import styles from "./ProjectsWrapper.module.scss";

const ProjectsWrapper = () => {
  // function handleMouseMove(e) {
  //   const { innerWidth, innerHeight } = window;
  //   let { clientX: x, clientY: y } = e;
  //   const walk = 20;

  //   if (this !== e.target) {
  //     x = x + e.target.offsetLeft;
  //     y = y + e.target.offsetTop;
  //   }

  //   const rotateX = Math.round((x / innerWidth) * walk - walk / 2);
  //   const rotateY = Math.round((y / innerHeight) * walk - walk / 2);

  //   e.target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  //   console.log(`${rotateY}deg, ${rotateX}deg`);
  //   console.log(window);
  // }

  // function handleMouseOver(e) {
  //   e.target.style.transform = `rotateX(0deg) rotateY(0deg)`;
  // }

  return (
    <div className={styles.wrapper}>
      {projects.map((project, i) => (
        <div key={i} className={styles.innerWrapper}>
          <Img
            imgName={project.imgName}
            alt={project.alt}
            className={styles.image}
          />
          <div className={styles.content}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project?.stack?.length > 0 && (
              <ul>
                {project.stack.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            )}
            <a
              aria-label={project.label}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.demo}
            >
              live demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const Img = ({ imgName, alt, className }) => (
  <Image
    priority
    src={`/images/${imgName}`}
    height={300}
    width={400}
    quality="100"
    alt={alt}
    className={className}
    // onMouseMove={handleMouseMove}
    // onMouseLeave={handleMouseOver}
  />
);

const projects = [
  {
    title: "2LB",
    imgName: "2lb.jpg",
    alt: "2lb.pl website",
    description: "Website created for 2LB company.",
    stack: ["GatsbyJS", "SanityCMS", "GraphQL", "Styled-Components"],
    label: "Go to 2lb.pl",
    href: "https://2lb.pl",
  },
  {
    title: "RentApp",
    imgName: "rentapp.jpg",
    alt: "Rentapp screenshot",
    description:
      "A SPA app created for an engineering thesis. Constantly in progress.",
    stack: [
      "React",
      "Redux",
      "Express.js",
      "MongoDB",
      "NodeJS",
      "Styled-Components",
    ],
    label: "Go to Rentapp live demo",
    href: "#",
  },
];

export default ProjectsWrapper;
