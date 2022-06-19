import Link from "next/link";
import React from "react";
import { ContentCenter } from "../components/shared/layoutUtils";
import { TextHighlight } from "../components/shared/typography";
import styled from "styled-components";
import ImageWithDescription from '../components/ImageWithDescription';
import { DocumentHead } from "../components/shared/documentHead";

type Props = {};

const Teapot = (props: Props) => {
    return (
        <>
            <DocumentHead pageTitle="418 - I'm a teapot" imageUrl="https://ogsupa.com/api/v1?title=418+-+I%27m+a+TeaPot&description=Why+stick+with+a+generic+404+Not+Found+page&background_color=%2379a9d2&font_style=font-sans&left_meta=%40zaidmukaddam&right_meta=zaidmkz.xyz" />

            <ContentCenter flexCol alignCenter>
                <FourOFour>
                    4<TextHighlight>1</TextHighlight>8
                </FourOFour>

                <blockquote
                    style={{
                        marginBottom: "1.5em",
                        borderLeft: "4px solid rgba(136,196,37,0.85)",
                        paddingLeft: "8px",
                        fontStyle: "italic",
                        paddingBottom: "8px",
                        fontSize: "14px",
                        margin: 0,
                    }}
                >
                    <div
                        style={{
                            marginBottom: "5px",
                            paddingBottom: "5px",
                        }}
                    >
                        Why stick with a generic 404 Not Found page, when you could
                        just{' '}
                        <a href="https://www.natureinfocus.in/environment/unraveling-the-mysteries-of-nature-s-symphony" style={{ textDecoration: 'none' }}>
                            <TextHighlight
                                style={{
                                    textDecoration: 'underline',
                                    textUnderlineOffset: 4,
                                }}
                            >
                                Unraveling The Mysteries Of Nature&apos;s Symphony
                            </TextHighlight>
                        </a>{' '}
                        ? <br /> – hence{' '}
                        <TextHighlight>
                            418 - i&apos;m a teapot
                        </TextHighlight>
                    </div>
                    <div style={{
                        marginBottom: "5px",
                        paddingBottom: "5px",
                    }}>
                        It seems you&apos;ve found something that used to exist, or you
                        spelled something wrong. I&apos;m guessing you{' '}
                        <TextHighlight
                            style={{
                                textDecoration: 'underline',
                                textUnderlineOffset: 4,
                            }}
                        >
                            spelled something wrong
                        </TextHighlight>
                        . Can you double check that URL?
                    </div>
                    <div>
                        So, any attempt to brew coffee or milk with a teapot should
                        result in the error code <TextHighlight>&quot;418 I&apos;m a teapot&quot;</TextHighlight>. The resulting
                        entity body may be short and stout.{' '}
                        <a href="https://httpstatuses.com/418" style={{ textDecoration: 'none' }}>
                            <TextHighlight
                                style={{
                                    textDecoration: 'underline',
                                    textUnderlineOffset: 4
                                }}
                            >
                                More info.
                            </TextHighlight>
                        </a>
                    </div>
                </blockquote>
                <ContentCenter flexCol alignCenter>
                    <Link href='/' passHref>
                        <GoHomeButton>Go Home</GoHomeButton>
                    </Link>
                </ContentCenter>
                <div className="">
                    <ImageWithDescription
                        src={"/static/images/A_flying_greater_racket-tailed_drongo.jpeg"}
                        alt="A Flying Great Racket-tailed Drongo by Md Shahanshah Bappy"
                        width={800}
                        height={450}
                        description="The Great Racket-tailed Drongo is a beautiful songster and an excellent mimic. Photograph courtesy Md Shahanshah Bappy under the CC BY-SA 4.0 license."
                    />
                </div>
            </ContentCenter>
        </>
    );
}

export default Teapot;

const FourOFour = styled.h1`
  font-size: 100px;
  margin-bottom: 0;
`;

const GoHomeButton = styled.button`
  background-color: var(--color-primary);
  border: none;
  color: white;
  margin-top: 1em;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 700;
  font-size: 20px;
`;

