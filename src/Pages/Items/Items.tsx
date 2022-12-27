import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItems } from "../../Api";
import Loading from "../../Components/Loading";
import { AreaDescription, AreaTittle, BackButton, PageAreaStyled } from "./Items.styled";

function Items() {
  const navigate = useNavigate();
  const { idItem, nameItem } = useParams();
  
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [itemList, setItemList] = useState<Item[]>([]);

  const getItemList = async (idItem: string) => {
    setShowLoading(true);
    const itemList = await getItems(idItem);
    setItemList(itemList);
    setShowLoading(false);
  };

  useEffect(() => {
    getItemList(idItem || '');
  }, [idItem]);

  return (
    <PageAreaStyled>
      {showLoading && (
        <Loading />
      )}

      <h1>{nameItem}</h1>

      {itemList.map((item: Item) => (
        <div key={item.idItem}>
          <AreaTittle>{item.nameItem}</AreaTittle>
          <AreaDescription>{item.descriptionItem}</AreaDescription>
        </div>
      ))}
      
      <BackButton onClick={() => { navigate(-1); }}>Volver</BackButton>
    </PageAreaStyled>
  );
}

export default Items;