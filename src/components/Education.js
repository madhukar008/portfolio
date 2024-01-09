import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Education = () => {
    return (
        <section className='project' id='educations'>
            <Container>
                <Row>
                    <Col size={7}>
                        <section id="timeline">
                            <article>
                                <div class="inner">
                                    <span class="date">
                                       
                                    <span class="month">Jun</span>
                                        <span class="year">2023</span>
                                    </span>
                                    <h2>Lyallpur Khalsa College of Engineering, Graduation</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
                                </div>
                            </article>
                            <article>
                                <div class="inner">
                                    <span class="date">
                                        <span class="month">April</span>
                                        <span class="year">2019</span>
                                    </span>
                                    <h2>
                                    Devi Sahai S.D. Senior Secondary School</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
                                   
                                </div>
                            </article>
                            <article>
                                <div class="inner">
                                    <span class="date">
                                       
                                        <span class="month">March</span>
                                        <span class="year">2017</span>
                                    </span>
                                    <h2>Little Angel's Public School</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
                                </div>
                            </article>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Education