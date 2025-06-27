"use client";
 
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Gift, Star, Truck, MessageCircle } from "lucide-react";

// Импорт изображения протеина
import proteinProduct from '../assets/protein-product.jpg';

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50/10 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/20 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border backdrop-blur-md">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          Специальные предложения
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white/80 text-sm max-w-sm mt-2"
        >
          Получите максимальную выгоду от покупок в Амрите
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={proteinProduct}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Протеин"
          />
        </CardItem>
        <div className="mt-6 space-y-3">
          <CardItem
            translateZ={20}
            className="flex items-center gap-2 text-white/90"
          >
            <Gift className="w-4 h-4 text-orange-400" />
            <span className="text-sm">Скидка 10% на первую покупку</span>
          </CardItem>
          <CardItem
            translateZ={20}
            className="flex items-center gap-2 text-white/90"
          >
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Бесплатная бонусная карта</span>
          </CardItem>
          <CardItem
            translateZ={20}
            className="flex items-center gap-2 text-white/90"
          >
            <MessageCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm">+200 бонусов за отметку в Instagram</span>
          </CardItem>
          <CardItem
            translateZ={20}
            className="flex items-center gap-2 text-white/90"
          >
            <Truck className="w-4 h-4 text-green-400" />
            <span className="text-sm">Бесплатная доставка от 3000₽</span>
          </CardItem>
        </div>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as="a"
            href="https://www.instagram.com/amrita.sportpit"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white bg-green-500/20 border border-green-400/30 hover:bg-green-500/30 transition-colors"
          >
            Подписаться →
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href="https://wa.me/79888768237"
            className="px-4 py-2 rounded-xl bg-green-600 text-white text-xs font-bold hover:bg-green-700 transition-colors"
          >
            Заказать
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

