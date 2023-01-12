import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageContents } from "../../Api";
import Carousel from '../../Components/Carousel';
import Loading from '../../Components/Loading';
import { StyledContent, StyledImage, StyledImageParagraph, StyledPageContainer, StyledParagraph, StyledTittle, StyledWhatsappLink } from './Page.styles';

function Welcome() {
  const [showLoading, setShowLoading] = useState(false);
  const [contentList, setContentList] = useState<PageContent[]>([]);
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

      <Carousel />

      <StyledContent>
        {contentList.map((content) => (
          <>
            {content.type === 'paragraph' && (
              <StyledParagraph key={content.id}>
                {content.content}
              </StyledParagraph>
            )}

            {content.type === 'image-paragraph' && (
              <StyledImageParagraph alt="image" src={content.content} />
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
              <StyledWhatsappLink key={content.id} href={`https://api.whatsapp.com/send?phone=${content.content}&text=Hi, i need more information!"`}>
                WhatsApp number +{content.content}
              </StyledWhatsappLink>
            )} 
          </>
        ))}
      </StyledContent>
    </StyledPageContainer>
  );
}

export default Welcome;