import React, { useState } from "react";
import "./ULK.css";
const ULK_4 = ({ onElementClick }) => {
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
      <g //401
        id="401"
        className={hoveredId === "401" ? "cls-401 highlighted" : "cls-401"}
        onMouseOver={() => handleMouseOver("401")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("401")}
      >
        <path
          class="cls-1"
          d="M361.9,745.9H196.4c-2.8,0-5,2.2-5,5v85.4c0,2.8,2.2,5,5,5h165.5c2.8,0,5-2.2,5-5v-85.4
			C366.9,748.1,364.6,745.9,361.9,745.9z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 260.5679 800.3049)">
          401
        </text>
      </g>

      <g //402
        id="402"
        className={hoveredId === "402" ? "cls-402 highlighted" : "cls-402"}
        onMouseOver={() => handleMouseOver("402")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("402")}
      >
        <path
          class="cls-1"
          d="M343.9,581H195.2c-2.7,0-4.8,2.2-4.8,4.8v83.4c0,2.7,2.2,4.8,4.8,4.8H344c2.7,0,4.8-2.2,4.8-4.8v-83.4C348.8,583.2,346.6,581,343.9,581z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 253.3002 634.7577)">
          402
        </text>
      </g>

      <g //403
        id="403"
        className={hoveredId === "403" ? "cls-403 highlighted" : "cls-403"}
        onMouseOver={() => handleMouseOver("403")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("403")}
      >
        <path
          class="cls-1"
          d="M484.7,745.9h-92c-2.8,0-5,2.2-5,5v85.4c0,2.8,2.2,5,5,5h92c2.8,0,5-2.2,5-5v-85.4C489.7,748.1,487.5,745.9,484.7,745.9z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 418.7501 800.0106)">
          403
        </text>
      </g>

      <g //404
        id="404"
        className={hoveredId === "404" ? "cls-404 highlighted" : "cls-404"}
        onMouseOver={() => handleMouseOver("404")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("404")}
      >
        <path
          class="cls-1"
          d="M470.5,581.4h-96.7c-2.7,0-4.8,2.2-4.8,4.8v83c0,2.7,2.2,4.8,4.8,4.8h96.7c2.7,0,4.8-2.2,4.8-4.8v-83C475.3,583.6,473.2,581.4,470.5,581.4z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 404.1884 634.464)">
          404
        </text>
      </g>

      <g //405
        id="405"
        className={hoveredId === "405" ? "cls-405 highlighted" : "cls-405"}
        onMouseOver={() => handleMouseOver("405")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("405")}
      >
        <path
          class="cls-1"
          d="M658.1,745.9H514.2c-2.7,0-4.8,2.2-4.8,4.8v85.8c0,2.7,2.2,4.8,4.8,4.8h143.9c2.7,0,4.8-2.2,4.8-4.8v-85.8C663,748.1,660.8,745.9,658.1,745.9z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 566.2573 800.0106)">
          405
        </text>
      </g>

      <g //406
        id="406"
        className={hoveredId === "406" ? "cls-406 highlighted" : "cls-406"}
        onMouseOver={() => handleMouseOver("406")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("406")}
      >
        <path
          class="cls-1"
          d="M546.7,581.4H495c-2.7,0-4.8,1.4-4.8,3.1v52.9c0,1.7,2.2,3.1,4.8,3.1h51.8c2.7,0,4.8-1.4,4.8-3.1v-52.9C551.5,582.8,549.4,581.4,546.7,581.4z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 502.4392 620.4235)">
          406
        </text>
      </g>

      <g //407
        id="407"
        className={hoveredId === "407" ? "cls-407 highlighted" : "cls-407"}
        onMouseOver={() => handleMouseOver("407")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("407")}
      >
        <path
          class="cls-1"
          d="M831.4,471.2h-92.7c-2.7,0-4.8,2.2-4.8,4.8v84.7c0,2.7,2.2,4.8,4.8,4.8h92.7c2.7,0,4.8-2.2,4.8-4.8V476C836.2,473.4,834.1,471.2,831.4,471.2z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 768.662 524.8025)">
          407
        </text>
      </g>

      <g //408
        id="408"
        className={hoveredId === "408" ? "cls-408 highlighted" : "cls-408"}
        onMouseOver={() => handleMouseOver("408")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("408")}
      >
        <path
          class="cls-1"
          d="M657,426.1h-86.1c-2.8,0-5,2.2-5,5v127.1c0,2.8,2.2,5,5,5H657c2.8,0,5-2.2,5-5V431.1C662,428.4,659.7,426.1,657,426.1z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 594.1 467.5998)">
          408
        </text>
      </g>

      <g //409
        id="409"
        className={hoveredId === "409" ? "cls-409 highlighted" : "cls-409"}
        onMouseOver={() => handleMouseOver("409")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("409")}
      >
        <path
          class="cls-1"
          d="M831.2,365.4h-92.3c-2.8,0-5,2.2-5,5v80.1c0,2.8,2.2,5,5,5h92.3c2.8,0,5-2.2,5-5v-80.1C836.2,367.6,834,365.4,831.2,365.4z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 768.1998 418.0002)">
          409
        </text>
      </g>

      <g //410
        id="410"
        className={hoveredId === "410" ? "cls-410 highlighted" : "cls-410"}
        onMouseOver={() => handleMouseOver("410")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("410")}
      >
        <path
          class="cls-1"
          d="M657.1,218.4h-86.2c-2.8,0-5,2.2-5,5v174.3c0,2.8,2.2,5,5,5h86.2c2.8,0,5-2.2,5-5V223.4C662.1,220.7,659.8,218.4,657.1,218.4z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 599.1002 342.8001)">
          410
        </text>
      </g>

      <g //411
        id="411"
        className={hoveredId === "411" ? "cls-411 highlighted" : "cls-411"}
        onMouseOver={() => handleMouseOver("411")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("411")}
      >
        <path
          class="cls-1"
          d="M831.2,304.8h-92.3c-2.8,0-5,2.2-5,5v37.4c0,2.8,2.2,5,5,5h92.3c2.8,0,5-2.2,5-5v-37.4C836.2,307.1,834,304.8,831.2,304.8z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 768.9565 337.3681)">
          411
        </text>
      </g>

      <g //412
        id="412"
        className={hoveredId === "412" ? "cls-412 highlighted" : "cls-412"}
        onMouseOver={() => handleMouseOver("412")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("412")}
      >
        <path
          class="cls-1"
          d="M657.2,158.7h-86.6c-2.7,0-4.8,1-4.8,2.2v35.7c0,1.2,2.2,2.2,4.8,2.2h86.6c2.7,0,4.8-1,4.8-2.2v-35.7C662,159.7,659.9,158.7,657.2,158.7z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 597.731 186.3058)">
          412
        </text>
      </g>

      <g //413
        id="413"
        className={hoveredId === "413" ? "cls-413 highlighted" : "cls-413"}
        onMouseOver={() => handleMouseOver("413")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("413")}
      >
        <path
          class="cls-1"
          d="M831.4,160.9h-92.5c-2.7,0-4.8,2.2-4.8,4.8v119c0,2.7,2.2,4.8,4.8,4.8h92.5c2.7,0,4.8-2.2,4.8-4.8v-119C836.2,163.1,834.1,160.9,831.4,160.9z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 767.0905 218.44)">
          413
        </text>
      </g>

      <g //414
        id="414"
        className={hoveredId === "414" ? "cls-414 highlighted" : "cls-414"}
        onMouseOver={() => handleMouseOver("414")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("414")}
      >
        <path
          class="cls-1"
          d="M657.2,56.9h-86.6c-2.7,0-4.8,2.2-4.8,4.8v76.9c0,2.7,2.2,4.8,4.8,4.8h86.6c2.7,0,4.8-2.2,4.8-4.8V61.7C662,59.1,659.9,56.9,657.2,56.9z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 596.81 122.4156)">
          414
        </text>
      </g>

      <g //415
        id="415"
        className={hoveredId === "415" ? "cls-415 highlighted" : "cls-415"}
        onMouseOver={() => handleMouseOver("415")}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick("415")}
      >
        <path
          class="cls-1"
          d="M832.2,102.4h-93.3c-2.7,0-4.8,2.2-4.8,4.8v33.4c0,2.7,2.2,4.8,4.8,4.8h93.3c2.7,0,4.8-2.2,4.8-4.8v-33.4C837.1,104.5,834.9,102.4,832.2,102.4z"
        />
        <text class="cls-2" transform="matrix(1 0 0 1 768.2004 131.164)">
          415
        </text>
      </g>
      <g id="Audit">
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
        <rect x="376.6" y="737.9" class="st7" width="5.5" height="109" />
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
        <rect x="559.1" y="202.7" class="st7" width="109.5" height="5.5" />
        <rect x="726.5" y="296.7" class="st7" width="116.3" height="5.5" />
        <rect x="557.7" y="357.6" class="st7" width="74.7" height="5.5" />
        <rect x="654.2" y="357.6" class="st7" width="15.9" height="5.5" />
        <rect x="559.6" y="413" class="st7" width="109.5" height="5.5" />
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
        <rect x="667.4" y="190.9" class="st7" width="5.5" height="134.1" />
        <rect x="722.7" y="289.5" class="st7" width="5.5" height="32.4" />
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
        <rect x="667.4" y="49.5" class="st7" width="5.5" height="58.7" />
        <rect x="621.3" y="49.2" class="st7" width="5.5" height="44.8" />
        <g>
          <rect x="621.3" y="88.5" class="st7" width="16.6" height="5.5" />
          <rect x="659.8" y="88.5" class="st7" width="10.3" height="5.5" />
        </g>
        <rect x="722.7" y="262.2" class="st7" width="5.5" height="28.3" />
        <g>
          <rect x="725.5" y="252.1" class="st7" width="19.6" height="5.5" />
          <rect x="768.7" y="252.1" class="st7" width="76.5" height="5.5" />
        </g>
        <rect x="557.7" y="305.7" class="st7" width="74.7" height="5.5" />
        <rect x="654.2" y="305.7" class="st7" width="15.9" height="5.5" />
        <rect x="727" y="354.9" class="st7" width="116.3" height="5.5" />
        <g>
          <rect x="557.7" y="499.4" class="st7" width="29.6" height="5.5" />
          <rect x="609.8" y="499.4" class="st7" width="60.3" height="5.5" />
        </g>
        <g>
          <rect x="221.5" y="735.1" class="st7" width="104.6" height="5.5" />
          <polygon
            class="st7"
            points="402.7,735.1 400.7,735.1 352.7,735.1 351.1,735.1 351.1,740.6 352.7,740.6 400.7,740.6 402.7,740.6
			450.4,740.6 450.4,735.1 		"
          />
        </g>
        <rect x="484" y="644.8" class="st7" width="71.8" height="5.5" />
      </g>
    </svg>
  );
};

export default ULK_4;
