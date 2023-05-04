const data = [
    {
        title: 'Otter: Pair-Net for Panoptic Scene Graph Generation',
        author: 'Jinghao Wang*, Bo Li*, Yuanhan Zhang*, Liangyu Chen, Jingkang Yang, Ziwei Liu',
        image1: '/images/projects/attack1.jpg',
        image2: '/images/projects/attack2.jpg',
        conference: 'ICCV 2023, under review',
        link: '',
        abstract: 'coming soon.'
    },
    {
        title: 'Pair then Relation: Pair-Net for Panoptic Scene Graph Generation',
        author: 'Jinghao Wang*, Zhengyu Wen*, Xiangtai Li, Jingkang Yang, Zujing Guo, Ziwei Liu',
        image1: '/images/projects/attack1.jpg',
        image2: '/images/projects/attack2.jpg',
        conference: 'ICCV 2023, under review',
        link: '',
        abstract: 'coming soon.'
    },
    {
        title: 'TransPatch: A Transformer-based Generator for Accelerating Transferable Patch Generation in Adversarial Attacks Against Object Detection Models',
        author: 'Jinghao Wang, Chenling Cui, Xuejun Wen, Jie Shi',
        image1: '/images/projects/attack1.jpg',
        image2: '/images/projects/attack2.jpg',
        conference: 'European Conference on Computer Vision (ECCV) Workshop on Adversarial Robustness in the Real World (AROW), 2022',
        link: 'https://drive.google.com/file/d/1j1PysboEgiHoQBU46S2E_sbDIwCYoXpf/view?usp=sharing',
        abstract: 'Abstract: Patch-based adversarial attack shows the possibility to black-box physical attacks on state-of-the-art object detection models through hiding the occurrence of the objects, which causes a high risk in automated security system relying on such model. However, most prior works mainly focus on the attack performance but rarely pay attention to the training speed due to pixel updating and non-smoothing loss function in the training process. To overcome this limitation, we propose a simple but novel training pipeline called TransPatch, a transformer-based generator with new loss function, to accelerate the training process. To address the issue of unstable training problem of previous methods, we also compare and visualize the landscape of various loss functions. We conduct comprehensive experiments on two pedestrian and one stop sign datasets on three object detection models, i.e., YOLOv4, DETR and SSD to compare the training speed and patch performance in such adversarial attacks. From our experiments, our method outperforms previous methods within the first few epochs, and achieves absolute 20% ~ 30% improvements in attack success rate (ASR) using 10% of the training time. We hope our approach can motivate future research on using generator in physical adversarial attack generation on other tasks and models.',
    },
];

export default data;
