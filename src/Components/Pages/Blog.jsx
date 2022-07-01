import React from 'react';
import Button from "../SubFile/Button";
import "../Css/Home.css";
import HeroHader from "../SubFile/HeroHader";
import BlogOne from "../Images/blogOne.jpg"
import BlogTwo from "../Images/BlogTwo.jpg"
import BlogThree from "../Images/BlogThree.jpg"
import BlogFour from "../Images/BlogFour.jpg"
import BlogFive from "../Images/BlogFive.jpg"
import BlogSix from "../Images/BlogSix.jpg"
import Footer from "../SubFile/Footer";
const array = [
  {
    id : 0,
    img : BlogOne,
    title : "15 SEO Best Practices Web Architecture",
    text : "There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration",
    button : "Read More",
    link : "https://victoriousseo.com/blog/website-architecture/"
  },
  {
    id : 1,
    img : BlogTwo,
    title : "A Guide to Google SEO Algo ithm Updates",
    text : "There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration",
    button : "Read More",
    link : "https://www.searchenginejournal.com/google-algorithm-history/"
  },
  {
    id : 2,
    img : BlogThree,
    title : "The security risks of owne change package",
    text : "There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration",
    button : "Read More",
    link : "https://blog.npmjs.org/post/182828408610/the-security-risks-of-changing-package-owners.html"
  },
  {
    id : 3,
    img : BlogFour,
    title : "Sluggish Changed look on Program",
    text : "There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration",
    button : "Read More",
    link : "https://victoriainfotech.com/2020/06/08/sluggish-changed-look-on-program/"
  },
  {
    id : 4,
    img : BlogFive,
    title : "Best Construction Tips You Will Read This Year",
    text : "There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration",
    button : "Read More",
    link : "https://fotomaule.cl/2021/01/01/best-construction-tips-you-will-read-2021-year/"
  },
  {
    id : 5,
    img : BlogSix,
    title : "Change to Trade Credit Policy and Procedures",
    text : "There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration",
    button : "Read More",
    link : "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11499&Mode=0"
  }
]

const Blog = () => {
  return (
    <>
      <HeroHader text="Blog"/>
      <div className="blog">
        {
          array.map(element => 
            <div key={element.id} className="blog_row">
              <img src={element.img} alt="" />
              <h1>{element.title}</h1>
              <p>{element.text}</p>
              <a href={element.link} target="_Blank"><Button button={element.button}/></a>
            </div>
          )
        }
      </div>
      <Footer />
    </>
  )
}

export default Blog