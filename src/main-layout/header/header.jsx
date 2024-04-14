import { Logo } from "./logo";
import Icon from "../../assets/header/icon";
import MainHeader from "./components/header-card/main-header";
import { headerData } from "./components/header-card/header-data";
import Phone from "../../assets/header/phone";
import Katalog from "../../assets/header/katalog";
import Button from "../../components/ui/button";
import Search from "../../assets/header/search";
import Icon1 from "../../assets/header/icon1";
import Icon2 from "../../assets/header/icon2";
import BtnIcon1 from "../../assets/header/btnIcon1";
import BtnIcon2 from "../../assets/header/btnIcon2";
import { headerTavarData } from "./components/header-tavar/header-tavar-data";
import HeaderTavar from "./components/header-tavar/header-tavar";
import  Img7 from "../../assets/header/img7.png"

export const Header = () => {
  return (
    <div className="container">
      <div className="  mt-[40px] flex items-center justify-between mb-[50px]">
        <Logo />
        <p>Весь каталог</p>
        <button className="flex gap-[4px] px-[8px] bg-headerBtn items-center rounded-md		">
          {" "}
          <Icon /> Акции
        </button>
        {headerData.map((item) => (
          <MainHeader key={item.id} {...item} />
        ))}
        <div className="items-baseline">
          <p className="flex gap-[4px] items-center">
            {" "}
            <Phone /> +7 812 561 96 62
          </p>
          <a className="text-blue-500" href="#">
            Вам перезвонить?
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button variant="primary">
          {" "}
          <div className="flex font-normal text-base	items-center text-[20px]		">
            <Katalog />
            Каталог товаров
          </div>{" "}
        </Button>
        <input
          className=" w-[650px] border-[1px] border-rgb(183, 183, 183) px-[56px] py-[13px] font-normal text-base	items-center text-[20px]  rounded-xl "
          type="text"
          placeholder="Поиск по каталогу товаров"
        />
        <Icon1 />
        <Icon2 />
        <Button variant="secondary">
          {" "}
          <div className="flex font-normal text-base	items-center text-[20px] gap-[4px]	">
            <BtnIcon1 />
            в корзине
            <BtnIcon2/>
          </div>{" "}
        </Button>
      </div>
      <div  className="flex justify-between mt-[30px]">
        {headerTavarData.map((item)=> <HeaderTavar key={item.id} {...item}/>)}
        <img className="w-[280px]" src={Img7} alt="img" />
      </div>
    </div>
  );
};
