import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, tech, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={link} className="text-white h2" target="_blank">
          <ul className="list-unstyled d-flex align-items-center justify-content-center gap-2 icon-wrap">
            {tech.map((el, idx)=>{
              return(
                <li>{el}</li>
              )
            })}
          </ul>
          </a>
        </div>
      </div>
    </Col>
  )
}