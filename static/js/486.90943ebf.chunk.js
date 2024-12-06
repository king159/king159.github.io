"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[486],{2486:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var i=n(5544),o=n(5043),a=n(1292),r=n(1774),s=n(3217),c=n(7470),l=n(6950),h=n(4992),u=n(7525),d=n(675),p=n(9379),g=n(45),f=n(467),m=n(1906),x=n(5874),w=n(7603),A=n(7353),b=n(8739),v=n(2578),k=n(2110),y=n(6494),S=n(279),j=n(4535),C=n(8293),P=n(7392),I=n(6591),M=n(579),T=["expand"],F="";function J(){return(J=(0,f.A)((0,d.A)().mark((function e(t){var n,i,o,a;return(0,d.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.split("/").slice(-2).join("/"),e.prev=1,e.next=4,fetch("https://img.shields.io/github/stars/".concat(n));case 4:return i=e.sent,e.next=7,i.text();case 7:return o=e.sent,a=o.split("</text></a></g></svg>")[0].split(">")[31],e.abrupt("return",a);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return","0");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}var W=(0,j.Ay)((function(e){e.expand;var t=(0,g.A)(e,T);return(0,M.jsx)(P.A,(0,p.A)({},t))}))((function(e){var t=e.theme;return{marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest}),variants:[{props:function(e){return!e.expand},style:{transform:"rotate(0deg)"}},{props:function(e){return!!e.expand},style:{transform:"rotate(180deg)"}}]}})),G=(0,j.Ay)(a.A)({fontSize:"28px",margin:"0.5em 0em 0.25em 0em",lineHeight:"160%",fontWeight:"400",letterSpacing:"-0.02em",fontFamily:"S\xf6hne, sans-serif",color:"#080808"}),L=(0,j.Ay)("strong")({color:"#1a1a1a",fontSize:"21px"}),Y=function(e,t,n){var i=e.trim(),o="Jinghao Wang"===i||"Jinghao Wang*"===i,a=i.includes("#");return(0,M.jsxs)("span",{children:[o?(0,M.jsx)(L,{children:i}):a?(0,M.jsxs)(M.Fragment,{children:[i.replace("#",""),(0,M.jsx)("sup",{children:"\u2709"})]}):i,n.length===t+1?"":","+"\xa0".repeat(2)]},t)},O=(0,j.Ay)(I.A)((function(){return{flexShrink:0,width:"40%",marginLeft:"auto",marginRight:"auto",height:"auto"}}));function D(e){var t=e.data,n=e.expandAllAbstract,a=(0,o.useState)(!1),r=(0,i.A)(a,2),s=r[0],c=r[1],l=(0,o.useState)("0"),h=(0,i.A)(l,2),u=h[0],d=h[1];return(0,o.useEffect)((function(){t.link.github&&function(e){return J.apply(this,arguments)}(t.link.github).then((function(e){return d(e)}))}),[t.link.github]),(0,o.useEffect)((function(){c(!!n)}),[n]),(0,M.jsxs)(k.A,{sx:{display:"flex",marginBottom:"1.5em"},children:[(0,M.jsx)(A.A,{sx:{display:"flex",flexDirection:"column"},children:(0,M.jsxs)(y.A,{children:[(0,M.jsx)(G,{sx:{textAlign:"center",fontSize:"26px"},children:t.title}),(0,M.jsxs)(A.A,{sx:{display:"flex",flexDirection:"column",marginLeft:"2em"},children:[(0,M.jsx)(G,{sx:{fontSize:"18px"},children:t.author.split(",").map(Y)}),(0,M.jsx)(G,{sx:{fontSize:"18px",fontStyle:"italic"},children:t.conference}),(0,M.jsxs)(G,{variant:"body2",sx:{color:"text.secondary",fontSize:"18px"},children:["TL;DR: ",t.tldr]}),(0,M.jsx)(G,{sx:{fontSize:"16px"},children:t.time}),(0,M.jsxs)(A.A,{sx:{"& button":{marginRight:"1em"}},children:[(0,M.jsx)(m.A,{size:"small",endIcon:(0,M.jsx)(x.A,{}),onClick:function(){return window.open(t.link.paper)},sx:{color:"Teal"},children:"paper"}),t.link.github&&(0,M.jsx)(m.A,{size:"small",endIcon:(0,M.jsx)(w.A,{}),onClick:function(){return window.open(t.link.github)},sx:{color:"black"},children:"Code"}),t.link.github&&(0,M.jsx)(b.A,{badgeContent:"".concat(u),sx:{color:"black"},children:(0,M.jsx)(v.A,{sx:{color:"Gold"}})}),(0,M.jsx)(W,{expand:s,onClick:function(){c(!s)},sx:{color:"black",marginLeft:"0.5em"},children:(0,M.jsx)(C.A,{})}),(0,M.jsx)(S.A,{in:s,timeout:"auto",unmountOnExit:!0,children:(0,M.jsx)(y.A,{children:(0,M.jsx)(G,{sx:{fontSize:"16px"},children:t.abstract})})})]})]})]})}),(0,M.jsx)(O,{image:"".concat(F,"/painting/").concat(t.image_path)})]})}var z=[{title:"FreeMorph: Tuning-Free Generalized Image Morphing with Diffusion Model",author:"Yukang Cao, Chenyang Si, Jinghao Wang, Ziwei Liu#",conference:"under review",time:"2024-10",link:{},abstract:"We present FreeMorph, the first tuning-free method for image morphing that accommodates inputs with varying semantics or layouts. Unlike existing methods, which rely on fine-tuning pre-trained diffusion models and are limited by time constraints and semantic/layout discrepancies, FreeMorph delivers high-fidelity image morphing without extensive training. Despite its efficiency and potential, tuning-free methods still face challenges in maintaining high-quality image morphing due to the non-linear nature of the multi-step denoising process and bias inherited from the pre-trained diffusion model. In this paper, we introduce FreeMorph to address this challenge by integrating two key innovations. 1) We first propose a guidance-aware spherical interpolation design that incorporates the explicit guidance from the input images by modifying the self-attention modules, addressing identity loss, and ensuring consistent transitions throughout the generated sequences. 2) We further introduce a step-oriented motion flow that blends self-attention modules derived from each input image to achieve controlled and directional transitions that respect both input images. Our extensive evaluations demonstrate that FreeMorph outperforms existing methods with training that is 10x~50x faster, establishing a new state-of-the-art for image morphing.",tldr:"A tuning-free method for image morphing via diffusion models.",image_path:"1.jpg"},{title:"AID: Attention Interpolation of Text-to-Image Diffusion",author:"Qiyuan He, Jinghao Wang, Ziwei Liu, Angela Yao#",conference:"Neural Information Processing Systems (NeurIPS), 2024",time:"2024-09",link:{paper:"https://arxiv.org/abs/2403.17924",github:"https://github.com/QY-H00/attention-interpolation-diffusion"},abstract:"Conditional diffusion models can create unseen images in various settings, aiding image interpolation. Interpolation in latent spaces is well-studied, but interpolation with specific conditions like text or poses is less understood. Simple approaches, such as linear interpolation in the space of conditions, often result in images that lack consistency, smoothness, and fidelity. To that end, we introduce a novel training-free technique named Attention Interpolation via Diffusion (AID). Our key contributions include 1) proposing an inner/outer interpolated attention layer; 2) fusing the interpolated attention with self-attention to boost fidelity; and 3) applying beta distribution to selection to increase smoothness. We also present a variant, Prompt-guided Attention Interpolation via Diffusion (PAID), that considers interpolation as a condition-dependent generative process. This method enables the creation of new images with greater consistency, smoothness, and efficiency, and offers control over the exact path of interpolation. Our approach demonstrates effectiveness for conceptual and spatial interpolation.",tldr:"A training-free method for text-to-image diffusion models to generate interpolation between different conditions.",image_path:"2.jpg"},{title:"Pair then Relation: Pair-Net for Panoptic Scene Graph Generation",author:"Jinghao Wang*, Zhengyu Wen*, Xiangtai Li, Zujing Guo, Jingkang Yang, Ziwei Liu#",conference:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2024",time:"2024-08",link:{paper:"https://arxiv.org/abs/2307.08699",github:"https://github.com/king159/Pair-Net"},abstract:"Panoptic Scene Graph (PSG) is a challenging task in Scene Graph Generation (SGG) that aims to create a more comprehensive scene graph representation using panoptic segmentation instead of boxes. However, current PSG methods have limited performance, which can hinder downstream task development. To improve PSG methods, we conducted an in-depth analysis to identify the bottleneck of the current PSG models, finding that inter-object pair-wise recall is a crucial factor which was ignored by previous PSG methods. Based on this, we present a novel framework: Pair then Relation (Pair-Net), which uses a Pair Proposal Network (PPN) to learn and filter sparse pair-wise relationships between subjects and objects. We also observed the sparse nature of object pairs and used this insight to design a lightweight Matrix Learner within the PPN. Through extensive ablation and analysis, our approach significantly improves upon leveraging the strong segmenter baseline. Notably, our approach achieves new state-of-the-art results on the PSG benchmark, with over 10% absolute gains compared to PSGFormer.",tldr:"A SOTA and lightweight model for panoptic scene graph generation.",image_path:"3.jpg"},{title:"Otter: A Multi-Modal Model with In-Context Instruction Tuning",author:"Bo Li*, Yuanhan Zhang*, Liangyu Chen*, Jinghao Wang*, Fanyi Pu*, Joshua Adrian Cahyono, Jingkang Yang, Chunyuan Li, Ziwei Liu#",conference:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2024, under review",time:"2023-06",link:{paper:"https://arxiv.org/abs/2306.05425",github:"https://github.com/Luodian/Otter"},abstract:"Recent advances in Large Multimodal Models (LMMs) have unveiled great potential as visual assistants. However, most existing works focus on responding to individual instructions or using previous dialogues for contextual understanding. There is little discussion on employing both images and text as in-context examples to enhance the instruction following capability. To bridge this gap, we introduce the Otter model to leverage both textual and visual in-context examples for instruction tuning. Specifically, Otter builds upon Flamingo with Perceiver architecture, and has been instruction tuned for general purpose multi-modal assistant. Otter seamlessly processes multi-modal inputs, supporting modalities including text, multiple images, and dynamic video content. To support the training of Otter, we present the MIMIC-IT (MultI-Modal In-Context Instruction Tuning) dataset, which encompasses over 3 million multi-modal instruction-response pairs, including approximately 2.2 million unique instructions across a broad spectrum of images and videos. MIMIC-IT has been carefully curated to feature a diverse array of in-context examples for each entry. Comprehensive evaluations suggest that instruction tuning with these in-context examples substantially enhances model convergence and generalization capabilities. Notably, the extensive scenario coverage provided by the MIMIC-IT dataset empowers the Otter model to excel in tasks involving complex video and multi-image understanding.",tldr:"A multi-model dataset and model for in-context instruction tuning.",image_path:"4.jpeg"},{title:"TransPatch: A Transformer-based Generator for Accelerating Transferable Patch Generation in Adversarial Attacks Against Object Detection Models",author:"Jinghao Wang, Chenling Cui, Xuejun Wen#, Jie Shi",conference:"European Conference on Computer Vision Workshop on Adversarial Robustness in the Real World (ECCV-W), 2022",time:"2023-02",link:{paper:"https://link.springer.com/chapter/10.1007/978-3-031-25056-9_21"},abstract:"Patch-based adversarial attack shows the possibility to black-box physical attacks on state-of-the-art object detection models through hiding the occurrence of the objects, which causes a high risk in automated security system relying on such model. However, most prior works mainly focus on the attack performance but rarely pay attention to the training speed due to pixel updating and non-smoothing loss function in the training process. To overcome this limitation, we propose a simple but novel training pipeline called TransPatch, a transformer-based generator with new loss function, to accelerate the training process. To address the issue of unstable training problem of previous methods, we also compare and visualize the landscape of various loss functions. We conduct comprehensive experiments on two pedestrian and one stop sign datasets on three object detection models, i.e., YOLOv4, DETR and SSD to compare the training speed and patch performance in such adversarial attacks. From our experiments, our method outperforms previous methods within the first few epochs, and achieves absolute 20% ~ 30% improvements in attack success rate (ASR) using 10% of the training time. We hope our approach can motivate future research on using generator in physical adversarial attack generation on other tasks and models.",tldr:"A generator for patch-based adversarial attacks on object detection models.",image_path:"5.jpg"}],E=n(2258),N=n(1822);function R(e){return(0,M.jsx)(E.A,{children:(0,M.jsxs)(N.A,{row:!0,children:[(0,M.jsx)(r.A,{label:"All",control:(0,M.jsx)(s.A,{defaultChecked:!0,checked:e.showAll,onChange:function(t){e.setShowAll(t.target.checked),e.setShowFirstAuthor(!1),e.setShowPublished(!1),e.setShowCurrentYear(!1),e.setShowJournal(!1),e.setShowConference(!1)}})}),(0,M.jsx)(r.A,{label:"First Author",control:(0,M.jsx)(s.A,{checked:e.showFirstAuthor,onChange:function(t){e.setShowFirstAuthor(t.target.checked),t.target.checked&&e.setShowAll(!1),e.showCurrentYear||e.showPublished||e.showJournal||e.showConference||t.target.checked||e.setShowAll(!0)}})}),(0,M.jsx)(r.A,{label:"Published/Accepted",control:(0,M.jsx)(s.A,{checked:e.showPublished,onChange:function(t){e.setShowPublished(t.target.checked),t.target.checked&&e.setShowAll(!1),e.showCurrentYear||e.showFirstAuthor||e.showJournal||e.showConference||t.target.checked||e.setShowAll(!0)}})}),(0,M.jsx)(r.A,{label:"Since ".concat((new Date).getFullYear()),control:(0,M.jsx)(s.A,{checked:e.showCurrentYear,onChange:function(t){e.setShowCurrentYear(t.target.checked),t.target.checked&&e.setShowAll(!1),e.showPublished||e.showFirstAuthor||e.showJournal||e.showConference||t.target.checked||e.setShowAll(!0)}})}),(0,M.jsx)(r.A,{label:"Journal Only",control:(0,M.jsx)(s.A,{checked:e.showJournal,onChange:function(t){e.setShowJournal(t.target.checked),t.target.checked&&(e.setShowAll(!1),e.setShowConference(!1)),e.showCurrentYear||e.showPublished||e.showConference||e.showFirstAuthor||t.target.checked||e.setShowAll(!0)}})}),(0,M.jsx)(r.A,{label:"Conference Only",control:(0,M.jsx)(s.A,{checked:e.showConference,onChange:function(t){e.setShowConference(t.target.checked),t.target.checked&&(e.setShowAll(!1),e.setShowJournal(!1)),e.showCurrentYear||e.showPublished||e.showJournal||e.showFirstAuthor||t.target.checked||e.setShowAll(!0)}})})]})})}function _(e,t,n,i,o,a,r){return(!t||((c=e.author).startsWith("Jinghao Wang")||c.startsWith("Jinghao Wang*")))&&(!n||!("arXiv"==(s=e.conference)||s.includes("under review")))&&(!i||e.time.split("-")[0]===(new Date).getFullYear().toString())&&(!a||function(e){return!e.includes("TPAMI")}(e.conference))&&(!o||function(e){return e.includes("TPAMI")}(e.conference))||r;var s,c}function Z(){var e=o.useState(!1),t=(0,i.A)(e,2),n=t[0],d=t[1],p=o.useState(!1),g=(0,i.A)(p,2),f=g[0],m=g[1],x=o.useState(!1),w=(0,i.A)(x,2),A=w[0],b=w[1],v=o.useState(!0),k=(0,i.A)(v,2),y=k[0],S=k[1],j=o.useState(!1),C=(0,i.A)(j,2),P=C[0],I=C[1],T=o.useState(!1),F=(0,i.A)(T,2),J=F[0],W=F[1],G=o.useState(!1),L=(0,i.A)(G,2),Y=L[0],O=L[1];return(0,M.jsxs)(u.A,{title:"Publication",children:[(0,M.jsx)(a.A,{sx:{mt:4,mb:2},variant:"h6",children:"Publication"}),(0,M.jsx)(R,{showAll:y,setShowAll:S,showFirstAuthor:n,setShowFirstAuthor:d,showPublished:f,setShowPublished:m,showCurrentYear:A,setShowCurrentYear:b,showJournal:P,setShowJournal:I,showConference:J,setShowConference:W}),(0,M.jsx)(r.A,{label:Y?"Collapse Abstract":"Expand Abstract",control:(0,M.jsx)(s.A,{onChange:function(){O(!Y)},sx:{"&.Mui-checked":{color:c.A[800]}},icon:(0,M.jsx)(h.A,{}),checkedIcon:(0,M.jsx)(l.A,{})})}),z.map((function(e){return _(e,n,f,A,J,P,y)&&(0,M.jsx)(D,{data:e,expandAllAbstract:Y},e.title)})),0===z.filter((function(e){return _(e,n,f,A,y)})).length&&(0,M.jsx)(a.A,{children:"No publication to show"})]})}}}]);
//# sourceMappingURL=486.90943ebf.chunk.js.map