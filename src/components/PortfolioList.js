import React from 'react'
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Row,Col} from 'reactstrap';
import PropTypes from 'prop-types'

const PortfolioList = ({name,displayName,summary,images,website,githubUrl,libraries,languages}) => {
	
	return(
   <Row className="portfoliopage__row">   
      <Col sm="12" md="6" className="portfoliopage__column_one">
          <img  width="100%" className="portfoliopage__img"  src={images}  alt='one'/>
      </Col>
      <Col sm="12" md="6" className="portfoliopage__column_two">
        <OverPack  always={false} playScale={0.4} >
          <QueueAnim key="1" leaveReverse   delay={600}  ease={['easeOutQuart', 'easeInOutQuart']}>
          <h1 key="0"><b>{ displayName.replace(/-/ig," ") }</b></h1>
         
          <p key="1">{summary}</p>
          <p key="2" className="portfoliopage__wrap">
          {libraries.map((library,key) => <span key={key} className="portfoliopage__skills">{library}</span> )}
          {languages.map((language,key) => <span key={key} className="portfoliopage__skills">{language}</span> )}
		  </p>
          <div key="3" className="portfoliopage__btn-wrap">
            <button><a href={website} target="_blank" rel="noopener noreferrer" >Live Demo</a></button>
            <button><a href={githubUrl} target="_blank" rel="noopener noreferrer" >View Source</a></button>
          </div>  
                  </QueueAnim>
       
          </OverPack>    
      </Col>
    </Row>

	)
}
PortfolioList.propTypes = {
  name: PropTypes.string,
  displayName: PropTypes.string,
  summary: PropTypes.string,
  images: PropTypes.array,
  website: PropTypes.string,
  githubUrl: PropTypes.string,
  libraries: PropTypes.array,
  languages: PropTypes.array
}
export default PortfolioList;