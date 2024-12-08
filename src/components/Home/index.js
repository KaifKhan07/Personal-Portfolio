import React from "react";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
    <div className="bg-[rgb(29,29,29)] py-20">

      <div className="HomePage bg-[rgb(244,244,237)] rounded-2xl py-40 mx-8" id="/">
      <Container>

        <Row className="g-0 flex justify-start pt-5">
          <Col md={12} sm={12} className="">
            <motion.div
              className=""
              initial={{ x: -100, opacity: 0 }} // Initial state (off-screen to the left)
              whileInView={{ x: 0, opacity: 1 }} // Animate to this state when in view
              transition={{ duration: 5 }} // Duration of the animation
              viewport={{ once: true, amount: 0.2 }} // Trigger animation once, when 20% is visible
            >
              <div className="Left flex flex-col gap-2">
                <div className="bebas-neue-regular text-4xl sm:text-5xl ">Hi, I'm KAIF KHAN, A Web <div>Developer and...</div></div>
                <div className="qwitcher-grypen-bold text-4xl">
                  I am a  dedicated frontend developer over 6+ month of experience...
                </div> 
                <div className="qwitcher-grypen-bold text-4xl">
                passionate about creating engaging and responsive web applications.
                </div>
              </div>
            </motion.div>
            
          </Col>
        </Row>
      </Container>
      </div>
    </div>
    </>
  );
};

export default Home;
