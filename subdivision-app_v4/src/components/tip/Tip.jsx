import React, { useState } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

import "./tip.scss";

import gtrImg from "../../images/pexels/black-and-white-music-guitar-acoustic-guitar-41498.jpg";

const Tip = ({ dimmer }) => {
  const [openModal, toggleOpenModal] = useState(false);

  const handleToggleOpen = () => {
    toggleOpenModal(!openModal);
  };
  return (
    <div>
      <Button className="get-a-tip-btn" onClick={handleToggleOpen}>
        GET A TIP!
      </Button>
      <Modal dimmer={dimmer} open={openModal} onClose={handleToggleOpen}>
        <Modal.Header>Subdivision Tip...</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={gtrImg} />
          <Modal.Description>
            <Header>Tip #1</Header>
            <p>Try to tap your foot on the 1/4 note pulses.</p>
            <p>With your other hand, evenly divide the pulse into 1/8 notes</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Got it!"
            onClick={handleToggleOpen}
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

Tip.defaultProps = {
  dimmer: "blurring"
};

export default Tip;
