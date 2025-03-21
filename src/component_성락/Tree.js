import { useState, useEffect } from "react";
import {Code} from './index';
import "./Tree.css";

console.groupCollapsed("src/component/Code.js invoked.");console.groupEnd();

// 코드로 트리 만들기

function Tree({colors, star, starOn}) {

  const [leaf, setLeaf] = useState(false);
  const leafOn = () => setLeaf(!leaf);

  const [blinkingCodes, setBlinkingCodes] = useState([]);

  useEffect(() => {
    let interval;
    if (star) {
      interval = setInterval(() => {

        // const allCodes = Array.from({length: 58}, (_, i) => i + 1);
        const allCodes = []; // 배열생성
        for (let i = 1; i <= 58; i++) {
        allCodes.push(i);
        } // 1~58인 배열
        const shuffled = allCodes.sort(() => 0.5 - Math.random());
        setBlinkingCodes(shuffled.slice(0, 30));

        console.log("Blinking On");
      }, 500);

    } else {
      setBlinkingCodes([]);

      console.log("Blinking Off");
    }
    return () => clearInterval(interval);
  }, [star]);

    return (
      <div className="color_basic">

        <div>&nbsp;</div>
        <div>&nbsp;</div>

        {/* 별을 클릭하면 0.5 초마다 무작위 Core 태그에 on이 붙도록 하고싶음. 총 71개 중에서 매번 20개씩 선택한다*/}
        <i onClick={starOn} className={`color_star fas fa-star ${star ? 'on': ''}`}/>

          {/* <Code colors={colors} color={'색'} text={"텍스트"}/> */} 

          <div>
          <span onClick={leafOn} className={`color_leaf ${leaf ? 'on': ''}`}>/\</span>
          </div>
          <div>
          <span onClick={leafOn} className={`color_leaf ${leaf ? 'on': ''}`}>//\\</span>
          </div>
          <div>
          <span onClick={leafOn} className={`color_leaf ${leaf ? 'on': ''}`}>////\\\\</span>
          </div>
          <div>
          <span onClick={leafOn} className={`color_leaf ${leaf ? 'on': ''}`}>//////\\\\\\</span>
          </div>

          <div>
          <Code id={1} colors={colors} color={'red'} text={"I don't "} isBlinking={blinkingCodes.includes(1)}/>
          <Code id={2} colors={colors} color={'green'} text={"want a"} isBlinking={blinkingCodes.includes(2)}/> 
          </div>
          <div>
          <Code id={3} colors={colors} color={'yellow'} text={"lot "} isBlinking={blinkingCodes.includes(3)}/>
          <Code id={4} colors={colors} color={'blue'} text={"for "} isBlinking={blinkingCodes.includes(4)}/>
          <Code id={5} colors={colors} color={'green'} text={"Christmas"} isBlinking={blinkingCodes.includes(5)}/>
          </div>
          <div>
          <Code id={6} colors={colors} color={'red'} text={"There's "} isBlinking={blinkingCodes.includes(6)}/>
          <Code id={7} colors={colors} color={'purple'} text={"just "} isBlinking={blinkingCodes.includes(7)}/>
          <Code id={8} colors={colors} color={'green'} text={"one "} isBlinking={blinkingCodes.includes(8)}/>
          <Code id={9} colors={colors} color={'red'} text={"thing"} isBlinking={blinkingCodes.includes(9)}/>
          </div>
          <div>
          <Code id={10} colors={colors} color={'purple'} text={"I need "} isBlinking={blinkingCodes.includes(10)}/>
          <Code id={11} colors={colors} color={'green'} text={"I don't "} isBlinking={blinkingCodes.includes(11)}/>
          <Code colors={colors} color={''} text={"care "}/>
          <Code id={12} colors={colors} color={'yellow'} text={"about"} isBlinking={blinkingCodes.includes(12)}/>
          </div>
          <div>
          <Code id={13} colors={colors} color={'green'} text={"the presents "} isBlinking={blinkingCodes.includes(13)}/>
          <Code id={14} colors={colors} color={'red'} text={"underneath the"} isBlinking={blinkingCodes.includes(14)}/>
          </div>
          <div>
          <Code id={15} colors={colors} color={'green'} text={"Christmas "} isBlinking={blinkingCodes.includes(15)}/>
          <Code colors={colors} color={''} text={"tree I "}/>
          <Code id={16} colors={colors} color={'blue'} text={"just want "} isBlinking={blinkingCodes.includes(16)}/>
          <Code id={17} colors={colors} color={'green'} text={"you for"} isBlinking={blinkingCodes.includes(17)}/>
          </div>
          <div>
          <Code id={18} colors={colors} color={'purple'} text={"my own "} isBlinking={blinkingCodes.includes(18)}/>
          <Code id={19} colors={colors} color={'red'} text={"More than "} isBlinking={blinkingCodes.includes(19)}/>
          <Code id={20} colors={colors} color={'yellow'} text={"you could "} isBlinking={blinkingCodes.includes(20)}/>
          <Code id={21} colors={colors} color={'blue'} text={"ever know"} isBlinking={blinkingCodes.includes(21)}/>
          </div>
          <div>
          <Code id={22} colors={colors} color={'red'} text={"Make my "} isBlinking={blinkingCodes.includes(22)}/>
          <Code colors={colors} color={''} text={"wish come "}/>
          <Code id={23} colors={colors} color={'blue'} text={"true All I "} isBlinking={blinkingCodes.includes(23)}/>
          <Code id={24} colors={colors} color={'red'} text={"want for Christmas"} isBlinking={blinkingCodes.includes(24)}/>
          </div>
          <div>
          <Code id={25} colors={colors} color={'purple'} text={"Is you I "} isBlinking={blinkingCodes.includes(25)}/>
          <Code id={26} colors={colors} color={'blue'} text={"don't want "} isBlinking={blinkingCodes.includes(26)}/>
          <Code id={27} colors={colors} color={'purple'} text={"a lot for "} isBlinking={blinkingCodes.includes(27)}/>
          <Code id={28} colors={colors} color={'yellow'} text={"Christmas "} isBlinking={blinkingCodes.includes(28)}/>
          <Code colors={colors} color={''} text={"There is just"}/>
          </div>
          <div>
          <Code colors={colors} color={''} text={"one thing I need "}/>
          <Code id={29} colors={colors} color={'yellow'} text={"I don't care "} isBlinking={blinkingCodes.includes(29)}/>
          <Code id={30} colors={colors} color={'red'} text={"about the "} isBlinking={blinkingCodes.includes(30)}/>
          <Code id={31} colors={colors} color={'green'} text={"presents underneath"} isBlinking={blinkingCodes.includes(31)}/>
          </div>
          <div>
          <Code id={32} colors={colors} color={'red'} text={"the Christmas "} isBlinking={blinkingCodes.includes(32)}/>
          <Code colors={colors} color={''} text={"tree I don't "}/>
          <Code id={33} colors={colors} color={'yellow'} text={"need to hang "} isBlinking={blinkingCodes.includes(33)}/>
          <Code colors={colors} color={''} text={"my stocking there"}/>
          </div>
          <div>
          <Code id={34} colors={colors} color={'green'} text={"upon the "} isBlinking={blinkingCodes.includes(34)}/>
          <Code id={35} colors={colors} color={'red'} text={"fireplace Santa "} isBlinking={blinkingCodes.includes(35)}/>
          <Code id={36} colors={colors} color={'green'} text={"Claus won't make "} isBlinking={blinkingCodes.includes(36)}/>
          <Code id={37} colors={colors} color={'red'} text={"me happy "} isBlinking={blinkingCodes.includes(37)}/>
          <Code id={38} colors={colors} color={'green'} text={"with a toy on"} isBlinking={blinkingCodes.includes(38)}/>
          </div>
          <div>
          <Code colors={colors} color={''} text={"Christmas Day "}/>
          <Code id={39} colors={colors} color={'yellow'} text={"I just want you "} isBlinking={blinkingCodes.includes(39)}/>
          <Code id={40} colors={colors} color={'purple'} text={"for my own "} isBlinking={blinkingCodes.includes(40)}/>
          <Code id={41} colors={colors} color={'yellow'} text={"More than you "} isBlinking={blinkingCodes.includes(41)}/>
          <Code colors={colors} color={''} text={"could ever know"}/>
          </div>
          <div>
          <Code id={42} colors={colors} color={'red'} text={"Make my wish "} isBlinking={blinkingCodes.includes(42)}/>
          <Code id={43} colors={colors} color={'yellow'} text={"come true All I "} isBlinking={blinkingCodes.includes(43)}/>
          <Code colors={colors} color={''} text={"want for Christmas "}/>
          <Code id={44} colors={colors} color={'blue'} text={"is you You, "} isBlinking={blinkingCodes.includes(44)}/>
          <Code id={45} colors={colors} color={'purple'} text={"baby Oh, I won't ask"} isBlinking={blinkingCodes.includes(45)}/>
          </div>
          <div>
          <Code id={46} colors={colors} color={'purple'} text={"for much this "} isBlinking={blinkingCodes.includes(46)}/>
          <Code colors={colors} color={''} text={"Christmas I won't "}/>
          <Code id={47} colors={colors} color={'green'} text={"even wish for "} isBlinking={blinkingCodes.includes(47)}/>
          <Code id={48} colors={colors} color={'yellow'} text={"snow I'm just "} isBlinking={blinkingCodes.includes(48)}/>
          <Code id={49} colors={colors} color={'red'} text={"gonna keep on"} isBlinking={blinkingCodes.includes(49)}/>
            </div>
          <div>
          <Code id={50} colors={colors} color={'red'} text={"waiting "} isBlinking={blinkingCodes.includes(50)}/>
          <Code id={51} colors={colors} color={'green'} text={"underneath the "} isBlinking={blinkingCodes.includes(51)}/>
          <Code id={52} colors={colors} color={'red'} text={"mistletoe I won't "} isBlinking={blinkingCodes.includes(52)}/>
          <Code id={53} colors={colors} color={'green'} text={"make a list "} isBlinking={blinkingCodes.includes(53)}/>
          <Code colors={colors} color={''} text={"and send it to the"}/>
          </div>
          <div>
          <Code colors={colors} color={''} text={"North Pole "}/>
          <Code id={54} colors={colors} color={'red'} text={"for Saint Nick "} isBlinking={blinkingCodes.includes(54)}/>
          <Code id={55} colors={colors} color={'green'} text={"I won't "} isBlinking={blinkingCodes.includes(55)}/>
          <Code id={56} colors={colors} color={'blue'} text={"even stay "} isBlinking={blinkingCodes.includes(56)}/>
          <Code id={57} colors={colors} color={'red'} text={"awake to hear "} isBlinking={blinkingCodes.includes(57)}/>
          <Code id={58} colors={colors} color={'yellow'} text={"those magic"} isBlinking={blinkingCodes.includes(58)}/>
          </div>

          <div className="color_wood">|&nbsp;|&nbsp;|&nbsp;|</div>
          <div className="color_wood">|&nbsp;|&nbsp;|&nbsp;|</div>
          <div className="color_wood">|&nbsp;|&nbsp;|&nbsp;|</div>
          <div className="color_wood">|&nbsp;|&nbsp;|&nbsp;|</div>
          <div className="color_wood">|&nbsp;|&nbsp;|&nbsp;|</div>
          <div className="color_wood">|&nbsp;|&nbsp;|&nbsp;|</div>

          <div className="color_fild">================</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>

      </div>
    );
  }

export default Tree;