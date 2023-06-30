import React from 'react';
import { Image, Modal } from 'semantic-ui-react'
// import "./style.css";


const CardItem = (props) => {
  const [open, setOpen] = React.useState(false)

  const { urls, description} = props.img;

  return (

    <Modal className="modal-img"
      basic
      size="tiny"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button className="img-button"><img src={urls.small} alt={description}/></button>}
    >
      <Modal.Content >
        <Image size="large" src={urls.regular} centered />
        <p>{ description}</p>
      </Modal.Content>
    </Modal>
  )
}

export default CardItem;
