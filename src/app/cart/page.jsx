import Link from "next/link";

export default function CartPage() {
  return (
    <main className="section-padding min-h-screen">
      <p className="text-[#a92d13]">Your order</p>
      <h1 className="serif-heading mt-6">Your cart is ready.</h1>
      <p className="mt-8 max-w-lg leading-8 text-[#78675d]">
        Add a selection from our collection to begin your order.
      </p>
      <Link
        href="/#collections"
        className="mt-10 inline-block rounded-full bg-[#1b100d] px-8 py-4 text-white"
      >
        Browse collections
      </Link>
    </main>
  );
}