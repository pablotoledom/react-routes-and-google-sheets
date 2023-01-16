import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageContents } from "../../Api";
import Carousel from '../../Components/Carousel';
import ImageModal from '../../Components/ImageModal';
import Loading from '../../Components/Loading';
import {
  StyledContent,
  StyledFacebookLink,
  StyledImage,
  StyledImageParagraph,
  StyledImgGalery,
  StyledImgGaleryContainer2,
  StyledImgGaleryContainer3,
  StyledInstagramLink,
  StyledPageContainer,
  StyledParagraph,
  StyledSeparator,
  StyledSeparatorLine,
  StyledTittle,
  StyledWhatsappLink,
} from './Page.styles';

function Welcome() {
  const [showLoading, setShowLoading] = useState(false);
  const [contentList, setContentList] = useState<PageContent[]>([]);
  const [showImageModal, setShowImageModal] = useState<string>('');
  const location = useLocation();

  console.log(location.pathname);

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

            {content.type === 'whatsapp-link' && (
              <StyledWhatsappLink
                key={content.id} href={`https://api.whatsapp.com/send?phone=${content.content}&text=Hi, i need more information!"`}
                target="_blank"
              >
                WhatsApp number: +{content.content}
              </StyledWhatsappLink>
            )}

            {content.type === 'facebook-link' && (
              <StyledFacebookLink
                key={content.id} href={`https://www.facebook.com/${content.content}`}
                target="_blank"
              >
                Facebook: {content.content}
              </StyledFacebookLink>
            )}

            {content.type === 'instagram-link' && (
              <StyledInstagramLink
                key={content.id} href={`https://www.instagram.com/${content.content}/`}
                target="_blank"
              >
                Instagram: {content.content}
              </StyledInstagramLink>
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
              <StyledImgGaleryContainer2 onClick={() => setShowImageModal(content.content)}>
                <StyledImgGalery key={content.id} alt={content.type} src={content.content} />
              </StyledImgGaleryContainer2>
            )}

            {content.type === 'image-galery-3' && (
              <StyledImgGaleryContainer3 onClick={() => setShowImageModal(content.content)}>
                <StyledImgGalery key={content.id} alt={content.type} src={content.content} />
              </StyledImgGaleryContainer3>
            )}
          </>
        ))}
      </StyledContent>
    </StyledPageContainer>
  );
}

export default Welcome;