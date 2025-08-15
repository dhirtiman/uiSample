import Card2 from "./Card2"
import Card1 from "./Card1"
import foodPic1 from '../../assets/foodPic1.jpg'
import groceryBagPic1 from '../../assets/groceryBagPic1.jpg'
import groceryBagPic2 from '../../assets/groceryBagPic2.jpg'
import HerbPic1 from '../../assets/HerbPic1.jpg'


export default function CardGroupHome(){
    return <div className="absolute flex flex-row  self-center gap-8 top-86  h-auto z-10 pointer-events-none">
        <Card2 className=" -mt-10" title="95%" subtitle="Improved Eating Habits" image={groceryBagPic2} ></Card2>


        <Card2 className=" mt-10" image={foodPic1}></Card2>
        <Card1 title='30 000 +' subtitle='Happy Users' className="mt-73"></Card1>
        <Card2 className=" mt-10" title="25%" subtitle="Saved On Groceries" image={groceryBagPic1} bottom={true}></Card2>

        <Card2 className=" -mt-10" image={HerbPic1}></Card2>
    </div>
}