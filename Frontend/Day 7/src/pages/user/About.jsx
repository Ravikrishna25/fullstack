import { Card } from 'antd'
import React from 'react'
import about from "../../assets/images/about.jpg"
import commit from "../../assets/images/commit.jpg"

const About = () => {
  return (
    <div>
      <Card style={{marginTop:'5px',marginLeft:'15%',marginRight:'2px',width:'70%',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
      <h1 style={{textAlign:'center',color:'#6c926d'}}>About Us</h1>
      <br />
      <div>
        <img src={about} alt="" style={{width:'350px',marginLeft:'34%',borderRadius:'30px'}}/>
      </div>
      <div style={{margin:'2% 10%',textAlign:'justify',fontSize:'18px'}}>
      <p>
      Welcome to the Chess Academy, where we are dedicated to bringing the joy and intellectual 
      challenge of chess to learners of all ages and skill levels. Whether you're a complete beginner 
      or a seasoned player looking to hone your skills, our academy is designed to be your partner in 
      chess excellence.
      </p>
      <br />
      <h3 style={{textAlign:'center',color:'#6c926d'}}>Our Mission</h3>
      <br />
      <p>
      At the Chess Academy, our mission is simple yet profound: to inspire, educate, and empower individuals 
      through the game of chess. We believe that chess is not just a game; it's a powerful tool for personal 
      growth, cognitive development, and fostering a sense of community.
      </p>
      <h3 style={{textAlign:'center',color:'#6c926d'}}>What We Offer</h3>
      <img src={commit} alt=""  style={{marginLeft:'40px',borderRadius:'30px'}}/>
      <br />
      <h4 style={{textDecoration:'underline',fontWeight:'500'}}>Expert Instruction:</h4>
      <p>
      Our academy is home to a team of expert chess instructors who are passionate about sharing their 
      knowledge. Whether you prefer one-on-one coaching or group lessons, our instructors are here to help 
      you master the intricacies of the game.
      </p>
      <br />
      <h4 style={{textDecoration:'underline',fontWeight:'500'}}>Comprehensive Curriculum:</h4>
      <p>We offer a comprehensive curriculum that covers everything from the basics of chess strategy to 
        advanced tactics. Our structured approach ensures that you build a solid foundation and progressively 
        enhance your skills.
      </p>
      <br />
      <h4 style={{textDecoration:'underline',fontWeight:'500'}}>Interactive Learning:</h4>
      <p>
        Learning chess should be fun and engaging. That's why we've developed interactive learning tools 
        and resources to make your chess journey enjoyable. From puzzles and quizzes to online matches and 
        tournaments, there's always something new to explore.
      </p>
      <br />
      <h4 style={{textDecoration:'underline',fontWeight:'500'}}>Community Engagement:</h4>
      <p>Chess is more than just moving pieces on a board; it's about building connections. Our 
        academy provides a vibrant community where chess enthusiasts can come together, share their 
        experiences, and forge friendships that last a lifetime.
      </p>
      <br />
      <h3 style={{textAlign:'center',color:'#6c926d'}}>Our Commitment</h3>
      <br />
      <ul>
        <li><span style={{textDecoration:'underline',fontWeight:'500'}}>Excellence:</span> We are committed to delivering excellence in chess education, providing you with 
          the highest quality instruction and resources.</li>
          <br />
        <li><span style={{textDecoration:'underline',fontWeight:'500'}}>Inclusivity:</span> Chess is for everyone. We welcome learners of all backgrounds, ages, and abilities, 
          fostering an inclusive environment where everyone can thrive.</li>
          <br />
        <li><span style={{textDecoration:'underline',fontWeight:'500'}}>Innovation:</span> The world of chess is constantly evolving, and so are we. We strive to stay at the 
          forefront of chess education, embracing new technologies and teaching methodologies.</li>
      </ul>
      <br />
      <h3 style={{textAlign:'center',color:'#6c926d'}}>Get Started Today!</h3>
      <br />
      <p>
      Whether you dream of becoming a grandmaster or simply want to enjoy the mental stimulation that chess 
      offers, the Chess Academy is here to support you. Join us on this exciting journey and discover the 
      wonders of chess with a community that shares your passion.
      </p>
      </div>
    </Card>
    </div>
  )
}

export default About