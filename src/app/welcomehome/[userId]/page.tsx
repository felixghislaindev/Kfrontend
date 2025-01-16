import { notFound } from "next/navigation";
import { DeliveryResponse } from "../../../types/api";
import DeliveryNotification from "@/components/DeliveryCard";

const fetchDeliveryData = async (
  userId: string
): Promise<DeliveryResponse | null> => {
  const res = await fetch(
    `https://kbackend-production.up.railway.app/comms/your-next-delivery/${userId}`
  );
  if (!res.ok) {
    console.error("Failed to fetch data");
    return null;
  }
  const data: DeliveryResponse = await res.json();
  return data;
};

const WelcomeHome = async ({ params }: { params: { userId: string } }) => {
  const { userId } = params;

  const deliveryData = await fetchDeliveryData(userId);

  if (!deliveryData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <DeliveryNotification
        title={deliveryData.title}
        message={deliveryData.message}
        totalPrice={deliveryData.totalPrice}
        freeGift={deliveryData.freeGift}
      />
    </main>
  );
};

export default WelcomeHome;
