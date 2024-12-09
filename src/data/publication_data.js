const data = [
  {
    title:
      "FreeMorph: Tuning-Free Generalized Image Morphing with Diffusion Model",
    author: "Yukang Cao, Chenyang Si, Jinghao Wang, Ziwei Liu#",
    conference: "under review",
    time: "2024-10",
    link: {},
    abstract:
      "We present FreeMorph, the first tuning-free method for image morphing that accommodates inputs with varying semantics or layouts. Unlike existing methods, which rely on fine-tuning pre-trained diffusion models and are limited by time constraints and semantic/layout discrepancies, FreeMorph delivers high-fidelity image morphing without extensive training. Despite its efficiency and potential, tuning-free methods still face challenges in maintaining high-quality image morphing due to the non-linear nature of the multi-step denoising process and bias inherited from the pre-trained diffusion model. In this paper, we introduce FreeMorph to address this challenge by integrating two key innovations. 1) We first propose a guidance-aware spherical interpolation design that incorporates the explicit guidance from the input images by modifying the self-attention modules, addressing identity loss, and ensuring consistent transitions throughout the generated sequences. 2) We further introduce a step-oriented motion flow that blends self-attention modules derived from each input image to achieve controlled and directional transitions that respect both input images. Our extensive evaluations demonstrate that FreeMorph outperforms existing methods with training that is 10x~50x faster, establishing a new state-of-the-art for image morphing.",
    tldr: "A tuning-free method for image morphing via diffusion models.",
    image_path: "1.jpg",
  },
  {
    title: "AID: Attention Interpolation of Text-to-Image Diffusion",
    author: "Qiyuan He, Jinghao Wang, Ziwei Liu, Angela Yao#",
    conference: "Neural Information Processing Systems (NeurIPS), 2024",
    time: "2024-09",
    link: {
      paper: "https://arxiv.org/abs/2403.17924",
      github: "https://github.com/QY-H00/attention-interpolation-diffusion",
    },
    abstract:
      "Conditional diffusion models can create unseen images in various settings, aiding image interpolation. Interpolation in latent spaces is well-studied, but interpolation with specific conditions like text or poses is less understood. Simple approaches, such as linear interpolation in the space of conditions, often result in images that lack consistency, smoothness, and fidelity. To that end, we introduce a novel training-free technique named Attention Interpolation via Diffusion (AID). Our key contributions include 1) proposing an inner/outer interpolated attention layer; 2) fusing the interpolated attention with self-attention to boost fidelity; and 3) applying beta distribution to selection to increase smoothness. We also present a variant, Prompt-guided Attention Interpolation via Diffusion (PAID), that considers interpolation as a condition-dependent generative process. This method enables the creation of new images with greater consistency, smoothness, and efficiency, and offers control over the exact path of interpolation. Our approach demonstrates effectiveness for conceptual and spatial interpolation.",
    tldr: "A training-free method for text-to-image diffusion models to generate interpolation between different conditions.",
    image_path: "2.jpg",
    bibtex: `@article{he2024aid,
  title={AID: Attention Interpolation of Text-to-Image Diffusion},
  author={He, Qiyuan and Wang, Jinghao and Liu, Ziwei and Yao, Angela},
  journal={arXiv preprint arXiv:2403.17924},
  year={2024}
}`,
  },
  {
    title: "Pair then Relation: Pair-Net for Panoptic Scene Graph Generation",
    author:
      "Jinghao Wang*, Zhengyu Wen*, Xiangtai Li, Zujing Guo, Jingkang Yang, Ziwei Liu#",
    conference:
      "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2024",
    time: "2024-08",
    link: {
      paper: "https://arxiv.org/abs/2307.08699",
      github: "https://github.com/king159/Pair-Net",
    },
    abstract:
      "Panoptic Scene Graph (PSG) is a challenging task in Scene Graph Generation (SGG) that aims to create a more comprehensive scene graph representation using panoptic segmentation instead of boxes. However, current PSG methods have limited performance, which can hinder downstream task development. To improve PSG methods, we conducted an in-depth analysis to identify the bottleneck of the current PSG models, finding that inter-object pair-wise recall is a crucial factor which was ignored by previous PSG methods. Based on this, we present a novel framework: Pair then Relation (Pair-Net), which uses a Pair Proposal Network (PPN) to learn and filter sparse pair-wise relationships between subjects and objects. We also observed the sparse nature of object pairs and used this insight to design a lightweight Matrix Learner within the PPN. Through extensive ablation and analysis, our approach significantly improves upon leveraging the strong segmenter baseline. Notably, our approach achieves new state-of-the-art results on the PSG benchmark, with over 10% absolute gains compared to PSGFormer.",
    tldr: "A SOTA and lightweight model for panoptic scene graph generation.",
    image_path: "3.jpg",
    bibtex: `@article{wang2024pair,
  title={Pair then relation: Pair-net for panoptic scene graph generation},
  author={Wang, Jinghao and Wen, Zhengyu and Li, Xiangtai and Guo, Zujin and Yang, Jingkang and Liu, Ziwei},
  journal={IEEE Transactions on Pattern Analysis and Machine Intelligence},
  year={2024},
  publisher={IEEE}
}`,
  },
  {
    title: "Mimic-it: Multi-modal in-context instruction tuning",
    author:
      "Bo Li*, Yuanhan Zhang*, Liangyu Chen*, Jinghao Wang*, Fanyi Pu*, Joshua Adrian Cahyono, Jingkang Yang, Chunyuan Li, Ziwei Liu#",
    conference:
      "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2024, under review",
    time: "2023-06",
    link: {
      paper: "https://arxiv.org/abs/2306.05425",
      github: "https://github.com/Luodian/Otter",
    },
    abstract:
      "Recent advances in Large Multimodal Models (LMMs) have unveiled great potential as visual assistants. However, most existing works focus on responding to individual instructions or using previous dialogues for contextual understanding. There is little discussion on employing both images and text as in-context examples to enhance the instruction following capability. To bridge this gap, we introduce the Otter model to leverage both textual and visual in-context examples for instruction tuning. Specifically, Otter builds upon Flamingo with Perceiver architecture, and has been instruction tuned for general purpose multi-modal assistant. Otter seamlessly processes multi-modal inputs, supporting modalities including text, multiple images, and dynamic video content. To support the training of Otter, we present the MIMIC-IT (MultI-Modal In-Context Instruction Tuning) dataset, which encompasses over 3 million multi-modal instruction-response pairs, including approximately 2.2 million unique instructions across a broad spectrum of images and videos. MIMIC-IT has been carefully curated to feature a diverse array of in-context examples for each entry. Comprehensive evaluations suggest that instruction tuning with these in-context examples substantially enhances model convergence and generalization capabilities. Notably, the extensive scenario coverage provided by the MIMIC-IT dataset empowers the Otter model to excel in tasks involving complex video and multi-image understanding.",
    tldr: "A multi-model dataset and model for in-context instruction tuning.",
    image_path: "4.jpeg",
    bibtex: `@article{li2023mimic,
  title={Mimic-it: Multi-modal in-context instruction tuning},
  author={Li, Bo and Zhang, Yuanhan and Chen, Liangyu and Wang, Jinghao and Pu, Fanyi and Yang, Jingkang and Li, Chunyuan and Liu, Ziwei},
  journal={arXiv preprint arXiv:2306.05425},
  year={2023}
}`,
  },
  {
    title:
      "TransPatch: A Transformer-based Generator for Accelerating Transferable Patch Generation in Adversarial Attacks Against Object Detection Models",
    author: "Jinghao Wang, Chenling Cui, Xuejun Wen#, Jie Shi",
    conference:
      "European Conference on Computer Vision Workshop on Adversarial Robustness in the Real World (ECCV-W), 2022",
    time: "2023-02",
    link: {
      paper: "https://link.springer.com/chapter/10.1007/978-3-031-25056-9_21",
    },
    abstract:
      "Patch-based adversarial attack shows the possibility to black-box physical attacks on state-of-the-art object detection models through hiding the occurrence of the objects, which causes a high risk in automated security system relying on such model. However, most prior works mainly focus on the attack performance but rarely pay attention to the training speed due to pixel updating and non-smoothing loss function in the training process. To overcome this limitation, we propose a simple but novel training pipeline called TransPatch, a transformer-based generator with new loss function, to accelerate the training process. To address the issue of unstable training problem of previous methods, we also compare and visualize the landscape of various loss functions. We conduct comprehensive experiments on two pedestrian and one stop sign datasets on three object detection models, i.e., YOLOv4, DETR and SSD to compare the training speed and patch performance in such adversarial attacks. From our experiments, our method outperforms previous methods within the first few epochs, and achieves absolute 20% ~ 30% improvements in attack success rate (ASR) using 10% of the training time. We hope our approach can motivate future research on using generator in physical adversarial attack generation on other tasks and models.",
    tldr: "A generator for patch-based adversarial attacks on object detection models.",
    image_path: "5.jpg",
    bibtex: `@inproceedings{wang2022transpatch,
  title={TransPatch: a transformer-based generator for accelerating transferable patch generation in adversarial attacks against object detection models},
  author={Wang, Jinghao and Cui, Chenling and Wen, Xuejun and Shi, Jie},
  booktitle={European Conference on Computer Vision},
  pages={317--331},
  year={2022},
  organization={Springer}
}
`,
  },
];

export default data;
