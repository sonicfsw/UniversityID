import React, { useState } from "react";
import "./ULK.css";
const ULK_3 = ({ onElementClick }) => {
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
        <g //301
          id="301"
          className={hoveredId === "301" ? "cls-301 highlighted" : "cls-301"}
          onMouseOver={() => handleMouseOver("301")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("301")}
        >
          <path
            class="cls-1"
            d="M319.5,745.9H192.8c-2.1,0-3.8,2.2-3.8,5v85.4c0,2.8,1.7,5,3.8,5h126.6c2.1,0,3.8-2.2,3.8-5v-85.4C323.3,748.1,321.5,745.9,319.5,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 238.5679 800.3049)">
            301
          </text>
        </g>

        <g //302
          id="302"
          className={hoveredId === "302" ? "cls-302 highlighted" : "cls-302"}
          onMouseOver={() => handleMouseOver("302")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("302")}
        >
          <path
            class="cls-1"
            d="M343.9,581H195.2c-2.7,0-4.8,2.2-4.8,4.8v83.4c0,2.7,2.2,4.8,4.8,4.8H344c2.7,0,4.8-2.2,4.8-4.8v-83.4C348.8,583.2,346.6,581,343.9,581z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 253.3002 634.7577)">
            302
          </text>
        </g>

        <g //303
          id="303"
          className={hoveredId === "303" ? "cls-303 highlighted" : "cls-303"}
          onMouseOver={() => handleMouseOver("303")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("303")}
        >
          <path
            class="cls-1"
            d="M482.4,745.9H348.9c-4.1,0-7.3,2.2-7.3,5v85.4c0,2.8,3.2,5,7.3,5h133.5c4.1,0,7.3-2.2,7.3-5v-85.4C489.7,748.1,486.5,745.9,482.4,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 395.1745 800.5983)">
            303
          </text>
        </g>

        <g //304
          id="304"
          className={hoveredId === "304" ? "cls-304 highlighted" : "cls-304"}
          onMouseOver={() => handleMouseOver("304")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("304")}
        >
          <path
            class="cls-1"
            d="M470.5,581.4h-96.7c-2.7,0-4.8,2.2-4.8,4.8v83c0,2.7,2.2,4.8,4.8,4.8h96.7c2.7,0,4.8-2.2,4.8-4.8v-83C475.3,583.6,473.2,581.4,470.5,581.4z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 404.1884 634.464)">
            304
          </text>
        </g>

        <g //305
          id="305"
          className={hoveredId === "305" ? "cls-305 highlighted" : "cls-305"}
          onMouseOver={() => handleMouseOver("305")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("305")}
        >
          <path
            class="cls-1"
            d="M660.5,745.9H511.6c-2.8,0-5,2.2-5,4.8v85.8c0,2.7,2.3,4.8,5,4.8h148.9c2.8,0,5-2.2,5-4.8v-85.8C665.5,748.1,663.2,745.9,660.5,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 566.2573 800.0106)">
            305
          </text>
        </g>

        <g //306
          id="306"
          className={hoveredId === "306" ? "cls-306 highlighted" : "cls-306"}
          onMouseOver={() => handleMouseOver("306")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("306")}
        >
          <path
            class="cls-1"
            d="M546.7,581.4H495c-2.7,0-4.8,1.4-4.8,3.1v52.9c0,1.7,2.2,3.1,4.8,3.1h51.8c2.7,0,4.8-1.4,4.8-3.1v-52.9C551.5,582.8,549.4,581.4,546.7,581.4z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 502.4392 620.4235)">
            306
          </text>
        </g>

        <g //307
          id="307"
          className={hoveredId === "307" ? "cls-307 highlighted" : "cls-307"}
          onMouseOver={() => handleMouseOver("307")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("307")}
        >
          <path
            class="cls-1"
            d="M831.4,471.2h-92.7c-2.7,0-4.8,2.2-4.8,4.8v84.7c0,2.7,2.2,4.8,4.8,4.8h92.7c2.7,0,4.8-2.2,4.8-4.8V476C836.2,473.4,834.1,471.2,831.4,471.2z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 765.662 524.8025)">
            307
          </text>
        </g>

        <g //308
          id="308"
          className={hoveredId === "308" ? "cls-308 highlighted" : "cls-308"}
          onMouseOver={() => handleMouseOver("308")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("308")}
        >
          <path
            class="cls-1"
            d="M657,368.8h-86.1c-2.8,0-5,2-5,4.6v115.9c0,2.6,2.2,4.6,5,4.6H657c2.8,0,5-2,5-4.6V373.4C662,370.9,659.7,368.8,657,368.8z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 592.8194 437.3998)">
            308
          </text>
        </g>

        <g //309
          id="309"
          className={hoveredId === "309" ? "cls-309 highlighted" : "cls-309"}
          onMouseOver={() => handleMouseOver("309")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("309")}
        >
          <path
            class="cls-1"
            d="M831.2,308.5h-92.3c-2.8,0-5,3.6-5,8.2v130.7c0,4.6,2.2,8.2,5,8.2h92.3c2.8,0,5-3.6,5-8.2V316.7C836.2,312.1,834,308.5,831.2,308.5z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 765.1634 388.8998)">
            309
          </text>
        </g>

        <g //310
          id="310"
          className={hoveredId === "310" ? "cls-310 highlighted" : "cls-310"}
          onMouseOver={() => handleMouseOver("310")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("310")}
        >
          <path
            class="cls-1"
            d="M657.1,160.9h-86.2c-2.8,0-5,2.3-5,5.1v179.2c0,2.9,2.2,5.1,5,5.1h86.2c2.8,0,5-2.3,5-5.1V166C662.1,163.3,659.8,160.9,657.1,160.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 594.0996 261.95)">
            310
          </text>
        </g>

        <g //311
          id="311"
          className={hoveredId === "311" ? "cls-311 highlighted" : "cls-311"}
          onMouseOver={() => handleMouseOver("311")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("311")}
        >
          <path
            class="cls-1"
            d="M831.4,160.9h-92.5c-2.7,0-4.8,2.2-4.8,4.8v119c0,2.7,2.2,4.8,4.8,4.8h92.5c2.7,0,4.8-2.2,4.8-4.8v-119C836.2,163.1,834.1,160.9,831.4,160.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 767.6997 227.7502)">
            311
          </text>
        </g>

        <g //313
          id="313"
          className={hoveredId === "313" ? "cls-313 highlighted" : "cls-313"}
          onMouseOver={() => handleMouseOver("313")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("313")}
        >
          <path
            class="cls-1"
            d="M832.2,102.4h-93.3c-2.7,0-4.8,2.2-4.8,4.8v33.4c0,2.7,2.2,4.8,4.8,4.8h93.3c2.7,0,4.8-2.2,4.8-4.8v-33.4C837.1,104.5,834.9,102.4,832.2,102.4z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 768.2004 131.164)">
            313
          </text>
        </g>
        <text transform="matrix(1 0 0 1 597.683 608.3777)" class="st3 st4 st5">
          WC
        </text>
        <text transform="matrix(1 0 0 1 581.7489 662.6066)" class="st3 st4 st5">
          WC
        </text>
        <text transform="matrix(1 0 0 1 824.0043 783.1808)" class="st3 st4 st5">
          Л
        </text>
        <text transform="matrix(1 0 0 1 757.4421 849.2247)" class="st3 st4 st5">
          Л
        </text>
      </g>
      <g id="Walls">
        <rect x="737.1" y="823.5" class="st7" width="5.5" height="42.4" />
        <rect x="74.4" y="570.8" class="st7" width="609.9" height="5.5" />
        <rect x="74.4" y="571.4" class="st7" width="5.5" height="280.5" />
        <rect x="671.5" y="735.3" class="st7" width="5.5" height="114.1" />
        <rect x="495.4" y="737.9" class="st7" width="5.5" height="109" />
        <rect x="330.5" y="739.1" class="st7" width="5.5" height="109" />
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
        <line class="st7" x1="673" y1="628.4" x2="667.3" y2="628.4" />
        <rect x="723.4" y="94" class="st7" width="123.9" height="5.5" />
        <rect x="726.5" y="296.7" class="st7" width="116.3" height="5.5" />
        <rect x="557.7" y="357.6" class="st7" width="74.7" height="5.5" />
        <rect x="654.2" y="357.6" class="st7" width="15.9" height="5.5" />
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
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -338.7299 805.8594)"
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
        <rect x="722.7" y="190.9" class="st7" width="5.5" height="73.7" />
        <rect x="667.4" y="190.9" class="st7" width="5.5" height="134.1" />
        <rect x="722.7" y="346.8" class="st7" width="5.5" height="71.2" />
        <rect x="667.4" y="349.9" class="st7" width="5.5" height="87.5" />
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
        <rect x="154.7" y="679.2" class="st7" width="128.3" height="5.5" />
        <rect x="176.2" y="735.1" class="st7" width="20.4" height="5.5" />
        <rect x="308" y="679.2" class="st7" width="97.1" height="5.5" />
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
        <g>
          <rect x="557.7" y="499.4" class="st7" width="29.6" height="5.5" />
          <rect x="609.8" y="499.4" class="st7" width="60.3" height="5.5" />
        </g>
        <rect x="484" y="644.8" class="st7" width="71.8" height="5.5" />
      </g>
    </svg>
  );
};

export default ULK_3;
