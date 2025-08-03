import React from "react";
import Hero from "./Hero/hero";
import IntroText from "./IntroText/introText"
import WhatIDoFrontEnd from "./WhatIDo/whatIDoFrontEnd";
import WhatIDoBackEnd from "./WhatIDo/whatIDobackEnd";
import WhatIDoUIUX from "./WhatIDo/whatIDoUIUX";
const Home = () => {
  return (
    <div>
      <Hero />
      {/* <IntroText /> */}
      <WhatIDoFrontEnd />
      <WhatIDoBackEnd />
      <WhatIDoUIUX />
    </div>
  );
};

export default Home;
