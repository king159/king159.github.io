import React from "react";

const data = () => (
  <div className="about">
    <h1>Bio</h1>
    <ul>
      He is a first year Ph.D student at{" "}
      <a href="https://www.cuhk.edu.hk/">The Chinese University of Hong Kong</a>
      , specializing in multimodal large language model and image generation,
      supervised by{" "}
      <a href="https://www.cse.cuhk.edu.hk/~pheng/">Prof. Pheng-Ann Heng</a>.
    </ul>
    <h1>Update</h1>
    <ul>
      <li>
        2024-09: <a href="https://arxiv.org/abs/2403.17924">AID</a> has been
        accepted to NeurIPS.
      </li>
      <li>
        2024-08: <a href="https://arxiv.org/abs/2307.08699">PairNet</a> has been
        accepted to TPAMI.
      </li>
    </ul>
  </div>
);

export default data;
