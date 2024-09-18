import React, { useState } from "react";
import "./ULK.css";
const ULK_1 = ({ onElementClick }) => {
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
        <g //101
          id="101"
          className={hoveredId === "101" ? "cls-101 highlighted" : "cls-101"}
          onMouseOver={() => handleMouseOver("101")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("101")}
        >
          <path
            class="cls-1"
            d="M272.3,745.9h-80.7c-2.8,0-5,2.2-5,5v85.4c0,2.8,2.2,5,5,5h80.7c2.8,0,5-2.2,5-5v-85.4C277.3,748.1,275.1,745.9,272.3,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 217.4999 800.3049)">
            101
          </text>
        </g>

        <g //102
          id="102"
          className={hoveredId === "102" ? "cls-102 highlighted" : "cls-102"}
          onMouseOver={() => handleMouseOver("102")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("102")}
        >
          <path
            class="cls-1"
            d="M433.3,581.4H300.8c-2.8,0-5,2.2-5,5V669c0,2.8,2.2,5,5,5h132.5c2.8,0,5-2.2,5-5v-82.6C438.3,583.7,436,581.4,433.3,581.4z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 349.8338 634.7882)">
            102
          </text>
        </g>

        <g //103
          id="103"
          className={hoveredId === "103" ? "cls-103 highlighted" : "cls-103"}
          onMouseOver={() => handleMouseOver("103")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("103")}
        >
          <path
            class="cls-1"
            d="M383,745.5h-84.9c-2.8,0-5,2.2-5,5v86c0,2.8,2.2,5,5,5H383c2.8,0,5-2.2,5-5v-86C388,747.8,385.7,745.5,383,745.5z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 325.3899 800.8929)">
            103
          </text>
        </g>

        <g //104
          id="104"
          className={hoveredId === "104" ? "cls-104 highlighted" : "cls-104"}
          onMouseOver={() => handleMouseOver("104")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("104")}
        >
          <path
            class="cls-1"
            d="M544.5,581.4h-82.6c-2.8,0-5,2.2-5,5V669c0,2.8,2.2,5,5,5h82.6c2.8,0,5-2.2,5-5v-82.6C549.5,583.7,547.2,581.4,544.5,581.4z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 487.2926 636.1996)">
            104
          </text>
        </g>

        <g //105
          id="105"
          className={hoveredId === "105" ? "cls-105 highlighted" : "cls-105"}
          onMouseOver={() => handleMouseOver("105")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("105")}
        >
          <path
            class="cls-1"
            d="M408.7,745.9h76.9c2.8,0,5,2.2,5,5v85.4c0,2.8-2.2,5-5,5h-76.9c-2.8,0-5-2.2-5-5v-85.4C403.7,748.1,405.9,745.9,408.7,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 429.8855 800.5994)">
            105
          </text>
        </g>

        <g //106
          id="106"
          className={hoveredId === "106" ? "cls-106 highlighted" : "cls-106"}
          onMouseOver={() => handleMouseOver("106")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("106")}
        >
          <path
            class="cls-1"
            d="M657.1,369.9h-86.2c-2.8,0-5,2.2-5,5v112.7c0,2.8,2.2,5,5,5h86.2c2.8,0,5-2.2,5-5V374.9C662.1,372.2,659.8,369.9,657.1,369.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 597.4 439.7661)">
            106
          </text>
        </g>

        <g //107
          id="107"
          className={hoveredId === "107" ? "cls-107 highlighted" : "cls-107"}
          onMouseOver={() => handleMouseOver("107")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("107")}
        >
          <path
            class="cls-1"
            d="M658.1,745.9H514.2c-2.7,0-4.8,2.2-4.8,4.8v85.8c0,2.7,2.2,4.8,4.8,4.8h143.9c2.7,0,4.8-2.2,4.8-4.8v-85.8C663,748.1,660.8,745.9,658.1,745.9z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 566.2573 800.0106)">
            107
          </text>
        </g>

        <g //108
          id="108"
          className={hoveredId === "108" ? "cls-108 highlighted" : "cls-108"}
          onMouseOver={() => handleMouseOver("108")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("108")}
        >
          <path
            class="cls-1"
            d="M657.1,262.2h-86.2c-2.8,0-5,2.2-5,5v80.4c0,2.8,2.2,5,5,5h86.2c2.8,0,5-2.2,5-5v-80.4C662.1,264.5,659.8,262.2,657.1,262.2z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 597.1 313.6726)">
            108
          </text>
        </g>

        <g //109
          id="109"
          className={hoveredId === "109" ? "cls-109 highlighted" : "cls-109"}
          onMouseOver={() => handleMouseOver("109")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("109")}
        >
          <path
            class="cls-1"
            d="M831.2,162h-92.3c-2.8,0-5,2.2-5,5v391.4c0,2.8,2.2,5,5,5h92.3c2.8,0,5-2.2,5-5V167C836.2,164.2,834,162,831.2,162z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 768.3004 361.8372)">
            109
          </text>
        </g>

        <g //110
          id="110"
          className={hoveredId === "110" ? "cls-110 highlighted" : "cls-110"}
          onMouseOver={() => handleMouseOver("110")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("110")}
        >
          <path
            class="cls-1"
            d="M657.2,158.7h-86.6c-2.7,0-4.8,2.2-4.8,4.8V242c0,2.7,2.2,4.8,4.8,4.8h86.6c2.7,0,4.8-2.2,4.8-4.8v-78.5C662,160.8,659.9,158.7,657.2,158.7z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 599.8125 209.1431)">
            110
          </text>
        </g>

        <g //111
          id="111"
          className={hoveredId === "111" ? "cls-111 highlighted" : "cls-111"}
          onMouseOver={() => handleMouseOver("111")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("111")}
        >
          <path
            class="cls-1"
            d="M832.2,102.4h-93.3c-2.7,0-4.8,2.2-4.8,4.8v33.4c0,2.7,2.2,4.8,4.8,4.8h93.3c2.7,0,4.8-2.2,4.8-4.8v-33.4C837.1,104.5,834.9,102.4,832.2,102.4z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 773.2504 131.164)">
            111
          </text>
        </g>

        <g //112
          id="112"
          className={hoveredId === "112" ? "cls-112 highlighted" : "cls-112"}
          onMouseOver={() => handleMouseOver("112")}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("112")}
        >
          <path
            class="cls-1"
            d="M657.1,102.1h-86.2c-2.8,0-5,2.2-5,5v33.8c0,2.8,2.2,5,5,5h86.2c2.8,0,5-2.2,5-5v-33.8C662.1,104.3,659.8,102.1,657.1,102.1z"
          />
          <text class="cls-2" transform="matrix(1 0 0 1 600.7363 131.1642)">
            112
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
        {" "}
        //стены
        <polygon
          class="st7"
          points="79.9,684.7 100.6,684.7 100.6,679.2 79.9,679.2 79.9,571.4 74.4,571.4 74.4,846.6 74.4,851.9
					74.4,852.1 103.7,852.1 103.7,846.6 79.9,846.6 	"
        />
        <rect x="226" y="573.5" class="st7" width="5.5" height="108.5" />
        <rect x="282.3" y="573.5" class="st7" width="5.5" height="108.5" />
        <rect x="718.1" y="748.4" class="st7" width="48.2" height="5.5" />
        <polygon
          class="st7"
          points="663.6,363.1 667.4,363.1 667.4,437.4 672.9,437.4 672.9,349.9 667.4,349.9 667.4,357.6 663.6,357.6
					654.2,357.6 557.7,357.6 557.7,363.1 654.2,363.1 	"
        />
        <polygon
          class="st7"
          points="649.6,660.2 649.6,633.2 649.7,633.2 649.7,627.7 649.6,627.7 644.1,627.7 559.6,627.7 559.6,633.2
					644.1,633.2 644.1,660.2 	"
        />
        <rect x="108.6" y="575.3" class="st7" width="5.5" height="61.6" />
        <rect x="142.8" y="574.7" class="st7" width="5.5" height="62.3" />
        <rect x="667.4" y="86.7" class="st7" width="5.5" height="25.9" />
        <polygon
          class="st7"
          points="667.4,165.9 672.9,165.9 672.9,153.8 672.9,148.3 672.9,135.1 667.4,135.1 667.4,148.3 557.7,148.3
					557.7,153.8 667.4,153.8 	"
        />
        <rect x="722.7" y="190.9" class="st7" width="5.5" height="73.7" />
        <polygon
          class="st7"
          points="672.9,325 672.9,190.9 667.4,190.9 667.4,251.7 559.6,251.7 559.6,257.2 667.4,257.2 667.4,325 	"
        />
        <rect x="722.7" y="289.5" class="st7" width="5.5" height="32.4" />
        <rect x="722.7" y="346.8" class="st7" width="5.5" height="71.2" />
        <rect x="667.4" y="539" class="st7" width="5.5" height="89.4" />
        <polygon
          class="st7"
          points="667.4,514 672.9,514 672.9,462.4 667.4,462.4 667.4,499.4 557.7,499.4 557.7,504.9 667.4,504.9 	"
        />
        <rect x="722.7" y="442.9" class="st7" width="5.5" height="79.3" />
        <rect x="127.7" y="846.6" class="st7" width="8.8" height="5.5" />
        <rect x="221.5" y="735.1" class="st7" width="88.8" height="5.5" />
        <rect x="377.4" y="735.1" class="st7" width="73" height="5.5" />
        <rect x="525.1" y="679.2" class="st7" width="146.3" height="5.5" />
        <rect x="446.2" y="573.5" class="st7" width="5.5" height="38.8" />
        <rect x="543.3" y="735.1" class="st7" width="71.8" height="5.5" />
        <rect x="773.3" y="70.2" class="st7" width="40.5" height="5.5" />
        <rect x="770.3" y="616.3" class="st7" width="7.3" height="24.3" />
        <rect x="779.4" y="616.3" class="st7" width="7.3" height="24.3" />
        <rect x="788.6" y="616.3" class="st7" width="7.3" height="24.3" />
        <rect x="797.8" y="616.3" class="st7" width="7.3" height="24.3" />
        <rect x="807.1" y="616.3" class="st7" width="7.3" height="24.3" />
        <rect x="770.2" y="582.3" class="st7" width="7.3" height="24.3" />
        <rect x="779.2" y="582.3" class="st7" width="7.3" height="24.3" />
        <rect x="788.4" y="582.3" class="st7" width="7.3" height="24.3" />
        <rect x="797.6" y="582.3" class="st7" width="7.3" height="24.3" />
        <rect x="806.9" y="582.3" class="st7" width="7.3" height="24.3" />
        <rect x="770.7" y="650.3" class="st7" width="7.3" height="24.3" />
        <rect x="779.7" y="650.3" class="st7" width="7.3" height="24.3" />
        <rect x="788.9" y="650.3" class="st7" width="7.3" height="24.3" />
        <rect x="798.1" y="650.3" class="st7" width="7.3" height="24.3" />
        <rect x="807.4" y="650.3" class="st7" width="7.3" height="24.3" />
        <rect x="82" y="638.4" class="st7" width="24.3" height="7.3" />
        <rect x="82" y="629.4" class="st7" width="24.3" height="7.3" />
        <rect x="82" y="620.2" class="st7" width="24.3" height="7.3" />
        <rect x="82" y="611" class="st7" width="24.3" height="7.3" />
        <rect x="82" y="601.7" class="st7" width="24.3" height="7.3" />
        <rect x="116.5" y="638.5" class="st7" width="24.3" height="7.3" />
        <rect x="116.5" y="629.5" class="st7" width="24.3" height="7.3" />
        <rect x="116.5" y="620.3" class="st7" width="24.3" height="7.3" />
        <rect x="116.5" y="611.1" class="st7" width="24.3" height="7.3" />
        <rect x="116.5" y="601.8" class="st7" width="24.3" height="7.3" />
        <g>
          <rect x="150.2" y="638.7" class="st7" width="24.3" height="7.3" />
          <rect x="150.2" y="629.7" class="st7" width="24.3" height="7.3" />
          <rect x="150.2" y="620.5" class="st7" width="24.3" height="7.3" />
          <rect x="150.2" y="611.3" class="st7" width="24.3" height="7.3" />
          <rect x="150.2" y="602" class="st7" width="24.3" height="7.3" />
        </g>
        <rect x="559.5" y="94" class="st7" width="110.7" height="5.5" />
        <rect x="492.3" y="426.7" class="st7" width="5.5" height="149" />
        <rect x="513.2" y="391.2" class="st7" width="5.5" height="83.4" />
        <rect x="537.7" y="391.2" class="st7" width="5.5" height="111.7" />
        <rect x="522" y="499.4" class="st7" width="42.6" height="5.5" />
        <g>
          <rect x="74.4" y="570.8" class="st7" width="423.4" height="5.5" />
          <rect x="518.7" y="570.8" class="st7" width="165.6" height="5.5" />
        </g>
        <g>
          <rect x="555" y="46.4" class="st7" width="5.5" height="467.6" />
          <rect x="555" y="534.2" class="st7" width="5.5" height="145.8" />
        </g>
        <rect x="74.4" y="846.9" class="st7" width="5.5" height="29.7" />
        <rect x="176.1" y="846.9" class="st7" width="5.5" height="29.7" />
        <rect x="718.1" y="703.8" class="st7" width="5.5" height="24.2" />
        <polygon
          class="st7"
          points="328.7,740.6 343.6,740.6 352.5,740.6 352.5,735.1 304.5,735.1 304.5,740.6 323.2,740.6 	"
        />
        <rect x="282.3" y="737.8" class="st7" width="5.5" height="111.5" />
        <rect x="211.4" y="574.2" class="st7" width="5.5" height="62.3" />
        <g>
          <rect x="184.2" y="639.2" class="st7" width="24.3" height="7.3" />
          <rect x="184.2" y="630.2" class="st7" width="24.3" height="7.3" />
          <rect x="184.2" y="621" class="st7" width="24.3" height="7.3" />
          <rect x="184.2" y="611.8" class="st7" width="24.3" height="7.3" />
          <rect x="184.2" y="602.5" class="st7" width="24.3" height="7.3" />
        </g>
        <g>
          <rect x="493.3" y="467.2" class="st7" width="24.3" height="7.3" />
          <rect x="493.3" y="458.2" class="st7" width="24.3" height="7.3" />
          <rect x="493.3" y="449" class="st7" width="24.3" height="7.3" />
          <rect x="493.3" y="439.8" class="st7" width="24.3" height="7.3" />
          <rect x="493.3" y="430.5" class="st7" width="24.3" height="7.3" />
        </g>
        <rect x="718.1" y="722.4" class="st7" width="92.8" height="5.5" />
        <g>
          <rect x="779.7" y="684.7" class="st7" width="7.3" height="15.3" />
          <rect x="770.7" y="684.7" class="st7" width="7.3" height="15.3" />
          <rect x="761.5" y="684.7" class="st7" width="7.3" height="15.3" />
          <rect x="752.2" y="684.7" class="st7" width="7.3" height="15.3" />
          <rect x="743" y="684.7" class="st7" width="7.3" height="15.3" />
        </g>
        <g>
          <rect x="779.8" y="707.3" class="st7" width="7.3" height="17.8" />
          <rect x="770.8" y="707.3" class="st7" width="7.3" height="17.8" />
          <rect x="761.6" y="707.3" class="st7" width="7.3" height="17.8" />
          <rect x="752.4" y="707.3" class="st7" width="7.3" height="17.8" />
          <rect x="743.1" y="707.3" class="st7" width="7.3" height="17.8" />
        </g>
        <polygon
          class="st7"
          points="181.6,752.5 181.6,740.6 196.6,740.6 196.6,735.1 181.4,735.1 181.4,720.3 176.2,720.3 176.2,735.1
					176.2,735.3 176.2,737.9 176.1,737.9 176.1,752.5 	"
        />
        <rect x="176.1" y="781.1" class="st7" width="5.5" height="22.2" />
        <polygon
          class="st7"
          points="451.7,679.2 451.7,637.3 446.2,637.3 446.2,679.2 445,679.2 433.6,679.2 433.6,684.7 445,684.7
					500.1,684.7 500.1,679.2 	"
        />
        <polygon
          class="st7"
          points="405.1,679.2 308,679.2 265.9,679.2 265.9,684.7 308,684.7 405.1,684.7 408.7,684.7 408.7,679.2 	"
        />
        <g>
          <polygon
            class="st7"
            points="189,679.2 181.6,679.2 181.6,575.7 176.1,575.7 176.1,679.2 154.7,679.2 154.7,684.7 176.1,684.7
						176.1,695.1 181.6,695.1 181.6,684.7 189,684.7 		"
          />
          <rect x="208.4" y="679.2" class="st7" width="38.1" height="5.5" />
        </g>
        <rect x="393.4" y="739.4" class="st7" width="5.5" height="108.5" />
        <rect x="671.5" y="849.2" class="st7" width="5.5" height="31.5" />
        <polygon
          class="st7"
          points="816.1,748.4 816.1,684.7 841.9,684.7 847.4,684.7 847.5,684.7 847.5,679.2 847.4,679.2 847.4,52.2
					847.4,47.4 847.4,46.4 557.7,46.4 557.7,52.2 667.4,52.2 667.4,62.1 672.9,62.1 672.9,52.2 722.7,52.2 722.7,67.1 728.2,67.1
					728.2,52.2 773.3,52.2 773.3,67.1 779.7,67.1 779.7,52.2 781.9,52.2 781.9,67.1 788.3,67.1 788.3,52.2 790.4,52.2 790.4,67.1
					796.8,67.1 796.8,52.2 799.3,52.2 799.3,67.1 805.7,67.1 805.7,52.2 807.6,52.2 807.6,67.1 814,67.1 814,52.2 841.9,52.2 841.9,94
					813.9,94 813.9,78.5 807.5,78.5 807.5,94 805.6,94 805.6,78.5 799.2,78.5 799.2,94 796.7,94 796.7,78.5 790.3,78.5 790.3,94
					788.2,94 788.2,78.5 781.8,78.5 781.8,94 779.6,94 779.6,78.5 773.2,78.5 773.2,94 728.4,94 728.4,84.2 722.6,84.2 722.6,107.6
					728.4,107.6 728.4,99.5 841.9,99.5 841.9,148.3 728.2,148.3 728.2,124.8 722.7,124.8 722.7,148.3 722.7,153.8 722.7,166 728.2,166
					728.2,153.8 841.9,153.8 841.9,570.8 728.2,570.8 728.2,547.2 722.7,547.2 722.7,570.8 710.9,570.8 710.9,576.3 717.2,576.3
					717.2,600.9 722.7,600.9 722.7,576.3 841.9,576.3 841.9,608.8 777.8,608.8 777.8,614.3 841.9,614.3 841.9,642.8 777.8,642.8
					777.8,648.3 841.9,648.3 841.9,679.2 722.7,679.2 722.7,654.6 717.2,654.6 717.2,679.2 700.1,679.2 700.1,684.7 810.6,684.7
					810.6,766.3 816.1,766.3 816.1,753.9 850,753.9 850,799.6 816.1,799.6 816.1,785.7 810.6,785.7 810.6,801 792.8,818.8 773.8,818.8
					773.8,824.6 789.5,824.6 789.5,860.5 742.6,860.5 742.6,824.4 755.4,824.4 755.4,818.9 677,818.9 677,740.6 677,735.3 677,735.1
					674.2,735.1 640,735.1 639.8,735.1 639.8,740.6 640,740.6 671.5,740.6 671.5,846.6 500.9,846.6 500.9,740.6 518.3,740.6
					518.3,735.1 475.3,735.1 475.3,740.6 495.4,740.6 495.4,846.6 343.6,846.6 328.7,846.6 323.2,846.6 302.4,846.6 181.6,846.6
					181.6,834.6 176.1,834.6 176.1,846.6 160.4,846.6 160.4,852.1 674.2,852.1 674.2,849.4 677,849.4 677,824.4 737.1,824.4
					737.1,860.5 737.1,866 737.1,880.8 742.6,880.8 742.6,866 789.5,866 791.8,866 795,866 795,824.6 795,823.8 813.7,805.1
					816.1,805.1 816.1,805.1 855.5,805.1 855.5,803.4 855.5,799.6 855.5,753.9 855.5,749.5 855.5,748.4 	"
        />
      </g>
    </svg>
  );
};

export default ULK_1;
