import React from "react";
import Button from "../ui/button";
import Karzinu from "../../assets/prodact/karzinu";
const MainProdact = ({ icon, title, img, summa1, summa2 }) => {
  return (
    <div className="w-[285px] shadow-md	text-center flex flex-col items-center py-[20px] ">
      <img src={icon} alt="icon" />
      <h2 className="text-[26px] font-medium leading-10 text-center pt-[9px]">
        {title}
      </h2>
      <img className="w-[260px]" src={img} alt="" />
      <div className="flex items-center">
        <div className="rounded-full bg-secondary w-[16px] h-[16px]"></div>
        <div className="flex items-center gap-[20px]">
          <p className="text-[16px] font-medium leading-5 text-black50">
            Есть в наличии
          </p>
          <p className="text-[16px] font-medium leading-5  text-black50">Гарантия 1 год</p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-[30px]">
        <p className="text-[20px] leading-5 text-black50">{summa1}</p>
        <p className="text-[32px] leading-10 text-black50">{summa2}</p>
      </div>

      <Button variant="primary">
        {" "}
        <div className="flex gap-[10px] px-[76px] ">
          <Karzinu /> в корзине
        </div>{" "}
      </Button>
      <div className="flex gap-[50px] mt-[10px]">
        <p className="text-[16px] leading-5 text-primary">Хочу дешевле</p>
        <p className="text-[16px] leading-5 text-black50">Купить в 1 клик</p>
      </div>
    </div>
  );
};

export default MainProdact;
