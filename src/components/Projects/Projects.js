import React from 'react';

import { ArrowLeft, ArrowRight, BlogCard, CardInfo, CarouselContent, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, PageContainer } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  return (
    <PageContainer>
      <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
          <ArrowLeft alt={``} src={`/images/arrow.png`} />
          {projects.map((p, i) => {
            return (
              <BlogCard key={i}>
                <TitleContent>
                  <HeaderThree title>{p.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CarouselContent>
                  <CardInfo className="card-info">{p.description}</CardInfo>
                  <Img src={p.image} />
                </CarouselContent>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {p.tags.map((t, i) => {
                      return <Tag key={i}>{t}</Tag>;
                    })}
                  </TagList>
                </div>
              </BlogCard>
            );
          })}
          <ArrowRight alt={``} src={`/images/arrow.png`} />
        </GridContainer>
      </Section>
    </PageContainer>
  );
}

export default Projects;