import React from "react";
import Hero from "./Hero/hero";
import WhatIDoFrontEnd from "./WhatIDo/whatIDoFrontEnd";
import WhatIDoBackEnd from "./WhatIDo/whatIDobackEnd";
import WhatIDoUIUX from "./WhatIDo/whatIDoUIUX";
const Home = () => {
  return (
    <div>
      <Hero />
      <WhatIDoFrontEnd />
      <WhatIDoBackEnd />
      <WhatIDoUIUX />
    </div>
  );
};

export default Home;
