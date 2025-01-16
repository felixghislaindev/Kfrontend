import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DeliveryResponse } from "@/types/api";

export default function DeliveryNotification({
  title,
  message,
  totalPrice,
  freeGift,
}: DeliveryResponse) {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Desktop version */}
      <div className="hidden md:block relative">
        <Card className="flex overflow-hidden">
          <div className="w-1/2 relative h-[500px]">
            <Image
              src="/mona-magnussen.jpg"
              alt="Cat with pet food packages"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4 text-green-600">{title}</h1>
            <p className="text-gray-600 mb-6 text-lg">{message}</p>
            <p className="text-2xl font-semibold mb-8 text-gray-500">
              Total price: {totalPrice}
            </p>
            <div className="flex gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-md">
                SEE DETAILS
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-2 rounded-md"
              >
                EDIT DELIVERY
              </Button>
            </div>
          </div>
          {freeGift && (
            <div className="absolute top-3 -right-3 bg-pink-300 text-purple-800 font-bold px-4 py-1 rounded-md transform rotate-[15deg] origin-top-right">
              FREE GIFT
            </div>
          )}
        </Card>
      </div>

      {/* Mobile version */}
      <div className="w-full relative md:hidden">
        <div className="bg-white rounded-xl border shadow-sm p-6 pt-14 text-center relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/mona-magnussen.jpg"
                alt="Pet profile"
                width={64}
                height={64}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-xl sm:text-2xl font-bold text-green-600">
              {title}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
              {message}
            </p>
            <div className="text-xl sm:text-2xl font-semibold text-gray-500 py-2">
              Total price: {totalPrice}
            </div>
            <div className="flex flex-row justify-center gap-4 max-w-md mx-auto pt-2">
              <button className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors">
                SEE DETAILS
              </button>
              <button className="w-full py-3 px-6 border-2 border-green-600 text-green-600 font-semibold rounded-md hover:bg-green-50 transition-colors">
                EDIT DELIVERY
              </button>
            </div>
          </div>

          {freeGift && (
            <div className="absolute bottom-[-45px] left-1/2 transform -translate-x-1/2 mb-4">
              <div className="bg-pink-200 text-purple-800 px-6 py-2 text-base   sm:text-lg font-bold rounded-md transform -rotate-3">
                FREE GIFT
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
