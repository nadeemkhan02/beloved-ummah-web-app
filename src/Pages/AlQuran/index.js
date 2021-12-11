import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreator from "../../modules/actions";
import Quran from "../../assets/Images/quran.png";
import { BackTop, Button, Collapse, Empty, Input, Skeleton } from "antd";
import "./alQuran.css";
import BookOpenModal from "../../Components/BookOPeningModal/inde";
import Search from "antd/lib/input/Search";
import {
  SearchOutlined,
  SecurityScanFilled,
  UpCircleFilled,
  UpCircleOutlined,
} from "@ant-design/icons";

const { Panel } = Collapse;

const AlQuran = (props) => {
  const [previousAudio, setPreviousAudio] = useState();
  const [isBookOpenModalVisible, setIsBookOpenModalVisible] = useState(false);
  const [activeAyah, setActiveAyah] = useState("");
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [data, setData] = useState([]);
  const { loader, bookData } = props;
  const { mainLoader } = loader;

  useEffect(() => {
    setData(bookData);
  }, [bookData]);

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

  const handleChange = ({ currentTarget: input }) => {
    const query = input.value;
    if (query) {
      const Data = bookData.filter((gem) => {
        const gemValue = gem.englishName.replace("-", "").toLowerCase();
        return gemValue.includes(query.toLowerCase());
      });
      console.log(Data, "DATA");
      setData(Data);
    } else {
      setData(bookData);
    }
  };

  const handleFocus = () => {
    setSearchFocused(true);
  };
  const handleBlur = () => {
    setSearchFocused(false);
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
    <>
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
          {bookData.length === 0 && (
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
          {bookData.length > 0 && (
            <Input
              placeholder={`Search surah...`}
              allowClear
              size="large"
              className="search-input"
              onFocus={handleFocus}
              onBlur={handleBlur}
              prefix={isSearchFocused ? <SearchOutlined /> : null}
              onChange={handleChange}
            />
          )}
          {bookData.length > 0 && data.length === 0 && (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
          {data.length > 0 && (
            <div className="book-body">
              <Collapse defaultActiveKey={["1"]}>
                {React.Children.toArray(
                  data.map((gem) => (
                    <Panel
                      header={
                        <div className="panel-css">
                          <div className="surah-description">
                            <b>Surah no:&nbsp;</b>
                            {gem.number} | <b>Revelation:&nbsp;</b>
                            {gem.revelationType}
                          </div>
                          <h2 className="arabic-font gem-heading">
                            {gem.name}
                          </h2>
                        </div>
                      }
                      key={gem.number}
                    >
                      <div>
                        <p className="gem arabic-font">
                          {gem.ayahs[0].text !==
                            "﻿بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ" &&
                            gem.number !== 9 &&
                            "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ۝"}
                        </p>
                        {React.Children.toArray(
                          gem.ayahs.map((gem) => (
                            <>
                              <p
                                id={gem.number}
                                onClick={() =>
                                  handlePlayAudio(gem.audio, gem.number)
                                }
                                className="gem arabic-font"
                              >
                                {gem.text !==
                                "﻿بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"
                                  ? gem.text.replace(
                                      "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
                                      ""
                                    )
                                  : gem.text}
                                &#x6DD;
                              </p>
                            </>
                          ))
                        )}
                      </div>
                    </Panel>
                  ))
                )}
              </Collapse>
            </div>
          )}
        </div>
        <BookOpenModal
          HandleClose={handleBookOpenModalClose}
          HandleOpen={handleBookOpenModalOpen}
          Open={isBookOpenModalVisible}
        />
      </div>
      <BackTop>
        <UpCircleOutlined style={{ fontSize: "40px", color: "#404040" }} />
      </BackTop>
    </>
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
