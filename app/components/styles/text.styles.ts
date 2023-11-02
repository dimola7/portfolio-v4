import styled from "styled-components";

export const Text = styled.p`
  font-size: ${(props: any) => props.fontSize};
  color: ${(props: any) => props.color};
  font-weight: ${(props: any) => props.fontWeight};
  letter-spacing: ${(props: any) => props.letterSpacing};
  word-spacing: ${(props: any) => props.wordSpacing};
  text-align: ${(props: any) => props.textAlign};
  margin-top: ${(props: any) => props.marginTop};
`
export const H2 = styled.h2`
  font-size: 2rem;

  @media screen and (min-width: 600px) {
    font-size: ${(props: any) => props.fontSize};
    color: ${(props: any) => props.color};
    font-weight: ${(props: any) => props.fontWeight};
    letter-spacing: ${(props: any) => props.letterSpacing};
    word-spacing: ${(props: any) => props.wordSpacing};
    text-align: ${(props: any) => props.textAlign};
    margin-top: ${(props: any) => props.marginTop};
  }
`
export const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;

  @media screen and (min-width: 660px) {
    font-size: ${(props: any) => props.fontSize};
    color: ${(props: any) => props.color};
    font-weight: ${(props: any) => props.fontWeight};
    letter-spacing: ${(props: any) => props.letterSpacing};
    word-spacing: ${(props: any) => props.wordSpacing};
    text-align: ${(props: any) => props.textAlign};
    margin-top: ${(props: any) => props.marginTop};
  }
`
export const Span = styled.span`
  font-size: ${(props: any) => props.fontSize};
  color: ${(props: any) => props.color};
  font-weight: ${(props: any) => props.fontWeight};
  letter-spacing: ${(props: any) => props.letterSpacing};
  word-spacing: ${(props: any) => props.wordSpacing};
  text-align: ${(props: any) => props.textAlign};
  margin-top: ${(props: any) => props.marginTop};
`
export const H4 = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;

  @media screen and (min-width: 660px) {
    font-size: ${(props: any) => props.fontSize};
    color: ${(props: any) => props.color};
    font-weight: ${(props: any) => props.fontWeight};
    letter-spacing: ${(props: any) => props.letterSpacing};
    word-spacing: ${(props: any) => props.wordSpacing};
    text-align: ${(props: any) => props.textAlign};
    margin-top: ${(props: any) => props.marginTop};
  }
`