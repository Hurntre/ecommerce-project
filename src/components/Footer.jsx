import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;

  ${mobile({ flexDirection: 'column' })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0; // delete ul default margin
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ backgroundColor: '#f5f5f5' })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>RETAILER INC.</Logo>
        <Description>
          There are many variations of passages of Lorem Ipsum available but the majority have
          suffered altercation in some form, by injected humour, or randomized words which don't
          look even slightly believable.
        </Description>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <PinterestIcon />
          </SocialIcon>
          <SocialIcon color='FF0000'>
            <YouTubeIcon />
          </SocialIcon>
          <SocialIcon color='0A66C2'>
            <LinkedInIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {' '}
          <LocationOnIcon style={{ marginRight: '10px' }} /> 007 James Bond Street, Somewhere,
          Middle of Nowhere, NeverLand.
        </ContactItem>
        <ContactItem>
          {' '}
          <PhoneIcon style={{ marginRight: '10px' }} /> +1 000 11 22 88
        </ContactItem>
        <ContactItem>
          {' '}
          <MailOutlineIcon style={{ marginRight: '10px' }} /> contact@retailerinc.com
        </ContactItem>
        <Payment src='images/cards.jfif' />
      </Right>
    </Container>
  );
};

export default Footer;
