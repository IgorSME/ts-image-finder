import React, { Component, MouseEventHandler} from 'react';
import { IModalProps } from '../../types/appTypes';
import { ModalImage, Overlay } from './Modal.styled';

export class Modal extends Component<IModalProps,{}> {

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscClick);
  }
  handleEscClick = (e:any) => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };
  handleOverlayClick:MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalImage>{this.props.children}</ModalImage>
      </Overlay>
    );
  }
}
