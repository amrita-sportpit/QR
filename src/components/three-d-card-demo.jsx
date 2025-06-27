"use client";
 
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
 
export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50/10 relative group/card backdrop-blur-md border border-white/20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/20 dark:border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          Специальные предложения
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-200 text-sm max-w-sm mt-2"
        >
          Получите максимальную выгоду от покупок в Амрите
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="/src/assets/protein-product.jpg"
            height="300"
            width="300"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Спортивное питание"
          />
        </CardItem>
        <div className="flex flex-col gap-4 mt-6">
          <CardItem
            translateZ={20}
            className="text-white text-sm"
          >
            🎁 Скидка 10% на первую покупку
          </CardItem>
          <CardItem
            translateZ={20}
            className="text-white text-sm"
          >
            💳 Бесплатная бонусная карта
          </CardItem>
          <CardItem
            translateZ={20}
            className="text-white text-sm"
          >
            📱 +200 бонусов за отметку в Instagram
          </CardItem>
          <CardItem
            translateZ={20}
            className="text-white text-sm"
          >
            🚚 Бесплатная доставка от 3000₽
          </CardItem>
        </div>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as="a"
            href="https://www.instagram.com/amrita.sportpit"
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:bg-white/10 transition-colors"
          >
            Подписаться →
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href="https://wa.me/79888768237"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold hover:from-green-600 hover:to-emerald-700 transition-all"
          >
            Заказать
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

