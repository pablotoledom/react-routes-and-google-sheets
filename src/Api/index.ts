async function getData(sheet: string, start: string, end: string){
  let response;
  // Google Sheets Id
  const idSheets = '1wKQn0vuEY7bpqa36-gyViY8TxUwBYb9c9uHScb1aY3k';
  // Google platform APIKey
  const apiKey = 'AIzaSyB2VCkfSjsteX3tZvfgfzVwyz_oX8_GgKM'; 

  // fetch call
  await fetch("https://content-sheets.googleapis.com/v4/spreadsheets/" +   idSheets + "/values/" + sheet + "!" + start + ":" + end + "?access_token="+ apiKey +"&key="+  apiKey)
  .then((data)=>{
    return data.json()
  }).then((data)=>{
    response = data.values;
  }).catch(err=>{
    console.log(err);
  })

  return response;
}

export const getRoutes = async () => {
  const responseList  = await getData('Routes', 'A3','c20') || [];
  const routeList: Route[] = [];

  responseList.map((column: any[]) => {
    if (column.length > 0) {

      routeList.push({
        id: column[0],
        name: column[1],
        link: column[2],
      });
    }

    return column;
  });

  return routeList;
}

export const getPageContents = async (location: string) => {
  const responseList  = await getData('PagesContent', 'A3','E200') || [];
  const contentList: PageContent[] = [];

  responseList.map((content: any[]) => {
    if (content.length > 0) {

      contentList.push({
        route: content[0],
        id: content[1],
        type: content[2],
        content: content[3],
        extraData: content[4],
      });
    }

    return content;
  });

  return contentList.filter((content) => content.route === location);
}
