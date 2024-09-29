const data = [
  {
    title: 'AID: Attention Interpolation of Text-to-Image Diffusion',
    author: "Qiyuan He, Jinghao Wang, Ziwei Liu, Angela Yao#",
    conference: "Neural Information Processing Systems (NeurIPS), 2024",
    time: '2024-03',
    link: {
      'paper': "https://arxiv.org/abs/2403.17924",
      'github': "https://github.com/QY-H00/attention-interpolation-diffusion",
    },
    abstract: "Conditional diffusion models can create unseen images in various settings, aiding image interpolation. Interpolation in latent spaces is well-studied, but interpolation with specific conditions like text or poses is less understood. Simple approaches, such as linear interpolation in the space of conditions, often result in images that lack consistency, smoothness, and fidelity. To that end, we introduce a novel training-free technique named Attention Interpolation via Diffusion (AID). Our key contributions include 1) proposing an inner/outer interpolated attention layer; 2) fusing the interpolated attention with self-attention to boost fidelity; and 3) applying beta distribution to selection to increase smoothness. We also present a variant, Prompt-guided Attention Interpolation via Diffusion (PAID), that considers interpolation as a condition-dependent generative process. This method enables the creation of new images with greater consistency, smoothness, and efficiency, and offers control over the exact path of interpolation. Our approach demonstrates effectiveness for conceptual and spatial interpolation.",
    ref: "aid"
  },
  {
    title: 'Pair then Relation: Pair-Net for Panoptic Scene Graph Generation',
    author: 'Jinghao Wang*, Zhengyu Wen*, Xiangtai Li, Zujing Guo, Jingkang Yang, Ziwei Liu#',
    conference: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2024',
    time: '2023-07',
    link: {
      'paper': 'https://arxiv.org/abs/2307.08699',
      'github': 'https://github.com/king159/Pair-Net'
    },
    abstract: 'Panoptic Scene Graph (PSG) is a challenging task in Scene Graph Generation (SGG) that aims to create a more comprehensive scene graph representation using panoptic segmentation instead of boxes. However, current PSG methods have limited performance, which can hinder downstream task development. To improve PSG methods, we conducted an in-depth analysis to identify the bottleneck of the current PSG models, finding that inter-object pair-wise recall is a crucial factor which was ignored by previous PSG methods. Based on this, we present a novel framework: Pair then Relation (Pair-Net), which uses a Pair Proposal Network (PPN) to learn and filter sparse pair-wise relationships between subjects and objects. We also observed the sparse nature of object pairs and used this insight to design a lightweight Matrix Learner within the PPN. Through extensive ablation and analysis, our approach significantly improves upon leveraging the strong segmenter baseline. Notably, our approach achieves new state-of-the-art results on the PSG benchmark, with over 10% absolute gains compared to PSGFormer.',
    ref: "pairnet"
  },
  {
    title: 'Otter: A Multi-Modal Model with In-Context Instruction Tuning',
    author: 'Bo Li*, Yuanhan Zhang*, Liangyu Chen*, Jinghao Wang*, Fanyi Pu*, Joshua Adrian Cahyono, Jingkang Yang, Chunyuan Li, Ziwei Liu#',
    conference: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), under review',
    time: '2023-06',
    link: {
      'paper': 'https://arxiv.org/abs/2306.05425',
      'github': 'https://github.com/Luodian/Otter'
    },
    abstract: 'Recent advances in Large Multimodal Models (LMMs) have unveiled great potential as visual assistants. However, most existing works focus on responding to individual instructions or using previous dialogues for contextual understanding. There is little discussion on employing both images and text as in-context examples to enhance the instruction following capability. To bridge this gap, we introduce the Otter model to leverage both textual and visual in-context examples for instruction tuning. Specifically, Otter builds upon Flamingo with Perceiver architecture, and has been instruction tuned for general purpose multi-modal assistant. Otter seamlessly processes multi-modal inputs, supporting modalities including text, multiple images, and dynamic video content. To support the training of Otter, we present the MIMIC-IT (MultI-Modal In-Context Instruction Tuning) dataset, which encompasses over 3 million multi-modal instruction-response pairs, including approximately 2.2 million unique instructions across a broad spectrum of images and videos. MIMIC-IT has been carefully curated to feature a diverse array of in-context examples for each entry. Comprehensive evaluations suggest that instruction tuning with these in-context examples substantially enhances model convergence and generalization capabilities. Notably, the extensive scenario coverage provided by the MIMIC-IT dataset empowers the Otter model to excel in tasks involving complex video and multi-image understanding.',
    ref: "otter"
  },
  {
    title: 'TransPatch: A Transformer-based Generator for Accelerating Transferable Patch Generation in Adversarial Attacks Against Object Detection Models',
    author: 'Jinghao Wang, Chenling Cui, Xuejun Wen#, Jie Shi',
    conference: 'European Conference on Computer Vision Workshop on Adversarial Robustness in the Real World (ECCV-W), 2022',
    time: '2022-08',
    link: {
      'paper': 'https://link.springer.com/chapter/10.1007/978-3-031-25056-9_21'
    },
    abstract: 'Patch-based adversarial attack shows the possibility to black-box physical attacks on state-of-the-art object detection models through hiding the occurrence of the objects, which causes a high risk in automated security system relying on such model. However, most prior works mainly focus on the attack performance but rarely pay attention to the training speed due to pixel updating and non-smoothing loss function in the training process. To overcome this limitation, we propose a simple but novel training pipeline called TransPatch, a transformer-based generator with new loss function, to accelerate the training process. To address the issue of unstable training problem of previous methods, we also compare and visualize the landscape of various loss functions. We conduct comprehensive experiments on two pedestrian and one stop sign datasets on three object detection models, i.e., YOLOv4, DETR and SSD to compare the training speed and patch performance in such adversarial attacks. From our experiments, our method outperforms previous methods within the first few epochs, and achieves absolute 20% ~ 30% improvements in attack success rate (ASR) using 10% of the training time. We hope our approach can motivate future research on using generator in physical adversarial attack generation on other tasks and models.',
    ref: 'transpatch'
  }
  ,
];

export default data;
