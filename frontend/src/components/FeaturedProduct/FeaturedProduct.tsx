import data from '../../data.json';
import { useState } from 'react';
import {
  MainContainer,
  Cart,
  ImgDiv,
  PhotoTag,
  DetailsContainer,
  CategoryDiv,
  RecommendationDiv,
  DescImg,
  Details,
} from './FeaturedProduct.style';

const FeaturedProduct = () => {
  const featured = data.products.filter((item) => item.featured === true);
  const [product, setProduct] = useState(featured);

  const { name, image, category, details } = product[0];
  return (
    <MainContainer>
      <Cart>
        <h3>{name}</h3>
        <button>ADD TO CART</button>
      </Cart>
      <ImgDiv>
        <img src={image.src} alt={image.alt} />
        <PhotoTag>
          <p>Photo Of The Day</p>
        </PhotoTag>
      </ImgDiv>
      <DetailsContainer>
        <div>
          <h3>About The {name}</h3>
          <CategoryDiv>{category}</CategoryDiv>
          <p>
            {details.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Pariatur porro veritatis eaque libero suscipit
            officia aliquam eveniet molestiae vel error est ad, corporis
            consequuntur minus numquam? Eligendi, optio. Quo suscipit,
            blanditiis doloremque dolores ea nemo, numquam, sint quibusdam
            obcaecati voluptatem beatae itaque esse ullam eum dignissimos
            tenetur harum autem debitis?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            sit reprehenderit blanditiis harum voluptatibus at quibusdam
            exercitationem mollitia. Ducimus aperiam aspernatur iusto atque sunt
            iure beatae, qui id vel accusantium.
          </p>
        </div>
        <RecommendationDiv>
          <h3>People Also Buy</h3>
          <div>
            {details.recommendations.map((item) => {
              return <DescImg src={item.src} alt={item.alt} />;
            })}
          </div>
          <Details>
            <h3>Details</h3>
            <p>
              Size:{' '}
              {details.dimmentions.width + ' x ' + details.dimmentions.height}{' '}
              pixel
            </p>
            <p>Size: {details.size} mb</p>
          </Details>
        </RecommendationDiv>
      </DetailsContainer>
    </MainContainer>
  );
};

export default FeaturedProduct;
