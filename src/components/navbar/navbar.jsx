import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion, px } from "framer-motion";
const navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ><motion.div className="social1"><img src="/logo-no-background.png"/>
          <h3>Hi There! This is ...</h3></motion.div>
        </motion.span>
        <div className="social">
          <a
            href="https://www.instagram.com/_.sathe._/"
            target="_blank"
          >
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/saisathishd" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-sathish-152025j/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.skillrack.com/faces/resume.xhtml?id=258097&key=cb77cea9a55c8e808114b2b3e7ff6e56714feed4" target="_blank">
            <img src="/skillrack.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default navbar;
