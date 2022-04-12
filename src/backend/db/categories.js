import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Van Heusen",
    categoryImg:
      "https://seeklogo.com/images/V/van-heusen-logo-3A15A8941D-seeklogo.com.png"
  },
  {
    _id: uuid(),
    categoryName: "Allen Solly",
    categoryImg:
      "https://seeklogo.com/images/A/allen-solly-logo-965039B17A-seeklogo.com.png"
  },
  {
    _id: uuid(),
    categoryName: "Jack & Jones",
    categoryImg: "https://image3.mouthshut.com/images/imagesp/925740546s.jpg"
  },
  {
    _id: uuid(),
    categoryName: "U.S. POLO ASSN.",
    categoryImg:
      "https://d3uxdg7queknzi.cloudfront.net/assets/img/misc-images/DHM_Composite_Color.png"
  },
  {
    _id: uuid(),
    categoryName: "Peter England",
    categoryImg: "https://peterengland.imgix.net/img/app/brands/pe/pe_logo.png"
  },
  {
    _id: uuid(),
    categoryName: "blackberrys",
    categoryImg:
      "https://www.dlfmallofindia.com/wp-content/uploads/2020/04/Black-Berry.png"
  },
  {
    _id: uuid(),
    categoryName: "Max",
    categoryImg:
      "https://t4.ftcdn.net/jpg/03/21/27/65/360_F_321276505_0StMk9tu7hz0VoM0WB57QqF521drjkNa.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Integriti",
    categoryImg:
      "https://hdn-1.fynd.com/company/884/applications/000000000000000000000004/collections/pictures/square-logo/original/z3TtjFHeC-Integriti-upto-65percent-off.jpeg"
  }
];
