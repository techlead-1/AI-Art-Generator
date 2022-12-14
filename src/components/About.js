import '../stylesheet/about.css'

const About = () => {
    return ( 
        <div className="about">
                <p className="about-p">This web application uses the Open AI Dall-E 2 Artificial intelligence system and allow users to create high quality arts and images by entering natural language to define what you want and the Dall-E 2 system returns a qulality image</p>

                <div className="about-image"></div>
                <i className="image-caption">An artwork generated by the Open Ai Dall-E 2 system</i>

                <p className="about-p buttom-p">For example, when a user enters <b>Image of an astronaut riding a horse on  the moon</b>, the web application takes the input and delivers it to the Dall-E 2 system which then returns a quality art or image that can be viewed and downloaded on this web application</p>
                <p className="about-p"><b>NOTE: This web application is developed as a portfolio project and not for commercial purposes, hence all generations are free. To connect with the developer, click the developer link in the navigation bar</b></p>
        </div>
     );
}
 
export default About;