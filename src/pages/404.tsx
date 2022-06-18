import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { DocumentHead } from "../components/shared/documentHead";
import { ContentCenter } from "../components/shared/layoutUtils";
import { TextHighlight } from "../components/shared/typography";

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <>
      <DocumentHead pageTitle="404 - Not Found" imageUrl="https://ogsupa.com/api/v1?title=404+-+Not+Found&description=The+Generic+404+Not+Found+page&background_color=%239d1c2f&font_style=font-sans&left_meta=%40zaidmukaddam&right_meta=zaidmkz.xyz"/>
      <ContentCenter flexCol alignCenter>
        <FourOFour>
          4<TextHighlight>0</TextHighlight>4
        </FourOFour>
        <ByLine>Oops! This page doesn&apos;t exist :(</ByLine>
      </ContentCenter>
      <Description>
        You might have misspelled something wrong in the URL, please check that
        again. If that&apos;s not the case, please go to homepage!
      </Description>
      <ContentCenter flexCol alignCenter>
        <Link href='/' passHref>
          <GoHomeButton>Go Home</GoHomeButton>
        </Link>
      </ContentCenter>
    </>
  );
};

export default NotFoundPage;

const FourOFour = styled.h1`
  font-size: 100px;
  margin-bottom: 0;
`;

const Description = styled.p`
  margin: 2rem 0;
  text-align: center;
`;

const ByLine = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const GoHomeButton = styled.button`
  background-color: var(--color-primary);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 700;
  font-size: 18px;
`;
