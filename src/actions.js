import APIs from './APIs';

export const ARTICLE_TITLES = 'ARTICLE_TITLES';

export const fetchTitles = () => dispatch => {

  APIs.find({}).then((resp) => {
    const titles = resp.data.reduce((acc, article) => {
      acc[article.title] = 1;
      return acc;
    }, {});

    dispatch({
      type: ARTICLE_TITLES,
      result: titles
    })
  }).catch((err) => {
    console.log("ERROR", err);
  })


}
