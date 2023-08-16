// Yay section wrapper say sai har section mai animation add hui hai aur section ki width define hui hai 
import { motion } from "framer-motion";
import { staggerContainer } from "./motion";
const ContainerWrapper = ({Component, idName}:any) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer('')}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`mx-auto relative z-0 min-h-screen bg-white-100`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default ContainerWrapper;