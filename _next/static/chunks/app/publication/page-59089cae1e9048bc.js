(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[531],{2475:(e,n,t)=>{Promise.resolve().then(t.bind(t,126))},126:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>_});var i=t(5155),a=t(2967),o=t(2873),r=t(9283),s=t(1831),l=t(615),c=t(3363),h=t(4736),d=t(2115),u=t(1644),g=t(4155),p=t(5394),m=t(4323),f=t(8979),x=t(1651),b=t(8998),w=t(2282),A=t(4665),v=t(2479),y=t(4883),j=t(5256),k=t(3717),C=t(6214),P=t(9142),I=t(604);async function S(e){let n=e.split("/").slice(-2).join("/");try{let e=await fetch("https://img.shields.io/github/stars/".concat(n));return(await e.text()).split("</text></a></g></svg>")[0].split(">")[31]}catch(e){return"0"}}let T=(0,P.Ay)(h.default)(()=>({fontSize:"28px",margin:"0.5em 0em 0.25em 0em",lineHeight:"160%",fontWeight:"400",letterSpacing:"-0.02em",fontFamily:"S\xf6hne, sans-serif",color:"#080808"})),M=(0,P.Ay)(h.default)(()=>({fontFamily:"Arial, sans-serif",margin:"20px",padding:"15px",borderRadius:"5px",whiteSpace:"pre-wrap"})),W=(0,P.Ay)("strong")({color:"#1a1a1a",fontSize:"21px",fontWeight:"700"}),E=(0,P.Ay)(y.A)(()=>({flexShrink:0,width:"40%",marginLeft:"auto",marginRight:"auto",height:"auto"})),F=(0,P.Ay)("sup")({fontSize:"0.8em",position:"relative",top:"-0.2em"}),J=(e,n,t)=>{let a=e.trim(),o="Jinghao Wang"===a||"Jinghao Wang*"===a,r=a.includes("#");return(0,i.jsxs)("span",{children:[o?(0,i.jsx)(W,{children:a}):r?(0,i.jsxs)(i.Fragment,{children:[a.replace("#",""),(0,i.jsx)(F,{children:"✉"})]}):a,t.length===n+1?"":",\xa0\xa0"]},n)};function L(e){let{data:n,expandAllAbstract:t}=e,[a,o]=(0,d.useState)(!1),[r,s]=(0,d.useState)("0"),[l,c]=(0,d.useState)(!1);(0,d.useEffect)(()=>{n.link.github&&S(n.link.github).then(s)},[n.link.github]),(0,d.useEffect)(()=>{o(t)},[t]);let h=()=>c(e=>!e),y=(0,d.useMemo)(()=>n.author.split(",").map(J),[n.author]);return(0,i.jsxs)(A.A,{sx:{display:"flex",marginBottom:"1.5em"},children:[(0,i.jsx)(b.A,{sx:{display:"flex",flexDirection:"column"},children:(0,i.jsxs)(v.A,{children:[(0,i.jsx)(T,{sx:{textAlign:"center",fontSize:"26px",paddingX:"1em",marginBottom:"1em"},children:n.title}),(0,i.jsxs)(b.A,{sx:{display:"flex",flexDirection:"column",marginLeft:"2em"},children:[(0,i.jsx)(T,{sx:{fontSize:"18px"},children:y}),(0,i.jsx)(T,{sx:{fontSize:"18px",fontStyle:"italic"},children:n.conference}),(0,i.jsxs)(T,{variant:"body2",sx:{color:"#a0a0a0cc",fontSize:"18px"},children:["TL;DR: ",n.tldr]}),(0,i.jsx)(T,{sx:{fontSize:"16px"},children:n.time}),(0,i.jsxs)(b.A,{sx:{"& button":{marginRight:"1em",padding:"0"}},children:[n.bibtex&&(0,i.jsx)(w.A,{size:"small",endIcon:(0,i.jsx)(m.A,{}),onClick:()=>window.open(n.link.paper),sx:{color:I.A[0],textTransform:"none"},children:"Paper"}),n.link.github&&(0,i.jsx)(w.A,{size:"small",endIcon:(0,i.jsx)(p.A,{}),onClick:()=>window.open(n.link.github),sx:{color:I.A[1],textTransform:"none"},children:"Code"}),n.link.github&&(0,i.jsx)(x.A,{badgeContent:r,sx:{marginRight:"1em"},children:(0,i.jsx)(f.A,{sx:{color:I.A[2]}})}),n.bibtex&&(0,i.jsx)(w.A,{size:"small",endIcon:(0,i.jsx)(g.A,{}),onClick:h,sx:{color:I.A[3],textTransform:"none"},children:"BibTeX"}),(0,i.jsxs)(k.A,{open:l,onClose:h,children:[(0,i.jsx)(M,{children:n.bibtex}),(0,i.jsx)(C.A,{children:(0,i.jsx)(w.A,{autoFocus:!0,onClick:h,sx:{color:"#a0a0a0cc"},children:"Close"})})]}),(0,i.jsx)(w.A,{onClick:()=>o(e=>!e),sx:{color:I.A[4],textTransform:"none"},endIcon:(0,i.jsx)(u.A,{}),children:"Abstract"}),(0,i.jsx)(j.A,{in:a,timeout:"auto",unmountOnExit:!0,children:(0,i.jsx)(v.A,{children:(0,i.jsx)(T,{sx:{fontSize:"16px"},children:n.abstract})})})]})]})]})}),(0,i.jsx)(E,{image:"/painting/".concat(n.image_path)})]})}var O=t(3116),D=t(6865);let Y={All:"All",FirstAuthor:"First Author",Published:"Published/Accepted",CurrentYear:"Since ".concat(new Date().getFullYear()),Journal:"Journal Only",Conference:"Conference Only"},G=(0,P.Ay)(O.A)({border:"2.5px solid #a0a0a04d",borderRadius:"5px",display:"flex",justifyContent:"center"});function z(e){let{filters:n,setFilters:t,countDic:a}=e,o=e=>{let{value:i,checked:a}=e.target;"All"===i?1===Object.values(n).reduce((e,n)=>e+(n?1:0),0)&&n.showAll?t({showFirstAuthor:!1,showPublished:!1,showCurrentYear:!1,showAll:!1,showJournal:!1,showConference:!1}):t({showFirstAuthor:!0,showPublished:!0,showCurrentYear:!0,showAll:!0,showJournal:!0,showConference:!0}):t(e=>({...e,[i]:a,showAll:!1}))};return(0,i.jsx)(G,{children:(0,i.jsx)(D.A,{row:!0,children:Object.keys(Y).map(e=>(0,i.jsx)(l.A,{control:(0,i.jsx)(r.A,{checked:n[e],onChange:o,value:e}),label:"".concat(Y[e]," (").concat(a[e]||0,")")},e))})})}let N=[{title:"FreeMorph: Tuning-Free Generalized Image Morphing with Diffusion Model",author:"Yukang Cao, Chenyang Si, Jinghao Wang, Ziwei Liu#",conference:"under review",time:"2024-10",link:{},abstract:"We present FreeMorph, the first tuning-free method for image morphing that accommodates inputs with varying semantics or layouts. Unlike existing methods, which rely on fine-tuning pre-trained diffusion models and are limited by time constraints and semantic/layout discrepancies, FreeMorph delivers high-fidelity image morphing without extensive training. Despite its efficiency and potential, tuning-free methods still face challenges in maintaining high-quality image morphing due to the non-linear nature of the multi-step denoising process and bias inherited from the pre-trained diffusion model. In this paper, we introduce FreeMorph to address this challenge by integrating two key innovations. 1) We first propose a guidance-aware spherical interpolation design that incorporates the explicit guidance from the input images by modifying the self-attention modules, addressing identity loss, and ensuring consistent transitions throughout the generated sequences. 2) We further introduce a step-oriented motion flow that blends self-attention modules derived from each input image to achieve controlled and directional transitions that respect both input images. Our extensive evaluations demonstrate that FreeMorph outperforms existing methods with training that is 10x~50x faster, establishing a new state-of-the-art for image morphing.",tldr:"A tuning-free method for image morphing via diffusion models.",image_path:"1.jpg"},{title:"AID: Attention Interpolation of Text-to-Image Diffusion",author:"Qiyuan He, Jinghao Wang, Ziwei Liu, Angela Yao#",conference:"Neural Information Processing Systems (NeurIPS), 2024",time:"2024-09",link:{paper:"https://arxiv.org/abs/2403.17924",github:"https://github.com/QY-H00/attention-interpolation-diffusion"},abstract:"Conditional diffusion models can create unseen images in various settings, aiding image interpolation. Interpolation in latent spaces is well-studied, but interpolation with specific conditions like text or poses is less understood. Simple approaches, such as linear interpolation in the space of conditions, often result in images that lack consistency, smoothness, and fidelity. To that end, we introduce a novel training-free technique named Attention Interpolation via Diffusion (AID). Our key contributions include 1) proposing an inner/outer interpolated attention layer; 2) fusing the interpolated attention with self-attention to boost fidelity; and 3) applying beta distribution to selection to increase smoothness. We also present a variant, Prompt-guided Attention Interpolation via Diffusion (PAID), that considers interpolation as a condition-dependent generative process. This method enables the creation of new images with greater consistency, smoothness, and efficiency, and offers control over the exact path of interpolation. Our approach demonstrates effectiveness for conceptual and spatial interpolation.",tldr:"A training-free method for text-to-image diffusion models to generate interpolation between different conditions.",image_path:"2.jpg",bibtex:"@article{he2024aid,\n  title={AID: Attention Interpolation of Text-to-Image Diffusion},\n  author={He, Qiyuan and Wang, Jinghao and Liu, Ziwei and Yao, Angela},\n  journal={arXiv preprint arXiv:2403.17924},\n  year={2024}\n}"},{title:"Pair then Relation: Pair-Net for Panoptic Scene Graph Generation",author:"Jinghao Wang*, Zhengyu Wen*, Xiangtai Li, Zujing Guo, Jingkang Yang, Ziwei Liu#",conference:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2024",time:"2024-08",link:{paper:"https://arxiv.org/abs/2307.08699",github:"https://github.com/king159/Pair-Net"},abstract:"Panoptic Scene Graph (PSG) is a challenging task in Scene Graph Generation (SGG) that aims to create a more comprehensive scene graph representation using panoptic segmentation instead of boxes. However, current PSG methods have limited performance, which can hinder downstream task development. To improve PSG methods, we conducted an in-depth analysis to identify the bottleneck of the current PSG models, finding that inter-object pair-wise recall is a crucial factor which was ignored by previous PSG methods. Based on this, we present a novel framework: Pair then Relation (Pair-Net), which uses a Pair Proposal Network (PPN) to learn and filter sparse pair-wise relationships between subjects and objects. We also observed the sparse nature of object pairs and used this insight to design a lightweight Matrix Learner within the PPN. Through extensive ablation and analysis, our approach significantly improves upon leveraging the strong segmenter baseline. Notably, our approach achieves new state-of-the-art results on the PSG benchmark, with over 10% absolute gains compared to PSGFormer.",tldr:"A SOTA and lightweight model for panoptic scene graph generation.",image_path:"3.jpg",bibtex:"@article{wang2024pair,\n  title={Pair then relation: Pair-net for panoptic scene graph generation},\n  author={Wang, Jinghao and Wen, Zhengyu and Li, Xiangtai and Guo, Zujin and Yang, Jingkang and Liu, Ziwei},\n  journal={IEEE Transactions on Pattern Analysis and Machine Intelligence},\n  year={2024},\n  publisher={IEEE}\n}"},{title:"Mimic-it: Multi-modal in-context instruction tuning",author:"Bo Li*, Yuanhan Zhang*, Liangyu Chen*, Jinghao Wang*, Fanyi Pu*, Joshua Adrian Cahyono, Jingkang Yang, Chunyuan Li, Ziwei Liu#",conference:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2024, under review",time:"2023-06",link:{paper:"https://arxiv.org/abs/2306.05425",github:"https://github.com/Luodian/Otter"},abstract:"Recent advances in Large Multimodal Models (LMMs) have unveiled great potential as visual assistants. However, most existing works focus on responding to individual instructions or using previous dialogues for contextual understanding. There is little discussion on employing both images and text as in-context examples to enhance the instruction following capability. To bridge this gap, we introduce the Otter model to leverage both textual and visual in-context examples for instruction tuning. Specifically, Otter builds upon Flamingo with Perceiver architecture, and has been instruction tuned for general purpose multi-modal assistant. Otter seamlessly processes multi-modal inputs, supporting modalities including text, multiple images, and dynamic video content. To support the training of Otter, we present the MIMIC-IT (MultI-Modal In-Context Instruction Tuning) dataset, which encompasses over 3 million multi-modal instruction-response pairs, including approximately 2.2 million unique instructions across a broad spectrum of images and videos. MIMIC-IT has been carefully curated to feature a diverse array of in-context examples for each entry. Comprehensive evaluations suggest that instruction tuning with these in-context examples substantially enhances model convergence and generalization capabilities. Notably, the extensive scenario coverage provided by the MIMIC-IT dataset empowers the Otter model to excel in tasks involving complex video and multi-image understanding.",tldr:"A multi-model dataset and model for in-context instruction tuning.",image_path:"4.jpeg",bibtex:"@article{li2023mimic,\n  title={Mimic-it: Multi-modal in-context instruction tuning},\n  author={Li, Bo and Zhang, Yuanhan and Chen, Liangyu and Wang, Jinghao and Pu, Fanyi and Yang, Jingkang and Li, Chunyuan and Liu, Ziwei},\n  journal={arXiv preprint arXiv:2306.05425},\n  year={2023}\n}"},{title:"TransPatch: A Transformer-based Generator for Accelerating Transferable Patch Generation in Adversarial Attacks Against Object Detection Models",author:"Jinghao Wang, Chenling Cui, Xuejun Wen#, Jie Shi",conference:"European Conference on Computer Vision Workshop on Adversarial Robustness in the Real World (ECCV-W), 2022",time:"2023-02",link:{paper:"https://link.springer.com/chapter/10.1007/978-3-031-25056-9_21"},abstract:"Patch-based adversarial attack shows the possibility to black-box physical attacks on state-of-the-art object detection models through hiding the occurrence of the objects, which causes a high risk in automated security system relying on such model. However, most prior works mainly focus on the attack performance but rarely pay attention to the training speed due to pixel updating and non-smoothing loss function in the training process. To overcome this limitation, we propose a simple but novel training pipeline called TransPatch, a transformer-based generator with new loss function, to accelerate the training process. To address the issue of unstable training problem of previous methods, we also compare and visualize the landscape of various loss functions. We conduct comprehensive experiments on two pedestrian and one stop sign datasets on three object detection models, i.e., YOLOv4, DETR and SSD to compare the training speed and patch performance in such adversarial attacks. From our experiments, our method outperforms previous methods within the first few epochs, and achieves absolute 20% ~ 30% improvements in attack success rate (ASR) using 10% of the training time. We hope our approach can motivate future research on using generator in physical adversarial attack generation on other tasks and models.",tldr:"A generator for patch-based adversarial attacks on object detection models.",image_path:"5.jpg",bibtex:"@inproceedings{wang2022transpatch,\n  title={TransPatch: a transformer-based generator for accelerating transferable patch generation in adversarial attacks against object detection models},\n  author={Wang, Jinghao and Cui, Chenling and Wen, Xuejun and Shi, Jie},\n  booktitle={European Conference on Computer Vision},\n  pages={317--331},\n  year={2022},\n  organization={Springer}\n}\n"}];function R(e,n){let{showFirstAuthor:t,showPublished:i,showCurrentYear:a,showJournal:o,showConference:r,showAll:s}=n,l=e.author.startsWith("Jinghao Wang"),c=!("arXiv"===e.conference||e.conference.includes("under review")),h=e.time.split("-")[0]===new Date().getFullYear().toString(),d=e.conference.includes("TPAMI"),u=!e.conference.includes("TPAMI");return s||(!t||l)&&(!i||c)&&(!a||h)&&(!o||d)&&(!r||u)}let Z={FirstAuthor:0,Published:0,CurrentYear:0,Journal:0,Conference:0,All:N.length};for(let e of N)e.author.startsWith("Jinghao Wang")&&(Z.FirstAuthor+=1),e.conference.includes("arXiv")||e.conference.includes("under review")||(Z.Published+=1),e.time.split("-")[0]===new Date().getFullYear().toString()&&(Z.CurrentYear+=1),e.conference.includes("TPAMI")&&(Z.Journal+=1),e.conference.includes("TPAMI")||(Z.Conference+=1);function _(){let[e,n]=(0,d.useState)({showFirstAuthor:!1,showPublished:!1,showCurrentYear:!1,showAll:!0,showJournal:!1,showConference:!1}),[t,u]=(0,d.useState)(!1),g=d.useRef(null);return(0,i.jsxs)("div",{children:[(0,i.jsx)(h.default,{sx:{mt:4,mb:2},variant:"h4",color:"black",children:"Publication"}),(0,i.jsx)(z,{filters:e,setFilters:n,countDic:Z}),(0,i.jsx)(l.A,{label:t?"Collapse Abstract":"Expand Abstract",control:(0,i.jsx)(r.A,{onChange:()=>{u(!t)},sx:{color:"#a0a0a0cc","&.Mui-checked":{color:s.A[800]}},icon:(0,i.jsx)(o.A,{}),checkedIcon:(0,i.jsx)(a.A,{})})}),0===N.filter(n=>R(n,e)).length&&(0,i.jsx)("div",{children:(0,i.jsx)(c.A,{in:!0,timeout:500,unmountOnExit:!0,direction:"left",children:(0,i.jsx)(h.default,{sx:{mt:4,mb:4,display:"flex",justifyContent:"center"},variant:"h6",color:"black",children:"No publication to show"})})}),N.map(n=>(0,i.jsx)(c.A,{in:R(n,e),container:g.current,direction:"left",timeout:500,unmountOnExit:!0,children:(0,i.jsx)("div",{children:(0,i.jsx)(L,{data:n,expandAllAbstract:t})})},n.title))]})}},604:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});let i=["#003547","#005E54","#C2BB00","#F24405","#ED8B16"]}},e=>{var n=n=>e(e.s=n);e.O(0,[736,533,282,855,653,441,517,358],()=>n(2475)),_N_E=e.O()}]);