async function getData(start, end){
  let response;
  // Google Sheets Id
  const idSheets = '1TjIhX7LvrgeBrTyyvCztQlImnJOREYJw7aPinaUKwlA';
  // Google platform APIKey
  const apiKey = 'AIzaSyB2VCkfSjsteX3tZvfgfzVwyz_oX8_GgKM'; 

  // fetch call
  await fetch("https://content-sheets.googleapis.com/v4/spreadsheets/" +   idSheets + "/values/" + start + ":" + end + "?access_token="+ apiKey +"&key="+  apiKey)
  .then((data)=>{
    return data.json()
  }).then((data)=>{
    response = data.values;
  }).catch(err=>{
    console.log(err);
  })

  return response;
}

export const getCategories = async () => {
  const responseList  = await getData('A2','b20');
  const categoryList = [];

  responseList.map((category) => {
    if (category.length > 0) {

      categoryList.push({
        idCategory: category[0],
        nameCategory: category[1]
      });
    }

    return category;
  });

  return categoryList;
}

export const getItems = async (idCategory) => {
  const glossary  = await getData('c2','g20');
  const glossaryList = [];

  // console.log(idArea, glossary);

  glossary.map((item) => {
    if (item.length > 0) {

      glossaryList.push({
        idCategory: item[0],
        idItem: item[1],
        nameItem: item[2],
        descriptionItem: item[3],
      });
    }

    return item;
  });

  return glossaryList.filter((item) => item.idCategory === idCategory);
}
