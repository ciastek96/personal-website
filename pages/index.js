import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../animations/animations.js";
import Layout, { siteTitle } from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.scss";
import Heading from "../components/Heading/Heading";
import List from "../components/List/List";
import AboutMe from "../components/AboutMe/AboutMe";
import Carousel from "../components/Carousel/Carousel";

const data = [
  {
    Development: [
      "HTML5",
      "CSS3",
      "SCSS/SASS",
      "Styled-Components",
      "JavaScript",
      "React",
      "Redux",
    ],
    Additional: ["Git", "Photoshop", "SketchUp"],
    "Next on my list": ["TypeScript", "Jest", "Figma"],
  },
  {
    Strengths: ["Hard-working", "Conscientious", "Precise"],
    Languages: ["Polish", "English"],
    Hobby: ["Bboying", "Beatmaking"],
  },
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <motion.section variants={stagger} className={utilStyles.headingMd}>
        <Heading>About me</Heading>

        <motion.div variants={fadeInUp}>
          <p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi! I'm Kamil 👋
          </p>
          <AboutMe />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Heading>Skills</Heading>
          <Carousel>
            {data.map((el, i) => (
              <div key={i}>
                {Object.entries(el).map(([title, item], i) => (
                  <div key={i}>
                    <p>{title}</p>
                    <List>
                      {item.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </List>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </motion.div>
      </motion.section>
    </Layout>
  );
}
