import React, { useState } from "react";
import "./ULK.css";
const ULK_8 = ({ onElementClick }) => {
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
        <g //801
          id="801"
          className={hoveredId === "801" ? "cls-801 highlighted" : "cls-801"}
          onMouseOver={() => handleMouseOver("801")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("801")}
        >
          <path
            class="cls-1"
            d="M270.3,745.9h-78.8c-2.8,0-5,2.2-5,5v85.4c0,2.8,2.2,5,5,5h78.8c2.8,0,5-2.2,5-5v-85.4C275.3,748.1,273.1,745.9,270.3,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 214.0561 800.0114)">
            801
          </text>
        </g>

        <g //802
          id="802"
          className={hoveredId === "802" ? "cls-802 highlighted" : "cls-802"}
          onMouseOver={() => handleMouseOver("802")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("802")}
        >
          <path
            class="cls-1"
            d="M343.8,580.9H195.4c-2.8,0-5,2.2-5,5V669c0,2.8,2.2,5,5,5h148.4c2.8,0,5-2.2,5-5v-83.2C348.8,583.1,346.6,580.9,343.8,580.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 213.5 633.3501)">
            802
          </text>
        </g>

        <g //803
          id="803"
          className={hoveredId === "803" ? "cls-803 highlighted" : "cls-803"}
          onMouseOver={() => handleMouseOver("803")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("803")}
        >
          <path
            class="cls-1"
            d="M374.7,745.9h-79c-2.8,0-5,2.2-5,5v85.6c0,2.8,2.2,5,5,5h79c2.8,0,5-2.2,5-5v-85.6C379.7,748.2,377.4,745.9,374.7,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 314.28 800.3049)">
            803
          </text>
        </g>

        <g //805
          id="805"
          className={hoveredId === "805" ? "cls-805 highlighted" : "cls-805"}
          onMouseOver={() => handleMouseOver("805")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("805")}
        >
          <path
            class="cls-1"
            d="M485.1,745.9H400c-2.6,0-4.6,2.2-4.6,5v85.4c0,2.8,2,5,4.6,5h85.1c2.6,0,4.6-2.2,4.6-5v-85.4C489.7,748.1,487.7,745.9,485.1,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 422.7501 800.0106)">
            805
          </text>
        </g>

        <g //806
          id="806"
          className={hoveredId === "806" ? "cls-806 highlighted" : "cls-806"}
          onMouseOver={() => handleMouseOver("806")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("806")}
        >
          <path
            class="cls-1"
            d="M657,357h-86.1c-2.8,0-5,2.2-5,4.9v125c0,2.7,2.2,4.9,5,4.9H657c2.8,0,5-2.2,5-4.9v-125C662,359.3,659.7,357,657,357z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 595.3997 431.3254)">
            806
          </text>
        </g>

        <g //807
          id="807"
          className={hoveredId === "807" ? "cls-807 highlighted" : "cls-807"}
          onMouseOver={() => handleMouseOver("807")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("807")}
        >
          <path
            class="cls-1"
            d="M658.1,745.9H514.2c-2.7,0-4.8,2.2-4.8,4.8v85.8c0,2.7,2.2,4.8,4.8,4.8h143.9c2.7,0,4.8-2.2,4.8-4.8v-85.8C663,748.1,660.8,745.9,658.1,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 566.2573 800.0106)">
            807
          </text>
        </g>

        <g //808
          id="808"
          className={hoveredId === "808" ? "cls-808 highlighted" : "cls-808"}
          onMouseOver={() => handleMouseOver("808")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("808")}
        >
          <path
            class="cls-1"
            d="M725.8,59H574.5c-2.8,0-5,2.2-5,5v226.5c0,2.8,2.2,5,5,5h151.4c2.8,0,5-2.2,5-5V64C730.8,61.2,728.6,59,725.8,59z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 632.1996 188.3976)">
            808
          </text>
        </g>

        <g //809
          id="809"
          className={hoveredId === "809" ? "cls-809 highlighted" : "cls-809"}
          onMouseOver={() => handleMouseOver("809")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("809")}
        >
          <path
            class="cls-1"
            d="M831.4,471.2h-92.7c-2.7,0-4.8,2.2-4.8,4.8v84.7c0,2.7,2.2,4.8,4.8,4.8h92.7c2.7,0,4.8-2.2,4.8-4.8V476C836.2,473.4,834.1,471.2,831.4,471.2z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 769.662 540.8025)">
            809
          </text>
        </g>

        <g //811
          id="811"
          className={hoveredId === "811" ? "cls-811 highlighted" : "cls-811"}
          onMouseOver={() => handleMouseOver("811")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("811")}
        >
          <path
            class="cls-1"
            d="M831.2,355.9h-92.3c-2.8,0-5,2.2-5,5V450c0,2.8,2.2,5,5,5h92.3c2.8,0,5-2.2,5-5v-89.1C836.2,358.1,834,355.9,831.2,355.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 770.7539 437.3998)">
            811
          </text>
        </g>

        <g //813
          id="813"
          className={hoveredId === "813" ? "cls-813 highlighted" : "cls-813"}
          onMouseOver={() => handleMouseOver("813")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("813")}
        >
          <path
            class="cls-1"
            d="M833,251h-33.8c-2.8,0-5,2.2-5,5V335c0,2.8,2.2,5,5,5H833c2.8,0,5-2.2,5-5V256C838,253.3,835.8,251,833,251z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 799.3501 300.5857)">
            813
          </text>
        </g>

        <g //815
          id="815"
          className={hoveredId === "815" ? "cls-815 highlighted" : "cls-815"}
          onMouseOver={() => handleMouseOver("815")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("815")}
        >
          <path
            class="cls-1"
            d="M832.5,149.3h-33.3c-2.8,0-5,2.2-5,5v76.5c0,2.8,2.2,5,5,5h33.3c2.8,0,5-2.2,5-5v-76.5C837.5,151.5,835.3,149.3,832.5,149.3z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 799.3003 195.2045)">
            815
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
        <rect x="302" y="643" class="st7" width="12" height="5.5"></rect>
        <rect x="265" y="643" class="st7" width="12" height="5.5"></rect>
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
        <rect x="725" y="344.9" class="st7" width="118.5" height="5.5" />
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
        <rect x="739.8" y="49.5" class="st7" width="5.5" height="17.6" />
        <rect x="722.7" y="344.9" class="st7" width="5.5" height="73.1" />
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
          <rect x="739.8" y="84.2" class="st7" width="5.5" height="23.4" />
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
        <rect x="779.3" y="70.2" class="st7" width="40.5" height="5.5" />
        <g>
          <rect x="779.3" y="50.9" class="st7" width="6.4" height="16.2" />
          <rect x="787.9" y="50.9" class="st7" width="6.4" height="16.2" />
          <rect x="796.4" y="50.9" class="st7" width="6.4" height="16.2" />
          <rect x="805.3" y="50.9" class="st7" width="6.4" height="16.2" />
          <rect x="813.6" y="50.9" class="st7" width="6.4" height="16.2" />
        </g>
        <g>
          <rect x="779.2" y="78.5" class="st7" width="6.4" height="16.2" />
          <rect x="787.8" y="78.5" class="st7" width="6.4" height="16.2" />
          <rect x="796.3" y="78.5" class="st7" width="6.4" height="16.2" />
          <rect x="805.2" y="78.5" class="st7" width="6.4" height="16.2" />
          <rect x="813.5" y="78.5" class="st7" width="6.4" height="16.2" />
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
        <rect x="632.2" y="502.1" class="st7" width="5.5" height="71.6" />
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
        <rect x="768" y="463" class="st7" width="5.5" height="35.8" />
        <g>
          <rect x="768" y="496.6" class="st7" width="11.8" height="5.5" />
          <rect x="799.7" y="496.6" class="st7" width="42.6" height="5.5" />
        </g>
        <rect x="739.8" y="126.4" class="st7" width="5.5" height="182.6" />
        <rect x="557.8" y="344.9" class="st7" width="115.2" height="5.5" />
        <rect x="785.2" y="139" class="st7" width="56.3" height="5.5" />
        <rect x="785.5" y="240.6" class="st7" width="56.3" height="5.5" />
        <g>
          <rect x="739.8" y="63.5" class="st7" width="5.5" height="23.4" />
        </g>
        <g>
          <rect x="770.4" y="94" class="st7" width="76.9" height="5.5" />
          <rect x="740.4" y="94" class="st7" width="11.5" height="5.5" />
        </g>
        <g>
          <g>
            <rect x="785.2" y="230.1" class="st7" width="5.5" height="26.7" />
            <rect x="785.2" y="139" class="st7" width="5.5" height="66.2" />
          </g>
          <rect x="785.2" y="281.8" class="st7" width="5.5" height="65.9" />
        </g>
        <rect x="557.8" y="303.5" class="st7" width="22.4" height="5.5" />
        <g>
          <rect x="715.7" y="303.5" class="st7" width="29.7" height="5.5" />
          <rect x="605" y="303.5" class="st7" width="85.7" height="5.5" />
        </g>
        <polyline
          class="st7"
          points="843.7,402.6 800.5,402.6 800.5,408.1 843.7,408.1 	"
        />
        <polyline
          class="st7"
          points="725.7,408.1 778,408.1 778,402.6 725.7,402.6 	"
        />
      </g>
    </svg>
  );
};

export default ULK_8;
