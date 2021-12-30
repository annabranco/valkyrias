import React from 'react';
import { string, func, oneOf } from 'prop-types';
import { MAIN, MAIN_DEVICES, PLAYER } from '../../../constants/global';
import { FACEBOOK, TWITTER, INSTAGRAM, YOUTUBE, EMAIL } from '../../../constants/social';
import { SocialLinkButton, SocialLogo } from './SocialLink.styles';

const SocialLink = ({ link = '', onClick, place, type }) => {
  let icon;
  switch (type) {
    case FACEBOOK:
      icon = 'facebook-f';
      break;
    case TWITTER:
      icon = 'twitter';
      break;
    case INSTAGRAM:
      icon = 'instagram';
      break;
    case YOUTUBE:
      icon = 'youtube';
      break;
    case EMAIL:
      icon = 'envelope';
      break;
    default:
      break;
  }

  return (
    <SocialLinkButton href={link} place={place} rel="noreferrer" target="_blank" type={type}>
      <SocialLogo onClick={onClick} icon={['fab', icon]} place={place} type={type} />
    </SocialLinkButton>
  );
};

SocialLink.propTypes = {
  link: string.isRequired,
  onClick: func,
  place: oneOf([MAIN, MAIN_DEVICES, PLAYER]).isRequired,
  type: string.isRequired,
};

SocialLink.defaultProps = {
  onClick: () => null,
};

export default SocialLink;
