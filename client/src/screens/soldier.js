import React from "react";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SoldierMenuBar from "../components/soldierMenuBar";
import TopStats from "../components/topStats";

function Soldier() {
  const [data, setData] = useState(null);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    // Function to fetch data from the server
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://battlefield4-server.vercel.app/api/data"
        );
        console.log(response.data)
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);
  const soldierMenuData = data && data.soldierMenu ? data.soldierMenu : [];
  const TopGameStatsData = data && data.TopGameStats ? data.TopGameStats : [];
  return (
    <div className="row soldier">
      <div className="col-lg-4 soldier-look">
        <div className="dogtags">
          <img
            src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc400244d4c8d9870cd_premium%20dog%20tag.png"
            alt=""
            className="soldier-dogtags-left"
          />
          <img
            src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc4c0c4fca91b669847_BF4_Celebration_Dog_Tag.png"
            alt=""
            className="soldier-dogtags-right"
          />
        </div>
        <img
          src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc5c0c4fc008966984e_soldier__pic.png"
          alt=""
          className="soldier-pic"
        />
      </div>
      <div className="col-lg-4 soldier-content">
        <div className="row soldier-info">
          <div className="col-lg-6 soldier-level">
            <div className="soldier-level-bar">
              <img
                src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1b899e303b6e902c5e4_home__level-icon.png"
                alt="My Logo"
                className="soldier-level-icon"
              />
            </div>
          </div>
          <div className="col-lg-6 soldier-level-info">
            <div className="soldier-level-info-h">Cookie</div>
            <div className="row soldier-level-stats">
              <div className="col-sm-4 soldier-level-no">
                <div className="soldier-level-text">
                  {data &&
                    data.gamestats &&
                    data.gamestats.length > 0 &&
                    data.gamestats[0].levelNo}
                </div>
              </div>
              <div className="col-sm-4 soldier-level-current">
                {data &&
                  data.gamestats &&
                  data.gamestats.length > 0 &&
                  data.gamestats[0].currentLevel}
              </div>
              <div className="col-sm-4 soldier-level-estimate">
                - Estimated rank up in 1h
              </div>
            </div>
          </div>
        </div>
        <div className="soldier-select">
          <div className="row soldier-menu">
            {soldierMenuData.map((menu, index) => (
              <SoldierMenuBar
                key={index}
                heading={menu.Heading}
                stats={menu.stats}
                width={menu.width}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="col-lg-4 soldier-game-stats">
        <div className="soldier-stats-w">
          <div className="soldier-stats">
            <div className="soldier-stats-h">wins</div>
            <div className="soldier-stats-percent">
              {data &&
                data.gamestats &&
                data.gamestats.length > 0 &&
                data.gamestats[0].wins}
              %
            </div>
          </div>
          <div className="soldier-stats">
            <div className="soldier-stats-h">score/min</div>
            <div className="soldier-stats-percent">
              {data &&
                data.gamestats &&
                data.gamestats.length > 0 &&
                data.gamestats[0].score}
            </div>
          </div>
          <div className="soldier-stats">
            <div className="soldier-stats-h">kills/min</div>
            <div className="soldier-stats-percent">
              {data &&
                data.gamestats &&
                data.gamestats.length > 0 &&
                data.gamestats[0].kills}
            </div>
          </div>
        </div>
        <div className="soldier-top-stats-w">
          {TopGameStatsData &&
            TopGameStatsData.map((menu, index) => (
              <TopStats
                key={index}
                heading={menu.heading}
                subtitle1={menu.subtitle1}
                subtitle2={menu.subtitle2}
                img={menu.img}
                imgBlack={menu.imgBlack}
                marginLeft={menu.marginLeft}
              />
            ))}
        </div>
        <img
          src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc47b02ee10043f39c3_soldier__BFemblem.png"
          alt=""
          className="soldier-emblem"
        />
      </div>
    </div>
  );
}

export default Soldier;
