import React, { useState } from "react";
import { Modal, Button } from "antd";
import "./bookOpeningModal.css";
import {
  CloseCircleFilled,
  CloseOutlined,
  IssuesCloseOutlined,
} from "@ant-design/icons";

const BookOpenModal = ({ Open, HandleOpen, HandleClose }) => {
  return (
    <>
      <div className="book-open-modal-css">
        <Modal
          title={
            <p className="book-open-modal-heading">
              Etiquettes Of Reading The Holy Quran:
            </p>
          }
          footer={null}
          visible={Open}
          onCancel={HandleClose}
          closable={true}
          closeIcon={<CloseCircleFilled />}
          maskClosable={false}
          className="book-open-modal"
        >
          <div className="book-open-modal-content">
            <p>Being In State Of Cleanliness And Wudu.</p>
            <p>Sitting In A Respectable Place and Respectful Manner.</p>
            <p>Reading “Tauz” And “Tasmia” Before Starting Recitation.</p>
            <p>Accomplishment of “Tajweed” Rules.</p>
            <p>Reciting With A Slow pace.</p>
            <p>Fulfilling All Rights of Quran.</p>
            <p>Avoiding from Talking While Reciting This Sacred Book.</p>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default BookOpenModal;
