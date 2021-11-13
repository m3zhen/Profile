import React from 'react';

import { PageContainer, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './LandingStyles';

import { useEffect, useRef } from 'react';
import { init } from 'ityped';

const Landing = (props) => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 500,
      typeSpeed: 60,
      backSpeed: 30,
      strings: ["Software Developer", "UX Designer", "Systems Design Engineer"]
    })
  }, []);
  
  return (
    <PageContainer>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            <SectionText>
              Hey There, I'm 
            </SectionText>
            Michael Zhen
          </SectionTitle>
          <SectionText ref={textRef}>
          </SectionText>
          {/* <Button onClick={props.handleClick}>Learn More</Button> */}
        </LeftSection>
      </Section>
    </PageContainer>
  );
};

export default Landing;