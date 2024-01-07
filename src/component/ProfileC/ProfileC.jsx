import hometech from "../../assets/hometech.png";

const ProfileC = () => {
  return (
    <>
      <div className="profilec-conatiner">
        <div>
          <h4 className="profile-heading">The Traces We Leave</h4>
          <div className="timeline">
            <div
              className="timeline__event  timeline__event--type1"
              data-aos="flip-up"
            >
              <div className="timeline__event__icon ">
                {/* <i className="lni-cake"></i> */}
                {/* <img className="profile-img" src={hometech} /> */}
              </div>
              <div className="timeline__event__date">{/* 20-08-2019 */}</div>
              <div className="timeline__event__content ">
                <div className="timeline__event__title profile-text-align">
                  Corporate Office
                  <br />
                  Home Tech Services Pvt. Ltd
                </div>
                <div className="timeline__event__description">
                  <p className="profile-text-align">
                    Second Floor, Buhari Buildings,
                    <br />
                    No.4, Moores road, Chennai–600006, TN, India
                  </p>
                </div>
              </div>
            </div>

            <div
              className="timeline__event  timeline__event--type2"
              data-aos="flip-down"
            >
              <div className="timeline__event__icon">
                {/* <i className="lni-burger"></i> */}
                {/* <img className="profile-img" src={hometech} /> */}
              </div>
              <div className="timeline__event__date">{/* 20-08-2019 */}</div>
              <div className="timeline__event__content">
                <div className="timeline__event__title profile-text-align">
                  Branch Office’s
                </div>
                <div className="timeline__event__description">
                  <p className="profile-text-align">
                    S.Kotteswari Building,
                    <br />
                    P.S.Shanmugam Garden,No.89, Kamaraj Salai,
                    <br />
                    Pondicherry – 605 011.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="timeline__event  timeline__event--type3"
              data-aos="flip-down"
            >
              <div className="timeline__event__icon">
                {/* <i className="lni-slim"></i> */}
                {/* <img className="profile-img" src={hometech} /> */}
              </div>
              <div className="timeline__event__date">{/* 20-08-2019 */}</div>
              <div className="timeline__event__content">
                <div className="timeline__event__title profile-text-align">
                  Labour Camp
                </div>
                <div className="timeline__event__description">
                  <p className="profile-text-align">
                    # 50, Muthu Marriamman Koil Street,
                    <br />
                    Athipet Kuppam, Athipet, Ambattur
                    <br />
                    Chennai -600 058.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="timeline__event timeline__event--type1"
              data-aos="flip-down"
            >
              <div className="timeline__event__icon">
                {/* <i className="lni-cake"></i> */}
                {/* <img className="profile-img" src={hometech} /> */}
              </div>
              <div className="timeline__event__date">{/* 20-08-2019 */}</div>
              <div className="timeline__event__content">
                <div className="timeline__event__title profile-text-align">
                  Branch Office’s
                </div>
                <div className="timeline__event__description">
                  <p className="profile-text-align">
                    #94,Megadooth Building, Room No.611, <br />
                    6th Floor, Nehru Place,
                    <br />
                    New Delhi -110 019.
                    <br />
                    Ph: 09958880328, 011-46628891 & 46628892
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileC;
