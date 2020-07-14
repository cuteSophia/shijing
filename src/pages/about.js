import React from "react"

import Layout from "../components/layout"

export default ({ location }) => {
  return (
    <Layout location={location}>
      <div>
        <p>Shi Jing</p>
        <p>female</p>
        <p>18701702779 sophia.jingshi@hotmail.com</p>
        <p>shijing.com</p>
      </div>
      <div>
        Work Experience
        <p>上海店店赚电子商务有限公司 2020.03 - present</p>
        <p>上海欢兽实业有限公司 2018.10 - 2019.12</p>
        <p>上海欢尚实业有限公司 2017.06 - 2018.09</p>
        <p>上海宝尊电子商务有限公司 2013.08 - 2017.05</p>
      </div>
      <div>
        Education
        <p>徐州工程学院 2009.09 - 2013.07</p>
        <p>沙洲中学 2006.09 - 2009.07</p>
        <p>暨阳湖中学 2003.09 - 2006.07</p>
        <p>实验小学 1997.09 - 2003.09</p>
      </div>
    </Layout>
  )
}
