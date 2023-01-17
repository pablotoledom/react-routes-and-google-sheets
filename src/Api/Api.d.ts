type Route = {
  id: string,
  name: string,
  link: string
}

type PageContent = {
  route: string,
  id: string,
  type: string,
  content: string
  extraData: string
}

type Category = {
  idCategory: string,
  nameCategory: string
}

type Item = {
  idCategory: string,
  idItem: string,
  nameItem: string,
  descriptionItem: string,
  link: string,
  image: string,
}