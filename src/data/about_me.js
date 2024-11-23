import ArticleIcon from "@mui/icons-material/Article";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

const newsData = [
  {
    firstLine: "AID has been accepted to NeurIPS.",
    secondLine: "2024-09",
    icon: ArticleIcon,
  },
  {
    firstLine: "PairNet has been accepted to TPAMI.",
    secondLine: "2024-08",
    icon: ArticleOutlinedIcon,
  },
];

const aboutMeData = (
  <div>
    He is a first year Ph.D student at{" "}
    <a href="https://www.cuhk.edu.hk/">The Chinese University of Hong Kong</a>,
    specializing in multimodal large language model and image generation,
    supervised by{" "}
    <a href="https://www.cse.cuhk.edu.hk/~pheng/">Prof. Pheng-Ann Heng</a>.
  </div>
);

export { newsData, aboutMeData };
