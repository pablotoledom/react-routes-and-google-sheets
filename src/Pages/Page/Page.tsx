import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPageContents } from "../../Api";
import Carousel from '../../Components/Carousel';
import ImageModal from '../../Components/ImageModal';
import Loading from '../../Components/Loading';
import {
  StyledContent,
  StyledFacebookLink,
  StyledImage,
  StyledImageParagraph,
  StyledImgAlt,
  StyledImgGaleryContainer2,
  StyledImgGaleryContainer3,
  StyledInstagramLink,
  StyledInternalLink,
  StyledPageContainer,
  StyledParagraph,
  StyledSeparator,
  StyledSeparatorLine,
  StyledText,
  StyledTittle,
  StyledTittle2,
  StyledTittle3,
  StyledTripdavisorLink,
  StyledWhatsappLink,
} from './Page.styles';

function Welcome() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const [contentList, setContentList] = useState<PageContent[]>([]);
  const [showImageModal, setShowImageModal] = useState<string>('');

  const getContentList = async (route: string) => {
    setShowLoading(true);
    const page: PageContent[] = await getPageContents(route);
    setContentList(page);
    setShowLoading(false)
  };

  useEffect(() => {
    getContentList(location.pathname);
  }, [location.pathname]);

  return (
    <StyledPageContainer>
      {showLoading && (
        <Loading />
      )}

      <ImageModal
        show={showImageModal !== ''}
        src={showImageModal}
        closeCallback={() => setShowImageModal('')}
      />

      <StyledContent>
        {contentList.map((content) => (
          <>
            {content.type === 'carousel' && (
              <Carousel />
            )}

            {content.type === 'paragraph' && (
              <StyledParagraph key={content.id}>
                {content.content}
              </StyledParagraph>
            )}

            {content.type === 'image-paragraph' && (
              <StyledImageParagraph key={content.id} alt="image" src={content.content} />
            )}

            {content.type === 'image' && (
              <StyledImage key={content.id} alt={content.type} src={content.content} />
            )}

            {content.type === 'tittle' && (
              <StyledTittle key={content.id}>
                {content.content}
              </StyledTittle>
            )}

            {content.type === 'tittle-2' && (
              <StyledTittle2 key={content.id}>
                {content.content}
              </StyledTittle2>
            )}

            {content.type === 'tittle-3' && (
              <StyledTittle3 key={content.id}>
                {content.content}
              </StyledTittle3>
            )}

            {content.type === 'whatsapp-link' && (
              <StyledWhatsappLink
                key={content.id} href={`https://api.whatsapp.com/send?phone=${content.content}&text=Hi, i need more information!"`}
                target="_blank"
              >
               +{content.content}
              </StyledWhatsappLink>
            )}

            {content.type === 'facebook-link' && (
              <StyledFacebookLink
                key={content.id} href={`https://www.facebook.com/${content.content}`}
                target="_blank"
              >
                {content.content}
              </StyledFacebookLink>
            )}

            {content.type === 'instagram-link' && (
              <StyledInstagramLink
                key={content.id} href={`https://www.instagram.com/${content.content}/`}
                target="_blank"
              >
                {content.content}
              </StyledInstagramLink>
            )}

            {content.type === 'tripadvisor-link' && (
              <StyledTripdavisorLink
                key={content.id} href={content.extraData}
                target="_blank"
              >
                {content.content}
              </StyledTripdavisorLink>
            )}

            {content.type === 'line-feed' && (
              <br />
            )}

            {content.type === 'separator' && (
              <StyledSeparator />
            )}

            {content.type === 'separator-line' && (
              <StyledSeparatorLine />
            )}

            {content.type === 'image-galery-2' && (
              <StyledImgGaleryContainer2 src={content.content} onClick={() => setShowImageModal(content.content)} />
            )}

            {content.type === 'image-galery-3' && (
              <StyledImgGaleryContainer3 src={content.content} onClick={() => setShowImageModal(content.content)}>
                {content.extraData && content.extraData !== '' && (
                  <StyledImgAlt>{content.extraData}</StyledImgAlt>
                )}
              </StyledImgGaleryContainer3>
            )}

            {content.type === 'text' && (
              <StyledText>
                {` ${content.content} `}
              </StyledText>
            )}

            {content.type === 'internal-link' && (
              <StyledInternalLink
                onClick={() => navigate(content.extraData)}
              >
                {` ${content.content} `}
              </StyledInternalLink>
            )}
          </>
        ))}
      </StyledContent>
    </StyledPageContainer>
  );
}

export default Welcome;