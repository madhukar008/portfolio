import React from 'react'
import { Container } from 'react-bootstrap'

const Education = () => {
    return (
        <section className='project bg-transparent' id='educations'>
            <Container>
                    <h2 class="text-center mb-5"> Educational Qualifications</h2>
                        <section id="timeline">
                            <article>
                                <div class="inner">
                                    <span class="date">
                                       
                                    <span class="month">Jun</span>
                                        <span class="year">2023</span>
                                    </span>
                                    <h2>Lyallpur Khalsa College of Engineering, Graduation</h2>
                                    <p>I've successfully completed my B.Tech in Computer Science, gaining expertise in software engineering, AI, and database management. Through hands-on projects and internships, I've developed strong problem-solving skills.</p>
                                </div>
                            </article>
                            <article>
                                <div class="inner">
                                    <span class="date">
                                        <span class="month">Apr</span>
                                        <span class="year">2019</span>
                                    </span>
                                    <h2>
                                    Devi Sahai S.D. Senior Secondary School, (Non-Medical)</h2>
                                     <p>I've successfully completed my 12th grade with a focus on non-medical subjects, emphasizing mathematics, physics, and chemistry. This academic journey has honed my analytical and problem-solving skills, providing a solid foundation for future pursuits in fields like engineering and technology.</p>
                                   
                                </div>
                            </article>
                            <article>
                                <div class="inner">
                                    <span class="date">
                                       
                                        <span class="month">Mar</span>
                                        <span class="year">2017</span>
                                    </span>
                                    <h2>Little Angel's Public School</h2>
                                    <p>I'm delighted to announce the completion of my 10th-grade education, laying a strong foundation in subjects like mathematics, science, and languages. This marks the beginning of my academic journey, instilling in me a curiosity and readiness for more specialized studies.</p>
                                </div>
                            </article>
                        </section>
            </Container>
        </section>
    )
}

export default Education