import data from "../data.json"
import {useState} from "react"
import styled from 'styled-components';



const MainContainer=styled.div`
padding:0 90px;
`

const Cart=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 70px;

    &>button{
        background-color: #000;
        color:#fff;
        padding: 0.5rem 1.5rem;
    }
`

const ImgDiv=styled.div`
width: 100%;
height:553px ;
background-color: red;
position: relative;

& img{
    width: 100%;
    height: 100%;
    object-fit: cover ;
}
`

const PhotoTag=styled.div`
position: absolute;
left: 0;
bottom: 0;
background-color: white;
padding: 0rem 2rem;
`

const CategoryDiv=styled.h3`
color:#656565;
text-transform: capitalize;

`

const DescImg= styled.img`
width: 117px;
height: 147px;
margin:0rem 0rem 0rem 1rem;
`
const DetailsContainer=styled.div`
display: grid;
grid-template-columns: 60% 40%;
& p{
    width: 90%;
}
`

const RecommendationDiv=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
`
const Details=styled(RecommendationDiv)`
font-size: 0.9rem;
width:50%;
&>h3{
    font-size:18.72px;
}
&>p{
    text-align:end;

}
`


const FeaturedProduct = () => {

const featured=data.products.filter((item)=>item.featured==true)
const [product,setProduct]=useState(featured)

const {name,image,category,details}=product[0]
  return (
    <MainContainer>
        <Cart>
            <h3>{name}</h3>
            <button>ADD TO CART</button>
        </Cart>
        <ImgDiv>
            <img src={image.src} alt={image.alt} />
            <PhotoTag><p>Photo Of The Day</p></PhotoTag>
        </ImgDiv>
        <DetailsContainer>
            <div>
                <h3>About The {name}</h3>
                <CategoryDiv>{category}</CategoryDiv>
                <p>{details.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro veritatis eaque libero suscipit officia aliquam eveniet molestiae vel error est ad, corporis consequuntur minus numquam? Eligendi, optio. Quo suscipit, blanditiis doloremque dolores ea nemo, numquam, sint quibusdam obcaecati voluptatem beatae itaque esse ullam eum dignissimos tenetur harum autem debitis?
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti sit reprehenderit blanditiis harum voluptatibus at quibusdam exercitationem mollitia. Ducimus aperiam aspernatur iusto atque sunt iure beatae, qui id vel accusantium.</p>
            </div>
            <RecommendationDiv>
                <h3>People Also Buy</h3>
                <div>
                    {
                        details.recommendations.map((item)=>{
                            return(
                                <DescImg src={item.src} alt={item.alt}/>
                            )
                        })
                    }
                </div>
                <Details>
                <h3>Details</h3>
                <p>Size: {details.dimmentions.width + " x " + details.dimmentions.height} pixel</p>
                <p>Size: {details.size} mb</p>
                </Details>
               
            </RecommendationDiv>
        </DetailsContainer>

    </MainContainer>
  )
}

export default FeaturedProduct



















