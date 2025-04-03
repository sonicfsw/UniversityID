import React, { useState } from "react";
import "./ULK.css";
const ULK_5 = ({ onElementClick }) => {
  const [hoveredId, setHoveredId] = useState(null);

  // Обработчик события наведения мыши
  const handleMouseOver = (id) => {
    setHoveredId(id);
  };

  // Обработчик события ухода мыши
  const handleMouseOut = () => {
    setHoveredId(null);
  };

  // Обработчик события клика
  const handleClick = (id) => {
    // Вызываем функцию обработчика из пропсов и передаем id
    onElementClick(id);
    console.log(id);
  };

  return (
    <svg viewBox="0 0 1018 907" width="auto" height="auto">
      <g id="Audit">
        <g //501
          id="501"
          className={hoveredId === "501" ? "cls-501 highlighted" : "cls-501"}
          onMouseOver={() => handleMouseOver("501")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("501")}
        >
          <path
            class="cls-1"
            d="M270.3,745.9h-78.8c-2.8,0-5,2.2-5,5v85.4c0,2.8,2.2,5,5,5h78.8c2.8,0,5-2.2,5-5v-85.4C275.3,748.1,273.1,745.9,270.3,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 211.0561 800.0114)">
            501
          </text>
        </g>

        <g //502
          id="502"
          className={hoveredId === "502" ? "cls-502 highlighted" : "cls-502"}
          onMouseOver={() => handleMouseOver("502")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("502")}
        >
          <path
            class="cls-1"
            d="M343.9,581H195.2c-2.7,0-4.8,2.2-4.8,4.8v83.4c0,2.7,2.2,4.8,4.8,4.8H344c2.7,0,4.8-2.2,4.8-4.8v-83.4C348.8,583.2,346.6,581,343.9,581z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 210.3002 634.7577)">
            502
          </text>
        </g>

        <g //503
          id="503"
          className={hoveredId === "503" ? "cls-503 highlighted" : "cls-503"}
          onMouseOver={() => handleMouseOver("503")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("503")}
        >
          <path
            class="cls-1"
            d="M374.7,745.9h-79c-2.8,0-5,2.2-5,5v85.6c0,2.8,2.2,5,5,5h79c2.8,0,5-2.2,5-5v-85.6C379.7,748.2,377.4,745.9,374.7,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 314.28 800.3049)">
            503
          </text>
        </g>

        <g //503
          id="503"
          className={hoveredId === "503" ? "cls-503 highlighted" : "cls-503"}
          onMouseOver={() => handleMouseOver("503")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("503")}
        >
          <path
            class="cls-1"
            d="M374.7,745.9h-79c-2.8,0-5,2.2-5,5v85.6c0,2.8,2.2,5,5,5h79c2.8,0,5-2.2,5-5v-85.6C379.7,748.2,377.4,745.9,374.7,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 314.28 800.3049)">
            503
          </text>
        </g>

        <g //504
          id="504"
          className={hoveredId === "504" ? "cls-504 highlighted" : "cls-504"}
          onMouseOver={() => handleMouseOver("504")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("504")}
        >
          <path
            class="cls-1"
            d="M470.5,581.4h-96.7c-2.7,0-4.8,2.2-4.8,4.8v83c0,2.7,2.2,4.8,4.8,4.8h96.7c2.7,0,4.8-2.2,4.8-4.8v-83C475.3,583.6,473.2,581.4,470.5,581.4z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 401.1884 634.464)">
            504
          </text>
        </g>

        <g //505
          id="505"
          className={hoveredId === "505" ? "cls-505 highlighted" : "cls-505"}
          onMouseOver={() => handleMouseOver("505")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("505")}
        >
          <path
            class="cls-1"
            d="M485.1,745.9h-85.1c-2.6,0-4.6,2.2-4.6,5v85.4c0,2.8,2,5,4.6,5h85.1c2.6,0,4.6-2.2,4.6-5v-85.4C489.7,748.1,487.7,745.9,485.1,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 422.7501 800.0106)">
            505
          </text>
        </g>

        <g //506
          id="506"
          className={hoveredId === "506" ? "cls-506 highlighted" : "cls-506"}
          onMouseOver={() => handleMouseOver("506")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("506")}
        >
          <path
            class="cls-1"
            d="M657,365.4h-86.1c-2.8,0-5,3.2-5,7.2V556c0,4,2.2,7.2,5,7.2H657c2.8,0,5-3.2,5-7.2V372.6C662,368.7,659.7,365.4,657,365.4z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 594.1003 455.4998)">
            506
          </text>
        </g>

        <g //507
          id="507"
          className={hoveredId === "507" ? "cls-507 highlighted" : "cls-507"}
          onMouseOver={() => handleMouseOver("507")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("507")}
        >
          <path
            class="cls-1"
            d="M658.1,745.9H514.2c-2.7,0-4.8,2.2-4.8,4.8v85.8c0,2.7,2.2,4.8,4.8,4.8h143.9c2.7,0,4.8-2.2,4.8-4.8v-85.8C663,748.1,660.8,745.9,658.1,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 566.2573 800.0106)">
            507
          </text>
        </g>

        <g //508
          id="508"
          className={hoveredId === "508" ? "cls-508 highlighted" : "cls-508"}
          onMouseOver={() => handleMouseOver("508")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("508")}
        >
          <path
            class="cls-1"
            d="M657.1,349.4h-86.2c-2.8,0-5-2.2-5-5v-73c0-2.8,2.2-5,5-5h86.2c2.8,0,5,2.2,5,5v73C662.1,347.1,659.8,349.4,657.1,349.4z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 598.321 337.3234)">
            508
          </text>
        </g>

        <g //509
          id="509"
          className={hoveredId === "509" ? "cls-509 highlighted" : "cls-509"}
          onMouseOver={() => handleMouseOver("509")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("509")}
        >
          <path
            class="cls-1"
            d="M831.4,471.2h-92.7c-2.7,0-4.8,2.2-4.8,4.8v84.7c0,2.7,2.2,4.8,4.8,4.8h92.7c2.7,0,4.8-2.2,4.8-4.8V476C836.2,473.4,834.1,471.2,831.4,471.2z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 766.662 524.8025)">
            509
          </text>
        </g>

        <g //510
          id="510"
          className={hoveredId === "510" ? "cls-510 highlighted" : "cls-510"}
          onMouseOver={() => handleMouseOver("510")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("510")}
        >
          <path
            class="cls-1"
            d="M570.8,251.1h86.2c2.8,0,5-2.2,5-5v-82.2c0-2.8-2.2-5-5-5h-86.2c-2.8,0-5,2.2-5,5v82.2C565.8,248.9,568.1,251.1,570.8,251.1z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 597.5654 236.8998)">
            510
          </text>
        </g>

        <g //511
          id="511"
          className={hoveredId === "511" ? "cls-511 highlighted" : "cls-511"}
          onMouseOver={() => handleMouseOver("511")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("511")}
        >
          <path
            class="cls-1"
            d="M831.2,365.4h-92.3c-2.8,0-5,2.2-5,5v80.1c0,2.8,2.2,5,5,5h92.3c2.8,0,5-2.2,5-5v-80.1C836.2,367.6,834,365.4,831.2,365.4z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 766.1998 418.0002)">
            511
          </text>
        </g>

        <g //512
          id="512"
          className={hoveredId === "512" ? "cls-512 highlighted" : "cls-512"}
          onMouseOver={() => handleMouseOver("512")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("512")}
        >
          <path
            class="cls-1"
            d="M657.2,56.9h-86.6c-2.7,0-4.8,2.2-4.8,4.8v76.9c0,2.7,2.2,4.8,4.8,4.8h86.6c2.7,0,4.8-2.2,4.8-4.8V61.7C662,59.1,659.9,56.9,657.2,56.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 596.81 128.4156)">
            512
          </text>
        </g>

        <g //513
          id="513"
          className={hoveredId === "513" ? "cls-513 highlighted" : "cls-513"}
          onMouseOver={() => handleMouseOver("513")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("513")}
        >
          <path
            class="cls-1"
            d="M832.1,266.4h-93c-2.8,0-5,2.2-5,5v73.8c0,2.8,2.2,5,5,5h93c2.8,0,5-2.2,5-5v-73.8C837.1,268.7,834.8,266.4,832.1,266.4z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 769.7115 338.0999)">
            513
          </text>
        </g>

        <g //515
          id="515"
          className={hoveredId === "515" ? "cls-515 highlighted" : "cls-515"}
          onMouseOver={() => handleMouseOver("515")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("515")}
        >
          <path
            class="cls-1"
            d="M831.2,158.9h-92.2c-2.8,0-5,2.2-5,5v82.2c0,2.8,2.2,5,5,5h92.2c2.8,0,5-2.2,5-5v-82.2C836.2,161.2,834,158.9,831.2,158.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 768.9561 236.8999)">
            515
          </text>
        </g>

        <g //517
          id="517"
          className={hoveredId === "517" ? "cls-517 highlighted" : "cls-517"}
          onMouseOver={() => handleMouseOver("517")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("517")}
        >
          <path
            class="cls-1"
            d="M832.2,102.4h-93.3c-2.7,0-4.8,2.2-4.8,4.8v33.4c0,2.7,2.2,4.8,4.8,4.8h93.3c2.7,0,4.8-2.2,4.8-4.8v-33.4C837.1,104.5,834.9,102.4,832.2,102.4z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 768.2004 131.164)">
            517
          </text>
        </g>

        <text transform="matrix(1 0 0 1 597.683 608.3777)" class="st4 st5 st6">
          WC
        </text>
        <text transform="matrix(1 0 0 1 581.7489 662.6066)" class="st4 st5 st6">
          WC
        </text>
        <text transform="matrix(1 0 0 1 824.0043 783.1808)" class="st4 st5 st6">
          Л
        </text>
        <text transform="matrix(1 0 0 1 757.4421 849.2247)" class="st4 st5 st6">
          Л
        </text>
      </g>
      <g id="Walls">
        <rect x="737.1" y="823.5" class="st7" width="5.5" height="42.4" />
        <rect x="74.4" y="570.8" class="st7" width="609.9" height="5.5" />
        <rect x="74.4" y="571.4" class="st7" width="5.5" height="280.5" />
        <rect x="671.5" y="735.3" class="st7" width="5.5" height="114.1" />
        <rect x="495.4" y="737.9" class="st7" width="5.5" height="109" />
        <rect x="384.6" y="737.9" class="st7" width="5.5" height="109" />
        <rect x="176.1" y="737.9" class="st7" width="5.5" height="111.5" />
        <rect x="357.6" y="575.7" class="st7" width="5.4" height="107.5" />
        <rect x="555" y="46.4" class="st7" width="5.5" height="633.6" />
        <rect x="557.7" y="46.4" class="st7" width="289.7" height="5.8" />
        <rect x="841.9" y="47.4" class="st7" width="5.5" height="637.3" />
        <rect x="700.1" y="679.2" class="st7" width="147.4" height="5.5" />
        <rect x="176.2" y="720.3" class="st7" width="5.2" height="15" />
        <rect x="176.1" y="575.7" class="st7" width="5.5" height="119.4" />
        <rect x="718.1" y="748.4" class="st7" width="48.2" height="5.5" />
        <rect x="810.6" y="682" class="st7" width="5.5" height="84.3" />
        <rect x="674.2" y="818.9" class="st7" width="81.2" height="5.5" />
        <rect x="789.5" y="820.7" class="st7" width="5.5" height="45.3" />
        <rect x="737.1" y="860.5" class="st7" width="54.7" height="5.5" />
        <rect x="810.6" y="785.7" class="st7" width="5.5" height="19.4" />
        <rect x="815.9" y="748.4" class="st7" width="39.6" height="5.5" />
        <rect x="850" y="749.5" class="st7" width="5.5" height="53.9" />
        <rect x="815.9" y="799.6" class="st7" width="39.6" height="5.5" />
        <rect x="773.8" y="818.8" class="st7" width="21.2" height="5.8" />
        <rect x="710.9" y="570.8" class="st7" width="133.8" height="5.5" />
        <line class="st3" x1="673" y1="628.4" x2="667.3" y2="628.4" />
        <rect x="723.4" y="94" class="st7" width="123.9" height="5.5" />
        <rect x="726.5" y="256.3" class="st7" width="116.3" height="5.5" />
        <rect x="557.7" y="399.6" class="st7" width="74.7" height="5.5" />
        <rect x="654.2" y="399.6" class="st7" width="15.9" height="5.5" />
        <rect x="559.6" y="354" class="st7" width="109.5" height="5.5" />
        <rect x="725.5" y="460.5" class="st7" width="119.2" height="5.5" />
        <rect x="717.2" y="574.1" class="st7" width="5.5" height="26.8" />
        <rect x="717.2" y="654.6" class="st7" width="5.5" height="25.3" />
        <rect x="777.8" y="608.8" class="st7" width="66.9" height="5.5" />
        <rect x="777.8" y="642.8" class="st7" width="66.9" height="5.5" />
        <rect x="644.1" y="627.7" class="st7" width="5.5" height="32.5" />
        <rect x="559.6" y="627.7" class="st7" width="90.1" height="5.5" />

        <rect
          x="787.2"
          y="809.3"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -338.7498 805.838)"
          class="st7"
          width="32.4"
          height="5.1"
        />
        <rect x="108.6" y="575.3" class="st7" width="5.5" height="61.6" />
        <rect x="142.8" y="574.7" class="st7" width="5.5" height="62.3" />
        <path
          class="st8"
          d="M178.8,852c0,14.3-21.6,26-51.1,26s-50.8-11.7-50.8-26"
        />
        <rect x="722.7" y="49.5" class="st7" width="5.5" height="17.6" />
        <rect x="667.4" y="135.1" class="st7" width="5.5" height="30.8" />
        <rect x="722.7" y="190.9" class="st7" width="5.5" height="73.7" />
        <rect x="667.4" y="190.9" class="st7" width="5.5" height="129.1" />
        <rect x="722.7" y="289.5" class="st7" width="5.5" height="32.4" />
        <rect x="722.7" y="346.8" class="st7" width="5.5" height="71.2" />
        <rect x="667.4" y="344.9" class="st7" width="5.5" height="92.5" />
        <g>
          <rect x="667.4" y="539" class="st7" width="5.5" height="89.4" />
          <rect x="667.4" y="462.4" class="st7" width="5.5" height="51.6" />
        </g>
        <g>
          <rect x="722.7" y="442.9" class="st7" width="5.5" height="79.3" />
          <rect x="722.7" y="547.2" class="st7" width="5.5" height="26.9" />
        </g>
        <g>
          <rect x="722.6" y="84.2" class="st7" width="5.8" height="23.4" />
          <rect x="722.7" y="124.8" class="st7" width="5.5" height="41.2" />
        </g>
        <rect x="76.9" y="679.2" class="st7" width="23.7" height="5.5" />
        <rect x="74.4" y="846.6" class="st7" width="29.3" height="5.5" />
        <g>
          <rect x="127.7" y="846.6" class="st7" width="8.8" height="5.5" />
          <rect x="160.4" y="846.6" class="st7" width="516.7" height="5.5" />
        </g>
        <rect x="154.7" y="679.2" class="st7" width="122.3" height="5.5" />
        <rect x="176.2" y="735.1" class="st7" width="20.4" height="5.5" />
        <rect x="302" y="679.2" class="st7" width="103.1" height="5.5" />
        <g>
          <rect x="525.1" y="679.2" class="st7" width="146.3" height="5.5" />
          <rect x="430" y="679.2" class="st7" width="70.1" height="5.5" />
        </g>
        <g>
          <rect x="481.2" y="573.5" class="st7" width="5.5" height="38.8" />
          <rect x="481.2" y="637.3" class="st7" width="5.5" height="45.9" />
        </g>
        <rect x="475.3" y="735.1" class="st7" width="43" height="5.5" />
        <g>
          <rect x="543.3" y="735.1" class="st7" width="71.8" height="5.5" />
          <rect x="640" y="735.1" class="st7" width="34.2" height="5.5" />
        </g>
        <rect x="773.3" y="70.2" class="st7" width="40.5" height="5.5" />
        <g>
          <rect x="773.3" y="50.9" class="st7" width="6.4" height="16.2" />
          <rect x="781.9" y="50.9" class="st7" width="6.4" height="16.2" />
          <rect x="790.4" y="50.9" class="st7" width="6.4" height="16.2" />
          <rect x="799.3" y="50.9" class="st7" width="6.4" height="16.2" />
          <rect x="807.6" y="50.9" class="st7" width="6.4" height="16.2" />
        </g>
        <g>
          <rect x="773.2" y="78.5" class="st7" width="6.4" height="16.2" />
          <rect x="781.8" y="78.5" class="st7" width="6.4" height="16.2" />
          <rect x="790.3" y="78.5" class="st7" width="6.4" height="16.2" />
          <rect x="799.2" y="78.5" class="st7" width="6.4" height="16.2" />
          <rect x="807.5" y="78.5" class="st7" width="6.4" height="16.2" />
        </g>
        <g>
          <rect x="770.3" y="616.3" class="st7" width="7.3" height="24.3" />
          <rect x="779.4" y="616.3" class="st7" width="7.3" height="24.3" />
          <rect x="788.6" y="616.3" class="st7" width="7.3" height="24.3" />
          <rect x="797.8" y="616.3" class="st7" width="7.3" height="24.3" />
          <rect x="807.1" y="616.3" class="st7" width="7.3" height="24.3" />
        </g>
        <g>
          <rect x="770.2" y="582.3" class="st7" width="7.3" height="24.3" />
          <rect x="779.2" y="582.3" class="st7" width="7.3" height="24.3" />
          <rect x="788.4" y="582.3" class="st7" width="7.3" height="24.3" />
          <rect x="797.6" y="582.3" class="st7" width="7.3" height="24.3" />
          <rect x="806.9" y="582.3" class="st7" width="7.3" height="24.3" />
        </g>
        <g>
          <rect x="770.7" y="650.3" class="st7" width="7.3" height="24.3" />
          <rect x="779.7" y="650.3" class="st7" width="7.3" height="24.3" />
          <rect x="788.9" y="650.3" class="st7" width="7.3" height="24.3" />
          <rect x="798.1" y="650.3" class="st7" width="7.3" height="24.3" />
          <rect x="807.4" y="650.3" class="st7" width="7.3" height="24.3" />
        </g>
        <g>
          <rect x="82" y="638.4" class="st7" width="24.3" height="7.3" />
          <rect x="82" y="629.4" class="st7" width="24.3" height="7.3" />
          <rect x="82" y="620.2" class="st7" width="24.3" height="7.3" />
          <rect x="82" y="611" class="st7" width="24.3" height="7.3" />
          <rect x="82" y="601.7" class="st7" width="24.3" height="7.3" />
        </g>
        <g>
          <rect x="116.5" y="638.5" class="st7" width="24.3" height="7.3" />
          <rect x="116.5" y="629.5" class="st7" width="24.3" height="7.3" />
          <rect x="116.5" y="620.3" class="st7" width="24.3" height="7.3" />
          <rect x="116.5" y="611.1" class="st7" width="24.3" height="7.3" />
          <rect x="116.5" y="601.8" class="st7" width="24.3" height="7.3" />
        </g>
        <g>
          <rect x="150.2" y="638.7" class="st7" width="24.3" height="7.3" />
          <rect x="150.2" y="629.7" class="st7" width="24.3" height="7.3" />
          <rect x="150.2" y="620.5" class="st7" width="24.3" height="7.3" />
          <rect x="150.2" y="611.3" class="st7" width="24.3" height="7.3" />
          <rect x="150.2" y="602" class="st7" width="24.3" height="7.3" />
        </g>
        <rect x="557.7" y="148.3" class="st7" width="115.2" height="5.5" />
        <rect x="722.7" y="148.3" class="st7" width="121.9" height="5.5" />
        <rect x="667.4" y="49.5" class="st7" width="5.5" height="58.7" />
        <rect x="722.7" y="262.2" class="st7" width="5.5" height="28.3" />
        <g>
          <rect x="724.8" y="202.7" class="st7" width="12.6" height="5.5" />
          <rect x="761" y="202.7" class="st7" width="83.5" height="5.5" />
        </g>
        <rect x="557.7" y="305.7" class="st7" width="74.7" height="5.5" />
        <rect x="654.2" y="305.7" class="st7" width="15.9" height="5.5" />
        <rect x="727" y="354.9" class="st7" width="116.3" height="5.5" />
        <g>
          <rect x="557.7" y="499.4" class="st7" width="29.6" height="5.5" />
          <rect x="609.8" y="499.4" class="st7" width="60.3" height="5.5" />
        </g>
        <polygon
          class="st7"
          points="402.7,735.1 400.7,735.1 378.7,735.1 377.1,735.1 377.1,740.6 378.7,740.6 400.7,740.6 402.7,740.6 
		450.4,740.6 450.4,735.1 	"
        />
        <rect x="484" y="644.8" class="st7" width="71.8" height="5.5" />
        <rect x="559.1" y="256.3" class="st7" width="109.5" height="5.5" />
        <polyline
          class="st7"
          points="725.5,308.5 738.1,308.5 738.1,314 725.5,314 	"
        />
        <polyline
          class="st7"
          points="845.2,314 761.7,314 761.7,308.5 845.2,308.5 	"
        />
        <polyline
          class="st7"
          points="671.2,202.7 658.6,202.7 658.6,208.2 671.2,208.2 	"
        />
        <polyline
          class="st7"
          points="557.5,208.2 635,208.2 635,202.7 557.5,202.7 	"
        />
        <rect x="632.2" y="502.1" class="st7" width="5.5" height="71.6" />
        <polyline
          class="st7"
          points="671.2,94 658.6,94 658.6,99.5 671.2,99.5 	"
        />
        <polyline class="st7" points="557.5,99.5 635,99.5 635,94 557.5,94 	" />
        <g>
          <rect x="622.5" y="190.4" class="st7" width="5.5" height="15.1" />
          <rect x="622.5" y="151.6" class="st7" width="5.5" height="13.8" />
        </g>
        <g>
          <rect x="767.8" y="151.6" class="st7" width="5.5" height="13.8" />
          <rect x="767.8" y="190.9" class="st7" width="5.5" height="14.6" />
        </g>
        <rect x="767.8" y="257.3" class="st7" width="5.5" height="13.8" />
        <rect x="767.8" y="296.6" class="st7" width="5.5" height="14.6" />
        <rect x="622.5" y="256.3" class="st7" width="5.5" height="13.8" />
        <rect x="622.5" y="295.6" class="st7" width="5.5" height="14.6" />
        <rect x="264.3" y="573.5" class="st7" width="5.5" height="74.6" />
        <rect x="308.8" y="573.5" class="st7" width="5.5" height="74.6" />
        <rect x="264.3" y="669.9" class="st7" width="5.5" height="12.6" />
        <polyline
          class="st7"
          points="314.3,669.9 314.3,682.5 308.8,682.5 308.8,669.9 	"
        />
        <rect x="280.2" y="737.8" class="st7" width="5.5" height="109" />
        <g>
          <rect x="318.9" y="735.1" class="st7" width="33.2" height="5.5" />
          <rect x="221.5" y="735.1" class="st7" width="72.4" height="5.5" />
        </g>
      </g>
    </svg>
  );
};

export default ULK_5;
