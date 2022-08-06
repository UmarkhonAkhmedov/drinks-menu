import React from "react";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation(["Home"]);

  return (
    <div className="site-main">
      <div className="container--main">
        <div className="main">
          <div className="main__img">
            <img
              className="main__img--img"
              src="/assets/images/drink.jpg"
              alt="Drink Image"
            />
            <div className="main__img--title">
              <div className="dial">
                <span>{t("dial")}</span>
                <p>O</p>
              </div>
              <h2 className="drinks__text">{t("drink")}</h2>
              <div className="main__img--title__subtitle">
                <img
                  src="https://img.icons8.com/office/16/000000/clock--v1.png"
                  alt="clock"
                />
                <span>{t("served")}</span>
              </div>
            </div>
          </div>
          <div className="main__info">
            <table>
              <tr>
                <th className="first"></th>
                <th className="first">250 {t("ml")}</th>
                <th className="first">330 {t("ml")}</th>
                <th className="first">750 {t("ml")}</th>
              </tr>
              <tr>
                <th>{t("sparking")}</th>
                <th className="red"></th>
                <th className="red"></th>
                <th className="red"></th>
              </tr>
              <tr>
                <td>San Pellegrino</td>
                <td className="red">70 000</td>
                <td className="red"></td>
                <td className="red">110 000</td>
              </tr>
              <tr>
                <td>Blanc Bleu</td>
                <td className="red">110 000</td>
                <td className="red">30 000</td>
                <td className="red">50 000</td>
              </tr>
              {/*  */}
              <tr>
                <th>{t("still")}</th>
                <th className="red"></th>
                <th className="red"></th>
                <th className="red"></th>
              </tr>
              <tr>
                <td>Acqua Panna</td>
                <td className="red">70 000</td>
                <td className="red"></td>
                <td className="red">110 000</td>
              </tr>
              <tr>
                <td>Blanc Bleu</td>
                <td className="red">110 000</td>
                <td className="red">30 000</td>
                <td className="red">50 000</td>
              </tr>
              {/*  */}
              <tr>
                <th>{t("soft")}</th>
                <th className="red"></th>
                <th className="red"></th>
                <th className="red"></th>
              </tr>
              <tr>
                <td>Coca-Cola, Fanta, Sprite</td>
                <td className="red">30 000</td>
                <td className="red"></td>
                <td className="red"></td>
              </tr>
              <tr>
                <td>Coca-Cola Zero</td>
                <td className="red">50 000</td>
                <td className="red"></td>
                <td className="red"></td>
              </tr>
              <tr>
                <td>Red Bull</td>
                <td className="red">50 000</td>
                <td className="red"></td>
                <td className="red"></td>
              </tr>
              <tr>
                <td>Schweppes Tonic</td>
                <td className="red">40 000</td>
                <td className="red"></td>
                <td className="red"></td>
              </tr>
              {/*  */}
              <tr>
                <th>{t("juice")}</th>
                <th className="red"></th>
                <th className="red"></th>
                <th className="red"></th>
              </tr>
              <tr>
                <td>
                  {t("orange")}, {t("cherry")},
                </td>
                <td className="red"></td>
                <td className="red"></td>
                <td className="red"></td>
              </tr>
              <tr>
                <td>
                  {t("apple")}, {t("pineapple")},
                </td>
                <td className="red"></td>
                <td className="red"></td>
                <td className="red"></td>
              </tr>
              <tr>
                <td>{t("tomato")}</td>
                <td className="red">25 000</td>
                <td className="red"></td>
                <td className="red"></td>
              </tr>
              {/*  */}
              <tr>
                <th>{t("freshly")}</th>
                <th className="red"></th>
                <th className="red"></th>
                <th className="red"></th>
              </tr>
              <tr>
                <td>{t("orange")}</td>
                <td className="red">70 000</td>
                <td className="red"></td>
                <td className="red"></td>
              </tr>
              <tr>
                <td>{t("grapefruit")}</td>
                <td className="red">80 000</td>
                <td className="red"></td>
                <td className="red"></td>
              </tr>
              <tr>
                <td>{t("apple")}</td>
                <td className="red">50 000</td>
                <td className="red"></td>
                <td className="red"></td>
              </tr>
              <tr>
                <td>{t("carrot")}</td>
                <td className="red">30 000</td>
                <td className="red"></td>
                <td className="red"></td>
              </tr>
              {/*  */}
              <tr>
                <th>{t("hot")}</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>{t("tea")}</td>
                <td>600 {t("ml")}</td>
                <td className="red">45 000</td>
                <td></td>
              </tr>
              <tr>
                <td>{t("espresso")}</td>
                <td>30 {t("ml")}</td>
                <td className="red">40 000</td>
                <td></td>
              </tr>
              <tr>
                <td>{t("2espresso")}</td>
                <td>60 {t("ml")}</td>
                <td className="red">45 000</td>
                <td></td>
              </tr>
              <tr>
                <td>{t("americano")}</td>
                <td>120 {t("ml")}</td>
                <td className="red">40 000</td>
                <td></td>
              </tr>
              <tr>
                <td>{t("cappucino")}</td>
                <td>180 {t("ml")}</td>
                <td className="red">45 000</td>
                <td></td>
              </tr>
              <tr>
                <td>{t("latte")}</td>
                <td>180 {t("ml")}</td>
                <td className="red">50 000</td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
