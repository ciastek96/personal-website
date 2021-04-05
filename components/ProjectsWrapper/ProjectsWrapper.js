import Image from "next/image";
import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../../animations/animations.js";
import styles from "./ProjectsWrapper.module.scss";

const ProjectsWrapper = () => (
  <motion.div variants={stagger} className={styles.wrapper}>
    {projects.map((project, i) => (
      <motion.div key={i} variants={fadeInUp} className={styles.innerWrapper}>
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
      </motion.div>
    ))}
  </motion.div>
);

const Img = ({ imgName, alt, className }) => (
  <Image
    src={`/images/${imgName}`}
    height={300}
    width={400}
    layout="intrinsic"
    quality="80"
    alt={alt}
    className={className}
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
    href: "https://myrentapp.netlify.app/",
  },
];

export default ProjectsWrapper;
