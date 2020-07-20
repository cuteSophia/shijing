import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImgBaozun from "../../content/assets/about/baozun.png"
import ImgHighschool from "../../content/assets/about/highschool.jpg"
import ImgKindergarten from "../../content/assets/about/kindergarten.png"
import ImgMiddleschool from "../../content/assets/about/middleschool.jpg"
// import ImgMkf from "../../content/assets/about/mkf.jpg"
import ImgSdjj from "../../content/assets/about/sdjj.png"
import ImgTjj from "../../content/assets/about/tjj.png"
import ImgUniversity from "../../content/assets/about/university.jpg"
import ImgXybb from "../../content/assets/about/xybb.png"
import ImgYey from "../../content/assets/about/youeryuan.png"
import ImgBaby from "../../content/assets/about/baby.png"

const timeline = [
  {
    time: "2020.03 - today",
    org: "上海店店赚电子商务有限公司",
    icon: ImgXybb,
    description:
      "I graduated with a master of science in computer science. Lots of this knowledge can be applied for more complex problems in client-server architectures.",
  },
  {
    time: "2018.10 - 2019.12",
    org: "上海欢兽实业有限公司",
    icon: ImgTjj,
    description: "web 前端开发工程师",
  },
  {
    time: "2017.06 - 2018.09",
    org: "上海欢尚实业有限公司",
    icon: ImgSdjj,
    description: "web 前端开发工程师",
  },
  {
    time: "2013.08 - 2017.05",
    org: "上海宝尊电子商务有限公司",
    icon: ImgBaozun,
    description: "web 前端开发工程师",
  },
  {
    time: "2009.09 - 2013.07",
    org: "徐州工程学院",
    icon: ImgUniversity,
    description: "",
  },
  {
    time: "2006.09 - 2009.07",
    org: "张家港市沙洲中学",
    icon: ImgHighschool,
    description: "",
  },
  {
    time: "2003.09 - 2006.07",
    org: "张家港市暨阳湖实验学校",
    icon: ImgMiddleschool,
    description: "",
  },
  {
    time: "1997.09 - 2003.07",
    org: "张家港市实验小学",
    icon: ImgKindergarten,
    description: "",
  },
  {
    time: "1995.09 - 1997.07",
    org: "张家港市合兴幼儿园",
    icon: ImgYey,
    description: "",
  },
  {
    time: "1992.01",
    org: "Born in Suzhou Jiangsu Province.",
    icon: ImgBaby,
    description: "",
  },
]

export default ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="About Me" />
      <section>
        <h2 className="about-title">About Me</h2>
        <p style={{ width: "80%", margin: "0 auto 5rem", textAlign: "center" }}>
          Hey there, Nice to meet you. My name is ShiJing. I'm a frontend focused
          Web Engineer living in Shanghai. I write code and think about stuff.
        </p>
      </section>
      <section>
        <h2 className="about-title">Work Experience And Education</h2>
        <ul className="vita">
          {timeline.map((item, index) => (
            <li className="vita-item">
              <div className="logo">
                <img src={item.icon} alt="" className="logo-img" />
              </div>
              <div className="content">
                <h4>{item.time}</h4>
                <h5>{item.org}</h5>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
