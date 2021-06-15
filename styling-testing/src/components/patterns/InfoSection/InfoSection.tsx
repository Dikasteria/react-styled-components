import React from 'react';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, SubTitle, ImgWrapper, Img } from './InfoSection.style';
import { Container } from "../../../globalStyles";
import { Link } from 'react-router-dom';
import { Button } from "../../../globalStyles";

interface Props {
    lightBg?: boolean;
    imgStart?: string;
    lightTopLine?: boolean;
    lightText?: boolean;
    lightTextDesc?: boolean;
    topLine?: string;
    headline?: string;
    description?: string;
    buttonLabel?: string;
    primary?: boolean;
    start?: string;
    alt?: string;
    img: string,
};

const InfoSection = ({
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightText, 
    lightTextDesc,
    topLine,
    headline,
    description,
    buttonLabel,
    primary,
    start,
    alt,
    img
} : Props) => {
    
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>
                                    {description}
                                </SubTitle>
                                <Link to="/sign-up">
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default InfoSection;