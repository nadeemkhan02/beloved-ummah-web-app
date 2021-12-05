import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreator from "../../modules/actions";
import Quran from "../../assets/Images/quran.png";
import { Button, Collapse, Skeleton } from "antd";
import "./alQuran.css";
import BookOpenModal from "../../Components/BookOPeningModal/inde";

const { Panel } = Collapse;

const AlQuran = (props) => {
  const [previousAudio, setPreviousAudio] = useState();
  const [isBookOpenModalVisible, setIsBookOpenModalVisible] = useState(false);
  const [activeAyah, setActiveAyah] = useState("");
  const { loader, bookData } = props;
  const { mainLoader } = loader;

  const handlePlayAudio = (audioSrc, indexId) => {
    const previousActiveAyah = document.getElementById(activeAyah);
    if (previousActiveAyah?.style) {
      previousActiveAyah.style.color = "black";
    }
    if (previousAudio) previousAudio.pause();
    var jump_sound = new Audio(audioSrc);
    jump_sound.play();
    document.getElementById(indexId).style.color = "red";
    setPreviousAudio(jump_sound);
    setActiveAyah(indexId);
  };

  const handleBookOpenModalOpen = () => {
    setIsBookOpenModalVisible(true);
  };
  const handleBookOpenModalClose = () => {
    setIsBookOpenModalVisible(false);
  };

  const loadBookData = () => {
    props.toggelMainLoader(true);
    handleBookOpenModalOpen();
    props.getBookData();
  };

  return (
    <div className="book-css">
      <div className="book-top">
        <h2 className="book-heading">
          <img onClick={handleBookOpenModalOpen} src={Quran} alt="quran" />
          Al-Quran/القرآن
        </h2>
        <div className="book-descriptio">
          <b>Note:</b> Click on the ayah for listening the recitation of that
          ayah.
        </div>
        {!bookData.data && (
          <Button type="primary" loading={mainLoader} onClick={loadBookData}>
            Start Reading Quran
          </Button>
        )}
      </div>
      <div className="book-content">
        {mainLoader && (
          <>
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
          </>
        )}
        <Collapse defaultActiveKey={"1"}>
          {bookData.data &&
            React.Children.toArray(
              bookData.data.surahs.map((gem) => (
                <Panel
                  header={
                    <div className="panel-css">
                      <div className="surah-description">
                        <b>Surah no:&nbsp;</b>
                        {gem.number} | <b>Revelation:&nbsp;</b>
                        {gem.revelationType}
                      </div>
                      <h2 className="arabic-font gem-heading">{gem.name}</h2>
                    </div>
                  }
                  key={gem.number}
                >
                  {React.Children.toArray(
                    gem.ayahs.map((gem) => (
                      <>
                        <p
                          id={gem.number}
                          onClick={() => handlePlayAudio(gem.audio, gem.number)}
                          className="gem arabic-font"
                        >
                          {gem.text}&#x6DD;
                        </p>
                      </>
                    ))
                  )}
                </Panel>
              ))
            )}
        </Collapse>
      </div>
      <BookOpenModal
        HandleClose={handleBookOpenModalClose}
        HandleOpen={handleBookOpenModalOpen}
        Open={isBookOpenModalVisible}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loader: state.Loader,
    bookData: state.bookData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBookData: ActionCreator.getBookData,
      toggelMainLoader: ActionCreator.toggelMainLoader,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(AlQuran);
