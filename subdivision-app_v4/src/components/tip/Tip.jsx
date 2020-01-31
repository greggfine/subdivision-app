import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { getRandomTip } from "../../util/helpers";
import { useToggle } from "../../hooks/toggleHook";
import "./tip.scss";

import gtrImg from "../../images/pexels/black-and-white-music-guitar-acoustic-guitar-41498.jpg";

const Tip = ({ dimmer }) => {
  const [openModal, toggleOpenModal] = useToggle();

  return (
    <div>
      <Button className="get-a-tip-btn" onClick={toggleOpenModal}>
        GET A TIP!
      </Button>
      <Modal dimmer={dimmer} open={openModal} onClose={toggleOpenModal}>
        <Modal.Header>Subdivision Tip...</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={gtrImg} />
          <Modal.Description>
            <Header>Gregg's Tip</Header>
            <p>{getRandomTip()}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Got it!"
            onClick={toggleOpenModal}
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

Tip.defaultProps = {
  //   dimmer: "blurring"
  dimmer: "inverted"
};

export default Tip;
