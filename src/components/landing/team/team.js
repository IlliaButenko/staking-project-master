//import react and styled components
import React from 'react';
import { TeamContainer, ImageGroup } from './team.styled';

//import custom components
import ImageCard from '../product/ImageCard';
import Content from '../content/Content';
import Text from '../product/Text';
import Icon from '../product/Icon';

//import image
import Person1 from '../../../asserts/person (1).png';
import Person2 from '../../../asserts/person (2).png';
import Person3 from '../../../asserts/person (3).png';
import Person4 from '../../../asserts/person (4).png';
import Person5 from '../../../asserts/person (5).png';
const Team = () => {
  return (
    <Content>
      <TeamContainer>
        <Text fSize={30} fWeight={700} Color="#fff" lHeight={45} content="The Team" />
        <Icon />
        <ImageGroup>
          <ImageCard
            imageSize={210}
            imageUrl={Person1}
            title="Matthijs"
            content="CEO & CTO"
            linkedin="https://www.linkedin.com/in/matthijs-janssen-nl/"
          />
          <ImageCard imageSize={210} imageUrl={Person2} title="Daan" content="CMO" linkedin="https://www.linkedin.com/in/daan-spruit-4517b620b/" />
          <ImageCard imageSize={210} imageUrl={Person3} title="Patrick" content="Marketing & Content Manager" nolinkedin="Undoxxed" />
          <ImageCard imageSize={210} imageUrl={Person4} title="Xueming" content="Blockchain Developer" nolinkedin="Undoxxed" />
          <ImageCard className="lastChild" imageSize={210} imageUrl={Person5} title="Alex" content="Front-End Developer" nolinkedin="Undoxxed" />
        </ImageGroup>
      </TeamContainer>
    </Content>
  );
};

export default Team;
