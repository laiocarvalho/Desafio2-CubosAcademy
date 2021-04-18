import {useState} from 'react';
import {createContainer} from 'unstated-next';

const ShoplistProvider = () =>{
  const [shopList, setshopList] = useState([]);
  const [cupomText, setcupomText] = useState();
    
    
    
  const catchMovieInformation = (id, title, price, poster) =>{
    
    const movieInformationToShoplist  = {
      MovieId: id,
      MovieTitle: title,
      MoviePrice:price,
      MoviePoster:poster,
      qtdNoCarrinho:1
    }
    
    const index = shopList.findIndex((i)=> i.MovieId === id);

    if(index !== -1){
      const newShoplist = [...shopList];
      newShoplist[index].qtdNoCarrinho++;
      setshopList(newShoplist);
    }else{
      setshopList(shopList.concat(movieInformationToShoplist));
    }
  }

  const onClickBanner = (el)=>{
    const cupomtext = el
    setcupomText(cupomtext)
 }

  const incrementaQtdMovies = (movieId) => {
    const index = shopList.findIndex((i) => i.MovieId === movieId);
    const newShoplist = [...shopList];
    newShoplist[index].qtdNoCarrinho++;
    setshopList(newShoplist);
  };

  const decrementaQtdMovies = (movieId) => {
    const index = shopList.findIndex((i) => i.MovieId === movieId);
    const newShoplist = [...shopList];
    
    if (newShoplist[index].qtdNoCarrinho > 1) {
      newShoplist[index].qtdNoCarrinho--;
    } else {
      newShoplist.splice(index, 1);
    }
    setshopList(newShoplist);
  };
  
  return {shopList,setshopList,catchMovieInformation,incrementaQtdMovies,decrementaQtdMovies, onClickBanner, cupomText}
}

export const ShoplistContainer = createContainer(ShoplistProvider);