import Icon1 from "../../assets/iphone/icon1";
import Iphone from "../../assets/iphone/iphone.jpg";
import { MainLayout } from "../../main-layout/main-Layout";
import Iphone_Img from "../../assets/iphone/img";
import Button from "../../components/ui/button";
import MainProdact from "../../components/prodact/main-prodact";
import { prodactData } from "../../components/prodact/prodact-data";
import { prodactData2 } from "../../components/prodact/prodact-data";

import Banner from "../../assets/prodact/banner.png"
export const Home = () => {
  return (
    <div>
      <MainLayout>
        <section className=" pt-[100px] pr-[70pc] pl-[120px] bg-blue-200 mt-[8px] ">
          <div className="container flex justify-between items-center ">
            {/* <Icon1 /> */}
            <div className="flex gap-[48px] items-center justify-between ml-[120px]">
              <img
                className="w-[370px]  rounded-t-[40px]	"
                src={Iphone}
                alt=""
              />
              <div>
                <Iphone_Img />
                <p className="text-[48px] font-normal	">
                  <span className="text-[32px] font-normal	mr-[16px]">to</span>
                  137 900 ₽
                </p>
                <Button variant="primary">
                  <p className="flex px-[40px]">подробнее</p>{" "}
                </Button>
              </div>
            </div>
            {/* <Icon1 /> */}
          </div>
        </section>
        <section className="container">
          <h2 className="text-[48px] font-medium leading-10 text-center mt-[24px]	 mb-[50px]	">
            купить iPhone в Москве
          </h2>
          <h3 className="text-[24px] font-medium leading-7 text-primary mb-[24px]">
            Самое популярное
          </h3>
          <div className="grid grid-cols-4">
            {prodactData.map((item) => (
              <MainProdact key={item.id} {...item} />
            ))}
          </div>
        </section>
        <section className="container">
          <h1 className="text-[32px]  font-medium leading-10 ">
            Новые модели Айфонов по выгодным ценам
          </h1>
          <p className="text-black50 mt-[22px] text-[16px] leading-5">
            Для тех, кто хочет приобрести новый телефон магазин Istoreapple.ru
            предлагает: <br /> <br /> Низкие цены на все виды устройств,
            недорогие аксессуары;
            <br />
            Оригинальные подарки бренда; <br /> Новая линейка смартфонов и
            проверенные старые модели; <br /> Лаконичный дизайн, большой выбор
            цветов и оттенков; <br />
            Все товары в каталоге есть в наличии и доступны для покупки в кредит
            и рассрочку; <br /> Быстрая доставка по Санкт-Петербургу и области;{" "}
            <br />
            Гарантия на все модели телефонов; <br /> Все способы оплаты! <br />{" "}
            Товары, представленные на официальном сайте Istoreapple.ru,
            сертифицированы. Мы занимаемся продажей айфонов с 2013 года. Вы
            всегда можете прочитать отзывы о покупке наших клиентов, позвонить в
            магазин и получить консультацию по любой модели Apple.
          </p>
        </section>
        <img className="my-[32px]" src={Banner} alt="" />
        <section className="container">
          <h1 className="text-[32px]  font-medium leading-10 ">
            Новые модели Айфонов по выгодным ценам
          </h1>
          <p className="text-black50 mt-[22px] text-[16px] leading-5">
            Для тех, кто хочет приобрести новый телефон магазин Istoreapple.ru
            предлагает: <br /> <br /> Низкие цены на все виды устройств,
            недорогие аксессуары;
            <br />
            Оригинальные подарки бренда; <br /> Новая линейка смартфонов и
            проверенные старые модели; <br /> Лаконичный дизайн, большой выбор
            цветов и оттенков; <br />
            Все товары в каталоге есть в наличии и доступны для покупки в кредит
            и рассрочку; <br /> Быстрая доставка по Санкт-Петербургу и области;{" "}
            <br />
            Гарантия на все модели телефонов; <br /> Все способы оплаты! <br />{" "}
            Товары, представленные на официальном сайте Istoreapple.ru,
            сертифицированы. Мы занимаемся продажей айфонов с 2013 года. Вы
            всегда можете прочитать отзывы о покупке наших клиентов, позвонить в
            магазин и получить консультацию по любой модели Apple.
          </p>
        </section>
        <section className="container">
          <h3 className="text-[24px] font-medium leading-7 text-primary mb-[24px] mt-[32px]">
            Новинки
          </h3>
          <div className="grid grid-cols-4">
            {prodactData2.map((item) => (
              <MainProdact key={item.id} {...item} />
            ))}
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default Home;
