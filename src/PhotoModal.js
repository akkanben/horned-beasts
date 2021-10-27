import {Component} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class PhotoModal extends Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hideModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img style={{width: '100%'}} src={this.props.imageUrl} alt={this.props.description} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  };
}

export default PhotoModal;
