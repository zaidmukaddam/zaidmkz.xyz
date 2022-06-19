import React from "react";
import Image from "next/image";
import { TextHighlight } from "../shared/typography";
import {
  IntroBase,
  DetailsWrapper,
  IntroLine,
  AvatarWrapper,
  WorkLine
} from "./styles";

const IntroBlock: React.FC = () => {
  return (
    <IntroBase>
      <DetailsWrapper>
        <IntroLine>
          Hey,
          <br /> I&apos;m <TextHighlight>Zaid Mukaddam! </TextHighlight>
        </IntroLine>
        <WorkLine>
          Full <TextHighlight>Stack </TextHighlight>Developer <TextHighlight>@Freelancer</TextHighlight>
        </WorkLine>
      </DetailsWrapper>
      <AvatarWrapper>
        <Image
          src={"/static/images/avatar-full.png"}
          height={256 / 2.2}
          width={256 / 2.2}
          alt='Avatar Zaid Mukaddam'
          priority
        />
      </AvatarWrapper>
    </IntroBase>
  );
};

export default IntroBlock;
