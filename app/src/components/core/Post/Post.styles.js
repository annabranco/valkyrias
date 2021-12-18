import { styled, css } from 'frontity';
import { fontFamilyTitle } from '../../../config/globalStyles';
import Link from '../Link/LinkComponent';

export const PostWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 24px;
`;
PostWrapper.displayName = 'PostWrapper';

export const Title = styled.h1`
  position: ${({ isPlayer }) => (isPlayer ? 'absolute' : 'unset')};
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: darkgreen;
  font-family: ${fontFamilyTitle};
  font-size: 2.5rem;

  @media all and (min-width: 768px) {
    position: unset;
  }
`;
Title.displayName = 'Title';

export const StyledLink = styled(Link)`
  padding: 15px 0;
`;
StyledLink.displayName = 'StyledLink';

export const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;
Author.displayName = 'Author';

export const DateWrapper = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;
DateWrapper.displayName = 'DateWrapper';

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
export const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
    max-height: 100%;
  }

  p {
    line-height: 1.6em;
    text-align: justify;
  }

  h1,
  h2,
  h3,
  h4 {
    color: darkgreen;
  }

  img {
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    width: 100%;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type='text'],
  input[type='EMAIL'],
  input[type='url'],
  input[type='tel'],
  input[type='number'],
  input[type='date'],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type='submit'] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }

  ${({ isPlayer }) =>
    isPlayer &&
    css`
      margin-top: 80px;

      @media all and (min-width: 768px) {
        margin-top: 0;
      }
    `}
`;
Content.displayName = 'Content';
