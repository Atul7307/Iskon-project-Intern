import React from "react";
import "./NityaContent.css";
import bg from "./assets/images/bg.png";

const NityaContent = () => {
  return (
    <div className="nitya-content d-flex justify-content-center">
      <div className="content-box">
        <h3>
          In festivals, when we visit temples there are lots of activities
          performed, whether it is deities personal service, temple decoration,
          Prasadam distribution, Kirtan seva, and Spiritual discourse everything
          is well managed. Did you ever think, how could this possible to run
          such big temples so smoothly? Of course, there is lots of hard work of
          Monks and temple management behind this, but there are also some
          Unsung Heroes who contribute to the Service of Krishna monthly, which
          need to be appreciated.
        </h3>
        <br />
        <h3>
          Those Unsung heroes are our Nitya Sevak. Nitya Sevak is our monthly
          donor who contributes to the service of Krishna from their hard-earned
          money. They are very beloved of Krishna because they put Krishna's
          service before their needs and Krishna also promises in Bhagwad Gita
          9.31.
        </h3>
        <br />
        <h3 className="shlok">
          क्षिप्रं भवति धर्मात्मा शश्वच्छन्तिं निगच्छति | &nbsp;
          <br />
          कौन्तेय प्रतिजानिहि न मे भक्त: प्रणश्यति || 31||
        </h3>
        <br />
        <h3>
          “He quickly becomes righteous and attains lasting peace. O son of
          Kunti, declare it boldly that My devotee never perishes”
        </h3>
      </div>
    </div>
  );
};

export default NityaContent;
