import Certified from "../components/Certified";
import Header from "../components/Header";
import Service from "../components/Service";
import Skill from "../components/Skill";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="overflow-hidden"
    >
      <Header />
      <Service />
      <Certified />
      <Skill />
    </motion.div>
  );
};

export default Home;
